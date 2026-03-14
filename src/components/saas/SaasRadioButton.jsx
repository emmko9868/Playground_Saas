import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasRadioButton 컴포넌트
 *
 * Manufacturing Management SaaS 전용 라디오 버튼.
 * Selected/Unselected 상태 지원.
 * Default/Active/Disabled 상태 지원.
 *
 * Props:
 * @param {boolean} checked - 선택 상태 [Optional, 기본값: false]
 * @param {boolean} disabled - 비활성화 상태 [Optional, 기본값: false]
 * @param {string} label - 라벨 텍스트 [Optional]
 * @param {string} value - 라디오 버튼 값 [Optional]
 * @param {function} onChange - 변경 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasRadioButton
 *   checked={selectedValue === 'option1'}
 *   value="option1"
 *   label="Option 1"
 *   onChange={(e) => setSelectedValue(e.target.value)}
 * />
 */

// 커스텀 라디오 아이콘 (Unselected)
const UncheckedIcon = ({ disabled, colors }) => (
  <Box
    sx={{
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '2px solid',
      borderColor: disabled ? colors.textDisabled : colors.borderDefault,
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  />
);

// 커스텀 라디오 아이콘 (Selected)
const CheckedIcon = ({ disabled, active, colors }) => (
  <Box
    sx={{
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '2px solid',
      borderColor: disabled ? colors.textDisabled : colors.accentBlue,
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: active ? '0 0 0 4px rgba(40, 126, 228, 0.2)' : 'none',
    }}
  >
    <Box
      sx={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: disabled ? colors.textDisabled : colors.accentBlue,
      }}
    />
  </Box>
);

const SaasRadioButton = forwardRef(function SaasRadioButton({
  checked = false,
  disabled = false,
  label,
  value,
  onChange,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);

  const radio = (
    <Radio
      ref={ref}
      checked={checked}
      disabled={disabled}
      value={value}
      onChange={onChange}
      icon={<UncheckedIcon disabled={disabled} colors={colors} />}
      checkedIcon={<CheckedIcon disabled={disabled} colors={colors} />}
      sx={{
        padding: '2px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&:active .MuiBox-root': {
          boxShadow: '0 0 0 4px rgba(40, 126, 228, 0.2)',
        },
        '&.Mui-focusVisible .MuiBox-root': {
          outline: `2px solid ${colors.accentBlue}`,
          outlineOffset: '2px',
        },
        ...sx,
      }}
      {...props}
    />
  );

  if (label) {
    return (
      <FormControlLabel
        control={radio}
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

  return radio;
});

export { SaasRadioButton };
