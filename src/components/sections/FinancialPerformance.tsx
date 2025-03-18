'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper'

// P&L Data for 2024
const plData = {
  income: {
    services: [
      { name: 'MindBody Sales', monthly: 11583.33, annual: 139000.00 },
      { name: 'Shopify Sales', monthly: 22120.42, annual: 265445.00 },
    ],
    totalServices: { monthly: 33703.75, annual: 404445.00 },
    other: [
      { name: 'ClassPass', monthly: 4470.84, annual: 53650.06 },
      { name: 'Workshop and Yoga Rentals', monthly: 1020.39, annual: 12244.70 },
      { name: 'Room Rentals', monthly: 16820.34, annual: 201844.08 },
    ],
    totalOther: { monthly: 22311.57, annual: 267738.84 },
    totalIncome: { monthly: 56015.32, annual: 672183.84 },
  },
  expenses: {
    payroll: [
      { name: 'Front Desk (W2)', monthly: 9043.32, annual: 108519.81 },
      { name: 'Teachers/Practitioners (1099)', monthly: 6368.11, annual: 76417.33 },
      { name: 'Payroll Taxes', monthly: 1071.65, annual: 12859.75 },
    ],
    totalPayroll: { monthly: 21977.43, annual: 197796.89 },
    operations: [
      { name: 'Advertising/Marketing', monthly: 9057.19, annual: 108686.25 },
      { name: 'Bank Service Charges', monthly: 220.34, annual: 2644.05 },
      { name: 'Insurance (Liability and Workers Comp)', monthly: 354.77, annual: 4257.29 },
    ],
    rent: [
      { name: 'Fifth Floor (West Properties)', monthly: 12000.00, annual: 144000.00 },
      { name: 'Basement (YNNY)', monthly: 3000.00, annual: 36000.00 },
    ],
    totalRent: { monthly: 15000.00, annual: 180000.00 },
    utilities: [
      { name: 'Phone/Internet', monthly: 500.00, annual: 6000.00 },
      { name: 'Repairs/Maintenece', monthly: 443.80, annual: 5325.55 },
      { name: 'Waste Removal', monthly: 124.64, annual: 1495.68 },
      { name: 'Office Cleaning', monthly: 3334.67, annual: 40016.00 },
      { name: 'Operating Supplies/Equipment', monthly: 1633.67, annual: 19604.00 },
      { name: 'Software', monthly: 2530.52, annual: 30366.24 },
      { name: 'Electric', monthly: 950.00, annual: 11400.00 },
    ],
    totalExpenses: { monthly: 50632.66, annual: 607591.96 },
  },
  netProfit: { monthly: 5382.66, annual: 64591.88 },
}

// Format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

// Row component for P&L table
const PLRow = ({
  label,
  monthly,
  annual,
  isTotal = false,
  isSubtotal = false,
  isHeader = false,
  isNetProfit = false
}: {
  label: string,
  monthly?: number,
  annual?: number,
  isTotal?: boolean,
  isSubtotal?: boolean,
  isHeader?: boolean,
  isNetProfit?: boolean
}) => {
  const baseClasses = "py-3 px-4"
  const rowClasses = isHeader
    ? "bg-gray-100 font-bold text-gray-800"
    : isTotal
      ? "font-bold border-t-2 border-gray-300 bg-gray-50"
      : isSubtotal
        ? "font-semibold bg-gray-50 border-t border-gray-200"
        : isNetProfit
          ? "font-bold text-lg border-t-2 border-gray-300 bg-primary/10"
          : "border-t border-gray-100"

  return (
    <div className={`grid grid-cols-3 ${rowClasses}`}>
      <div className={`${baseClasses} ${isHeader ? 'text-left' : 'pl-6'} break-words`}>{label}</div>
      <div className={`${baseClasses} text-right whitespace-nowrap`}>
        {monthly !== undefined ? formatCurrency(monthly) : ''}
      </div>
      <div className={`${baseClasses} text-right whitespace-nowrap`}>
        {annual !== undefined ? formatCurrency(annual) : ''}
      </div>
    </div>
  )
}

