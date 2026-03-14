import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Info } from 'lucide-react';
import { SaasNumericStepper } from './SaasNumericStepper';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasNumberInput 컴포넌트
 *
 * Manufacturing Management SaaS 전용 숫자 입력 필드.
 * SaasNumericStepper를 활용하여 증감 컨트롤 제공.
 *
 * Props:
 * @param {string} label - 라벨 텍스트 [Optional]
 * @param {number} value - 숫자 값 [Optional, 기본값: 0]
 * @param {function} onChange - 값 변경 핸들러 (newValue: number) => void [Optional]
 * @param {string} helperText - 도움말 텍스트 [Optional]
 * @param {boolean} required - 필수 여부 [Optional, 기본값: false]
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {number} min - 최소값 [Optional]
 * @param {number} max - 최대값 [Optional]
 * @param {number} step - 증감 단위 [Optional, 기본값: 1]
 * @param {number} width - 입력 필드 너비 [Optional, 기본값: 288]
 * @param {boolean} showHelperIcon - Helper text 아이콘 표시 여부 [Optional, 기본값: true]
 * @param {boolean} showControls - Stepper 컨트롤 표시 여부 [Optional, 기본값: true]
 * @param {function} onFocus - 포커스 이벤트 핸들러 [Optional]
 * @param {function} onBlur - 블러 이벤트 핸들러 [Optional]
 * @param {string} name - 입력 필드 name 속성 [Optional]
 * @param {string} id - 입력 필드 id 속성 [Optional]
 *
 * Example usage:
 * // 기본 사용
 * <SaasNumberInput label="Quantity" value={quantity} onChange={setQuantity} />
 *
 * // 최소/최대값 설정
 * <SaasNumberInput label="Count" value={count} onChange={setCount} min={0} max={100} />
 *
 * // 증감 단위 설정
 * <SaasNumberInput label="Price" value={price} onChange={setPrice} step={10} />
 */
const SaasNumberInput = forwardRef(function SaasNumberInput({
  label,
  value = 0,
  onChange,
  helperText,
  required = false,
  disabled = false,
  min,
  max,
  step = 1,
  width = 288,
  showHelperIcon = true,
  showControls = true,
  onFocus,
  onBlur,
  name,
  id,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const [isFocused, setIsFocused] = useState(false);

  // 값 검증 및 제한
  const clampValue = (val) => {
    let newVal = val;
    if (min !== undefined && newVal < min) newVal = min;
    if (max !== undefined && newVal > max) newVal = max;
    return newVal;
  };

  // 증가 핸들러
  const handleIncrement = () => {
    const newValue = clampValue(value + step);
    onChange?.(newValue);
  };

  // 감소 핸들러
  const handleDecrement = () => {
    const newValue = clampValue(value - step);
    onChange?.(newValue);
  };

  // 직접 입력 핸들러
  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // 빈 문자열이면 0으로 설정
    if (inputValue === '' || inputValue === '-') {
      onChange?.(0);
      return;
    }

    const numValue = parseFloat(inputValue);
    if (!isNaN(numValue)) {
      onChange?.(clampValue(numValue));
    }
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

  // Stepper 버튼 비활성화 상태
  const incrementDisabled = max !== undefined && value >= max;
  const decrementDisabled = min !== undefined && value <= min;

  return (
    <Box
      ref={ref}
      sx={{ width, ...sx }}
      {...props}
    >
      {/* Label */}
      {label && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, pb: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
              fontSize: 12,
              lineHeight: 1.25,
              color: colors.textTertiary,
            }}
          >
            {label}
          </Typography>
          {required && (
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#F92C2D',
              }}
            />
          )}
        </Box>
      )}

      {/* Input Field */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 40,
          px: 1.5,
          border: '2px solid',
          borderColor: isFocused && !disabled ? colors.accentBlue : colors.divider,
          backgroundColor: disabled ? colors.divider : colors.surfaceBg,
          transition: 'border-color 0.2s ease, background-color 0.2s ease',
        }}
      >
        <InputBase
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          type="text"
          inputMode="numeric"
          name={name}
          id={id}
          onFocus={handleFocus}
          onBlur={handleBlur}
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 1.25,
            color: disabled ? colors.textDisabled : colors.textPrimary,
            '& input': {
              padding: 0,
              textAlign: 'left',
            },
          }}
        />
        {showControls && (
          <SaasNumericStepper
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            disabled={disabled}
            incrementDisabled={incrementDisabled}
            decrementDisabled={decrementDisabled}
            isDarkMode={isDarkMode}
          />
        )}
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
          {showHelperIcon && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: 24,
                height: 24,
                color: colors.textTertiary,
              }}
            >
              <Info size={20} />
            </Box>
          )}
          <Typography
            sx={{
              flex: 1,
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 500,
              fontSize: 12,
              lineHeight: 1.25,
              color: colors.textTertiary,
            }}
          >
            {helperText}
          </Typography>
        </Box>
      )}
    </Box>
  );
});

export { SaasNumberInput };
