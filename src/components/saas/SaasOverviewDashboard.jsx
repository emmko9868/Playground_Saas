import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SaasChartWidget } from './SaasChartWidget';
import { SaasDonutChart } from './charts/SaasDonutChart';
import { SaasPieChart } from './charts/SaasPieChart';
import { SaasLineChart } from './charts/SaasLineChart';
import { SaasStackedBarChart } from './charts/SaasStackedBarChart';
import { SaasBarChart } from './charts/SaasBarChart';
import {
  supplier3Options,
  supplier5Options,
  toolingOverviewData,
  getToolingOverviewLegend,
  toolingOverviewCenter,
  weeklyCompletedData,
  overallUtilizationData,
  getOverallUtilizationLegend,
  getUtilizationDataKeys,
  endOfLifeData,
  getEndOfLifeLegend,
  cycleTimeComplianceData,
  getCycleTimeComplianceLegend,
  cycleTimeComplianceCenter,
  cycleTimeRateData,
  getCycleTimeRateLegend,
  getCycleTimeRateLines,
  inactiveToolingData,
  getInactiveToolingLegend,
  operationalSummaryData,
  getOperationalSummaryLegend,
  getOperationalDataKeys,
} from '../../data/dashboardData';

/**
 * SaasOverviewDashboard 컴포넌트
 *
 * Overview Dashboard의 Widget Group.
 *
 * 구성:
 * - Row 1: Project Status (Donut), Budget Allocation (Donut)
 * - Row 2: Team Workload (Stacked Bar), Milestone Tracker (Pie)
 * - Row 3: Sprint Velocity (Donut), Delivery Trend (Line)
 * - Row 4: Blocked Tasks (Pie), Team Performance (Stacked Bar)
 *
 * Props:
 * @param {number} spacing - 위젯 간 간격 [Optional, 기본값: 2.5 (20px)]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasOverviewDashboard />
 */
const SaasOverviewDashboard = forwardRef(function SaasOverviewDashboard({
  spacing = 2.5,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const [workloadDept, setWorkloadDept] = useState('all');
  const [deliveryDept, setDeliveryDept] = useState('all');
  const [performanceDept, setPerformanceDept] = useState('all');

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      <Grid container spacing={spacing}>
        {/* Row 1 */}
        {/* 1. Project Status (Donut Chart) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SaasChartWidget isDarkMode={isDarkMode}
            title="Project Status"
            tooltipContent="Shows the status distribution of all active projects."
            layoutType="type1"
            chart={
              <SaasDonutChart
                data={toolingOverviewData}
                centerValue={toolingOverviewCenter.value}
                centerLabel={toolingOverviewCenter.label}
                size={200}
                isDarkMode={isDarkMode}
              />
            }
            legendItems={getToolingOverviewLegend(isDarkMode)}
            width="100%"
          />
        </Grid>

        {/* 2. Weekly Completed (Bar Chart) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SaasChartWidget isDarkMode={isDarkMode}
            title="Weekly Completed"
            tooltipContent="Shows tasks completed per day this week."
            layoutType="type2"
            chart={
              <SaasBarChart
                data={weeklyCompletedData}
                height={260}
                isDarkMode={isDarkMode}
              />
            }
            legendItems={[]}
            width="100%"
          />
        </Grid>

        {/* Row 2 */}
        {/* 3. Team Workload (Stacked Bar Chart) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SaasChartWidget isDarkMode={isDarkMode}
            title="Team Workload"
            tooltipContent="Shows workload distribution across departments."
            showDropdown
            dropdownOptions={supplier5Options}
            dropdownValue={workloadDept}
            onDropdownChange={setWorkloadDept}
            dropdownPlaceholder="Select Department"
            layoutType="type2"
            chart={
              <SaasStackedBarChart
                data={overallUtilizationData}
                dataKeys={getUtilizationDataKeys(isDarkMode)}
                height={260}
                isDarkMode={isDarkMode}
              />
            }
            legendItems={getOverallUtilizationLegend(isDarkMode)}
            width="100%"
          />
        </Grid>

        {/* 4. Milestone Tracker (Pie Chart) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SaasChartWidget isDarkMode={isDarkMode}
            title="Milestone Tracker"
            tooltipContent="Shows upcoming and overdue milestones."
            layoutType="type1"
            chart={
              <SaasPieChart
                data={endOfLifeData}
                size={200}
                isDarkMode={isDarkMode}
              />
            }
            legendItems={getEndOfLifeLegend(isDarkMode)}
            width="100%"
          />
        </Grid>

        {/* Row 3 */}
        {/* 5. Sprint Velocity (Donut Chart) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SaasChartWidget isDarkMode={isDarkMode}
            title="Sprint Velocity"
            tooltipContent="Shows sprint estimation accuracy."
            layoutType="type1"
            chart={
              <SaasDonutChart
                data={cycleTimeComplianceData}
                centerValue={cycleTimeComplianceCenter.value}
                centerLabel={cycleTimeComplianceCenter.label}
                size={200}
                isDarkMode={isDarkMode}
              />
            }
            legendItems={getCycleTimeComplianceLegend(isDarkMode)}
            width="100%"
          />
        </Grid>

        {/* 6. Delivery Trend (Line Chart) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SaasChartWidget isDarkMode={isDarkMode}
            title="Delivery Trend"
            tooltipContent="Shows on-time delivery rate trends by department."
            showDropdown
            dropdownOptions={supplier3Options}
            dropdownValue={deliveryDept}
            onDropdownChange={setDeliveryDept}
            dropdownPlaceholder="Select Department"
            layoutType="type2"
            chart={
              <SaasLineChart
                data={cycleTimeRateData}
                lines={getCycleTimeRateLines(isDarkMode)}
                xAxisKey="month"
                height={260}
                isDarkMode={isDarkMode}
              />
            }
            legendItems={getCycleTimeRateLegend(isDarkMode)}
            width="100%"
          />
        </Grid>

        {/* Row 4 */}
        {/* 7. Blocked Tasks (Pie Chart) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SaasChartWidget isDarkMode={isDarkMode}
            title="Blocked Tasks"
            tooltipContent="Shows blocked task distribution by duration."
            layoutType="type1"
            chart={
              <SaasPieChart
                data={inactiveToolingData}
                size={200}
                isDarkMode={isDarkMode}
              />
            }
            legendItems={getInactiveToolingLegend(isDarkMode)}
            width="100%"
          />
        </Grid>

        {/* 8. Team Performance (Stacked Bar Chart) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SaasChartWidget isDarkMode={isDarkMode}
            title="Team Performance"
            tooltipContent="Shows delivery performance by department."
            showDropdown
            dropdownOptions={supplier3Options}
            dropdownValue={performanceDept}
            onDropdownChange={setPerformanceDept}
            dropdownPlaceholder="Select Department"
            layoutType="type2"
            chart={
              <SaasStackedBarChart
                data={operationalSummaryData}
                dataKeys={getOperationalDataKeys(isDarkMode)}
                height={260}
                barSize={64}
                isDarkMode={isDarkMode}
              />
            }
            legendItems={getOperationalSummaryLegend(isDarkMode)}
            width="100%"
          />
        </Grid>
      </Grid>
    </Box>
  );
});

export { SaasOverviewDashboard };
