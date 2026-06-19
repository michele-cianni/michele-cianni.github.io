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
    'hero.valueProp': 'Costruisco siti che portano clienti, non solo demo.',
  },
  en: {
    'meta.title': 'Michele Cianni — Full-Stack Developer',
    'meta.description':
      "Michele Cianni's portfolio: real projects, skills, and contact info.",
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.valueProp': 'I build sites that bring in customers, not just demos.',
  },
} as const;
