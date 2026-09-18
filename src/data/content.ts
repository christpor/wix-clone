export interface TemplateItem {
  id: string;
  title: string;
  category: 'Business' | 'Store' | 'Creative' | 'Community' | 'Blog';
  image: string;
  badge?: string;
  featured?: boolean;
}

export interface BusinessSolution {
  title: string;
  desc: string;
  iconName: string;
  stat: string;
}

export const WIX_TEMPLATES: TemplateItem[] = [
  {
    id: 'tpl-1',
    title: 'Earth & Clay Pottery Studio',
    category: 'Store',
    image: '/assets/images/wix_asset_0.jpg',
    badge: 'Popular',
    featured: true
  },
  {
    id: 'tpl-2',
    title: 'Modern Architecture Collective',
    category: 'Creative',
    image: '/assets/images/wix_asset_1.jpg',
    badge: 'Trending',
    featured: true
  },
  {
    id: 'tpl-3',
    title: 'SaaS Metric Pulse Platform',
    category: 'Business',
    image: '/assets/images/wix_asset_2.jpg',
    badge: 'AI Ready',
    featured: true
  },
  {
    id: 'tpl-4',
    title: 'Urban High-Rise Living',
    category: 'Business',
    image: '/assets/images/wix_asset_3.jpg',
    featured: false
  },
  {
    id: 'tpl-5',
    title: 'Runway Athletic & Fitness Club',
    category: 'Community',
    image: '/assets/images/wix_asset_4.jpg',
    badge: 'New',
    featured: true
  },
  {
    id: 'tpl-6',
    title: 'Artisan Coffee Roasters',
    category: 'Store',
    image: '/assets/images/wix_asset_6.jpg',
    featured: false
  },
  {
    id: 'tpl-7',
    title: 'Nordic Interior Atelier',
    category: 'Creative',
    image: '/assets/images/wix_asset_7.jpg',
    featured: false
  },
  {
    id: 'tpl-8',
    title: 'Fintech Venture Partners',
    category: 'Business',
    image: '/assets/images/wix_asset_8.jpg',
    featured: true
  }
];

export const BUSINESS_SOLUTIONS: BusinessSolution[] = [
  {
    title: 'eCommerce Store',
    desc: 'Sell physical and digital goods with automated multi-currency checkout, global shipping, and drop-shipping.',
    iconName: 'ShoppingBag',
    stat: '+$10B+ processed annually'
  },
  {
    title: 'Scheduling & Bookings',
    desc: 'Take appointments, manage staff calendars, host group workshops, and stream video sessions.',
    iconName: 'Calendar',
    stat: '150M+ bookings accepted'
  },
  {
    title: 'Lead Management & CRM',
    desc: 'Track every inquiry from visitor to loyal customer with automated email sequences and smart pipelines.',
    iconName: 'Users',
    stat: '2.5x conversion boost'
  },
  {
    title: 'Restaurant & Hospitality',
    desc: 'Accept commission-free online food orders, design digital menus, and process table reservations.',
    iconName: 'UtensilsCrossed',
    stat: '99.99% uptime reliability'
  }
];

export const FOUNDATION_METRICS = [
  { value: '99.99%', label: 'Uptime Reliability', sub: 'Enterprise multi-cloud architecture across AWS and GCP' },
  { value: '250M+', label: 'Worldwide Users', sub: 'Powering entrepreneurs, freelancers, and global agencies' },
  { value: '24/7', label: 'Security & DDoS', sub: 'Automated PCI-DSS Level 1 compliance and SOC 2 Type II' },
  { value: '<1.2s', label: 'Global LCP Speed', sub: 'Distributed Edge caching in over 200 PoPs around the world' }
];
