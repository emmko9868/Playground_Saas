/**
 * Overview Dashboard Data
 *
 * 위젯 구성:
 * - Row 1: Project Status (Donut), Budget Allocation (Donut)
 * - Row 2: Team Workload (Stacked Bar), Milestone Tracker (Pie)
 * - Row 3: Sprint Velocity (Donut), Delivery Trend (Line)
 * - Row 4: Blocked Tasks (Pie), Team Performance (Stacked Bar)
 */

import {
  DONUT_COLORS,
  NATURE_DONUT_COLORS,
  COSMIC_DONUT_COLORS,
  VINTAGE_DONUT_COLORS,
  OBSIDIAN_DONUT_COLORS,
  STACKED_BAR_COLORS,
  NATURE_STACKED_BAR_COLORS,
  COSMIC_STACKED_BAR_COLORS,
  VINTAGE_STACKED_BAR_COLORS,
  OBSIDIAN_STACKED_BAR_COLORS,
  OPERATIONAL_COLORS,
  NATURE_OPERATIONAL_COLORS,
  COSMIC_OPERATIONAL_COLORS,
  VINTAGE_OPERATIONAL_COLORS,
  OBSIDIAN_OPERATIONAL_COLORS,
  LINE_COLORS,
  NATURE_LINE_COLORS,
  COSMIC_LINE_COLORS,
  VINTAGE_LINE_COLORS,
  OBSIDIAN_LINE_COLORS,
} from '../components/saas/charts/chartColors';

/**
 * 모드별 도넛 색상 반환
 */
const getDonut = (mode) => {
  if (mode === 'nature') return NATURE_DONUT_COLORS;
  if (mode === 'cosmic') return COSMIC_DONUT_COLORS;
  if (mode === 'vintage') return VINTAGE_DONUT_COLORS;
  if (mode === 'obsidian') return OBSIDIAN_DONUT_COLORS;
  return DONUT_COLORS;
};

const getStacked = (mode) => {
  if (mode === 'nature') return NATURE_STACKED_BAR_COLORS;
  if (mode === 'cosmic') return COSMIC_STACKED_BAR_COLORS;
  if (mode === 'vintage') return VINTAGE_STACKED_BAR_COLORS;
  if (mode === 'obsidian') return OBSIDIAN_STACKED_BAR_COLORS;
  return STACKED_BAR_COLORS;
};

const getOps = (mode) => {
  if (mode === 'nature') return NATURE_OPERATIONAL_COLORS;
  if (mode === 'cosmic') return COSMIC_OPERATIONAL_COLORS;
  if (mode === 'vintage') return VINTAGE_OPERATIONAL_COLORS;
  if (mode === 'obsidian') return OBSIDIAN_OPERATIONAL_COLORS;
  return OPERATIONAL_COLORS;
};

const getLine = (mode) => {
  if (mode === 'nature') return NATURE_LINE_COLORS;
  if (mode === 'cosmic') return COSMIC_LINE_COLORS;
  if (mode === 'vintage') return VINTAGE_LINE_COLORS;
  if (mode === 'obsidian') return OBSIDIAN_LINE_COLORS;
  return LINE_COLORS;
};

// ============================================================================
// Dropdown Options
// ============================================================================

export const supplier3Options = [
  { value: 'all', label: '3 Department(s)' },
  { value: 'supplier1', label: 'Engineering' },
  { value: 'supplier2', label: 'Design' },
  { value: 'supplier3', label: 'Marketing' },
];

export const supplier5Options = [
  { value: 'all', label: '5 Department(s)' },
  { value: 'supplier1', label: 'Engineering' },
  { value: 'supplier2', label: 'Design' },
  { value: 'supplier3', label: 'Marketing' },
  { value: 'supplier4', label: 'Sales' },
  { value: 'supplier5', label: 'Operations' },
];

// ============================================================================
// 1. Project Status (Donut Chart)
// ============================================================================

