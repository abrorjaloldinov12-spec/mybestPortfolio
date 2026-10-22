export type Language = 'uz' | 'ru' | 'en';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  url: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  themeType: 'sneaker' | 'racing' | 'ielts' | 'automarket';
}

export interface SkillCategory {
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  skills: {
    name: string;
    category: string;
    description: {
      uz: string;
      ru: string;
      en: string;
    };
    icon: string;
  }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  features: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  iconName: string;
}

export interface TimelineItem {
  period: {
    uz: string;
    ru: string;
    en: string;
  };
  phase: {
    uz: string;
    ru: string;
    en: string;
  };
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  highlights: {
    uz: string[];
    ru: string[];
    en: string[];
  };
  techList: string[];
}
