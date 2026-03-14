import { forwardRef, useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import InputBase from '@mui/material/InputBase';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { ChevronDown, ChevronUp, Search, Plus } from 'lucide-react';
import { SaasButton } from './SaasButton';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasDropdown 컴포넌트
 *
 * Manufacturing Management SaaS 전용 드롭다운.
 * 단일 선택, 다중 선택, 검색, CTA 버튼 지원.
 *
 * Props:
 * @param {string} label - 라벨 텍스트 [Optional]
 * @param {string} placeholder - placeholder 텍스트 [Optional, 기본값: 'Choose an option']
 * @param {string} helperText - 도움말 텍스트 [Optional]
 * @param {Array} options - 옵션 배열 [{ value, label }] [Required]
 * @param {string|number|Array} value - 선택된 값 (multiple일 때 배열) [Optional]
 * @param {function} onChange - 값 변경 핸들러 [Optional]
 * @param {boolean} multiple - 다중 선택 모드 [Optional, 기본값: false]
 * @param {boolean} searchable - 검색 기능 활성화 [Optional, 기본값: false]
 * @param {string} searchPlaceholder - 검색 placeholder [Optional, 기본값: 'Search...']
 * @param {boolean} showApplyButton - Apply 버튼 표시 (multiple 모드) [Optional, 기본값: false]
 * @param {string} applyButtonText - Apply 버튼 텍스트 [Optional, 기본값: 'Apply Filter']
 * @param {function} onApply - Apply 버튼 클릭 핸들러 [Optional]
 * @param {boolean} showSelectAll - 전체 선택 버튼 표시 (multiple 모드) [Optional, 기본값: false]
 * @param {boolean} showCta - CTA 버튼 표시 [Optional, 기본값: false]
 * @param {string} ctaText - CTA 버튼 텍스트 [Optional, 기본값: 'Create New']
 * @param {function} onCtaClick - CTA 버튼 클릭 핸들러 [Optional]
 * @param {boolean} required - 필수 여부 [Optional, 기본값: false]
 * @param {boolean} disabled - 비활성화 여부 [Optional, 기본값: false]
 * @param {string} size - 사이즈 ('medium' | 'large') [Optional, 기본값: 'medium']
 * @param {number} width - 드롭다운 너비 [Optional, 기본값: 288]
 * @param {node} startIcon - 시작 아이콘 [Optional]
 *
 * Example usage:
 * // 단일 선택
 * <SaasDropdown options={[...]} value={value} onChange={setValue} />
 *
 * // 다중 선택 + Apply 버튼
 * <SaasDropdown multiple showApplyButton options={[...]} value={values} onChange={setValues} />
 *
 * // 검색 + 다중 선택
 * <SaasDropdown multiple searchable options={[...]} value={values} onChange={setValues} />
 */
const SaasDropdown = forwardRef(function SaasDropdown({
  label,
  placeholder = 'Choose an option',
  helperText,
  options = [],
  value,
  onChange,
  multiple = false,
  searchable = false,
  searchPlaceholder = 'Search...',
  showApplyButton = false,
  applyButtonText = 'Apply Filter',
  onApply,
  showSelectAll = false,
  showCta = false,
  ctaText = 'Create New',
  onCtaClick,
  required = false,
  disabled = false,
  size = 'medium',
  width = 288,
  startIcon,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [searchText, setSearchText] = useState('');
  const [tempSelected, setTempSelected] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const searchInputRef = useRef(null);

  // 사이즈별 스펙
  const sizeSpec = {
    medium: { height: 40, fontSize: 14 },
    large: { height: 48, fontSize: 14 },
  };

  const spec = sizeSpec[size] || sizeSpec.medium;

  // 필터된 옵션
  const filteredOptions = searchable && searchText
    ? options.filter((opt) =>
      opt.label.toLowerCase().includes(searchText.toLowerCase())
    )
    : options;

  // 선택된 값 배열로 정규화
  const selectedValues = multiple
    ? (Array.isArray(value) ? value : [])
    : (value ? [value] : []);

  // 표시 텍스트
  const getDisplayText = () => {
    if (multiple) {
      const count = selectedValues.length;
      if (count === 0) return placeholder;
      if (count === 1) {
        const opt = options.find((o) => o.value === selectedValues[0]);
        return opt?.label || placeholder;
      }
      return `${count} selected`;
    } else {
      const opt = options.find((o) => o.value === value);
      return opt?.label || placeholder;
    }
  };

  const displayText = getDisplayText();
  const hasValue = multiple ? selectedValues.length > 0 : !!value;

  // 열릴 때 임시 선택 상태 초기화
  useEffect(() => {
    if (isOpen && multiple && showApplyButton) {
      setTempSelected([...selectedValues]);
    }
    if (isOpen && searchable && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, multiple, searchable, showApplyButton]);

  // 드롭다운 토글
  const handleToggle = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
      if (isOpen) {
        setSearchText('');
      }
    }
  };

  // 옵션 선택 (단일)
  const handleSelectSingle = (optionValue) => {
    onChange?.(optionValue);
    setIsOpen(false);
    setSearchText('');
  };

  // 옵션 선택 (다중)
  const handleSelectMultiple = (optionValue) => {
    const targetArray = showApplyButton ? tempSelected : selectedValues;
    const setTargetArray = showApplyButton ? setTempSelected : (newVal) => onChange?.(newVal);

    if (targetArray.includes(optionValue)) {
      setTargetArray(targetArray.filter((v) => v !== optionValue));
    } else {
      setTargetArray([...targetArray, optionValue]);
    }
  };

  // Apply 버튼 클릭
  const handleApply = () => {
    onChange?.(tempSelected);
    onApply?.();
    setIsOpen(false);
    setSearchText('');
  };

  // 전체 선택
  const handleSelectAll = () => {
    const targetArray = showApplyButton ? tempSelected : selectedValues;
    const setTargetArray = showApplyButton ? setTempSelected : (newVal) => onChange?.(newVal);
    const allValues = filteredOptions.map((o) => o.value);

    if (targetArray.length === allValues.length) {
      setTargetArray([]);
    } else {
      setTargetArray(allValues);
    }
  };

  // 전체 해제
  const handleUnselectAll = () => {
    const setTargetArray = showApplyButton ? setTempSelected : (newVal) => onChange?.(newVal);
    setTargetArray([]);
  };

  // 외부 클릭 시 닫기
  const handleClickAway = () => {
    setIsOpen(false);
    setSearchText('');
  };

  // 현재 체크 상태 (Apply 버튼 모드면 tempSelected 사용)
  const isChecked = (optionValue) => {
    const targetArray = showApplyButton ? tempSelected : selectedValues;
    return targetArray.includes(optionValue);
  };

  // 전체 선택 여부 (Select All 버튼에서 사용)
  const getAllSelected = () => {
    const targetArray = showApplyButton ? tempSelected : selectedValues;
    return filteredOptions.length > 0 && targetArray.length === filteredOptions.length;
  };
  const allSelected = getAllSelected();

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
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

        {/* Select Box */}
        <Box
          ref={setAnchorEl}
          tabIndex={disabled ? -1 : 0}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-disabled={disabled}
          onClick={handleToggle}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: spec.height,
            px: 1.5,
            backgroundColor: disabled ? colors.divider : isOpen ? colors.surfaceBgSubtle : (colors.inputBg || colors.surfaceBg),
            border: '2px solid',
            borderColor: isOpen ? colors.accentBlue : colors.divider,
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s ease, border-color 0.2s ease',
            '&:hover': {
              backgroundColor: disabled ? colors.divider : colors.surfaceBgSubtle,
            },
            '&:focus': {
              outline: 'none',
              borderColor: colors.accentBlue,
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, overflow: 'hidden' }}>
            {startIcon && (
              <Box sx={{ display: 'flex', color: disabled ? colors.textDisabled : colors.textTertiary }}>
                {startIcon}
              </Box>
            )}
            <Typography
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                fontSize: spec.fontSize,
                lineHeight: 1.25,
                color: disabled ? colors.textDisabled : hasValue ? colors.textPrimary : colors.textTertiary,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {displayText}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              color: disabled ? colors.textDisabled : colors.textTertiary,
              transition: 'transform 0.2s ease',
            }}
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Box>
        </Box>

        {/* Dropdown Menu */}
        <Popper
          open={isOpen && Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="bottom-start"

          style={{ zIndex: 1300, width: anchorEl?.offsetWidth || width }}
          modifiers={[
            {
              name: 'offset',
              options: {
                offset: [0, 0],
              },
            },
          ]}
        >
          <Paper
            elevation={0}
            sx={{
              mt: 0,
              backgroundColor: colors.surfaceBg,
              borderRadius: '3px',
              boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden',
            }}
          >
            {/* Search Input */}
            {searchable && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InputBase
                  inputRef={searchInputRef}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder={searchPlaceholder}
                  sx={{
                    flex: 1,
                    height: 40,
                    px: 1,
                    backgroundColor: colors.surfaceBgSubtle,
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 14,
                    color: colors.textPrimary,
                    '& input::placeholder': {
                      color: colors.textDisabled,
                      opacity: 1,
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    backgroundColor: colors.textTertiary,
                    color: colors.surfaceBg,
                  }}
                >
                  <Search size={20} />
                </Box>
              </Box>
            )}

            {/* Select All / Unselect All */}
            {multiple && showSelectAll && (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1, py: 0.5 }}>
                <Typography
                  onClick={handleSelectAll}
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 14,
                    color: allSelected ? colors.textDisabled : colors.accentBlue,
                    cursor: allSelected ? 'default' : 'pointer',
                    '&:hover': { textDecoration: allSelected ? 'none' : 'underline' },
                  }}
                >
                  Select All
                </Typography>
                <Typography
                  onClick={handleUnselectAll}
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: 14,
                    color: colors.accentBlue,
                    cursor: 'pointer',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Unselect All
                </Typography>
              </Box>
            )}

            {/* Options List */}
            <Box
              sx={{
                maxHeight: 240,
                overflowY: 'auto',
                py: 1,
              }}
            >
              {filteredOptions.map((option, index) => (
                <Box
                  key={option.value}
                  role="option"
                  aria-selected={multiple ? isChecked(option.value) : option.value === value}
                  onClick={() => multiple ? handleSelectMultiple(option.value) : handleSelectSingle(option.value)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    height: 40,
                    px: 1,
                    backgroundColor: hoveredIndex === index ? colors.accentBlueBg : 'transparent',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s ease',
                  }}
                >
                  {multiple && (
                    <Checkbox
                      checked={isChecked(option.value)}
                      sx={{
                        padding: 0,
                        color: colors.textTertiary,
                        '&.Mui-checked': {
                          color: colors.accentBlue,
                        },
                      }}
                    />
                  )}
                  <Typography
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: hoveredIndex === index && !multiple ? 600 : multiple ? 500 : 400,
                      fontSize: 14,
                      lineHeight: 1.25,
                      color: hoveredIndex === index && !multiple ? colors.accentBlue : multiple ? colors.textTertiary : colors.textPrimary,
                    }}
                  >
                    {option.label}
                  </Typography>
                </Box>
              ))}
              {filteredOptions.length === 0 && (
                <Box sx={{ px: 1, py: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: 14,
                      color: colors.textTertiary,
                    }}
                  >
                    No matching options
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Apply Button */}
            {multiple && showApplyButton && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1, py: 1 }}>
                <SaasButton size="small" onClick={handleApply}>
                  {applyButtonText}
                </SaasButton>
              </Box>
            )}

            {/* CTA Button */}
            {showCta && (
              <>
                <Divider sx={{ my: 0 }} />
                <Box
                  onClick={onCtaClick}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    height: 40,
                    px: 1.5,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: colors.accentBlueBg,
                    },
                  }}
                >
                  <Plus size={20} color={colors.accentBlue} />
                  <Typography
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 500,
                      fontSize: 14,
                      color: colors.accentBlue,
                    }}
                  >
                    {ctaText}
                  </Typography>
                </Box>
              </>
            )}
          </Paper>
        </Popper>

        {/* Helper Text */}
        {helperText && (
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.5, pt: 1 }}>
            <Typography
              sx={{
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
    </ClickAwayListener>
  );
});

export { SaasDropdown };
