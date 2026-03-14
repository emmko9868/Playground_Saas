import { forwardRef, useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import { getColors } from '../../data/darkModeColors';
import { SaasTableHeader } from './SaasTableHeader';
import { SaasTableCell } from './SaasTableCell';
import { SaasCheckbox } from './SaasCheckbox';

/**
 * SaasDataTable 컴포넌트
 *
 * Manufacturing Management SaaS 전용 데이터 테이블.
 * SaasTableHeader + SaasTableCell 조합.
 *
 * Props:
 * @param {Array} headers - 테이블 헤더 배열 [Required]
 *   [{ id, label, sortable, width, align, flex }]
 * @param {Array} data - 테이블 데이터 배열 [Required]
 * @param {function} renderCell - 셀 렌더링 함수 [Required]
 *   (row, header, rowIndex) => SaasTableCell props 객체
 * @param {boolean} selectable - 행 선택 가능 여부 [Optional, 기본값: false]
 * @param {Array} selectedIds - 선택된 행 ID 배열 [Optional, 기본값: []]
 * @param {function} onSelectionChange - 선택 변경 핸들러 [Optional]
 * @param {string} sortField - 현재 정렬 필드 [Optional]
 * @param {string} sortDirection - 현재 정렬 방향 [Optional, 기본값: 'default']
 * @param {function} onSort - 정렬 변경 핸들러 [Optional]
 * @param {boolean} striped - 줄무늬 배경 여부 [Optional, 기본값: true]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasDataTable
 *   headers={dataImportTableHeaders}
 *   data={dataImportTableData}
 *   renderCell={(row, header) => ({
 *     type: header.id === 'importId' ? 'hyperlink' : 'text',
 *     linkId: row.importId,
 *     text: row[header.id],
 *   })}
 *   selectable
 *   onSelectionChange={(ids) => setSelected(ids)}
 * />
 */

const SaasDataTable = forwardRef(function SaasDataTable({
  headers = [],
  data = [],
  renderCell,
  selectable = false,
  selectedIds = [],
  onSelectionChange,
  sortField,
  sortDirection = 'default',
  onSort,
  striped = true,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);

  // 내부 정렬 상태 (외부에서 제어하지 않을 경우)
  const [internalSortField, setInternalSortField] = useState(null);
  const [internalSortDirection, setInternalSortDirection] = useState('default');

  // 정렬 상태 결정 (외부 vs 내부)
  const activeSortField = sortField !== undefined ? sortField : internalSortField;
  const activeSortDirection = sortField !== undefined ? sortDirection : internalSortDirection;

  // 정렬된 데이터
  const sortedData = useMemo(() => {
    if (!activeSortField || activeSortDirection === 'default') {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = a[activeSortField];
      const bValue = b[activeSortField];

      // 숫자 비교
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return activeSortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }

      // 문자열 비교
      const aStr = String(aValue ?? '');
      const bStr = String(bValue ?? '');
      const comparison = aStr.localeCompare(bStr);
      return activeSortDirection === 'asc' ? comparison : -comparison;
    });
  }, [data, activeSortField, activeSortDirection]);

  // 정렬 핸들러
  const handleSort = (headerId) => {
    if (onSort) {
      // 외부 제어
      const nextDirection =
        activeSortField !== headerId ? 'asc' :
        activeSortDirection === 'default' ? 'asc' :
        activeSortDirection === 'asc' ? 'desc' : 'default';
      onSort(headerId, nextDirection);
    } else {
      // 내부 제어
      if (internalSortField !== headerId) {
        setInternalSortField(headerId);
        setInternalSortDirection('asc');
      } else {
        const nextDirection =
          internalSortDirection === 'default' ? 'asc' :
          internalSortDirection === 'asc' ? 'desc' : 'default';
        setInternalSortDirection(nextDirection);
        if (nextDirection === 'default') {
          setInternalSortField(null);
        }
      }
    }
  };

  // 전체 선택 상태
  const allSelected = data.length > 0 && selectedIds.length === data.length;
  const someSelected = selectedIds.length > 0 && selectedIds.length < data.length;

  // 전체 선택 핸들러
  const handleSelectAll = () => {
    if (onSelectionChange) {
      if (allSelected) {
        onSelectionChange([]);
      } else {
        onSelectionChange(data.map((row) => row.id));
      }
    }
  };

  // 개별 선택 핸들러
  const handleSelectRow = (rowId) => {
    if (onSelectionChange) {
      if (selectedIds.includes(rowId)) {
        onSelectionChange(selectedIds.filter((id) => id !== rowId));
      } else {
        onSelectionChange([...selectedIds, rowId]);
      }
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        border: `1px solid ${colors.divider}`,
        ...sx,
      }}
      {...props}
    >
      {/* Header Row */}
      <Box
        sx={{
          display: 'flex',
          borderBottom: `1px solid ${colors.divider}`,
        }}
      >
        {/* Checkbox Header */}
        {selectable && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              backgroundColor: isDarkMode ? '#444444' : colors.pageBg,
              flexShrink: 0,
            }}
          >
            <SaasCheckbox
              checked={allSelected}
              indeterminate={someSelected}
              onChange={handleSelectAll}
              isDarkMode={isDarkMode}
            />
          </Box>
        )}

        {/* Data Headers */}
        {headers.map((header) => (
          <SaasTableHeader
            key={header.id}
            text={header.label}
            sortable={header.sortable !== false}
            sortDirection={activeSortField === header.id ? activeSortDirection : 'default'}
            onSort={() => handleSort(header.id)}
            align={header.align || 'left'}
            width={header.width}
            flex={header.flex}
            isDarkMode={isDarkMode}
          />
        ))}
      </Box>

      {/* Data Rows */}
      {sortedData.map((row, rowIndex) => {
        const isSelected = selectedIds.includes(row.id);
        const rowBgColor = striped && rowIndex % 2 === 1 ? 'grey' : 'white';

        return (
          <Box
            key={row.id}
            sx={{
              display: 'flex',
              borderBottom: rowIndex < sortedData.length - 1 ? `1px solid ${colors.divider}` : 'none',
            }}
          >
            {/* Checkbox Cell */}
            {selectable && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 60,
                  height: 60,
                  backgroundColor: rowBgColor === 'grey' ? colors.surfaceBgSubtle : colors.surfaceBg,
                  flexShrink: 0,
                }}
              >
                <SaasCheckbox
                  checked={isSelected}
                  onChange={() => handleSelectRow(row.id)}
                  isDarkMode={isDarkMode}
                />
              </Box>
            )}

            {/* Data Cells */}
            {headers.map((header) => {
              const cellProps = renderCell ? renderCell(row, header, rowIndex) : {};
              return (
                <SaasTableCell
                  key={header.id}
                  width={header.width}
                  colour={striped && rowIndex % 2 === 1 ? 'grey' : 'white'}
                  align={header.align || 'left'}
                  isDarkMode={isDarkMode}
                  {...cellProps}
                  sx={{
                    flex: header.flex ? '1 0 0' : undefined,
                    ...cellProps.sx,
                  }}
                />
              );
            })}
          </Box>
        );
      })}

      {/* Empty State */}
      {sortedData.length === 0 && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 120,
            color: colors.textTertiary,
            fontFamily: 'Roboto, sans-serif',
            fontSize: 14,
          }}
        >
          No data available
        </Box>
      )}
    </Box>
  );
});

export { SaasDataTable };
