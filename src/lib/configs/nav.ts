import { Nav, type NavItem, type NavSite } from '@daks.dev/svelte.sdk';

interface NavDraver {
  header: NavItem[];
  activity: NavItem[];
  footer: NavItem[];
}

export const activity: NavItem[] = [
  {
    href: '/inspection',
    label: 'Обследование зданий и сооружений'
  },
  {
    href: '/technical-supervision',
    label: 'Технический надзор'
  },
  {
    href: '/laboratory-control',
    label: 'Лабораторный контроль',
    links: [
      {
        href: '/electric-heating',
        label: 'Электропрогрев'
      },
      {
        href: '/field-tests',
        label: 'Натурные испытания'
      }
    ]
  },
  {
    href: '/geodesy-monitoring',
    label: 'Геодезия и мониторинг'
  },
  {
    href: '/forensic-examination',
    label: 'Судебная экспертиза'
  },
  {
    href: '/energy-audit',
    label: 'Энергоаудит'
  },
  {
    href: '/certification-accreditation',
    label: 'Сертификация и аккредитация'
  }
];

export const nav: NavSite = {
  navbar: {
    links: [
      {
        href: '/activity',
        label: 'Деятельность',
        links: activity
      },
      {
        href: '/projects',
        label: 'Проекты'
      },
      {
        href: '/regulation',
        label: 'Регламент'
      },
      {
        href: '/permissions',
        label: 'Допуски'
      },
      {
        href: '/news',
        label: 'Новости'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      }
    ]
  },
  footer: {
    links: [
      {
        href: '/admin',
        label: 'ic:outline-settings', // &#128736;
        disallow: true
      },
      {
        href: '/regulation',
        label: 'Регламент'
      },
      {
        href: '/permissions',
        label: 'Допуски'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      }
    ]
  }
};

export const draver: Partial<NavDraver> = {
  header: [
    {
      href: '/about',
      label: 'О предприятии'
    },
    {
      href: '/partners',
      label: 'Партнёры'
    },
    {
      href: '/feedback',
      label: 'Отзывы'
    }
  ],
  activity,
  footer: [
    {
      href: '/articles',
      label: 'Инфрмация'
    },
    {
      href: '/privacy',
      label: 'Политика конфиденциальности'
    }
  ]
};

export const map = [
  ...Nav.map(nav.navbar.links),
  ...Nav.map(draver.header ?? []),
  ...Nav.map(draver.footer ?? []),
  ...Nav.map(nav.footer?.links ?? []),
  ...(nav.allow ?? [])
].filter((el, idx, arr) => arr.indexOf(el) === idx);
