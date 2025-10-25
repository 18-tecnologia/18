import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ptBR } from './pt-BR';
import { enUS } from './en-US';
import { zhCN } from './zh-CN';
import { jaJP } from './ja-JP';
import { koKR } from './ko-KR';

type Language = 'pt-BR' | 'en-US' | 'zh-CN' | 'ja-JP' | 'ko-KR';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: typeof ptBR;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'pt-BR';
  });

  const [translations, setTranslations] = useState(() => {
    switch (language) {
      case 'pt-BR': return ptBR;
      case 'zh-CN': return zhCN;
      case 'ja-JP': return jaJP;
      case 'ko-KR': return koKR;
      default: return ptBR;
    }
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    switch (language) {
      case 'pt-BR':
        setTranslations(ptBR);
        break;
      case 'zh-CN':
        setTranslations(zhCN);
        break;
      case 'ja-JP':
        setTranslations(jaJP);
        break;
      case 'ko-KR':
        setTranslations(koKR);
        break;
      default:
        setTranslations(enUS);
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};