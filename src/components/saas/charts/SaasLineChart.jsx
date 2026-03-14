import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { getLineColors, getChartSecondaryColor, getChartGridColor, getChartTooltipBg, getChartTooltipBorder } from './chartColors';

/**
 * SaasLineChart 컴포넌트
 *
 * Manufacturing Management SaaS 대시보드용 라인 차트.
 * 시계열 추이, 다중 공급사 비교 등에 사용.
 *
 * Props:
 * @param {Array} data - 차트 데이터 배열 [{ name, ...values }] [Required]
 * @param {Array} lines - 라인 설정 배열 [{ dataKey, color?, name?, strokeWidth? }] [Required]
 * @param {string} xAxisKey - X축 데이터 키 [Optional, 기본값: 'name']
 * @param {number} width - 차트 너비 [Optional, 기본값: 100%]
 * @param {number} height - 차트 높이 [Optional, 기본값: 300]
 * @param {boolean} showGrid - 그리드 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showXAxis - X축 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showYAxis - Y축 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showTooltip - 툴팁 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showLegend - 범례 표시 여부 [Optional, 기본값: false]
 * @param {Array} yAxisDomain - Y축 범위 [Optional, 기본값: [0, 100]]
 * @param {Array} yAxisTicks - Y축 눈금 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasLineChart
 *   data={[
 *     { month: 'Jan', supplierA: 60, supplierB: 55, supplierC: 50 },
 *     { month: 'Feb', supplierA: 45, supplierB: 50, supplierC: 40 },
 *   ]}
 *   lines={[
 *     { dataKey: 'supplierA', name: 'Supplier A' },
 *     { dataKey: 'supplierB', name: 'Supplier B' },
 *     { dataKey: 'supplierC', name: 'Supplier C' },
 *   ]}
 *   xAxisKey="month"
 * />
 */
const SaasLineChart = forwardRef(function SaasLineChart({
  data = [],
  lines = [],
  xAxisKey = 'name',
  width = '100%',
  height = 300,
  showGrid = true,
  showXAxis = true,
  showYAxis = true,
  showTooltip = true,
  showLegend = false,
  yAxisDomain = [0, 100],
  yAxisTicks,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
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
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="0"
              stroke={gridColor}
              horizontal={true}
              vertical={false}
            />
          )}
          {showXAxis && (
            <XAxis
              dataKey={xAxisKey}
              axisLine={{ stroke: gridColor }}
              tickLine={false}
              tick={{ fontSize: 12, fill: tickFill }}
              dy={10}
            />
          )}
          {showYAxis && (
            <YAxis
              domain={yAxisDomain}
              ticks={yAxisTicks || [0, 20, 40, 60, 80, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: tickFill }}
              dx={-5}
            />
          )}
          {showTooltip && (
            <Tooltip
              contentStyle={{
                backgroundColor: getChartTooltipBg(isDarkMode),
                border: `1px solid ${getChartTooltipBorder(isDarkMode)}`,
                borderRadius: 4,
                fontSize: 12,
              }}
            />
          )}
          {showLegend && (
            <Legend
              wrapperStyle={{ fontSize: 12 }}
              iconType="circle"
              iconSize={8}
            />
          )}
          {lines.map((line, index) => (
            <Line
              key={line.dataKey}
              type="linear"
              dataKey={line.dataKey}
              name={line.name || line.dataKey}
              stroke={line.color || getLineColors(isDarkMode)[index % getLineColors(isDarkMode).length]}
              strokeWidth={line.strokeWidth || 2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
});

export { SaasLineChart };
