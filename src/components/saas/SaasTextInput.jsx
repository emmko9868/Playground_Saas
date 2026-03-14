import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { AlertCircle, AlertTriangle } from 'lucide-react';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasTextInput 컴포넌트
 *
 * Manufacturing Management SaaS 전용 텍스트 입력 필드.
 * 일반, Error, Warning 상태를 지원하며 Label, Helper Text 옵션 제공.
 *
 * Props:
 * @param {string} label - 라벨 텍스트 [Optional]
 * @param {string} placeholder - placeholder 텍스트 [Optional, 기본값: 'Placeholder']
 * @param {string} value - 입력 값 [Optional]
 * @param {function} onChange - 값 변경 핸들러 (event) => void [Optional]
 * @param {string} helperText - 도움말/에러/경고 텍스트 [Optional]
 * @param {string} status - 상태 ('default' | 'error' | 'warning') [Optional, 기본값: 'default']
 * @param {boolean} required - 필수 여부 [Optional, 기본값: false]
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {string} size - 사이즈 ('medium' | 'small') [Optional, 기본값: 'medium']
 * @param {number} width - 입력 필드 너비 [Optional, 기본값: 288]
 * @param {boolean} showHelperIcon - Helper text 아이콘 표시 여부 [Optional, 기본값: true]
 * @param {function} onFocus - 포커스 이벤트 핸들러 [Optional]
 * @param {function} onBlur - 블러 이벤트 핸들러 [Optional]
 * @param {string} type - 입력 타입 ('text' | 'password' | 'email' | 'number') [Optional, 기본값: 'text']
 * @param {string} name - 입력 필드 name 속성 [Optional]
 * @param {string} id - 입력 필드 id 속성 [Optional]
 * @param {boolean} autoFocus - 자동 포커스 여부 [Optional, 기본값: false]
 * @param {boolean} readOnly - 읽기 전용 여부 [Optional, 기본값: false]
 * @param {boolean} multiline - 멀티라인(textarea) 모드 [Optional, 기본값: false]
 * @param {number} rows - textarea 행 수 [Optional, 기본값: 4]
 * @param {number} maxLength - 최대 글자 수 (카운터 표시) [Optional]
 *
 * Example usage:
 * // 기본 사용
 * <SaasTextInput label="Label" placeholder="Enter text" />
 *
 * // Error 상태
 * <SaasTextInput label="Label" status="error" helperText="Error message" value="입력값" />
 *
 * // Warning 상태
 * <SaasTextInput label="Label" status="warning" helperText="Warning message" value="입력값" />
 *
 * // 필수 필드
 * <SaasTextInput label="Label" required />
 *
 * // Textarea (멀티라인)
 * <SaasTextInput label="Label" multiline rows={4} maxLength={100} />
 */
