import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SaasAvatar } from './SaasAvatar';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasNotificationCard 컴포넌트
 *
 * Manufacturing Management SaaS 전용 알림 카드.
 * 읽음/안읽음 상태 지원. 호버/포커스 인터랙션 내장.
 *
 * Props:
 * @param {string} type - 읽음 상태 ('read' | 'unread') [Optional, 기본값: 'unread']
 * @param {string} message - 알림 메시지 내용 [Required]
 * @param {string} timestamp - 시간 표시 (예: '4 minutes ago') [Required]
 * @param {string} avatarText - 아바타 이니셜 [Optional]
 * @param {string} avatarSrc - 아바타 이미지 URL [Optional]
 * @param {string} avatarColor - 아바타 색상 [Optional, 기본값: 'cyan']
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasNotificationCard
 *   type="unread"
 *   message="Tea from eMoldino has assigned a General Work Order to you."
 *   timestamp="4 minutes ago"
 *   avatarText="ES"
 * />
 */

// 상태별 스타일 매핑 (기본 + 호버 + 포커스)
const getStyles = (type, colors) => {
  const isRead = type === 'read';

  if (isRead) {
    return {
      // Default 상태
      backgroundColor: colors.surfaceBg,
      border: 'none',
      borderBottom: `2px solid ${colors.pageBg}`,
      // Hover 상태
      '&:hover': {
        backgroundColor: colors.surfaceBgSubtle,
      },
      // Focus 상태
      '&:focus': {
        backgroundColor: colors.surfaceBgSubtle,
        outline: `2px solid ${colors.accentBlue}`,
        outlineOffset: '-2px',
      },
    };
  } else {
    // unread
    return {
      // Default 상태
      backgroundColor: colors.accentBlueBg,
      border: 'none',
      borderBottom: `2px solid ${colors.divider}`,
      // Hover 상태
      '&:hover': {
        backgroundColor: colors.accentBlueActive,
      },
      // Focus 상태
      '&:focus': {
        backgroundColor: colors.accentBlueActive,
        outline: `2px solid ${colors.accentBlue}`,
        outlineOffset: '-2px',
      },
    };
  }
};

const SaasNotificationCard = forwardRef(function SaasNotificationCard({
  type = 'unread',
  message = '',
  timestamp = '',
  avatarText = '',
  avatarSrc = '',
  avatarColor = 'cyan',
  isDarkMode = false,
  onClick,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const styles = getStyles(type, colors);
  const isUnread = type === 'unread';

  return (
    <Box
      ref={ref}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '20px',
        width: 400,
        padding: '12px',
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        boxSizing: 'border-box',
        transition: 'background-color 0.15s ease',
        ...styles,
        ...sx,
      }}
      {...props}
    >
      {/* Avatar */}
      <SaasAvatar
        type={avatarSrc ? 'image' : 'text'}
        size="large"
        text={avatarText}
        src={avatarSrc}
        color={avatarColor}
      />

      {/* Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          flex: 1,
          minWidth: 0,
        }}
      >
        {/* Message */}
        <Typography
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: 1.5,
            color: colors.textPrimary,
            wordBreak: 'break-word',
          }}
        >
          {message}
        </Typography>

        {/* Timestamp */}
        <Typography
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.25,
            color: colors.textTertiary,
          }}
        >
          {timestamp}
        </Typography>
      </Box>

      {/* Unread Indicator (Blue Dot) */}
      {isUnread && (
        <Box
          sx={{
            position: 'absolute',
            left: 42,
            top: 12,
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: colors.alertInstructOn,
          }}
        />
      )}
    </Box>
  );
});

export { SaasNotificationCard };
