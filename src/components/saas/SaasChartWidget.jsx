import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { SaasWidgetHeader } from './SaasWidgetHeader';
import { SaasWidgetContentLayout } from './SaasWidgetContentLayout';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasChartWidget 컴포넌트
 *
 * Manufacturing Management SaaS 대시보드용 차트 위젯.
 * Widget Header + Widget Content Layout 조합.
 *
 * Props:
 * @param {string} title - 위젯 제목 [Required]
 * @param {string} tooltipContent - 헤더 툴팁 내용 [Optional]
 * @param {boolean} showDropdown - 드롭다운 표시 여부 [Optional, 기본값: false]
 * @param {Array} dropdownOptions - 드롭다운 옵션 배열 [{ value, label }] [Optional]
 * @param {string|number} dropdownValue - 드롭다운 선택값 [Optional]
 * @param {function} onDropdownChange - 드롭다운 변경 핸들러 [Optional]
 * @param {string} dropdownPlaceholder - 드롭다운 placeholder [Optional]
 * @param {string} layoutType - 레이아웃 타입 ('type1' | 'type2') [Optional, 기본값: 'type1']
 * @param {node} chart - 차트 컴포넌트 [Required]
 * @param {Array} legendItems - Legend 아이템 배열 [Optional]
 *   - Type1: [{ color, label, value, percent }]
 *   - Type2: [{ color, label, value? }]
 * @param {boolean} showLegendHeader - Legend 테이블 헤더 표시 여부 (type1 전용) [Optional, 기본값: true]
 * @param {object} legendHeaders - Legend 헤더 텍스트 (type1 전용) [Optional, 기본값: { type: 'Type', amount: 'Amount', percent: '%' }]
 * @param {string|number} width - 위젯 너비 [Optional, 기본값: '100%']
 * @param {number} contentHeight - 콘텐츠 영역 높이 [Optional, 기본값: 360]
 * @param {number} chartWidth - 차트 영역 너비 (type1 전용) [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * // Donut Chart Widget (Type1)
 * <SaasChartWidget
 *   title="Tooling Overview"
 *   tooltipContent="운영 상태 요약"
 *   layoutType="type1"
 *   chart={<SaasDonutChart data={data} centerValue="200" centerLabel="Total" />}
 *   legendItems={[
 *     { color: '#26C6DA', label: 'In Production', value: '144' },
 *     { color: '#42A5F5', label: 'Idle', value: '22' },
 *   ]}
 * />
 *
 * // Stacked Bar Chart Widget (Type2)
 * <SaasChartWidget
 *   title="Overall Utilization"
 *   showDropdown
 *   dropdownOptions={supplierOptions}
 *   layoutType="type2"
 *   chart={<SaasStackedBarChart data={data} dataKeys={keys} />}
 *   legendItems={[
 *     { color: '#42A5F5', label: 'Low (0-30%)' },
 *     { color: '#FFCA28', label: 'Medium (30-70%)' },
 *   ]}
 * />
 */
const SaasChartWidget = forwardRef(function SaasChartWidget({
  // Header props
  title,
  tooltipContent,
  showDropdown = false,
  dropdownOptions = [],
  dropdownValue,
  onDropdownChange,
  dropdownPlaceholder,
  // Content props
  layoutType = 'type1',
  chart,
  legendItems = [],
  showLegendHeader = true,
  legendHeaders,
  // Dimension props
  width = '100%',
  contentHeight = 360,
  chartWidth,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const isCosmic = isDarkMode === 'cosmic';
  const isNature = isDarkMode === 'nature';
  const isVintage = isDarkMode === 'vintage';
  const isObsidian = isDarkMode === 'obsidian';
  const isGlass = isCosmic || isNature;

  return (
    <Box
      ref={ref}
      sx={{
        width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: colors.surfaceBg,
        transition: 'background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
        ...(isGlass && {
          borderRadius: '16px',
          border: isCosmic
            ? '1px solid rgba(140, 100, 255, 0.2)'
            : '1px solid rgba(255, 255, 255, 0.6)',
          backdropFilter: isCosmic
            ? 'blur(20px)'
            : 'blur(40px) saturate(1.8)',
          WebkitBackdropFilter: isCosmic
            ? 'blur(20px)'
            : 'blur(40px) saturate(1.8)',
          boxShadow: isCosmic
            ? '0 8px 32px rgba(100, 50, 200, 0.2)'
            : '0 8px 32px rgba(0, 50, 20, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
          overflow: 'hidden',
        }),
        ...((isVintage || isObsidian) && {
          borderRadius: `${colors.cardBorderRadius || 20}px`,
          border: colors.cardBorder || '1px solid #2A2A26',
          boxShadow: colors.cardShadow || '0 4px 24px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden',
        }),
        ...sx,
      }}
      {...props}
    >
      {/* Widget Header */}
      <SaasWidgetHeader
        title={title}
        tooltipContent={tooltipContent}
        showDropdown={showDropdown}
        dropdownOptions={dropdownOptions}
        dropdownValue={dropdownValue}
        onDropdownChange={onDropdownChange}
        dropdownPlaceholder={dropdownPlaceholder}
        width="100%"
        isDarkMode={isDarkMode}
      />

      {/* Widget Content */}
      <SaasWidgetContentLayout
        type={layoutType}
        chart={chart}
        legendItems={legendItems}
        showLegendHeader={showLegendHeader}
        legendHeaders={legendHeaders}
        width="100%"
        height={contentHeight}
        chartWidth={chartWidth}
        isDarkMode={isDarkMode}
      />
    </Box>
  );
});

export { SaasChartWidget };
