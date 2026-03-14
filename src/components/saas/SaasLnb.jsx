import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { Filter, SlidersHorizontal, Calendar, Settings, Download, Plus, CloudUpload } from 'lucide-react';
import { SaasDropdown } from './SaasDropdown';
import { SaasButton } from './SaasButton';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasLnb 컴포넌트
 *
 * Manufacturing Management SaaS 전용 Local Navigation Bar.
 * 페이지별 필터와 액션 버튼을 제공하는 상단 바.
 *
 * Props:
 * @param {string} type - LNB 타입 ('dashboard' | 'dataimport' | 'workorder' | 'datafamily' | 'overall' | 'oee') [Required]
 *
 * Dashboard 타입 Props:
 * @param {string} filterValue - 필터 드롭다운 값 [Optional]
 * @param {function} onFilterChange - 필터 변경 핸들러 [Optional]
 * @param {Array} filterOptions - 필터 옵션 배열 [Optional]
 * @param {number} appliedFilterCount - 적용된 필터 수 [Optional]
 * @param {string} dateRangeValue - 날짜 범위 값 [Optional]
 * @param {function} onDateRangeChange - 날짜 범위 변경 핸들러 [Optional]
 * @param {Array} dateRangeOptions - 날짜 범위 옵션 배열 [Optional]
 * @param {function} onSettingsClick - 설정 버튼 클릭 핸들러 [Optional]
 *
 * Dataimport 타입 Props:
 * @param {function} onDownloadClick - 다운로드 버튼 클릭 핸들러 [Optional]
 * @param {function} onImportClick - Import Data 버튼 클릭 핸들러 [Optional]
 *
 * Workorder 타입 Props:
 * @param {function} onCreateWorkOrderClick - Create Work Order 버튼 클릭 핸들러 [Optional]
 *
 * DataFamily 타입 Props:
 * @param {function} onCreateToolingClick - Create Tooling 버튼 클릭 핸들러 [Optional]
 *
 * OEE 타입 Props:
 * @param {string} plantValue - Plant 드롭다운 값 [Optional]
 * @param {function} onPlantChange - Plant 변경 핸들러 [Optional]
 * @param {Array} plantOptions - Plant 옵션 배열 [Optional]
 * @param {string} machineValue - Machine 드롭다운 값 [Optional]
 * @param {function} onMachineChange - Machine 변경 핸들러 [Optional]
 * @param {Array} machineOptions - Machine 옵션 배열 [Optional]
 *
 * Example usage:
 * <SaasLnb type="dashboard" onSettingsClick={handleSettings} />
 * <SaasLnb type="dataimport" onImportClick={handleImport} />
 */
