import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasPagination 컴포넌트
 *
 * Manufacturing Management SaaS 전용 페이지네이션.
 * 이전/다음 버튼과 페이지 입력 필드로 구성.
 *
 * Props:
 * @param {number} currentPage - 현재 페이지 번호 [Optional, 기본값: 1]
 * @param {number} totalPages - 전체 페이지 수 [Optional, 기본값: 1]
 * @param {function} onChange - 페이지 변경 핸들러 (page: number) => void [Optional]
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {number} inputWidth - 페이지 입력 필드 너비 [Optional, 기본값: 60]
 *
 * Example usage:
 * // 기본 사용
 * <SaasPagination currentPage={1} totalPages={212} onChange={setPage} />
 *
 * // 비활성화
 * <SaasPagination currentPage={1} totalPages={100} disabled />
 */
const SaasPagination = forwardRef(function SaasPagination({
  currentPage = 1,
  totalPages = 1,
  onChange,
  disabled = false,
  inputWidth = 60,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(String(currentPage));

  // 이전 페이지
  const handlePrevious = () => {
    if (currentPage > 1 && !disabled) {
      const newPage = currentPage - 1;
      setInputValue(String(newPage));
      onChange?.(newPage);
    }
  };

  // 다음 페이지
  const handleNext = () => {
    if (currentPage < totalPages && !disabled) {
      const newPage = currentPage + 1;
      setInputValue(String(newPage));
      onChange?.(newPage);
    }
  };

  // 입력값 변경
  const handleInputChange = (e) => {
    const value = e.target.value;
    // 숫자만 허용
    if (value === '' || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  // 입력 완료 (Enter 또는 blur)
  const handleInputSubmit = () => {
    const pageNum = parseInt(inputValue, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      onChange?.(pageNum);
    } else {
      // 유효하지 않은 값이면 현재 페이지로 복원
      setInputValue(String(currentPage));
    }
  };

  // Enter 키 처리
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleInputSubmit();
      e.target.blur();
    }
  };

  // 포커스 핸들러
  const handleFocus = () => {
    setIsFocused(true);
  };

  // 블러 핸들러
  const handleBlur = () => {
    setIsFocused(false);
    handleInputSubmit();
  };

  // 버튼 비활성화 상태
  const isPrevDisabled = disabled || currentPage <= 1;
  const isNextDisabled = disabled || currentPage >= totalPages;

  // 공통 버튼 스타일
  const buttonBaseStyles = {
    width: 40,
    height: 40,
    borderRadius: 0,
    color: disabled ? colors.textDisabled : colors.textTertiary,
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease',
    '&:hover': {
      backgroundColor: disabled ? 'transparent' : colors.accentBlueBg,
      color: disabled ? colors.textDisabled : colors.accentBlue,
    },
    '&:active': {
      backgroundColor: colors.accentBlueBg,
      borderColor: colors.accentBlue,
    },
    '&:focus-visible': {
      backgroundColor: colors.accentBlueBg,
      borderColor: colors.accentBlue,
      outline: 'none',
    },
    '&.Mui-disabled': {
      color: colors.textDisabled,
      backgroundColor: 'transparent',
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        ...sx,
      }}
      {...props}
    >
      {/* Previous Button */}
      <IconButton
        onClick={handlePrevious}
        disabled={isPrevDisabled}
        sx={buttonBaseStyles}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </IconButton>

      {/* Page Input */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 40,
          px: 1.5,
          border: '2px solid',
          borderColor: isFocused && !disabled ? colors.accentBlue : colors.divider,
          backgroundColor: disabled ? colors.divider : colors.surfaceBg,
          transition: 'border-color 0.2s ease',
          width: inputWidth,
        }}
      >
        <InputBase
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          inputProps={{
            'aria-label': 'Page number',
            style: { textAlign: 'center' },
          }}
          sx={{
            flex: 1,
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 1.25,
            color: disabled ? colors.textDisabled : colors.textPrimary,
            '& input': {
              padding: 0,
              textAlign: 'center',
            },
          }}
        />
      </Box>

      {/* Total Pages Text */}
      <Typography
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: 1.25,
          color: disabled ? colors.textDisabled : colors.textPrimary,
          whiteSpace: 'nowrap',
        }}
      >
        of {totalPages}
      </Typography>

      {/* Next Button */}
      <IconButton
        onClick={handleNext}
        disabled={isNextDisabled}
        sx={buttonBaseStyles}
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </IconButton>
    </Box>
  );
});

export { SaasPagination };
