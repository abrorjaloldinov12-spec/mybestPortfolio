import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL guard
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.035);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Studio Environment map
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio 3-point lighting rig
    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.5);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x818cf8, 3.0);
    rimLight.position.set(-6, -3, -4);
    scene.add(rimLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 2.5, 15);
    cyanLight.position.set(0, 3, 3);
    scene.add(cyanLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x030712, 1.2);
    scene.add(hemiLight);

    // Root 3D Object Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Hero Chrome Sphere with subtle geometric facets & high metalness
    const sphereGeo = new THREE.IcosahedronGeometry(1.65, 4);
    const chromeMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.96,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 1.0,
    });
    const heroSphere = new THREE.Mesh(sphereGeo, chromeMat);
    rootGroup.add(heroSphere);

    // 2. Inner Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(0.9, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const innerCore = new THREE.Mesh(coreGeo, coreMat);
    heroSphere.add(innerCore);

    // 3. Orbital Chrome & Holographic Rings
    const ringMat1 = new THREE.MeshPhysicalMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 1.0,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.035, 24, 120);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.15,
      transparent: true,
      opacity: 0.85,
    });
    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.02, 24, 120);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 3;
    rootGroup.add(ring2);

    const ringMat3 = new THREE.MeshPhysicalMaterial({
      color: 0x818cf8,
      metalness: 0.9,
      roughness: 0.15,
    });
    const ringGeo3 = new THREE.TorusGeometry(3.1, 0.015, 24, 120);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = Math.PI / 4;
    rootGroup.add(ring3);

    // 4. Floating Satellites / Geometric Tech Artifacts
    const satellitesGroup = new THREE.Group();
    rootGroup.add(satellitesGroup);

    const satGeo1 = new THREE.OctahedronGeometry(0.28, 0);
    const satMat1 = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: true,
    });
    const sat1 = new THREE.Mesh(satGeo1, satMat1);
    sat1.position.set(2.8, 1.4, -0.6);
    satellitesGroup.add(sat1);

    const satGeo2 = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const satMat2 = new THREE.MeshPhysicalMaterial({
      color: 0xa855f7,
      metalness: 0.85,
      roughness: 0.15,
    });
    const sat2 = new THREE.Mesh(satGeo2, satMat2);
    sat2.position.set(-2.6, -1.2, 0.8);
    satellitesGroup.add(sat2);

    const satGeo3 = new THREE.TetrahedronGeometry(0.32, 0);
    const sat3 = new THREE.Mesh(satGeo3, satMat1);
    sat3.position.set(1.5, -2.2, 1.1);
    satellitesGroup.add(sat3);

    // 5. Starfield Particles in background
    const particleCount = isSoftwareGl ? 300 : 700;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 24;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 4;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Pre-allocated vectors for GC avoidance
    const mouseTarget = new THREE.Vector2(0, 0);
    const mouseCurrent = new THREE.Vector2(0, 0);

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTarget.set(x, y);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop with Clock & damping
    const clock = new THREE.Clock();
    let frameId = 0;

    const tick = () => {
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();

      // Exponential damping on mouse coordinates
      mouseCurrent.x = THREE.MathUtils.damp(mouseCurrent.x, mouseTarget.x, 3.5, delta);
      mouseCurrent.y = THREE.MathUtils.damp(mouseCurrent.y, mouseTarget.y, 3.5, delta);

      // Smooth interactive rotation reacting to cursor
      rootGroup.rotation.y = elapsed * 0.25 + mouseCurrent.x * 0.7;
      rootGroup.rotation.x = mouseCurrent.y * 0.45;
      rootGroup.position.y = Math.sin(elapsed * 0.8) * 0.15;

      // Independent ring rotations
      ring1.rotation.z += delta * 0.35;
      ring2.rotation.x -= delta * 0.45;
      ring3.rotation.y += delta * 0.2;

      // Floating satellites
      sat1.rotation.x += delta * 0.8;
      sat1.rotation.y += delta * 0.5;
      sat2.rotation.y += delta * 0.7;
      sat2.rotation.z += delta * 0.6;
      sat3.rotation.x -= delta * 0.6;

      innerCore.rotation.y -= delta * 0.3;

      // Subtle particle float
      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      // Resource cleanup
      sphereGeo.dispose();
      chromeMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      satGeo1.dispose();
      satMat1.dispose();
      satGeo2.dispose();
      satMat2.dispose();
      satGeo3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