export const toolingOverviewData = [
  { name: 'On Track', value: 144 },
  { name: 'At Risk', value: 22 },
  { name: 'On Hold', value: 12 },
  { name: 'Delayed', value: 7 },
  { name: 'Completed', value: 7 },
];

export const getToolingOverviewLegend = (mode) => {
  const c = getDonut(mode);
  return [
    { color: c[0], label: 'On Track', value: '144', percent: '72%' },
    { color: c[1], label: 'At Risk', value: '22', percent: '11.5%' },
    { color: c[2], label: 'On Hold', value: '12', percent: '6.3%' },
    { color: c[3], label: 'Delayed', value: '7', percent: '3.6%' },
    { color: c[4], label: 'Completed', value: '7', percent: '3.6%' },
  ];
};

export const toolingOverviewLegend = getToolingOverviewLegend();

export const toolingOverviewCenter = {
  value: '192',
  label: 'Total Projects',
};

// ============================================================================
// 2. Weekly Completed (Bar Chart)
// ============================================================================

export const weeklyCompletedData = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 19 },
  { name: 'Wed', value: 8 },
  { name: 'Thu', value: 24 },
  { name: 'Fri', value: 16 },
  { name: 'Sat', value: 5 },
  { name: 'Sun', value: 3 },
];

// ============================================================================
// 3. Team Workload (Stacked Bar Chart)
// ============================================================================

export const overallUtilizationData = [
  { name: 'Engineering', low: 20, medium: 30, high: 35, prolonged: 15 },
  { name: 'Design', low: 15, medium: 25, high: 40, prolonged: 20 },
  { name: 'Marketing', low: 25, medium: 20, high: 30, prolonged: 25 },
  { name: 'Sales', low: 10, medium: 35, high: 45, prolonged: 10 },
  { name: 'Operations', low: 30, medium: 15, high: 35, prolonged: 20 },
];

export const getOverallUtilizationLegend = (mode) => {
  const s = getStacked(mode);
  return [
    { color: s.low, label: 'Light (0-30%)' },
    { color: s.medium, label: 'Balanced (30-70%)' },
    { color: s.high, label: 'Heavy (70-100%)' },
    { color: s.prolonged, label: 'Overloaded (>100%)' },
  ];
};

export const getUtilizationDataKeys = (mode) => {
  const s = getStacked(mode);
  return [
    { dataKey: 'low', color: s.low },
    { dataKey: 'medium', color: s.medium },
    { dataKey: 'high', color: s.high },
    { dataKey: 'prolonged', color: s.prolonged },
  ];
};

export const overallUtilizationLegend = getOverallUtilizationLegend();
export const utilizationDataKeys = getUtilizationDataKeys();

// ============================================================================
// 4. Milestone Tracker (Pie Chart)
// ============================================================================

export const endOfLifeData = [
  { name: 'Due in 30 days', value: 144 },
  { name: 'Overdue', value: 22 },
];

export const getEndOfLifeLegend = (mode) => {
  const c = getDonut(mode);
  return [
    { color: c[0], label: 'Due in 30 days', value: '144', percent: '86.7%' },
    { color: c[1], label: 'Overdue', value: '22', percent: '13.3%' },
  ];
};

export const endOfLifeLegend = getEndOfLifeLegend();

// ============================================================================
// 5. Sprint Velocity (Donut Chart)
// ============================================================================

export const cycleTimeComplianceData = [
  { name: 'On Target', value: 144 },
  { name: 'Over Estimate', value: 22 },
  { name: 'Under Estimate', value: 22 },
];

export const getCycleTimeComplianceLegend = (mode) => {
  const c = getDonut(mode);
  return [
    { color: c[0], label: 'On Target', value: '144', percent: '76.6%' },
    { color: c[1], label: 'Over Estimate', value: '22', percent: '11.7%' },
    { color: c[2], label: 'Under Estimate', value: '22', percent: '11.7%' },
  ];
};

