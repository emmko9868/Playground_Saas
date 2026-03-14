import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { Check } from 'lucide-react';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasCheckbox 컴포넌트
 *
 * Manufacturing Management SaaS 전용 체크박스.
 * 3가지 상태(unchecked/checked/indeterminate) 지원.
 * Default/Disabled/Focus 상태 지원.
 *
 * Props:
 * @param {boolean} checked - 체크 상태 [Optional, 기본값: false]
 * @param {boolean} indeterminate - 부분 선택 상태 [Optional, 기본값: false]
 * @param {boolean} disabled - 비활성화 상태 [Optional, 기본값: false]
 * @param {string} label - 라벨 텍스트 [Optional]
 * @param {function} onChange - 변경 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasCheckbox
 *   checked={isChecked}
 *   label="Checkbox label"
 *   onChange={(e) => setIsChecked(e.target.checked)}
 * />
 */

// 커스텀 체크박스 아이콘 (Unchecked)
const UncheckedIcon = ({ disabled, isDarkMode, colors }) => (
  <Box
    sx={{
      width: 16,
      height: 16,
      border: '1px solid',
      borderColor: disabled ? colors.textDisabled : (isDarkMode ? '#888888' : colors.borderDefault),
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  />
);

// 커스텀 체크박스 아이콘 (Checked)
const CheckedIcon = ({ disabled, colors }) => (
  <Box
    sx={{
      width: 16,
      height: 16,
      backgroundColor: disabled ? colors.textDisabled : colors.accentBlue,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Check size={12} color={colors.contrastWhite} strokeWidth={3} />
  </Box>
);

// 커스텀 체크박스 아이콘 (Indeterminate)
const IndeterminateIcon = ({ disabled, colors }) => (
  <Box
    sx={{
      width: 16,
      height: 16,
      backgroundColor: disabled ? colors.textDisabled : colors.accentBlue,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        width: 8,
        height: 2,
        backgroundColor: colors.contrastWhite,
      }}
    />
  </Box>
);

const SaasCheckbox = forwardRef(function SaasCheckbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  onChange,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);

  const checkbox = (
    <Checkbox
      ref={ref}
      checked={checked}
      indeterminate={indeterminate}
      disabled={disabled}
      onChange={onChange}
      icon={<UncheckedIcon disabled={disabled} isDarkMode={isDarkMode} colors={colors} />}
      checkedIcon={<CheckedIcon disabled={disabled} colors={colors} />}
      indeterminateIcon={<IndeterminateIcon disabled={disabled} colors={colors} />}
      sx={{
        padding: '4px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&.Mui-focusVisible': {
          '& .MuiBox-root': {
            outline: `2px solid ${colors.accentBlue}`,
            outlineOffset: '2px',
          },
        },
        ...sx,
      }}
      {...props}
    />
  );

  if (label) {
    return (
      <FormControlLabel
        control={checkbox}
        label={
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: 1.25,
              color: disabled ? colors.textDisabled : colors.textTertiary,
            }}
          >
            {label}
          </Typography>
        }
        sx={{
          margin: 0,
          gap: '8px',
          '& .MuiFormControlLabel-label': {
            marginLeft: 0,
          },
        }}
      />
    );
  }

  return checkbox;
});

export { SaasCheckbox };
