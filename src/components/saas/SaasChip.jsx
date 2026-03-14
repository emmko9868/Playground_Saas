import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasChip 컴포넌트
 *
 * Manufacturing Management SaaS 전용 상태 칩.
 * Low, Medium, High 우선순위/상태 표시용.
 *
 * Props:
 * @param {string} status - 상태 타입 ('low' | 'medium' | 'high') [Optional, 기본값: 'low']
 * @param {string} label - 칩에 표시할 텍스트 [Optional]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasChip status="low" label="Low Priority" />
 * <SaasChip status="medium" label="Medium" />
 * <SaasChip status="high" label="High Risk" />
 */

// 상태별 색상 매핑 (다크모드 지원)
const getStatusColors = (colors) => ({
  low: {
    background: colors.chipLowBg,
    text: colors.chipLowText,
    label: 'Low',
  },
  medium: {
    background: colors.chipMediumBg,
    text: colors.chipMediumText,
    label: 'Medium',
  },
  high: {
    background: colors.chipHighBg,
    text: colors.chipHighText,
    label: 'High',
  },
});

const SaasChip = forwardRef(function SaasChip({
  status = 'low',
  label,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const statusColors = getStatusColors(colors);
  const colorSet = statusColors[status] || statusColors.low;
  const displayLabel = label || colorSet.label;

  return (
    <Box
      ref={ref}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 1,
        py: 0.25,
        backgroundColor: colorSet.background,
        borderRadius: 0,
        ...sx,
      }}
      {...props}
    >
      <Typography
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: 12,
          fontWeight: 500,
          color: colorSet.text,
          lineHeight: 1.4,
          userSelect: 'none',
        }}
      >
        {displayLabel}
      </Typography>
    </Box>
  );
});

export { SaasChip, getStatusColors };
