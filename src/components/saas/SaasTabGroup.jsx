import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasTabGroup 컴포넌트
 *
 * Manufacturing Management SaaS 전용 탭 그룹.
 * SaasTabItem을 조합하여 탭 네비게이션 구성.
 * 탭 간 세로 구분선 자동 삽입.
 *
 * Props:
 * @param {Array} tabs - 탭 데이터 배열 [Required]
 *   [{ id: string, label: string, icon: ReactNode }]
 * @param {string} selectedTab - 선택된 탭 ID [Optional]
 * @param {function} onTabChange - 탭 변경 핸들러 [Optional]
 * @param {boolean} showDividers - 탭 간 구분선 표시 여부 [Optional, 기본값: true]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasTabGroup
 *   tabs={[
 *     { id: 'company', label: 'Company', icon: <Building2 size={20} /> },
 *     { id: 'plant', label: 'Plant', icon: <Factory size={20} /> },
 *   ]}
 *   selectedTab="company"
 *   onTabChange={(tabId) => setActiveTab(tabId)}
 * />
 */

// 내부에서 사용하는 TabItem 컴포넌트
const TabItem = ({ label, icon, selected, onClick, colors }) => {
  const containerStyles = selected
    ? { backgroundColor: colors.accentBlueBg }
    : {
        backgroundColor: colors.surfaceBg,
        '&:hover': { backgroundColor: colors.surfaceBgSubtle },
      };

  const textStyles = selected
    ? {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        color: colors.accentBlue,
      }
    : {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        color: colors.textSecondary,
      };

  const iconColor = selected ? colors.accentBlue : colors.textSecondary;

  return (
    <Box
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        height: 36,
        px: '12px',
        py: '8px',
        cursor: onClick ? 'pointer' : 'default',
        boxSizing: 'border-box',
        transition: 'background-color 0.15s ease',
        flexShrink: 0,
        ...containerStyles,
      }}
    >
      {/* Icon */}
      {icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 24,
            height: 24,
            flexShrink: 0,
            color: iconColor,
            '& svg': {
              width: 20,
              height: 20,
            },
          }}
        >
          {icon}
        </Box>
      )}

      {/* Label */}
      <Box
        component="span"
        sx={{
          fontSize: 14,
          lineHeight: '20px',
          whiteSpace: 'nowrap',
          ...textStyles,
        }}
      >
        {label}
      </Box>
    </Box>
  );
};

const SaasTabGroup = forwardRef(function SaasTabGroup({
  tabs = [],
  selectedTab,
  onTabChange,
  showDividers = true,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const [internalSelectedTab, setInternalSelectedTab] = useState(tabs[0]?.id || '');

  const activeTab = onTabChange ? selectedTab : internalSelectedTab;

  const handleTabClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalSelectedTab(tabId);
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.surfaceBg,
        border: `2px solid ${colors.divider}`,
        p: '8px',
        boxSizing: 'border-box',
        ...sx,
      }}
      {...props}
    >
      {tabs.map((tab, index) => (
        <Box key={tab.id} sx={{ display: 'flex', alignItems: 'center' }}>
          <TabItem
            label={tab.label}
            icon={tab.icon}
            selected={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
            colors={colors}
          />

          {/* Divider between tabs (except last) */}
          {showDividers && index < tabs.length - 1 && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: 18,
                alignSelf: 'center',
                borderColor: colors.divider,
                borderRightWidth: 1,
                mx: 0,
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
});

export { SaasTabGroup };
