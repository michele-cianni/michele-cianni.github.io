export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export const defaultLang = 'it';

export const ui = {
  it: {
    'meta.title': 'Michele Cianni — Sviluppatore Full-Stack',
    'meta.description':
      'Portfolio di Michele Cianni: progetti reali, competenze e contatti.',
    'nav.work': 'Commissioni',
    'nav.about': 'Manifesto',
    'nav.contact': 'Contatto',
    'about.heading': 'Manifesto',
    'hero.valueProp': 'Costruisco siti che portano clienti',
    'hero.subtitle':
      'Per piccole e medie imprese che vogliono un sito capace di portare clienti veri.',
    'hero.ctaPrimary': 'Parliamo',
    'hero.ctaSecondary': 'I lavori',
  },
  en: {
    'meta.title': 'Michele Cianni — Full-Stack Developer',
    'meta.description':
      "Michele Cianni's portfolio: real projects, skills, and contact info.",
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'about.heading': 'About',
    'hero.valueProp': 'I build websites that bring you customers',
    'hero.subtitle':
      'For small and medium businesses that want a site that brings real customers.',
    'hero.ctaPrimary': "Let's talk",
    'hero.ctaSecondary': 'The work',
  },
} as const;
