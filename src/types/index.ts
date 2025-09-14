// Central type definitions for the application

export interface Service {
  en: string;
  ta: string;
  image: string;
}

export interface LanguageProps {
  language: 'en' | 'ta';
}

export interface HeaderProps extends LanguageProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setLanguage: (language: 'en' | 'ta') => void;
}

export interface FooterProps extends LanguageProps {}

export interface HomePageProps extends LanguageProps {}

export interface ContactProps extends LanguageProps {}

export interface DashboardProps extends LanguageProps {}

export interface TamilMannvalamProps extends LanguageProps {}

export interface SubsidySchemeProps extends LanguageProps {}

// Navigation types
export type PageType = 'home' | 'contact' | 'dashboard' | 'tamil-mannvalam' | 'subsidy-scheme';
