import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { SaasAvatar } from './SaasAvatar';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasTooltipElement 컴포넌트
 *
 * Manufacturing Management SaaS 전용 툴팁 내부 요소.
 * 6가지 타입 지원: Summary, Title, ToolList, WithChip, ItemStatus, AvatarList
 *
 * Props:
 * @param {string} type - 요소 타입 [Required]
 *   'summary' | 'title' | 'toolList' | 'withChip' | 'itemStatus' | 'avatarList'
 * @param {string} title - 제목/라벨 텍스트 [Optional]
 * @param {string} secondaryTitle - 보조 제목 [Optional]
 * @param {string} linkText - 링크 텍스트 (summary 타입) [Optional]
 * @param {function} onLinkClick - 링크 클릭 핸들러 [Optional]
 * @param {string} color - 색상 인디케이터 (toolList 타입) [Optional]
 * @param {string|number} value - 숫자 값 [Optional]
 * @param {string} chipLabel - 칩 라벨 [Optional]
 * @param {string} chipColor - 칩 배경색 [Optional, 기본값: '#F7F4B6']
 * @param {string} status - 상태 텍스트 (itemStatus 타입) [Optional]
 * @param {string} statusColor - 상태 색상 [Optional, 기본값: '#078F00']
 * @param {string} avatarText - 아바타 이니셜 [Optional]
 * @param {string} avatarColor - 아바타 색상 [Optional]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasTooltipElement
 *   type="summary"
 *   title="High Utilization"
 *   linkText="3 Toolings"
 *   onLinkClick={() => {}}
 * />
 */

const SaasTooltipElement = forwardRef(function SaasTooltipElement({
  type = 'summary',
  title = '',
  secondaryTitle = '',
  linkText = '',
  onLinkClick,
  color,
  value,
  chipLabel = '',
  chipColor = '#F7F4B6',
  status = 'Active',
  statusColor = '#078F00',
  avatarText = '',
  avatarColor = 'blue',
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);

  // Summary: title + hyperlink
  if (type === 'summary') {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: 288,
          ...sx,
        }}
        {...props}
      >
        <Typography
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.25,
            color: colors.textPrimary,
          }}
        >
          {title}
        </Typography>
        <Link
          component="button"
          onClick={onLinkClick}
          sx={{
            fontFamily: 'Helvetica Neue, sans-serif',
            fontSize: 14.66,
            fontWeight: 400,
            color: colors.accentBlue,
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {linkText}
        </Link>
      </Box>
    );
  }

  // Title: two bold labels
  if (type === 'title') {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: 288,
          height: 20,
          ...sx,
        }}
        {...props}
      >
        <Typography
          sx={{
            width: 140,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 1.25,
            color: colors.textPrimary,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            width: 140,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 1.25,
            color: colors.textPrimary,
            textAlign: 'right',
          }}
        >
          {secondaryTitle}
        </Typography>
      </Box>
    );
  }

  // Tool List: color indicator + text + number
  if (type === 'toolList') {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: 288,
          height: 16,
          ...sx,
        }}
        {...props}
      >
        {color && (
          <Box
            sx={{
              width: 12,
              height: 12,
              backgroundColor: color,
              borderRadius: '2px',
              flexShrink: 0,
            }}
          />
        )}
        <Typography
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.25,
            color: colors.textPrimary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.25,
            color: colors.textPrimary,
            textAlign: 'right',
            flexShrink: 0,
          }}
        >
          {value}
        </Typography>
      </Box>
    );
  }

  // With Chip: text + chip
  if (type === 'withChip') {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 288,
          ...sx,
        }}
        {...props}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 20,
            px: '4px',
            flex: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.25,
              color: colors.textPrimary,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 20,
            px: '8px',
            backgroundColor: chipColor,
            borderRadius: '4px',
            maxWidth: 120,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Helvetica Neue, sans-serif',
              fontSize: 10,
              fontWeight: 400,
              color: colors.tooltipChipText,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {chipLabel}
          </Typography>
        </Box>
      </Box>
    );
  }

  // Item Status: status dot + text + number
  if (type === 'itemStatus') {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: 288,
          height: 16,
          ...sx,
        }}
        {...props}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              width: 13,
              height: 13,
              borderRadius: '50%',
              backgroundColor: statusColor,
            }}
          />
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.25,
              color: colors.textPrimary,
            }}
          >
            {status}
          </Typography>
        </Box>
        <Typography
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.25,
            color: colors.textPrimary,
            textAlign: 'right',
          }}
        >
          {value}
        </Typography>
      </Box>
    );
  }

  // Avatar List: avatar + text + chip
  if (type === 'avatarList') {
    return (
      <Box
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 288,
          ...sx,
        }}
        {...props}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <SaasAvatar
            type="text"
            size="small"
            text={avatarText}
            color={avatarColor}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 20,
              px: '4px',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 1.25,
                color: colors.textPrimary,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 20,
            px: '8px',
            py: '4px',
            backgroundColor: colors.chipDefaultBg,
            borderRadius: '3px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Helvetica Neue, sans-serif',
              fontSize: 12,
              fontWeight: 400,
              color: colors.chipDefaultText,
            }}
          >
            {chipLabel}
          </Typography>
        </Box>
      </Box>
    );
  }

  return null;
});

export { SaasTooltipElement };
