import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasToggle 컴포넌트
 *
 * Manufacturing Management SaaS 전용 토글 스위치.
 * On/Off 상태 지원.
 * 라벨 표시 옵션.
 *
 * Props:
 * @param {boolean} checked - 토글 상태 [Optional, 기본값: false]
 * @param {boolean} disabled - 비활성화 상태 [Optional, 기본값: false]
 * @param {string} label - 라벨 텍스트 [Optional]
 * @param {function} onChange - 변경 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasToggle
 *   checked={isEnabled}
 *   label="Enable notifications"
 *   onChange={(e) => setIsEnabled(e.target.checked)}
 * />
 */

const SaasToggle = forwardRef(function SaasToggle({
  checked = false,
  disabled = false,
  label,
  onChange,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);

  const toggle = (
    <Switch
      ref={ref}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      sx={{
        width: 44,
        height: 24,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(20px)',
            color: colors.contrastWhite,
            '& + .MuiSwitch-track': {
              backgroundColor: colors.accentBlue,
              opacity: 1,
              border: 'none',
            },
          },
          '&.Mui-disabled': {
            color: colors.contrastWhite,
            '& + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            boxShadow: `0 0 0 2px ${colors.accentBlue}`,
          },
        },
        '& .MuiSwitch-thumb': {
          width: 20,
          height: 20,
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
        },
        '& .MuiSwitch-track': {
          borderRadius: 12,
          backgroundColor: colors.divider,
          opacity: 1,
          transition: 'background-color 0.2s ease',
        },
        ...sx,
      }}
      {...props}
    />
  );

  if (label) {
    return (
      <FormControlLabel
        control={toggle}
        label={
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.25,
              color: disabled ? colors.textDisabled : colors.textPrimary,
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

  return toggle;
});

export { SaasToggle };
