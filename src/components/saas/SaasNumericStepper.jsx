import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasNumericStepper 컴포넌트
 *
 * Manufacturing Management SaaS 전용 숫자 스테퍼 컨트롤.
 * Number Input 내부에서 증감 버튼으로 사용.
 *
 * Props:
 * @param {function} onIncrement - 증가 버튼 클릭 핸들러 [Optional]
 * @param {function} onDecrement - 감소 버튼 클릭 핸들러 [Optional]
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {boolean} incrementDisabled - 증가 버튼 비활성화 [Optional, 기본값: false]
 * @param {boolean} decrementDisabled - 감소 버튼 비활성화 [Optional, 기본값: false]
 *
 * Example usage:
 * <SaasNumericStepper onIncrement={() => setValue(v => v + 1)} onDecrement={() => setValue(v => v - 1)} />
 */
const SaasNumericStepper = forwardRef(function SaasNumericStepper({
  onIncrement,
  onDecrement,
  disabled = false,
  incrementDisabled = false,
  decrementDisabled = false,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const [hoverUp, setHoverUp] = useState(false);
  const [hoverDown, setHoverDown] = useState(false);

  const handleIncrement = (e) => {
    e.stopPropagation();
    if (!disabled && !incrementDisabled) {
      onIncrement?.();
    }
  };

  const handleDecrement = (e) => {
    e.stopPropagation();
    if (!disabled && !decrementDisabled) {
      onDecrement?.();
    }
  };

  const isUpDisabled = disabled || incrementDisabled;
  const isDownDisabled = disabled || decrementDisabled;

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 16,
        height: 20,
        flexShrink: 0,
        ...sx,
      }}
      {...props}
    >
      {/* Increment Button (Up) */}
      <Box
        onClick={handleIncrement}
        onMouseEnter={() => !isUpDisabled && setHoverUp(true)}
        onMouseLeave={() => setHoverUp(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          height: 10,
          cursor: isUpDisabled ? 'not-allowed' : 'pointer',
          backgroundColor: hoverUp && !isUpDisabled ? colors.accentBlueBg : 'transparent',
          borderRadius: '2px 2px 0 0',
          transition: 'background-color 0.15s ease',
          color: isUpDisabled ? colors.textDisabled : colors.textPrimary,
          '&:hover': {
            backgroundColor: isUpDisabled ? 'transparent' : colors.accentBlueBg,
          },
        }}
      >
        <ChevronUp size={12} strokeWidth={2.5} />
      </Box>

      {/* Decrement Button (Down) */}
      <Box
        onClick={handleDecrement}
        onMouseEnter={() => !isDownDisabled && setHoverDown(true)}
        onMouseLeave={() => setHoverDown(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          height: 10,
          cursor: isDownDisabled ? 'not-allowed' : 'pointer',
          backgroundColor: hoverDown && !isDownDisabled ? colors.accentBlueBg : 'transparent',
          borderRadius: '0 0 2px 2px',
          transition: 'background-color 0.15s ease',
          color: isDownDisabled ? colors.textDisabled : colors.textPrimary,
          '&:hover': {
            backgroundColor: isDownDisabled ? 'transparent' : colors.accentBlueBg,
          },
        }}
      >
        <ChevronDown size={12} strokeWidth={2.5} />
      </Box>
    </Box>
  );
});

export { SaasNumericStepper };
