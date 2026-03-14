import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { getColors } from '../../data/darkModeColors';
import { SaasSortButton } from './SaasSortButton';

/**
 * SaasTableHeader 컴포넌트
 *
 * Manufacturing Management SaaS 전용 테이블 헤더 셀.
 * 정렬 버튼 옵션 지원.
 *
 * Props:
 * @param {string} text - 헤더 텍스트 [Optional, 기본값: 'Header']
 * @param {boolean} sortable - 정렬 가능 여부 [Optional, 기본값: true]
 * @param {string} sortDirection - 정렬 방향 [Optional, 기본값: 'default']
 *   'default' | 'asc' | 'desc'
 * @param {function} onSort - 정렬 버튼 클릭 핸들러 [Optional]
 * @param {string} align - 텍스트 정렬 [Optional, 기본값: 'left']
 *   'left' | 'center' | 'right'
 * @param {number|string} width - 헤더 너비 [Optional, 기본값: 200]
 * @param {number|string} minWidth - 최소 너비 [Optional]
 * @param {boolean} flex - flex 사용 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasTableHeader
 *   text="Name"
 *   sortable
 *   sortDirection="asc"
 *   onSort={() => handleSort('name')}
 *   width={250}
 * />
 */

const SaasTableHeader = forwardRef(function SaasTableHeader({
  text = 'Header',
  sortable = true,
  sortDirection = 'default',
  onSort,
  align = 'left',
  width = 200,
  minWidth,
  flex = false,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);

  // 텍스트 정렬에 따른 justify-content
  const getJustifyContent = () => {
    if (align === 'center') return 'center';
    if (align === 'right') return 'flex-end';
    return 'flex-start';
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: getJustifyContent(),
        gap: '10px',
        height: 60,
        px: '20px',
        backgroundColor: isDarkMode ? '#444444' : colors.pageBg,
        width: flex ? undefined : width,
        minWidth: minWidth,
        flex: flex ? '1 0 0' : undefined,
        ...sx,
      }}
      {...props}
    >
      <Typography
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: 14,
          fontWeight: 700,
          lineHeight: '20px',
          color: colors.textSecondary,
          flex: sortable ? '1 0 0' : undefined,
          minWidth: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </Typography>

      {sortable && (
        <SaasSortButton
          sortDirection={sortDirection}
          onClick={onSort}
          isDarkMode={isDarkMode}
        />
      )}
    </Box>
  );
});

export { SaasTableHeader };
