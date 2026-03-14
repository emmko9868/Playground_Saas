import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { STACKED_BAR_COLORS, GRID_COLOR, getChartSecondaryColor, getChartGridColor } from './chartColors';

/**
 * SaasStackedBarChart 컴포넌트
 *
 * Manufacturing Management SaaS 대시보드용 수평 스택 바 차트.
 * 공급사별 활용률, 운영 상태 비교 등에 사용.
 *
 * Props:
 * @param {Array} data - 차트 데이터 배열 [{ name, ...values }] [Required]
 * @param {Array} dataKeys - 스택할 데이터 키 배열 [{ key, color, label }] [Required]
 * @param {number} width - 차트 너비 [Optional, 기본값: 100%]
 * @param {number} height - 차트 높이 [Optional, 기본값: 300]
 * @param {number} barSize - 바 높이 [Optional, 기본값: 36]
 * @param {number} barGap - 바 사이 간격 [Optional, 기본값: 16]
 * @param {boolean} showXAxis - X축 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showYAxis - Y축 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showGrid - 그리드 표시 여부 [Optional, 기본값: true]
 * @param {string} layout - 레이아웃 ('horizontal' | 'vertical') [Optional, 기본값: 'vertical']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasStackedBarChart
 *   data={[
 *     { name: 'Supplier1', low: 20, medium: 30, high: 35, prolonged: 15 },
 *     { name: 'Supplier2', low: 15, medium: 25, high: 40, prolonged: 20 },
 *   ]}
 *   dataKeys={[
 *     { key: 'low', color: '#42A5F5', label: 'Low (0-30%)' },
 *     { key: 'medium', color: '#FFCA28', label: 'Medium (30-70%)' },
 *     { key: 'high', color: '#26C6DA', label: 'High (70%-100%)' },
 *     { key: 'prolonged', color: '#FFA726', label: 'Prolonged (>100%)' },
 *   ]}
 * />
 */
const SaasStackedBarChart = forwardRef(function SaasStackedBarChart({
  data = [],
  dataKeys = [],
  width = '100%',
  height = 300,
  barSize = 36,
  barGap = 16,
  showXAxis = true,
  showYAxis = true,
  showGrid = true,
  layout = 'vertical',
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  // Calculate bar category gap based on bar size and gap
  const barCategoryGap = barGap;
  const gridColor = getChartGridColor(isDarkMode);
  const tickFill = getChartSecondaryColor(isDarkMode);

  return (
    <Box
      ref={ref}
      sx={{
        width,
        height,
        ...sx,
      }}
      {...props}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout={layout}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          barSize={barSize}
          barCategoryGap={barCategoryGap}
        >
          {showXAxis && (
            <XAxis
              type="number"
              domain={[0, 100]}
              tickFormatter={(value) => `${value}`}
              axisLine={{ stroke: gridColor }}
              tickLine={{ stroke: gridColor }}
              tick={{ fontSize: 12, fill: tickFill }}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
          )}
          {showYAxis && (
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: tickFill }}
              width={60}
            />
          )}
          {dataKeys.map((item, index) => {
            const keyName = item.dataKey || item.key;
            return (
              <Bar
                key={keyName}
                dataKey={keyName}
                stackId="stack"
                fill={item.color}
                radius={index === dataKeys.length - 1 ? [0, 4, 4, 0] : [0, 0, 0, 0]}
              />
            );
          })}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
});

// Default utilization data keys
const defaultUtilizationKeys = [
  { key: 'low', color: STACKED_BAR_COLORS.low, label: 'Low (0-30%)' },
  { key: 'medium', color: STACKED_BAR_COLORS.medium, label: 'Medium (30-70%)' },
  { key: 'high', color: STACKED_BAR_COLORS.high, label: 'High (70%-100%)' },
  { key: 'prolonged', color: STACKED_BAR_COLORS.prolonged, label: 'Prolonged (>100%)' },
];

export { SaasStackedBarChart, defaultUtilizationKeys };