export default function FinancialPerformance() {
  const [viewMode, setViewMode] = useState<'monthly' | 'annual'>('annual')

  return (
    <SectionWrapper id="financials" className="bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Financial Performance
        </h2>
        <p className="text-lg text-gray-600">
          FloLo Holistic has demonstrated strong financial performance with a healthy profit margin.
        </p>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              viewMode === 'monthly'
                ? 'bg-primary text-white'
                : 'text-gray-500 hover:text-primary'
            }`}
            onClick={() => setViewMode('monthly')}
          >
            Monthly Average
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              viewMode === 'annual'
                ? 'bg-primary text-white'
                : 'text-gray-500 hover:text-primary'
            }`}
            onClick={() => setViewMode('annual')}
          >
            Annual Total
          </button>
        </div>
      </div>

      {/* P&L Table */}
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* INCOME SECTION */}
        <PLRow label="INCOME" isHeader={true} />
        
        <PLRow label="Services Income" isSubtotal={true} />
        {plData.income.services.map((item, index) => (
          <PLRow
            key={`service-${index}`}
            label={item.name}
            monthly={viewMode === 'monthly' ? item.monthly : undefined}
            annual={viewMode === 'annual' ? item.annual : undefined}
          />
        ))}
        <PLRow
          label="TOTAL SERVICE SALES"
          monthly={viewMode === 'monthly' ? plData.income.totalServices.monthly : undefined}
          annual={viewMode === 'annual' ? plData.income.totalServices.annual : undefined}
          isSubtotal={true}
        />

        <PLRow label="Other Income" isSubtotal={true} />
        {plData.income.other.map((item, index) => (
          <PLRow
            key={`other-${index}`}
            label={item.name}
            monthly={viewMode === 'monthly' ? item.monthly : undefined}
            annual={viewMode === 'annual' ? item.annual : undefined}
          />
        ))}
        <PLRow
          label="TOTAL OTHER INCOME"
          monthly={viewMode === 'monthly' ? plData.income.totalOther.monthly : undefined}
          annual={viewMode === 'annual' ? plData.income.totalOther.annual : undefined}
          isSubtotal={true}
        />

        <PLRow
          label="TOTAL INCOME"
          monthly={viewMode === 'monthly' ? plData.income.totalIncome.monthly : undefined}
          annual={viewMode === 'annual' ? plData.income.totalIncome.annual : undefined}
          isTotal={true}
        />

        {/* EXPENSES SECTION */}
        <PLRow label="EXPENSES" isHeader={true} />
        
        <PLRow label="Payroll Expenses" isSubtotal={true} />
        {plData.expenses.payroll.map((item, index) => (
          <PLRow
            key={`payroll-${index}`}
            label={item.name}
            monthly={viewMode === 'monthly' ? item.monthly : undefined}
            annual={viewMode === 'annual' ? item.annual : undefined}
          />
        ))}
        <PLRow
          label="TOTAL PAYROLL"
          monthly={viewMode === 'monthly' ? plData.expenses.totalPayroll.monthly : undefined}
          annual={viewMode === 'annual' ? plData.expenses.totalPayroll.annual : undefined}
          isSubtotal={true}
        />

        {plData.expenses.operations.map((item, index) => (
          <PLRow
            key={`operations-${index}`}
            label={item.name}
            monthly={viewMode === 'monthly' ? item.monthly : undefined}
            annual={viewMode === 'annual' ? item.annual : undefined}
          />
        ))}

        <PLRow label="Office Rent" isSubtotal={true} />
        {plData.expenses.rent.map((item, index) => (
          <PLRow
            key={`rent-${index}`}
            label={item.name}
            monthly={viewMode === 'monthly' ? item.monthly : undefined}
            annual={viewMode === 'annual' ? item.annual : undefined}
          />
        ))}
        <PLRow
          label="TOTAL RENT"
          monthly={viewMode === 'monthly' ? plData.expenses.totalRent.monthly : undefined}
          annual={viewMode === 'annual' ? plData.expenses.totalRent.annual : undefined}
          isSubtotal={true}
        />

        {plData.expenses.utilities.map((item, index) => (
          <PLRow
            key={`utilities-${index}`}
            label={item.name}
            monthly={viewMode === 'monthly' ? item.monthly : undefined}
            annual={viewMode === 'annual' ? item.annual : undefined}
          />
        ))}

        <PLRow
          label="TOTAL EXPENSES"
          monthly={viewMode === 'monthly' ? plData.expenses.totalExpenses.monthly : undefined}
          annual={viewMode === 'annual' ? plData.expenses.totalExpenses.annual : undefined}
          isTotal={true}
        />

        {/* NET PROFIT */}
        <PLRow
          label="NET PROFIT"
          monthly={viewMode === 'monthly' ? plData.netProfit.monthly : undefined}
          annual={viewMode === 'annual' ? plData.netProfit.annual : undefined}
          isNetProfit={true}
        />
      </motion.div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-4xl font-bold text-primary mb-2">$672K</div>
          <div className="text-gray-600">2024 Revenue</div>
          <div className="text-sm text-gray-500 mt-2">
            Steady growth across all services
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-4xl font-bold text-secondary mb-2">9.6%</div>
          <div className="text-gray-600">Net Profit Margin</div>
          <div className="text-sm text-gray-500 mt-2">
            Strong profitability in competitive market
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-4xl font-bold text-accent mb-2">$64.5K</div>
          <div className="text-gray-600">Net Profit</div>
          <div className="text-sm text-gray-500 mt-2">
            Reinvesting for continued growth
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}