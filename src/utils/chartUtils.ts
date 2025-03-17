// Utility functions for charts

import { actualFinancialData, projectedFinancialData } from '@/data';

// Generate data for revenue chart
export const generateRevenueChartData = (showProjected: boolean = false) => {
  if (!showProjected) {
    return {
      labels: [actualFinancialData.year.toString()],
      datasets: [
        {
          label: 'Revenue',
          data: [actualFinancialData.revenue],
          backgroundColor: 'rgba(76, 175, 80, 0.6)',
          borderColor: 'rgba(76, 175, 80, 1)',
          borderWidth: 1,
        },
        {
          label: 'Net Profit',
          data: [actualFinancialData.netProfit],
          backgroundColor: 'rgba(33, 150, 243, 0.6)',
          borderColor: 'rgba(33, 150, 243, 1)',
          borderWidth: 1,
        },
      ],
    };
  }

  // Include projected data
  const years = [
    actualFinancialData.year,
    ...projectedFinancialData.map((data) => data.year),
  ];
  
  const revenueData = [
    actualFinancialData.revenue,
    ...projectedFinancialData.map((data) => data.revenue),
  ];
  
  const profitData = [
    actualFinancialData.netProfit,
    ...projectedFinancialData.map((data) => data.netProfit),
  ];

  return {
    labels: years.map(year => year.toString()),
    datasets: [
      {
        label: 'Revenue',
        data: revenueData,
        backgroundColor: 'rgba(76, 175, 80, 0.6)',
        borderColor: 'rgba(76, 175, 80, 1)',
        borderWidth: 1,
      },
      {
        label: 'Net Profit',
        data: profitData,
        backgroundColor: 'rgba(33, 150, 243, 0.6)',
        borderColor: 'rgba(33, 150, 243, 1)',
        borderWidth: 1,
      },
    ],
  };
};

// Generate data for profit margin chart
export const generateProfitMarginChartData = (showProjected: boolean = false) => {
  if (!showProjected) {
    return {
      labels: [actualFinancialData.year.toString()],
      datasets: [
        {
          label: 'Profit Margin (%)',
          data: [actualFinancialData.profitMargin],
          backgroundColor: 'rgba(141, 110, 99, 0.6)',
          borderColor: 'rgba(141, 110, 99, 1)',
          borderWidth: 1,
        },
      ],
    };
  }

  // Include projected data
  const years = [
    actualFinancialData.year,
    ...projectedFinancialData.map((data) => data.year),
  ];
  
  const marginData = [
    actualFinancialData.profitMargin,
    ...projectedFinancialData.map((data) => data.profitMargin),
  ];

  return {
    labels: years.map(year => year.toString()),
    datasets: [
      {
        label: 'Profit Margin (%)',
        data: marginData,
        backgroundColor: 'rgba(141, 110, 99, 0.6)',
        borderColor: 'rgba(141, 110, 99, 1)',
        borderWidth: 1,
      },
    ],
  };
};

// Generate data for fund allocation pie chart
export const generateFundAllocationChartData = (fundAllocationData: any[]) => {
  return {
    labels: fundAllocationData.map(item => item.category),
    datasets: [
      {
        data: fundAllocationData.map(item => item.amount),
        backgroundColor: [
          'rgba(76, 175, 80, 0.6)',  // Green
          'rgba(33, 150, 243, 0.6)',  // Blue
          'rgba(141, 110, 99, 0.6)',  // Brown
          'rgba(156, 39, 176, 0.6)',  // Purple
        ],
        borderColor: [
          'rgba(76, 175, 80, 1)',
          'rgba(33, 150, 243, 1)',
          'rgba(141, 110, 99, 1)',
          'rgba(156, 39, 176, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
};

// Chart options for bar charts
export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: number) => {
          if (value >= 1000000) {
            return '$' + (value / 1000000).toFixed(1) + 'M';
          } else if (value >= 1000) {
            return '$' + (value / 1000).toFixed(0) + 'K';
          }
          return '$' + value;
        },
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context: any) => {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
};

// Chart options for pie charts
export const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      callbacks: {
        label: (context: any) => {
          let label = context.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed !== null) {
            label += new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(context.parsed);
          }
          return label;
        },
      },
    },
  },
};

// Format currency for display
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Format percentage for display
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`;
};