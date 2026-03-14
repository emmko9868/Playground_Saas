import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CloudUpload, CloudCog, Database, ExternalLink, Check, Minus } from 'lucide-react';
import { SaasButton } from './SaasButton';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasWidgetButton 컴포넌트
 *
 * Manufacturing Management SaaS 전용 위젯 버튼.
 * Data Import 등 대형 선택 카드로 사용.
 *
 * Props:
 * @param {string} style - 버튼 스타일 ('default' | 'withCta' | 'withCheckbox') [Optional, 기본값: 'default']
 * @param {string} size - 사이즈 ('L' | 'M') [Optional, 기본값: 'L']
 * @param {string} status - 상태 ('default' | 'hover' | 'select') [Optional, 기본값: 'default']
 * @param {string} title - 타이틀 텍스트 [Optional, 기본값: 'Import']
 * @param {string} description - 설명 텍스트 [Optional]
 * @param {node} icon - 커스텀 아이콘 [Optional]
 * @param {string} ctaLabel - CTA 버튼 라벨 (withCta 스타일용) [Optional, 기본값: 'Contact Us']
 * @param {function} onCtaClick - CTA 버튼 클릭 핸들러 [Optional]
 * @param {boolean} checked - 체크박스 상태 (withCheckbox 스타일용) [Optional, 기본값: false]
 * @param {boolean} indeterminate - 체크박스 부분 선택 상태 [Optional, 기본값: false]
 * @param {function} onCheckChange - 체크박스 변경 핸들러 [Optional]
 * @param {function} onClick - 카드 클릭 핸들러 [Optional]
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * // Default 스타일
 * <SaasWidgetButton title="Import" description="Upload CSV or XLSX file..." />
 *
 * // With CTA 스타일
 * <SaasWidgetButton style="withCta" title="Sync" ctaLabel="Contact Us" onCtaClick={handleContact} />
 *
 * // With Checkbox 스타일
 * <SaasWidgetButton style="withCheckbox" size="M" title="Basic Asset(s) Library" checked={isChecked} onCheckChange={setChecked} />
 */
const SaasWidgetButton = forwardRef(function SaasWidgetButton({
  style = 'default',
  size = 'L',
  status = 'default',
  title = 'Import',
  description,
  icon,
  ctaLabel = 'Contact Us',
  onCtaClick,
  checked = false,
  indeterminate = false,
  onCheckChange,
  onClick,
  disabled = false,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  // 사이즈별 스펙
  const sizeSpec = {
    L: {
      width: 420,
      height: 400,
      padding: 40,
      iconSize: 80,
      titleFontSize: 32,
      descFontSize: 14,
      gap: 20,
    },
    M: {
      width: 280,
      height: 280,
      paddingX: 40,
      paddingY: 20,
      iconSize: 75,
      titleFontSize: 20,
      gap: 20,
    },
  };

  const spec = sizeSpec[size] || sizeSpec.L;

  // 상태별 스타일
  const getStatusStyles = () => {
    const isSelected = status === 'select';
    const isHover = status === 'hover';

    if (isSelected) {
      return {
        backgroundColor: colors.accentBlueBg,
        borderColor: colors.accentBlue,
        textColor: colors.accentBlue,
        iconColor: colors.accentBlue,
      };
    }

    if (isHover) {
      return {
        backgroundColor: colors.pageBg,
        borderColor: colors.divider,
        textColor: colors.textDisabled,
        iconColor: colors.textDisabled,
      };
    }

    // Default
    return {
      backgroundColor: colors.surfaceBg,
      borderColor: colors.divider,
      textColor: colors.textDisabled,
      iconColor: colors.textDisabled,
    };
  };

  const statusStyles = getStatusStyles();

  // 기본 아이콘 선택
  const getDefaultIcon = () => {
    if (icon) return icon;

    if (style === 'withCta') {
      return <CloudCog size={spec.iconSize} strokeWidth={1.5} />;
    }
    if (style === 'withCheckbox') {
      return <Database size={spec.iconSize} strokeWidth={1.5} />;
    }
    return <CloudUpload size={spec.iconSize} strokeWidth={1.5} />;
  };

  // 체크박스 렌더링
  const renderCheckbox = () => {
    const isChecked = checked || indeterminate;
    const checkboxBg = isChecked ? colors.accentBlue : 'transparent';
    const checkboxBorder = isChecked ? colors.accentBlue : colors.borderDefault;

    return (
      <Box
        onClick={(e) => {
          e.stopPropagation();
          onCheckChange?.(!checked);
        }}
        sx={{
          position: 'absolute',
          top: -2,
          right: -2,
          width: 64,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
            border: '2px solid',
            borderColor: checkboxBorder,
            borderRadius: '4px',
            backgroundColor: checkboxBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
        >
          {indeterminate && (
            <Minus size={16} color="#FFFFFF" strokeWidth={3} />
          )}
          {checked && !indeterminate && (
            <Check size={16} color="#FFFFFF" strokeWidth={3} />
          )}
        </Box>
      </Box>
    );
  };

  // With Checkbox 스타일 (M 사이즈)
  if (style === 'withCheckbox') {
    return (
      <Box
        ref={ref}
        onClick={onClick}
        sx={{
          position: 'relative',
          width: spec.width,
          height: spec.height,
          px: `${spec.paddingX}px`,
          py: `${spec.paddingY}px`,
          border: '2px solid',
          borderColor: statusStyles.borderColor,
          backgroundColor: statusStyles.backgroundColor,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: `${spec.gap}px`,
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': disabled ? {} : {
            backgroundColor: status === 'select' ? statusStyles.backgroundColor : colors.pageBg,
          },
          ...sx,
        }}
        {...props}
      >
        {/* Checkbox */}
        {renderCheckbox()}

        {/* Icon and Label Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: `${spec.gap}px`,
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              color: statusStyles.iconColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {getDefaultIcon()}
          </Box>

          {/* Title */}
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
              fontSize: spec.titleFontSize,
              lineHeight: 1,
              color: statusStyles.textColor,
              textAlign: 'center',
              width: 200,
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    );
  }

  // Default 및 With CTA 스타일 (L 사이즈)
  return (
    <Box
      ref={ref}
      onClick={onClick}
      sx={{
        position: 'relative',
        width: spec.width,
        height: spec.height,
        p: `${spec.padding}px`,
        border: '2px solid',
        borderColor: statusStyles.borderColor,
        backgroundColor: statusStyles.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: `${spec.gap}px`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': disabled ? {} : {
          backgroundColor: status === 'select' ? statusStyles.backgroundColor : colors.pageBg,
        },
        ...sx,
      }}
      {...props}
    >
      {/* Icon Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Title */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 56,
            p: '20px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 400,
              fontSize: spec.titleFontSize,
              lineHeight: 1,
              color: statusStyles.textColor,
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Icon */}
        <Box
          sx={{
            color: statusStyles.iconColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {getDefaultIcon()}
        </Box>
      </Box>

      {/* Description */}
      {description && (
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: spec.descFontSize,
            lineHeight: 1.75,
            color: statusStyles.textColor,
            textAlign: 'center',
            height: 120,
            width: '100%',
          }}
        >
          {description}
        </Typography>
      )}

      {/* CTA Button (With CTA 스타일) */}
      {style === 'withCta' && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 42,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <SaasButton
            variant="primary"
            iconPosition="right"
            icon={<ExternalLink size={18} />}
            onClick={(e) => {
              e.stopPropagation();
              onCtaClick?.();
            }}
          >
            {ctaLabel}
          </SaasButton>
        </Box>
      )}
    </Box>
  );
});

export { SaasWidgetButton };
