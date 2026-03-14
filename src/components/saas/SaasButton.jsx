import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Plus } from 'lucide-react';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasButton 컴포넌트
 *
 * Manufacturing Management SaaS 전용 버튼.
 * Figma 디자인 시스템 기반 - 3가지 variant, 2가지 사이즈, 4가지 아이콘 위치, 5가지 상태 지원.
 *
 * Props:
 * @param {string} children - 버튼 텍스트 [Optional, 기본값: 'Button']
 * @param {string} variant - 버튼 스타일 ('primary' | 'secondary' | 'ghost') [Optional, 기본값: 'primary']
 * @param {string} size - 버튼 사이즈 ('default' | 'small') [Optional, 기본값: 'default']
 * @param {string} iconPosition - 아이콘 위치 ('none' | 'left' | 'right' | 'only') [Optional, 기본값: 'none']
 * @param {node} icon - 커스텀 아이콘 컴포넌트 [Optional, 기본값: Plus 아이콘]
 * @param {boolean} danger - Ghost 버튼의 위험 스타일 적용 [Optional, 기본값: false]
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {boolean} fullWidth - 전체 너비 적용 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasButton>Button</SaasButton>
 * <SaasButton variant="secondary">Secondary</SaasButton>
 * <SaasButton variant="ghost">Ghost</SaasButton>
 * <SaasButton variant="ghost" danger>Delete</SaasButton>
 * <SaasButton size="small" iconPosition="left">Add Item</SaasButton>
 */
const SaasButton = forwardRef(function SaasButton({
  children = 'Button',
  variant = 'primary',
  size = 'default',
  iconPosition = 'none',
  icon,
  danger = false,
  disabled = false,
  isDarkMode = false,
  onClick,
  fullWidth = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  // 사이즈별 스펙
  const sizeSpec = {
    default: {
      height: 40,
      fontSize: 14,
      iconSize: 18,
      px: 1.5,
      iconButtonSize: 40,
    },
    small: {
      height: 32,
      fontSize: 14,
      iconSize: 18,
      px: 1.5,
      iconButtonSize: 32,
    },
  };

  const spec = sizeSpec[size] || sizeSpec.default;

  // 색상 정의
  const variantColors = {
    primary: {
      main: colors.accentBlue,
      hover: colors.accentBlueDark,
      active: colors.accentBlueDark,
      text: colors.contrastWhite,
      disabledBg: colors.divider,
      disabledText: colors.textDisabled,
    },
    secondary: {
      main: colors.accentBlue,
      hover: colors.accentBlueBg,
      active: colors.accentBlueDark,
      text: colors.accentBlue,
      disabledBg: colors.divider,
      disabledText: colors.textDisabled,
    },
    ghost: {
      main: danger ? colors.alertErrorOn : colors.accentBlue,
      hover: danger ? colors.surfaceBg : colors.accentBlueBg,
      active: danger ? colors.alertErrorOn : colors.accentBlue,
      text: danger ? colors.alertErrorOn : colors.accentBlue,
      disabledBg: 'transparent',
      disabledText: colors.textDisabled,
    },
  };

  const variantSpec = variantColors[variant] || variantColors.primary;

  // 공통 기본 스타일
  const baseCommonStyles = {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    fontSize: spec.fontSize,
    lineHeight: 1.25,
    textTransform: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    minWidth: 'auto',
    transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
  };

  // Variant별 스타일
  const variantStyles = {
    primary: {
      ...baseCommonStyles,
      backgroundColor: variantSpec.main,
      color: variantSpec.text,
      border: 'none',
      '&:hover': {
        backgroundColor: variantSpec.hover,
        boxShadow: 'none',
      },
      '&:active': {
        backgroundColor: variantSpec.active,
        border: `2px solid ${colors.accentBlue}`,
      },
      '&:focus-visible': {
        backgroundColor: variantSpec.hover,
        border: `2px solid ${colors.accentBlueDark}`,
        boxShadow: `inset 0 0 0 3px ${colors.contrastWhite}`,
        outline: 'none',
      },
      '&.Mui-disabled': {
        backgroundColor: variantSpec.disabledBg,
        color: variantSpec.disabledText,
      },
    },
    secondary: {
      ...baseCommonStyles,
      backgroundColor: 'transparent',
      color: variantSpec.text,
      border: `2px solid ${variantSpec.main}`,
      '&:hover': {
        backgroundColor: variantSpec.hover,
        borderColor: variantSpec.main,
        boxShadow: 'none',
      },
      '&:active': {
        backgroundColor: variantSpec.hover,
        borderColor: variantSpec.active,
      },
      '&:focus-visible': {
        backgroundColor: variantSpec.hover,
        borderColor: variantSpec.active,
        boxShadow: `inset 0 0 0 2px ${colors.contrastWhite}`,
        outline: 'none',
      },
      '&.Mui-disabled': {
        backgroundColor: variantSpec.disabledBg,
        color: variantSpec.disabledText,
        borderColor: variantSpec.disabledBg,
      },
    },
    ghost: {
      ...baseCommonStyles,
      backgroundColor: 'transparent',
      color: variantSpec.text,
      border: '2px solid transparent',
      '&:hover': {
        backgroundColor: variantSpec.hover,
        boxShadow: 'none',
      },
      '&:active': {
        backgroundColor: variantSpec.hover,
        borderColor: variantSpec.active,
      },
      '&:focus-visible': {
        backgroundColor: variantSpec.hover,
        borderColor: variantSpec.main,
        outline: 'none',
      },
      '&.Mui-disabled': {
        backgroundColor: variantSpec.disabledBg,
        color: variantSpec.disabledText,
      },
    },
  };

  const baseStyles = variantStyles[variant] || variantStyles.primary;

  // 아이콘만 있는 경우 (IconButton)
  if (iconPosition === 'only') {
    const IconComponent = icon || <Plus size={spec.iconSize} />;

    return (
      <IconButton
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        sx={{
          ...baseStyles,
          width: spec.iconButtonSize,
          height: spec.iconButtonSize,
          padding: 1,
          '& svg': {
            width: spec.iconSize,
            height: spec.iconSize,
          },
          ...sx,
        }}
        {...props}
      >
        {IconComponent}
      </IconButton>
    );
  }

  // 텍스트 버튼 (아이콘 유무에 따라)
  const IconComponent = icon || <Plus size={spec.iconSize} />;

  // MUI Button variant 매핑
  const muiVariant = variant === 'primary' ? 'contained' : 'text';

  return (
    <Button
      ref={ref}
      variant={muiVariant}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      startIcon={iconPosition === 'left' ? IconComponent : undefined}
      endIcon={iconPosition === 'right' ? IconComponent : undefined}
      sx={{
        ...baseStyles,
        height: spec.height,
        px: spec.px,
        gap: 1,
        '& .MuiButton-startIcon': {
          marginRight: 0.5,
          marginLeft: 0,
          '& svg': {
            width: spec.iconSize,
            height: spec.iconSize,
          },
        },
        '& .MuiButton-endIcon': {
          marginLeft: 0.5,
          marginRight: 0,
          '& svg': {
            width: spec.iconSize,
            height: spec.iconSize,
          },
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
});

export { SaasButton };
