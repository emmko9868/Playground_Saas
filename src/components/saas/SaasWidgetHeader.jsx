import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Info } from 'lucide-react';
import { SaasDropdown } from './SaasDropdown';
import { SaasTooltip } from './SaasTooltip';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasWidgetHeader 컴포넌트
 *
 * Manufacturing Management SaaS 차트 위젯용 헤더.
 * 제목, 정보 아이콘(툴팁), 선택적 드롭다운 포함.
 *
 * Props:
 * @param {string} title - 위젯 제목 [Required]
 * @param {string} tooltipContent - 정보 아이콘 툴팁 내용 [Optional]
 * @param {boolean} showDropdown - 드롭다운 표시 여부 [Optional, 기본값: false]
 * @param {Array} dropdownOptions - 드롭다운 옵션 배열 [{ value, label }] [Optional]
 * @param {string|number} dropdownValue - 드롭다운 선택값 [Optional]
 * @param {function} onDropdownChange - 드롭다운 변경 핸들러 [Optional]
 * @param {string} dropdownPlaceholder - 드롭다운 placeholder [Optional, 기본값: 'Select']
 * @param {number} width - 헤더 너비 [Optional, 기본값: 772]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasWidgetHeader
 *   title="Tooling Overview"
 *   tooltipContent="현재 제조 운영 상태 요약"
 *   showDropdown
 *   dropdownOptions={[{ value: 'all', label: 'All Suppliers' }]}
 *   dropdownValue="all"
 *   onDropdownChange={handleChange}
 * />
 */
const SaasWidgetHeader = forwardRef(function SaasWidgetHeader({
  title,
  tooltipContent,
  showDropdown = false,
  dropdownOptions = [],
  dropdownValue,
  onDropdownChange,
  dropdownPlaceholder = 'Select',
  width = 772,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const isGlass = isDarkMode === 'cosmic' || isDarkMode === 'nature';

  return (
    <Box
      ref={ref}
      sx={{
        width,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '40px',
        backgroundColor: isGlass ? 'transparent' : colors.surfaceBg,
        ...sx,
      }}
      {...props}
    >
      {/* Left: Title + Info Icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 1.25,
            color: colors.textPrimary,
          }}
        >
          {title}
        </Typography>

        {tooltipContent ? (
          <SaasTooltip
            content={
              <Typography
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: 12,
                  color: colors.textSecondary,
                }}
              >
                {tooltipContent}
              </Typography>
            }
            placement="top"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: colors.textDisabled,
                '&:hover': {
                  color: colors.textSecondary,
                },
              }}
            >
              <Info size={16} />
            </Box>
          </SaasTooltip>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.textDisabled,
            }}
          >
            <Info size={16} />
          </Box>
        )}
      </Box>

      {/* Right: Dropdown (Optional) */}
      {showDropdown && (
        <SaasDropdown
          options={dropdownOptions}
          value={dropdownValue}
          onChange={onDropdownChange}
          placeholder={dropdownPlaceholder}
          width={288}
          size="medium"
          isDarkMode={isDarkMode}
        />
      )}
    </Box>
  );
});

export { SaasWidgetHeader };
