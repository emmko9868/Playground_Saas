import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasDropdownOption 컴포넌트
 *
 * 드롭다운 메뉴 내 개별 옵션 아이템.
 * Main (단순 텍스트), WithCheckbox (체크박스) 타입 지원.
 *
 * Props:
 * @param {string} label - 옵션 텍스트 [Required]
 * @param {string} type - 옵션 타입 ('main' | 'checkbox') [Optional, 기본값: 'main']
 * @param {boolean} selected - 선택 여부 (checkbox 타입용) [Optional, 기본값: false]
 * @param {boolean} isHovered - 호버 상태 [Optional, 기본값: false]
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {function} onCheckChange - 체크박스 변경 핸들러 [Optional]
 * @param {node} startIcon - 시작 아이콘 [Optional]
 * @param {node} endIcon - 끝 아이콘 [Optional]
 *
 * Example usage:
 * <SaasDropdownOption label="Option 1" />
 * <SaasDropdownOption label="Option 1" type="checkbox" selected={true} />
 */
const SaasDropdownOption = forwardRef(function SaasDropdownOption({
  label,
  type = 'main',
  selected = false,
  isHovered = false,
  disabled = false,
  onClick,
  onCheckChange,
  startIcon,
  endIcon,
  isDarkMode = false,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const isCheckbox = type === 'checkbox';

  const handleClick = (e) => {
    if (disabled) return;
    if (isCheckbox && onCheckChange) {
      onCheckChange(!selected);
    }
    onClick?.(e);
  };

  return (
    <Box
      ref={ref}
      role="option"
      aria-selected={selected}
      aria-disabled={disabled}
      onClick={handleClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        height: 40,
        px: 1,
        backgroundColor: isHovered ? colors.accentBlueBg : 'transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.15s ease',
        '&:hover': {
          backgroundColor: disabled ? 'transparent' : colors.accentBlueBg,
        },
      }}
      {...props}
    >
      {/* Checkbox */}
      {isCheckbox && (
        <Checkbox
          checked={selected}
          disabled={disabled}
          onChange={(e) => onCheckChange?.(e.target.checked)}
          onClick={(e) => e.stopPropagation()}
          sx={{
            padding: 0,
            color: disabled ? colors.textDisabled : colors.textTertiary,
            '&.Mui-checked': {
              color: colors.accentBlue,
            },
            '&.Mui-disabled': {
              color: colors.textDisabled,
            },
          }}
        />
      )}

      {/* Start Icon */}
      {startIcon && (
        <Box sx={{ display: 'flex', color: disabled ? colors.textDisabled : colors.textTertiary }}>
          {startIcon}
        </Box>
      )}

      {/* Label */}
      <Typography
        sx={{
          flex: 1,
          fontFamily: 'Roboto, sans-serif',
          fontWeight: isHovered && !isCheckbox ? 600 : isCheckbox ? 500 : 400,
          fontSize: 14,
          lineHeight: 1.25,
          color: disabled
            ? colors.borderDefault
            : isHovered && !isCheckbox
              ? colors.accentBlue
              : isCheckbox
                ? colors.textTertiary
                : colors.textPrimary,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>

      {/* End Icon */}
      {endIcon && (
        <Box sx={{ display: 'flex', color: disabled ? colors.textDisabled : colors.textTertiary }}>
          {endIcon}
        </Box>
      )}
    </Box>
  );
});

export { SaasDropdownOption };
