import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { Search } from 'lucide-react';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasSearchBar 컴포넌트
 *
 * Manufacturing Management SaaS 전용 검색 바.
 * 입력 필드 + 검색 버튼 구성.
 *
 * Props:
 * @param {string} value - 검색어 값 [Optional]
 * @param {function} onChange - 값 변경 핸들러 [Optional]
 * @param {function} onSearch - 검색 버튼 클릭 또는 Enter 핸들러 [Optional]
 * @param {string} placeholder - placeholder 텍스트 [Optional, 기본값: 'Placeholder']
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {number} width - 검색 바 너비 [Optional, 기본값: 512]
 *
 * Example usage:
 * <SaasSearchBar
 *   value={searchTerm}
 *   onChange={setSearchTerm}
 *   onSearch={handleSearch}
 *   placeholder="Search..."
 * />
 */
const SaasSearchBar = forwardRef(function SaasSearchBar({
  value = '',
  onChange,
  onSearch,
  placeholder = 'Placeholder',
  disabled = false,
  width = 512,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
    }
  };

  const handleSearchClick = () => {
    if (!disabled) {
      onSearch?.(value);
    }
  };

  const hasValue = value && value.length > 0;

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        width,
        height: 40,
        border: isFocused ? `2px solid ${colors.accentBlue}` : '2px solid transparent',
        backgroundColor: colors.pageBg,
        ...sx,
      }}
      {...props}
    >
      {/* Input Field */}
      <InputBase
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        sx={{
          flex: 1,
          height: 40,
          px: 1,
          fontFamily: 'Roboto, sans-serif',
          fontSize: 14,
          color: hasValue ? colors.textPrimary : colors.textDisabled,
          '& input': {
            padding: 0,
            '&::placeholder': {
              color: colors.textDisabled,
              opacity: 1,
            },
            '&:disabled': {
              color: colors.textDisabled,
            },
          },
        }}
      />

      {/* Search Button */}
      <Box
        onClick={handleSearchClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          backgroundColor: disabled ? colors.textDisabled : colors.textTertiary,
          color: colors.surfaceBg,
          cursor: disabled ? 'not-allowed' : 'pointer',
          flexShrink: 0,
          '&:hover': {
            backgroundColor: disabled ? colors.textDisabled : colors.textSecondary,
          },
        }}
      >
        <Search size={20} />
      </Box>
    </Box>
  );
});

export { SaasSearchBar };
