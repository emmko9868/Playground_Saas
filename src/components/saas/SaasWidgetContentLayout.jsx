import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasWidgetContentLayout 컴포넌트
 *
 * Manufacturing Management SaaS 차트 위젯용 콘텐츠 레이아웃.
 * Type1: 차트(좌) + Legend(우) 좌우 배치 - Donut/Pie/Line 차트용
 * Type2: 차트(상) + Legend(하) 상하 배치 - Line/StackedBar 차트용
 *
 * Props:
 * @param {string} type - 레이아웃 타입 ('type1' | 'type2') [Optional, 기본값: 'type1']
 * @param {node} chart - 차트 컴포넌트 [Required]
 * @param {Array} legendItems - Legend 아이템 배열 [Optional]
 *   - Type1: [{ color, label, value, percent }]
 *   - Type2: [{ color, label, value? }]
 * @param {boolean} showLegendHeader - Legend 테이블 헤더 표시 여부 (type1 전용) [Optional, 기본값: true]
 * @param {object} legendHeaders - Legend 헤더 텍스트 (type1 전용) [Optional, 기본값: { type: 'Type', amount: 'Amount', percent: '%' }]
 * @param {number} width - 레이아웃 너비 [Optional, 기본값: 772]
 * @param {number} height - 레이아웃 높이 [Optional, 기본값: 360]
 * @param {number} chartWidth - 차트 영역 너비 (type1 전용) [Optional, 기본값: 'auto']
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * // Type1: 좌우 배치 (Donut/Pie 차트)
 * <SaasWidgetContentLayout
 *   type="type1"
 *   chart={<SaasDonutChart data={data} />}
 *   legendItems={[{ color: '#26C6DA', label: 'In Production', value: 144, percent: '72%' }]}
 * />
 *
 * // Type2: 상하 배치 (Line/StackedBar 차트)
 * <SaasWidgetContentLayout
 *   type="type2"
 *   chart={<SaasStackedBarChart data={data} dataKeys={keys} />}
 *   legendItems={[{ color: '#42A5F5', label: 'Low (0-30%)' }]}
 * />
 */
const SaasWidgetContentLayout = forwardRef(function SaasWidgetContentLayout({
  type = 'type1',
  chart,
  legendItems = [],
  showLegendHeader = true,
  legendHeaders = { type: 'Type', amount: 'Amount', percent: '%' },
  width = 772,
  height = 360,
  chartWidth,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const isGlass = isDarkMode === 'cosmic' || isDarkMode === 'nature';
  const contentBg = isGlass ? 'transparent' : colors.surfaceBg;
  // Type1: 좌우 배치 (차트 왼쪽, Legend 테이블 오른쪽)
  if (type === 'type1') {
    return (
      <Box
        ref={ref}
        sx={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          px: '40px',
          backgroundColor: contentBg,
          ...sx,
        }}
        {...props}
      >
        {/* Chart Area (Left) */}
        <Box
          sx={{
            flex: 1,
            height: 280,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...(chartWidth && { width: chartWidth, flex: 'none' }),
          }}
        >
          {chart}
        </Box>

        {/* Legend Table (Right) */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {/* Table Header */}
          {showLegendHeader && (
            <>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  py: '6px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: 1.25,
                    color: colors.textPrimary,
                    width: 133,
                  }}
                >
                  {legendHeaders.type}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: 1.25,
                    color: colors.textPrimary,
                    width: 80,
                    textAlign: 'right',
                  }}
                >
                  {legendHeaders.amount}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: 1.25,
                    color: colors.textPrimary,
                    width: 60,
                    textAlign: 'right',
                  }}
                >
                  {legendHeaders.percent}
                </Typography>
              </Box>
              {/* Divider */}
              <Box
                sx={{
                  width: '100%',
                  height: 0,
                  borderBottom: `1px solid ${colors.divider}`,
                }}
              />
            </>
          )}

          {/* Table Body */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0px',
            }}
          >
            {legendItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 40,
                  py: '6px',
                }}
              >
                {/* Color + Label - 헤더 Type 컬럼과 동일한 너비 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    width: 133,
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 500,
                      fontSize: 14,
                      lineHeight: 1.25,
                      color: colors.textTertiary,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>

                {/* Value - 오른쪽 정렬 */}
                <Typography
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: 1.25,
                    color: colors.textPrimary,
                    width: 80,
                    textAlign: 'right',
                    flexShrink: 0,
                  }}
                >
                  {item.value}
                </Typography>

                {/* Percent - 오른쪽 정렬 */}
                <Typography
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: 1.25,
                    color: colors.textPrimary,
                    width: 60,
                    textAlign: 'right',
                    flexShrink: 0,
                  }}
                >
                  {item.percent}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }

  // Type2: 상하 배치 (차트 위, Legend 행 아래)
  return (
    <Box
      ref={ref}
      sx={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: contentBg,
        ...sx,
      }}
      {...props}
    >
      {/* Chart Area (Top) */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          py: 2,
        }}
      >
        {chart}
      </Box>

      {/* Legend Row (Bottom) */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          py: 2,
          px: 3,
          borderTop: `1px solid ${colors.divider}`,
        }}
      >
        {legendItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {/* Color Indicator */}
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '2px',
                backgroundColor: item.color,
                flexShrink: 0,
              }}
            />

            {/* Label + Value */}
            <Typography
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 1.25,
                color: colors.textSecondary,
              }}
            >
              {item.label}
            </Typography>

            {item.value && (
              <Typography
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: 1.25,
                  color: colors.textPrimary,
                }}
              >
                {item.value}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
});

export { SaasWidgetContentLayout };
