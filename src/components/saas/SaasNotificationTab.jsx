import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasNotificationTab 컴포넌트
 *
 * Manufacturing Management SaaS 전용 알림 패널 탭.
 * 알림 카테고리 필터링용 탭 버튼.
 *
 * Props:
 * @param {string} status - 탭 상태 ('default' | 'hover' | 'selected' | 'focus') [Optional, 기본값: 'default']
 * @param {string} label - 탭 라벨 텍스트 [Optional, 기본값: 'Label']
 * @param {node} icon - 아이콘 컴포넌트 [Optional]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasNotificationTab
 *   status="selected"
 *   label="All"
 *   icon={<Bell size={24} />}
 *   onClick={handleClick}
 * />
 */

// 상태별 스타일 매핑
const getStyles = (status, colors) => {
  switch (status) {
    case 'selected':
      return {
        backgroundColor: colors.accentBlueBg,
        border: 'none',
        iconColor: colors.accentBlue,
        textColor: colors.accentBlue,
        fontWeight: 700,
      };
    case 'hover':
      return {
        backgroundColor: colors.surfaceBgSubtle,
        border: 'none',
        iconColor: colors.textPrimary,
        textColor: colors.textPrimary,
        fontWeight: 400,
      };
    case 'focus':
      return {
        backgroundColor: colors.surfaceBgSubtle,
        border: `2px solid ${colors.accentBlue}`,
        iconColor: colors.textPrimary,
        textColor: colors.textPrimary,
        fontWeight: 400,
      };
    default: // default
      return {
        backgroundColor: colors.surfaceBg,
        border: 'none',
        iconColor: colors.textSecondary,
        textColor: colors.textSecondary,
        fontWeight: 400,
      };
  }
};

const SaasNotificationTab = forwardRef(function SaasNotificationTab({
  status = 'default',
  label = 'Label',
  icon,
  isDarkMode = false,
  onClick,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const styles = getStyles(status, colors);

  return (
    <Box
      ref={ref}
      component="button"
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        width: 60,
        height: 60,
        py: 1,
        backgroundColor: styles.backgroundColor,
        border: styles.border || 'none',
        borderRadius: 0,
        cursor: 'pointer',
        outline: 'none',
        boxSizing: 'border-box',
        '&:hover': status === 'default' ? {
          backgroundColor: colors.surfaceBgSubtle,
          '& .notification-tab-icon': {
            color: colors.textPrimary,
          },
          '& .notification-tab-label': {
            color: colors.textPrimary,
          },
        } : {},
        ...sx,
      }}
      {...props}
    >
      {/* Icon */}
      {icon && (
        <Box
          className="notification-tab-icon"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
            color: styles.iconColor,
            '& svg': {
              width: 24,
              height: 24,
            },
          }}
        >
          {icon}
        </Box>
      )}

      {/* Label */}
      <Typography
        className="notification-tab-label"
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: 12,
          fontWeight: styles.fontWeight,
          lineHeight: 1.25,
          color: styles.textColor,
          userSelect: 'none',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
});

export { SaasNotificationTab };
