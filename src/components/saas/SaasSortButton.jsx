import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasSortButton 컴포넌트
 *
 * Manufacturing Management SaaS 전용 정렬 버튼.
 * 테이블 헤더에서 정렬 상태를 표시하고 제어.
 *
 * Props:
 * @param {string} sortDirection - 정렬 방향 [Optional, 기본값: 'default']
 *   'default' - 정렬 없음 (둘 다 회색)
 *   'asc' - 오름차순 (위 화살표 파란색)
 *   'desc' - 내림차순 (아래 화살표 파란색)
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasSortButton
 *   sortDirection="asc"
 *   onClick={() => toggleSort()}
 * />
 */

// 위 화살표 (▲) SVG 컴포넌트
const UpArrow = ({ color }) => (
  <svg
    width="9.333"
    height="4.667"
    viewBox="0 0 10 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path d="M5 0L10 5H0L5 0Z" fill={color} />
  </svg>
);

// 아래 화살표 (▼) SVG 컴포넌트
const DownArrow = ({ color }) => (
  <svg
    width="9.333"
    height="4.667"
    viewBox="0 0 10 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path d="M5 5L0 0H10L5 5Z" fill={color} />
  </svg>
);

const SaasSortButton = forwardRef(function SaasSortButton({
  sortDirection = 'default',
  onClick,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const isAsc = sortDirection === 'asc';
  const isDesc = sortDirection === 'desc';

  // 색상 정의
  const defaultArrowColor = isDarkMode ? '#666666' : colors.borderDefault;
  const upColor = isAsc ? colors.accentBlue : defaultArrowColor;
  const downColor = isDesc ? colors.accentBlue : defaultArrowColor;

  return (
    <Box
      ref={ref}
      component="button"
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        width: 16,
        height: 16,
        padding: 0,
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.8,
        },
        ...sx,
      }}
      {...props}
    >
      {/* Up Arrow (▲) */}
      <UpArrow color={upColor} />
      {/* Down Arrow (▼) */}
      <DownArrow color={downColor} />
    </Box>
  );
});

export { SaasSortButton };