const SaasTextInput = forwardRef(function SaasTextInput({
  label,
  placeholder = 'Placeholder',
  value = '',
  onChange,
  helperText,
  status = 'default',
  required = false,
  disabled = false,
  size = 'medium',
  width = 288,
  showHelperIcon = true,
  onFocus,
  onBlur,
  type = 'text',
  name,
  id,
  autoFocus = false,
  readOnly = false,
  multiline = false,
  rows = 4,
  maxLength,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const [isFocused, setIsFocused] = useState(false);

  // 사이즈별 스펙
  const sizeSpec = {
    medium: { height: 40, fontSize: 14, labelFontSize: 12, helperFontSize: 12 },
    small: { height: 32, fontSize: 14, labelFontSize: 12, helperFontSize: 12 },
  };

  const spec = sizeSpec[size] || sizeSpec.medium;

  // 값이 있는지 확인
  const hasValue = value !== '' && value !== null && value !== undefined;

  // 상태별 스타일 정의
  const getStatusStyles = () => {
    // 포커스 상태일 때는 항상 파란 테두리
    if (isFocused && !disabled) {
      return {
        borderColor: colors.accentBlue,
        backgroundColor: colors.surfaceBg,
      };
    }

    // Disabled 상태
    if (disabled) {
      return {
        borderColor: colors.divider,
        backgroundColor: colors.divider,
      };
    }

    // Error 상태 (값이 있을 때만 빨간 스타일)
    if (status === 'error' && hasValue) {
      return {
        borderColor: colors.alertErrorOn,
        backgroundColor: colors.alertErrorSubBg,
      };
    }

    // Warning 상태 (값이 있을 때만 노란 스타일)
    if (status === 'warning' && hasValue) {
      return {
        borderColor: colors.alertWarningOn,
        backgroundColor: colors.alertWarningSubBg,
      };
    }

    // 기본 상태
    return {
      borderColor: colors.divider,
      backgroundColor: colors.surfaceBg,
    };
  };

  // Helper text 색상
  const getHelperTextColor = () => {
    if (status === 'error') return colors.alertErrorOn;
    if (status === 'warning') return colors.alertWarningOn;
    return colors.textTertiary;
  };

  // Helper icon 렌더링
  const renderHelperIcon = () => {
    if (!showHelperIcon || status === 'default') return null;

    if (status === 'error') {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            width: 24,
            height: 24,
            color: colors.alertErrorOn,
          }}
        >
          <AlertCircle size={20} />
        </Box>
      );
    }

    if (status === 'warning') {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            width: 24,
            height: 24,
            color: colors.alertWarningOn,
          }}
        >
          <AlertTriangle size={20} />
        </Box>
      );
    }

    return null;
  };

  // 포커스 핸들러
  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  // 블러 핸들러
  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const statusStyles = getStatusStyles();

  return (
    <Box
      ref={ref}
      sx={{ width, ...sx }}
      {...props}
    >
      {/* Label */}
      {(label || maxLength !== undefined) && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flex: 1 }}>
            {label && (
              <Typography
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 500,
                  fontSize: spec.labelFontSize,
                  lineHeight: 1.25,
                  letterSpacing: '0.32px',
                  color: colors.textTertiary,
                }}
              >
                {label}
              </Typography>
            )}
            {required && (
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: colors.alertErrorOn,
                }}
              />
            )}
          </Box>
          {maxLength !== undefined && (
            <Typography
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                fontSize: spec.labelFontSize,
                lineHeight: 1.25,
                color: colors.textTertiary,
                flexShrink: 0,
              }}
            >
              {String(value || '').length}/{maxLength}
            </Typography>
          )}
        </Box>
      )}

      {/* Input Field */}
      <Box
        sx={{
          display: 'flex',
          alignItems: multiline ? 'flex-start' : 'center',
          height: multiline ? 'auto' : spec.height,
          minHeight: multiline ? rows * 24 + 18 : undefined,
          px: 1.5,
          py: multiline ? 1 : 0,
          border: '2px solid',
          borderColor: statusStyles.borderColor,
          backgroundColor: statusStyles.backgroundColor,
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
          position: 'relative',
        }}
      >
        <InputBase
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          type={type}
          name={name}
          id={id}
          autoFocus={autoFocus}
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline={multiline}
          rows={multiline ? rows : undefined}
          inputProps={{
            maxLength: maxLength || undefined,
          }}
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            fontSize: spec.fontSize,
            lineHeight: multiline ? 1.5 : 1.25,
            color: disabled ? colors.textDisabled : colors.textPrimary,
            alignSelf: multiline ? 'stretch' : undefined,
            '& input, & textarea': {
              padding: 0,
              resize: multiline ? 'vertical' : 'none',
              '&::placeholder': {
                color: colors.textTertiary,
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {/* Helper Text */}
      {helperText && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 0.5,
            pt: 1,
          }}
        >
          {renderHelperIcon()}
          <Typography
            sx={{
              flex: 1,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
              fontSize: spec.helperFontSize,
              lineHeight: 1.25,
              color: getHelperTextColor(),
            }}
          >
            {helperText}
          </Typography>
        </Box>
      )}
    </Box>
  );
});

export { SaasTextInput };
