import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Copy, Info, CheckCircle, Settings } from 'lucide-react';
import IconButton from '@mui/material/IconButton';
import { getColors } from '../../data/darkModeColors';
import { SaasAvatar } from './SaasAvatar';
import { SaasAvatarGroup } from './SaasAvatarGroup';
import { SaasCheckbox } from './SaasCheckbox';
import { SaasChip } from './SaasChip';
import { SaasDropdown } from './SaasDropdown';

/**
 * SaasTableCell 컴포넌트
 *
 * Manufacturing Management SaaS 전용 테이블 셀.
 * 다양한 콘텐츠 타입 지원.
 *
 * Props:
 * @param {string} type - 셀 타입 [Optional, 기본값: 'text']
 *   'text' | 'titleSubText' | 'hyperlink' | 'singleAvatar' |
 *   'avatarGroup' | 'chip' | 'dropdown' | 'importCompleted' | 'importMissing' | 'checkbox' | 'action'
 * @param {string} colour - 배경색 [Optional, 기본값: 'white']
 *   'white' | 'grey'
 * @param {string} text - 텍스트 내용 (text 타입) [Optional]
 * @param {string} title - 제목 (titleSubText 타입) [Optional]
 * @param {string} subText - 부제목 (titleSubText, hyperlink 타입) [Optional]
 * @param {boolean} showSubText - 부제목 표시 여부 [Optional, 기본값: true]
 * @param {string} linkId - 링크 ID (hyperlink 타입) [Optional]
 * @param {boolean} showIcon - 아이콘 표시 여부 (hyperlink 타입) [Optional, 기본값: true]
 * @param {function} onLinkClick - 링크 클릭 핸들러 [Optional]
 * @param {string} userName - 사용자 이름 (singleAvatar 타입) [Optional]
 * @param {object} avatar - 아바타 데이터 { text, color, src } [Optional]
 * @param {Array} avatars - 아바타 그룹 데이터 (avatarGroup 타입) [Optional]
 * @param {number} avatarMax - 아바타 최대 표시 수 [Optional, 기본값: 5]
 * @param {function} onAvatarMoreClick - 아바타 더보기 클릭 [Optional]
 * @param {string} chipStatus - 칩 상태 (chip 타입) [Optional]
 * @param {string} chipLabel - 칩 라벨 [Optional]
 * @param {Array} dropdownOptions - 드롭다운 옵션 (dropdown 타입) [Optional]
 * @param {any} dropdownValue - 드롭다운 값 [Optional]
 * @param {function} onDropdownChange - 드롭다운 변경 핸들러 [Optional]
 * @param {string} dropdownPlaceholder - 드롭다운 placeholder [Optional]
 * @param {function} onActionClick - 액션 버튼 클릭 핸들러 (action 타입) [Optional]
 * @param {boolean} checked - 체크박스 체크 상태 (checkbox 타입) [Optional, 기본값: false]
 * @param {boolean} indeterminate - 체크박스 부분 선택 상태 (checkbox 타입) [Optional, 기본값: false]
 * @param {boolean} checkboxDisabled - 체크박스 비활성화 (checkbox 타입) [Optional, 기본값: false]
 * @param {function} onCheckboxChange - 체크박스 변경 핸들러 (checkbox 타입) [Optional]
 * @param {number|string} width - 셀 너비 [Optional, 기본값: 200]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasTableCell type="text" text="Sample Text" />
 * <SaasTableCell type="hyperlink" linkId="Tooling-1111" onLinkClick={() => {}} />
 * <SaasTableCell type="singleAvatar" userName="John Doe" avatar={{ text: 'JD', color: 'blue' }} />
 */

