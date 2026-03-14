import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { getChartSecondaryColor, getChartGridColor, getChartTooltipBg, getChartTooltipBorder } from './chartColors';

/**
 * SaasBarChart 컴포넌트
 *
 * SaaS 대시보드용 세로 바 차트.
 * 주간/월간 집계, 카테고리별 비교 등에 사용.
 *
 * Props:
 * @param {Array} data - 차트 데이터 배열 [{ name, value }] [Required]
 * @param {string} dataKey - 값 데이터 키 [Optional, 기본값: 'value']
 * @param {string} xAxisKey - X축 데이터 키 [Optional, 기본값: 'name']
 * @param {string} barColor - 바 색상 [Optional]
 * @param {number} barRadius - 바 모서리 반경 [Optional, 기본값: 4]
 * @param {number} barSize - 바 너비 [Optional, 기본값: 32]
 * @param {number} width - 차트 너비 [Optional, 기본값: '100%']
 * @param {number} height - 차트 높이 [Optional, 기본값: 300]
 * @param {boolean} showGrid - 그리드 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showTooltip - 툴팁 표시 여부 [Optional, 기본값: true]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasBarChart
 *   data={[
 *     { name: 'Mon', value: 12 },
 *     { name: 'Tue', value: 19 },
 *   ]}
 *   barColor="#4ECDC4"
 * />
 */
const SaasBarChart = forwardRef(function SaasBarChart({
  data = [],
  dataKey = 'value',
  xAxisKey = 'name',
  barColor,
  barRadius = 4,
  barSize = 32,
  width = '100%',
  height = 300,
  showGrid = true,
  showTooltip = true,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const gridColor = getChartGridColor(isDarkMode);
  const tickFill = getChartSecondaryColor(isDarkMode);
  const defaultColor = isDarkMode === 'obsidian' ? '#4ECDC4'
    : isDarkMode === 'cosmic' ? '#00E5FF'
      : isDarkMode === 'nature' ? '#2E8B57'
        : isDarkMode === 'vintage' ? '#4ECDC4'
          : '#42A5F5';

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
          <XAxis
            dataKey={xAxisKey}
            axisLine={{ stroke: gridColor }}
            tickLine={false}
            tick={{ fontSize: 12, fill: tickFill }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: tickFill }}
            dx={-5}
          />
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
          <Bar
            dataKey={dataKey}
            fill={barColor || defaultColor}
            radius={[barRadius, barRadius, 0, 0]}
            barSize={barSize}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
});

export { SaasBarChart };
