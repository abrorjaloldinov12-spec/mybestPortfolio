import JSZip from 'jszip';

export interface ZipProgressCallback {
  (progress: number, currentFile: string): void;
}

export async function generateProjectZip(onProgress?: ZipProgressCallback): Promise<Blob> {
  const zip = new JSZip();

  const files: Record<string, string> = {
    'README.md': `# Abror Jaloldinov - 3D Futuristic Portfolio

A world-class personal portfolio website for **Abror Jaloldinov**, Frontend Developer & Creative Technologist (2+ Years Experience).

## 🚀 Quick Start

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run development server:
\`\`\`bash
npm run dev
\`\`\`

3. Build for production:
\`\`\`bash
npm run build
\`\`\`

## 🌟 Key Features
- **3D Interactive WebGL Hero Canvas** with Three.js chrome sculpture & orbital elements.
- **Three-Language Support (UZ / RU / EN)** with instant zero-reload language switching and localStorage persistence.
- **Real Showcase Projects**:
  - SneakerX (https://pixel-perfect-replica-7875.lovable.app)
  - Speedverse Rally Realms (https://speedverse-rally-realms.lovable.app)
  - IELTS Mock (https://conclusionieltscore.netlify.app/)
  - Auto Market (https://abrorcars.netlify.app/)
- **Built-in ZIP Exporter** to download project archive on demand.
- **Tailwind CSS v4 & Glassmorphism Aesthetics**.
`,
    'package.json': `{
  "name": "abror-jaloldinov-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "jszip": "^3.10.1",
    "lucide-react": "^0.546.0",
    "motion": "^12.23.24",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "three": "^0.180.0",
    "vite": "^8.3.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.3.3",
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@types/three": "^0.180.0",
    "@vitejs/plugin-react": "^6.1.1",
    "autoprefixer": "^10.4.21",
    "tailwindcss": "^4.3.3",
    "typescript": "^7.0.2"
  }
}
`,
    'vite.config.ts': `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
`,
    'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": false,
    "module": "ESNext",
    "types": ["vite/client"],
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./*"]
    },
    "noEmit": true
  },
  "exclude": ["dist", "node_modules"]
}
`,
    'index.html': `<!doctype html>
<html lang="uz" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Abror Jaloldinov - Frontend Developer & Creative Technologist</title>
    <meta name="description" content="World-class 3D futuristic personal portfolio of Abror Jaloldinov, Frontend Developer with 2+ years of experience." />
    <link rel="icon" type="image/png" href="/assets/aistudio/image_ffd23804.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden min-h-screen">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
  };

  const fileEntries = Object.entries(files);
  let processed = 0;
  const total = fileEntries.length;

  for (const [filename, content] of fileEntries) {
    zip.file(filename, content);
    processed++;
    if (onProgress) {
      onProgress(Math.round((processed / total) * 70), filename);
    }
  }

  // Also include the project asset logo image if available via fetch
  try {
    const res = await fetch('/assets/aistudio/image_ffd23804.png');
    if (res.ok) {
      const blob = await res.blob();
      zip.file('public/assets/aistudio/image_ffd23804.png', blob);
      if (onProgress) onProgress(85, 'assets/logo.png');
    }
  } catch {
    // ignore if local fetch fails
  }

  if (onProgress) onProgress(95, 'Compressing archive...');

  const zipBlob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 6 },
  });

  if (onProgress) onProgress(100, 'Complete');

  return zipBlob;
}

export function triggerDownload(blob: Blob, filename = 'abror-jaloldinov-portfolio.zip') {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
