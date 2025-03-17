// Investor data for FloLo Holistic

// Types of investors that might be interested in FloLo
export const investorTypes = [
  {
    id: 'financial',
    title: 'Wellness Industry Investors',
    description: 'Financial investors seeking exposure to the booming wellness sector.',
    benefits: [
      'Access to the $4.4 trillion global wellness market',
      'Investment in a profitable, established business',
      'Potential for significant ROI within 12-18 months',
      'Exposure to multiple wellness segments under one investment'
    ],
    synergy: 'Financial investors bring capital and business expertise to accelerate FloLo\'s growth trajectory.',
    icon: '💰'
  },
  {
    id: 'strategic',
    title: 'Strategic Partners in Wellness',
    description: 'Acupuncturists, holistic practitioners, or other providers looking to operate in FloLo\'s space.',
    benefits: [
      'Ready-made client base of wellness-focused individuals',
      'Established brand and location with foot traffic',
      'Reduced overhead through shared space and resources',
      'Cross-referral opportunities with complementary services'
    ],
    synergy: 'Wellness practitioners can expand FloLo\'s service offerings while leveraging existing infrastructure and clientele.',
    icon: '🌱'
  },
  {
    id: 'retail',
    title: 'Retail Businesses',
    description: 'Businesses selling wellness-related products, leveraging FloLo\'s established clientele.',
    benefits: [
      'Direct access to target demographic of wellness consumers',
      'Physical retail space in a high-traffic wellness center',
      'Brand association with a respected wellness provider',
      'Opportunity for product testing and feedback from ideal customers'
    ],
    synergy: 'Retail partners can create additional revenue streams through product sales while enhancing the client experience.',
    icon: '🛍️'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Professionals',
    description: 'Psychiatrists, therapists, or medical professionals wanting integrated holistic settings.',
    benefits: [
      'Bridge between conventional medicine and holistic wellness',
      'Comprehensive approach to patient/client care',
      'Expanded referral network',
      'Attractive setting for health-conscious clients'
    ],
    synergy: 'Healthcare professionals can create integrative care models that combine conventional and holistic approaches.',
    icon: '⚕️'
  },
  {
    id: 'impact',
    title: 'Impact Investors',
    description: 'Investors passionate about combining ROI with community well-being.',
    benefits: [
      'Financial returns alongside positive community impact',
      'Investment in preventative health and wellness',
      'Supporting a business that improves quality of life',
      'Alignment of financial goals with wellness values'
    ],
    synergy: 'Impact investors support FloLo\'s mission while expecting both financial returns and community benefits.',
    icon: '🌍'
  }
];

// Investment opportunity details
export const investmentOpportunity = {
  ask: {
    amount: '$100,000–$150,000',
    equity: 'Significant equity stake',
    timeline: '12-18 months expected ROI'
  },
  use_of_funds: [
    {
      category: 'New Lease',
      amount: 50000,
      description: 'Secure new lease in Midtown Manhattan'
    },
    {
      category: 'Facility Upgrades',
      amount: 50000,
      description: 'Floats, sauna enhancements, wellness lounge'
    },
    {
      category: 'Marketing',
      amount: 30000,
      description: 'Digital campaigns, community events'
    },
    {
      category: 'Contingency',
      amount: 20000,
      description: 'Contingency / strategic operations'
    }
  ],
  projections: {
    current: {
      year: 2024,
      revenue: 650000,
      profit: 64591
    },
    target: {
      year: 2027,
      revenue: 1000000,
      profit: 120000
    }
  },
  benefits: [
    'Joining a profitable operation with proven business model',
    'Strong brand recognition and loyal customer base',
    'Prime location in wellness-focused Midtown Manhattan',
    'Opportunity to bring your network or skills to accelerate growth',
    'Potential for strategic partnerships and synergies'
  ]
};

// Investment timeline milestones
export const investmentTimeline = [
  {
    date: 'Q2 2025',
    milestone: 'Investment Secured',
    description: 'Complete investment round and finalize partnership agreements.'
  },
  {
    date: 'Q3 2025',
    milestone: 'New Lease Secured',
    description: 'Sign lease for enhanced space in Midtown Manhattan.'
  },
  {
    date: 'Q4 2025',
    milestone: 'Facility Upgrades Completed',
    description: 'Complete renovations and equipment upgrades.'
  },
  {
    date: 'Q1 2026',
    milestone: 'Marketing Campaign Launch',
    description: 'Launch comprehensive marketing campaign to attract new clients.'
  },
  {
    date: 'Q4 2026',
    milestone: 'Break $850K Revenue',
    description: 'Reach $850,000 in annual revenue.'
  },
  {
    date: 'Q4 2027',
    milestone: '$1M Revenue',
    description: 'Achieve $1 million in annual revenue.'
  }
];