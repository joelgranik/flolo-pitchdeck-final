// Financial data for FloLo Holistic

// 2024 Actual financial data
export const actualFinancialData = {
  year: 2024,
  revenue: 650000,
  netProfit: 64591,
  profitMargin: 9.6, // as percentage
};

// Projected financial data
export const projectedFinancialData = [
  {
    year: 2025,
    revenue: 850000,
    netProfit: 85000, // Assuming 10% profit margin
    profitMargin: 10,
  },
  {
    year: 2026,
    revenue: 950000,
    netProfit: 104500, // Assuming 11% profit margin
    profitMargin: 11,
  },
  {
    year: 2027,
    revenue: 1000000,
    netProfit: 120000, // Assuming 12% profit margin
    profitMargin: 12,
  },
];

// Fund allocation data
export const fundAllocationData = [
  {
    category: 'New Lease',
    amount: 50000,
    percentage: 33.3,
    description: 'Secure new lease in Midtown Manhattan',
  },
  {
    category: 'Facility Upgrades',
    amount: 50000,
    percentage: 33.3,
    description: 'Floats, sauna enhancements, wellness lounge',
  },
  {
    category: 'Marketing',
    amount: 30000,
    percentage: 20,
    description: 'Digital campaigns, community events',
  },
  {
    category: 'Contingency',
    amount: 20000,
    percentage: 13.4,
    description: 'Contingency / strategic operations',
  },
];

// Investment details
export const investmentDetails = {
  minInvestment: 100000,
  maxInvestment: 150000,
  equityOffered: 'Significant stake', // This would be replaced with actual percentage
  expectedROITimeframe: '12-18 months',
  targetRevenueYear: 2027,
  targetRevenue: 1000000,
};