const SaasLnb = forwardRef(function SaasLnb({
  type = 'dashboard',
  // 공통 필터 props
  filterValue,
  onFilterChange,
  filterOptions = [],
  appliedFilterCount = 0,
  // 날짜 범위 props
  dateRangeValue,
  onDateRangeChange,
  dateRangeOptions = [
    { value: 'last7', label: 'Last 7 Days' },
    { value: 'last30', label: 'Last 30 Days' },
    { value: 'last90', label: 'Last 90 Days' },
    { value: 'custom', label: 'Custom Range' },
  ],
  // 설정 버튼
  onSettingsClick,
  // Dataimport props
  onDownloadClick,
  onImportClick,
  // Workorder props
  onCreateWorkOrderClick,
  // DataFamily props
  onCreateToolingClick,
  // OEE props
  plantValue,
  onPlantChange,
  plantOptions = [
    { value: 'plantA', label: 'Plant A' },
    { value: 'plantB', label: 'Plant B' },
    { value: 'plantC', label: 'Plant C' },
  ],
  machineValue,
  onMachineChange,
  machineOptions = [
    { value: 'all', label: 'All Machines' },
    { value: 'machine1', label: 'Machine 1' },
    { value: 'machine2', label: 'Machine 2' },
  ],
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  // 필터 아이콘 드롭다운 렌더링
  const renderFilterDropdown = (hasAppliedFilter = false) => (
    <SaasDropdown
      placeholder={hasAppliedFilter ? `${appliedFilterCount} Filter applied` : 'Add Filters'}
      options={filterOptions}
      value={filterValue}
      onChange={onFilterChange}
      startIcon={hasAppliedFilter ? <SlidersHorizontal size={24} /> : <Filter size={24} />}
      width={288}
      isDarkMode={isDarkMode}
    />
  );

  // 날짜 범위 드롭다운 렌더링
  const renderDateRangeDropdown = () => (
    <SaasDropdown
      placeholder="Last 7 Days"
      options={dateRangeOptions}
      value={dateRangeValue}
      onChange={onDateRangeChange}
      startIcon={<Calendar size={24} />}
      width={288}
      isDarkMode={isDarkMode}
    />
  );

  // 설정 버튼 렌더링
  const renderSettingsButton = () => (
    <SaasButton
      variant="ghost"
      iconPosition="only"
      icon={<Settings size={24} color={colors.textTertiary} />}
      onClick={onSettingsClick}
      sx={{
        color: colors.textTertiary,
        '&:hover': {
          color: colors.accentBlue,
          backgroundColor: colors.accentBlueHover,
        },
      }}
    />
  );

  // 다운로드 버튼 렌더링
  const renderDownloadButton = () => (
    <SaasButton
      variant="ghost"
      iconPosition="only"
      icon={<Download size={24} color={colors.textTertiary} />}
      onClick={onDownloadClick}
      sx={{
        color: colors.textTertiary,
        '&:hover': {
          color: colors.accentBlue,
          backgroundColor: colors.accentBlueHover,
        },
      }}
    />
  );

  // 타입별 렌더링
  const renderContent = () => {
    switch (type) {
      case 'dashboard':
        return (
          <>
            {/* 왼쪽: 필터 옵션들 */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              {renderFilterDropdown(false)}
              {renderFilterDropdown(true)}
            </Box>
            {/* 오른쪽: 날짜 범위 + 설정 */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              {renderDateRangeDropdown()}
              {renderSettingsButton()}
            </Box>
          </>
        );

      case 'dataimport':
        return (
          <>
            {/* 왼쪽: 필터 옵션들 */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              {renderFilterDropdown(false)}
              {renderFilterDropdown(true)}
            </Box>
            {/* 오른쪽: 다운로드 + Import Data */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              {renderDownloadButton()}
              <SaasButton
                variant="primary"
                iconPosition="left"
                icon={<CloudUpload size={24} />}
                onClick={onImportClick}
              >
                Import Data
              </SaasButton>
            </Box>
          </>
        );

      case 'workorder':
        return (
          <>
            {/* 왼쪽: 필터 */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {renderFilterDropdown(false)}
            </Box>
            {/* 오른쪽: 날짜 범위 + Create Work Order */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              {renderDateRangeDropdown()}
              <SaasButton
                variant="primary"
                iconPosition="left"
                icon={<Plus size={24} />}
                onClick={onCreateWorkOrderClick}
              >
                Create Work Order
              </SaasButton>
            </Box>
          </>
        );

      case 'datafamily':
        return (
          <>
            {/* 왼쪽: 필터 */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {renderFilterDropdown(false)}
            </Box>
            {/* 오른쪽: Create Tooling */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SaasButton
                variant="primary"
                iconPosition="left"
                icon={<Plus size={24} />}
                onClick={onCreateToolingClick}
              >
                Create Tooling
              </SaasButton>
            </Box>
          </>
        );

      case 'overall':
        return (
          <>
            {/* 왼쪽: 필터 */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {renderFilterDropdown(false)}
            </Box>
            {/* 오른쪽: 날짜 범위 + 설정 */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              {renderDateRangeDropdown()}
              {renderSettingsButton()}
            </Box>
          </>
        );

      case 'oee':
        return (
          <>
            {/* 왼쪽: Plant + Machine 선택 */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              <SaasDropdown
                placeholder="Plant A"
                options={plantOptions}
                value={plantValue}
                onChange={onPlantChange}
                width={288}
                isDarkMode={isDarkMode}
              />
              <SaasDropdown
                placeholder="All Machines"
                options={machineOptions}
                value={machineValue}
                onChange={onMachineChange}
                width={288}
                isDarkMode={isDarkMode}
              />
            </Box>
            {/* 오른쪽: 날짜 범위 + 설정 */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              {renderDateRangeDropdown()}
              {renderSettingsButton()}
            </Box>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        height: 80,
        borderBottom: `2px solid ${colors.lnbBorder}`,
        ...sx,
      }}
      {...props}
    >
      {/* Inner Container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: 80,
          px: 2.5,
          backgroundColor: colors.lnbBg,
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
});

export { SaasLnb };
