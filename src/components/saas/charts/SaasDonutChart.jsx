import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import { DONUT_COLORS, getDonutColors, getChartTextColor, getChartSecondaryColor, getChartStrokeColor } from './chartColors';

/**
 * SaasDonutChart 컴포넌트
 *
 * Manufacturing Management SaaS 대시보드용 도넛 차트.
 * 중앙에 총계/퍼센트 표시, 외곽에 세그먼트별 비율 표시.
 *
 * Props:
 * @param {Array} data - 차트 데이터 배열 [{ name, value, color? }] [Required]
 * @param {string|number} centerValue - 중앙에 표시할 값 (예: '200', '$9,000.12', '58.33%') [Optional]
 * @param {string} centerLabel - 중앙 값 아래 레이블 (예: 'Total Tooling', 'Compliance') [Optional]
 * @param {number} size - 차트 크기 (px) [Optional, 기본값: 200]
 * @param {number} innerRadius - 내부 반지름 비율 (0-1) [Optional, 기본값: 0.6]
 * @param {number} outerRadius - 외부 반지름 비율 (0-1) [Optional, 기본값: 0.85]
 * @param {Array} colors - 커스텀 색상 배열 [Optional, 기본값: DONUT_COLORS]
 * @param {number} strokeWidth - 세그먼트 간 간격 [Optional, 기본값: 3]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasDonutChart
 *   data={[
 *     { name: 'In Production', value: 144 },
 *     { name: 'Idle', value: 22 },
 *     { name: 'Inactive', value: 12 },
 *   ]}
 *   centerValue="200"
 *   centerLabel="Total Tooling"
 * />
 */
const SaasDonutChart = forwardRef(function SaasDonutChart({
  data = [],
  centerValue,
  centerLabel,
  size = 200,
  innerRadius = 0.65,
  outerRadius = 1,
  colors,
  strokeWidth = 0,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const resolvedColors = colors || getDonutColors(isDarkMode);
  // Calculate actual radius values
  const actualInnerRadius = (size / 2) * innerRadius;
  const actualOuterRadius = (size / 2) * outerRadius;

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
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
            innerRadius={actualInnerRadius}
            outerRadius={actualOuterRadius}
            dataKey="value"
            stroke="transparent"
            strokeWidth={strokeWidth}
            paddingAngle={0}
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

      {/* Center Text */}
      {(centerValue || centerLabel) && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          {centerValue && (
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: size * 0.1,
                lineHeight: 1.2,
                color: getChartTextColor(isDarkMode),
              }}
            >
              {centerValue}
            </Typography>
          )}
          {centerLabel && (
            <Typography
              variant="caption"
              sx={{
                fontSize: size * 0.06,
                color: getChartSecondaryColor(isDarkMode),
                display: 'block',
              }}
            >
              {centerLabel}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
});

export { SaasDonutChart };