const SaasTableCell = forwardRef(function SaasTableCell({
  type = 'text',
  colour = 'white',
  text = 'Text',
  title = 'Title',
  subText = 'Sub Text',
  showSubText = true,
  linkId = 'Tooling -1111',
  showIcon = true,
  onLinkClick,
  userName = 'User Name',
  avatar = { text: 'ES', color: 'red' },
  avatars = [],
  avatarMax = 5,
  onAvatarMoreClick,
  chipStatus = 'low',
  chipLabel,
  dropdownOptions = [],
  dropdownValue,
  onDropdownChange,
  dropdownPlaceholder = 'Options',
  checked = false,
  indeterminate = false,
  checkboxDisabled = false,
  onCheckboxChange,
  onActionClick,
  width = 200,
  align = 'left',
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);

  // 배경색
  const bgColor = colour === 'grey' ? colors.surfaceBgSubtle : colors.surfaceBg;

  // Import 상태 배경색
  const getImportBgColor = () => {
    if (type === 'importCompleted') return colors.alertSuccessSubBg;
    if (type === 'importMissing') return colors.alertErrorSubBg;
    return bgColor;
  };

  // 기본 셀 스타일
  const baseCellStyle = {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    px: '20px',
    backgroundColor: getImportBgColor(),
    width,
  };

  // Text 타입
  if (type === 'text') {
    return (
      <Box ref={ref} sx={{ ...baseCellStyle, ...sx }} {...props}>
        <Typography
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.25,
            color: colors.textSecondary,
            textAlign: align,
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  }

  // Title + Sub Text 타입
  if (type === 'titleSubText') {
    return (
      <Box
        ref={ref}
        sx={{
          ...baseCellStyle,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '8px',
          ...sx,
        }}
        {...props}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.25,
            color: colors.textPrimary,
            width: '100%',
          }}
        >
          {title}
        </Typography>
        {showSubText && (
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 1.25,
              color: colors.textTertiary,
              width: '100%',
            }}
          >
            {subText}
          </Typography>
        )}
      </Box>
    );
  }

  // Hyperlink 타입
  if (type === 'hyperlink') {
    return (
      <Box
        ref={ref}
        sx={{
          ...baseCellStyle,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '8px',
          ...sx,
        }}
        {...props}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            width: '100%',
          }}
        >
          <Typography
            onClick={onLinkClick}
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.25,
              color: colors.accentBlue,
              cursor: onLinkClick ? 'pointer' : 'default',
              '&:hover': onLinkClick ? {
                textDecoration: 'underline',
              } : {},
            }}
          >
            {linkId}
          </Typography>
          {showIcon && (
            <Copy size={16} color={colors.accentBlue} style={{ flexShrink: 0 }} />
          )}
        </Box>
        {showSubText && (
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 1.25,
              color: colors.textTertiary,
              width: '100%',
            }}
          >
            {subText}
          </Typography>
        )}
      </Box>
    );
  }

  // Single Avatar 타입
  if (type === 'singleAvatar') {
    return (
      <Box ref={ref} sx={{ ...baseCellStyle, gap: '8px', ...sx }} {...props}>
        <SaasAvatar
          type={avatar.src ? 'image' : 'text'}
          size="medium"
          text={avatar.text}
          src={avatar.src}
          color={avatar.color}
        />
        <Typography
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
            color: colors.textSecondary,
          }}
        >
          {userName}
        </Typography>
      </Box>
    );
  }

  // Avatar Group 타입
  if (type === 'avatarGroup') {
    return (
      <Box ref={ref} sx={{ ...baseCellStyle, ...sx }} {...props}>
        <SaasAvatarGroup
          avatars={avatars}
          max={avatarMax}
          size="medium"
          onMoreClick={onAvatarMoreClick}
        />
      </Box>
    );
  }

  // Chip 타입
  if (type === 'chip') {
    return (
      <Box
        ref={ref}
        sx={{
          ...baseCellStyle,
          px: '12px',
          ...sx,
        }}
        {...props}
      >
        <SaasChip status={chipStatus} label={chipLabel} />
      </Box>
    );
  }

  // Dropdown 타입
  if (type === 'dropdown') {
    return (
      <Box ref={ref} sx={{ ...baseCellStyle, ...sx }} {...props}>
        <SaasDropdown
          options={dropdownOptions}
          value={dropdownValue}
          onChange={onDropdownChange}
          placeholder={dropdownPlaceholder}
          size="medium"
          isDarkMode={isDarkMode}
          sx={{ flex: 1, width: 'auto' }}
        />
      </Box>
    );
  }

  // Import Completed 타입
  if (type === 'importCompleted') {
    return (
      <Box
        ref={ref}
        sx={{
          ...baseCellStyle,
          gap: '8px',
          justifyContent: 'center',
          ...sx,
        }}
        {...props}
      >
        <CheckCircle size={24} color={colors.alertSuccessOn} />
        <Typography
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '20px',
            color: colors.alertSuccessOn,
          }}
        >
          Completed
        </Typography>
      </Box>
    );
  }

  // Import Missing Data 타입
  if (type === 'importMissing') {
    return (
      <Box
        ref={ref}
        sx={{
          ...baseCellStyle,
          gap: '8px',
          justifyContent: 'center',
          ...sx,
        }}
        {...props}
      >
        <Info size={24} color={colors.alertErrorOn} />
        <Typography
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '20px',
            color: colors.alertErrorOn,
          }}
        >
          Missing Data
        </Typography>
      </Box>
    );
  }

  // Action 타입 (Settings 아이콘 버튼)
  if (type === 'action') {
    return (
      <Box
        ref={ref}
        sx={{
          ...baseCellStyle,
          justifyContent: 'center',
          ...sx,
        }}
        {...props}
      >
        <IconButton
          size="small"
          onClick={onActionClick}
          sx={{
            color: colors.textTertiary,
            '&:hover': { color: colors.textPrimary, backgroundColor: colors.pageBg },
          }}
        >
          <Settings size={16} />
        </IconButton>
      </Box>
    );
  }

  // Checkbox 타입
  if (type === 'checkbox') {
    return (
      <Box
        ref={ref}
        sx={{
          ...baseCellStyle,
          justifyContent: 'center',
          ...sx,
        }}
        {...props}
      >
        <SaasCheckbox
          checked={checked}
          indeterminate={indeterminate}
          disabled={checkboxDisabled}
          onChange={onCheckboxChange}
        />
      </Box>
    );
  }

  // 기본: Text 타입으로 fallback
  return (
    <Box ref={ref} sx={{ ...baseCellStyle, ...sx }} {...props}>
      <Typography
        sx={{
          flex: 1,
          fontFamily: 'Roboto, sans-serif',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.25,
          color: colors.textSecondary,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
});

export { SaasTableCell };
