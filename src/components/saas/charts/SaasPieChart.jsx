import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { DONUT_COLORS, getDonutColors } from './chartColors';

/**
 * SaasPieChart 컴포넌트
 *
 * Manufacturing Management SaaS 대시보드용 파이 차트.
 * 단순 비율 표시용 (도넛 차트와 달리 중앙이 채워짐).
 *
 * Props:
 * @param {Array} data - 차트 데이터 배열 [{ name, value, color? }] [Required]
 * @param {number} size - 차트 크기 (px) [Optional, 기본값: 200]
 * @param {number} outerRadius - 외부 반지름 비율 (0-1) [Optional, 기본값: 0.85]
 * @param {Array} colors - 커스텀 색상 배열 [Optional, 기본값: DONUT_COLORS]
 * @param {number} strokeWidth - 세그먼트 간 간격 [Optional, 기본값: 2]
 * @param {boolean} showStroke - 테두리 표시 여부 [Optional, 기본값: true]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasPieChart
 *   data={[
 *     { name: '8-12 Months', value: 144 },
 *     { name: '< 8 Months', value: 22 },
 *   ]}
 * />
 */
const SaasPieChart = forwardRef(function SaasPieChart({
  data = [],
  size = 200,
  outerRadius = 1,
  colors,
  strokeWidth = 0,
  showStroke = false,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const resolvedColors = colors || getDonutColors(isDarkMode);
  const actualOuterRadius = (size / 2) * outerRadius;

  return (
    <Box
      ref={ref}
      sx={{
        width: size,
        height: size,
        ...sx,
      }}
      {...props}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={actualOuterRadius}
            dataKey="value"
            stroke={showStroke ? 'transparent' : 'none'}
            strokeWidth={strokeWidth}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color || resolvedColors[index % resolvedColors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
});

export { SaasPieChart };
