import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

const metaTags = {
  'pt-BR': {
    title: 'Tecnologia e Inteligência Artificial',
    description: 'Empresa líder em tecnologia e inteligência artificial. Desenvolvemos soluções inovadoras que transformam o futuro dos negócios.',
    keywords: 'tecnologia, inteligência artificial, IA, desenvolvimento, automação, dados, segurança cibernética',
    ogTitle: '18 Tecnologia & Inteligência Artificial',
    ogDescription: 'Empresa líder em tecnologia e inteligência artificial. Desenvolvemos soluções inovadoras que transformam o futuro dos negócios.',
    lang: 'pt-BR'
  },
  'en-US': {
    title: 'Technology and Artificial Intelligence',
    description: 'Leading company in technology and artificial intelligence. We develop innovative solutions that transform the future of business.',
    keywords: 'technology, artificial intelligence, AI, development, automation, data, cybersecurity',
    ogTitle: '18 Technology & Artificial Intelligence',
    ogDescription: 'Leading company in technology and artificial intelligence. We develop innovative solutions that transform the future of business.',
    lang: 'en-US'
  },
  'zh-CN': {
    title: '技术与人工智能',
    description: '技术和人工智能领域的领先企业。我们开发创新解决方案，改变企业的未来。',
    keywords: '技术, 人工智能, AI, 开发, 自动化, 数据, 网络安全',
    ogTitle: '18 技术与人工智能',
    ogDescription: '技术和人工智能领域的领先企业。我们开发创新解决方案，改变企业的未来。',
    lang: 'zh-CN'
  },
  'ja-JP': {
    title: 'テクノロジーと人工知能',
    description: 'テクノロジーと人工知能分野のリーディングカンパニー。ビジネスの未来を変革する革新的なソリューションを開発します。',
    keywords: 'テクノロジー, 人工知能, AI, 開発, 自動化, データ, サイバーセキュリティ',
    ogTitle: '18 テクノロジー & 人工知能',
    ogDescription: 'テクノロジーと人工知能分野のリーディングカンパニー。ビジネスの未来を変革する革新的なソリューションを開発します。',
    lang: 'ja-JP'
  },
  'ko-KR': {
    title: '기술과 인공지능',
    description: '기술과 인공지능 분야의 선도기업. 비즈니스의 미래를 혁신하는 솔루션을 개발합니다.',
    keywords: '기술, 인공지능, AI, 개발, 자동화, 데이터, 사이버보안',
    ogTitle: '18 기술 & 인공지능',
    ogDescription: '기술과 인공지능 분야의 선도기업. 비즈니스의 미래를 혁신하는 솔루션을 개발합니다.',
    lang: 'ko-KR'
  }
};

export const useDocumentMetadata = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const metadata = metaTags[language];

    // Update document title
    document.title = metadata.title;
    
    // Update html lang attribute
    document.documentElement.lang = metadata.lang;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    }

    if (metaKeywords) {
      metaKeywords.setAttribute('content', metadata.keywords);
    }

    if (ogTitle) {
      ogTitle.setAttribute('content', metadata.ogTitle);
    }

    if (ogDescription) {
      ogDescription.setAttribute('content', metadata.ogDescription);
    }
  }, [language]);
};