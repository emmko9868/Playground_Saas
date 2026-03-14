import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasTabItem 컴포넌트
 *
 * Manufacturing Management SaaS 전용 탭 아이템.
 * 3가지 상태(selected/unselected/hover) 지원. CSS 호버 인터랙션 내장.
 *
 * Props:
 * @param {string} label - 탭 라벨 텍스트 [Required]
 * @param {ReactNode} icon - 아이콘 컴포넌트 (lucide-react) [Optional]
 * @param {boolean} selected - 선택 상태 여부 [Optional, 기본값: false]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasTabItem
 *   label="Company"
 *   icon={<Building2 size={20} />}
 *   selected={true}
 *   onClick={() => setActiveTab('company')}
 * />
 */

// 상태별 스타일 매핑
const getStyles = (selected, colors) => {
  if (selected) {
    return {
      backgroundColor: colors.accentBlueBg,
      '&:hover': {
        backgroundColor: colors.accentBlueBg,
      },
    };
  }
  return {
    backgroundColor: colors.surfaceBg,
    '&:hover': {
      backgroundColor: colors.surfaceBgSubtle,
    },
  };
};

// 텍스트 스타일 매핑
const getTextStyles = (selected, colors) => {
  if (selected) {
    return {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
      color: colors.accentBlue,
    };
  }
  return {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    color: colors.textSecondary,
    '&:hover': {
      color: colors.textPrimary,
    },
  };
};

// 아이콘 색상 매핑
const getIconColor = (selected, colors) => {
  return selected ? colors.accentBlue : colors.textSecondary;
};

const SaasTabItem = forwardRef(function SaasTabItem({
  label = 'Label',
  icon,
  selected = false,
  onClick,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const containerStyles = getStyles(selected, colors);
  const textStyles = getTextStyles(selected, colors);
  const iconColor = getIconColor(selected, colors);

  return (
    <Box
      ref={ref}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        height: 36,
        px: '12px',
        py: '8px',
        cursor: onClick ? 'pointer' : 'default',
        boxSizing: 'border-box',
        transition: 'background-color 0.15s ease',
        ...containerStyles,
        ...sx,
      }}
      {...props}
    >
      {/* Icon */}
      {icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
            flexShrink: 0,
            color: iconColor,
            '& svg': {
              width: 20,
              height: 20,
            },
          }}
        >
          {icon}
        </Box>
      )}

      {/* Label */}
      <Typography
        sx={{
          fontSize: 14,
          lineHeight: '20px',
          whiteSpace: 'nowrap',
          ...textStyles,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
});

export { SaasTabItem };