export const cycleTimeComplianceLegend = getCycleTimeComplianceLegend();

export const cycleTimeComplianceCenter = {
  value: '76.6%',
  label: 'Accuracy',
};

// ============================================================================
// 6. Delivery Trend (Line Chart)
// ============================================================================

export const cycleTimeRateData = [
  { month: 'Jan', supplierA: 40, supplierB: 30, supplierC: 25 },
  { month: 'Feb', supplierA: 50, supplierB: 45, supplierC: 35 },
  { month: 'Mar', supplierA: 55, supplierB: 50, supplierC: 40 },
  { month: 'Apr', supplierA: 70, supplierB: 55, supplierC: 45 },
  { month: 'May', supplierA: 65, supplierB: 70, supplierC: 50 },
  { month: 'Jun', supplierA: 75, supplierB: 65, supplierC: 60 },
  { month: 'Jul', supplierA: 60, supplierB: 75, supplierC: 55 },
  { month: 'Aug', supplierA: 70, supplierB: 80, supplierC: 65 },
  { month: 'Sep', supplierA: 65, supplierB: 70, supplierC: 60 },
  { month: 'Oct', supplierA: 80, supplierB: 75, supplierC: 70 },
  { month: 'Nov', supplierA: 85, supplierB: 80, supplierC: 75 },
  { month: 'Dec', supplierA: 90, supplierB: 85, supplierC: 80 },
];

export const getCycleTimeRateLegend = (mode) => {
  const l = getLine(mode);
  return [
    { color: l[0], label: 'Engineering' },
    { color: l[1], label: 'Design' },
    { color: l[2], label: 'Marketing' },
  ];
};

export const getCycleTimeRateLines = (mode) => {
  const l = getLine(mode);
  return [
    { dataKey: 'supplierA', name: 'Engineering', color: l[0] },
    { dataKey: 'supplierB', name: 'Design', color: l[1] },
    { dataKey: 'supplierC', name: 'Marketing', color: l[2] },
  ];
};

export const cycleTimeRateLegend = getCycleTimeRateLegend();
export const cycleTimeRateLines = getCycleTimeRateLines();

// ============================================================================
// 7. Blocked Tasks (Pie Chart)
// ============================================================================

export const inactiveToolingData = [
  { name: '1-7 Days', value: 144 },
  { name: '7-30 Days', value: 22 },
  { name: '> 30 Days', value: 22 },
];

export const getInactiveToolingLegend = (mode) => {
  const c = getDonut(mode);
  return [
    { color: c[0], label: '1-7 Days', value: '144', percent: '76.6%' },
    { color: c[1], label: '7-30 Days', value: '22', percent: '11.7%' },
    { color: c[2], label: '> 30 Days', value: '22', percent: '11.7%' },
  ];
};

export const inactiveToolingLegend = getInactiveToolingLegend();

// ============================================================================
// 8. Team Performance (Stacked Bar Chart)
// ============================================================================

export const operationalSummaryData = [
  { name: 'Engineering', inOperation: 60, outOfOperation: 25, unknown: 15 },
  { name: 'Design', inOperation: 55, outOfOperation: 30, unknown: 15 },
  { name: 'Marketing', inOperation: 70, outOfOperation: 20, unknown: 10 },
];

export const getOperationalSummaryLegend = (mode) => {
  const o = getOps(mode);
  return [
    { color: o.inOperation, label: 'Delivered' },
    { color: o.outOfOperation, label: 'In Progress' },
    { color: o.unknown, label: 'Pending Review' },
  ];
};

export const getOperationalDataKeys = (mode) => {
  const o = getOps(mode);
  return [
    { dataKey: 'inOperation', color: o.inOperation },
    { dataKey: 'outOfOperation', color: o.outOfOperation },
    { dataKey: 'unknown', color: o.unknown },
  ];
};

export const operationalSummaryLegend = getOperationalSummaryLegend();
export const operationalDataKeys = getOperationalDataKeys();
