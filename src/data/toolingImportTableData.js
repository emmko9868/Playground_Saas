/**
 * Tooling Import Table Data
 *
 * Manufacturing Management SaaS의 Tooling Import 테이블 데이터.
 *
 * Figma 디자인 기준:
 * - Import 2 (Missing Data): node-id=4030-22854
 * - Import 3 (Completed): node-id=4030-23226
 *
 * 테이블 컬럼:
 * - Tooling ID: 금형 ID (하이퍼링크)
 * - Category: 카테고리
 * - Row: 행 번호
 * - Column: 열 문자
 * - Reason: Import 상태 (Missing Data / Completed)
 * - Import as: 드롭다운 선택
 * - Import Date: 가져오기 날짜
 */

// ============================================================================
// Table Headers
// ============================================================================

export const toolingImportTableHeaders = [
  { id: 'toolingId', label: 'Tooling ID', sortable: true, width: 220 },
  { id: 'category', label: 'Category', sortable: true, width: 220 },
  { id: 'row', label: 'Row', sortable: true, width: 220 },
  { id: 'column', label: 'Column', sortable: true, width: 220 },
  { id: 'reason', label: 'Reason', sortable: true, width: 220 },
  { id: 'importAs', label: 'Import as', sortable: false, flex: true },
  { id: 'importDate', label: 'Import Date', sortable: true, width: 220 },
];

// ============================================================================
// Import 2 Data (Missing Data)
// ============================================================================

export const import2TableData = [
  {
    id: 1,
    toolingId: 'Tooling -1111',
    category: 'PM',
    row: '2',
    column: 'B',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 2,
    toolingId: 'Tooling -1111',
    category: 'PM',
    row: '2',
    column: 'G',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 3,
    toolingId: 'Tooling -1112',
    category: 'PM',
    row: '5',
    column: 'B',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 4,
    toolingId: 'Tooling -1114',
    category: 'PM',
    row: '6',
    column: 'B',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 5,
    toolingId: 'Tooling -1115',
    category: 'Tooling Rating',
    row: '7',
    column: 'G',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 6,
    toolingId: 'Tooling -1116',
    category: 'Tooling Rating',
    row: '7',
    column: 'B',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 7,
    toolingId: 'Tooling -1116',
    category: 'Tooling Rating',
    row: '9',
    column: 'F',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 8,
    toolingId: 'Tooling -1118',
    category: 'OEE Center',
    row: '9',
    column: 'F',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 9,
    toolingId: 'Tooling -1118',
    category: 'Tooling Rating',
    row: '9',
    column: 'F',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 10,
    toolingId: 'Tooling -1120',
    category: 'OEE Center',
    row: '11',
    column: 'F',
    reason: 'missing',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
];

// ============================================================================
// Import 3 Data (Completed)
// ============================================================================

export const import3TableData = [
  {
    id: 1,
    toolingId: 'Tooling -1111',
    category: 'PM',
    row: '2',
    column: 'B',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 2,
    toolingId: 'Tooling -1111',
    category: 'PM',
    row: '2',
    column: 'G',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 3,
    toolingId: 'Tooling -1112',
    category: 'PM',
    row: '3',
    column: 'B',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 4,
    toolingId: 'Tooling -1114',
    category: 'PM',
    row: '5',
    column: 'B',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 5,
    toolingId: 'Tooling -1115',
    category: 'Tooling Rating',
    row: '6',
    column: 'G',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 6,
    toolingId: 'Tooling -1116',
    category: 'Tooling Rating',
    row: '7',
    column: 'B',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 7,
    toolingId: 'Tooling -1116',
    category: 'Tooling Rating',
    row: '7',
    column: 'F',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 8,
    toolingId: 'Tooling -1118',
    category: 'OEE Center',
    row: '9',
    column: 'F',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 9,
    toolingId: 'Tooling -1118',
    category: 'Tooling Rating',
    row: '9',
    column: 'F',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
  {
    id: 10,
    toolingId: 'Tooling -1120',
    category: 'OEE Center',
    row: '11',
    column: 'F',
    reason: 'completed',
    importAs: null,
    importDate: '2024-12-12 01:23',
  },
];

// ============================================================================
// Dropdown Options
// ============================================================================

export const importAsOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

// ============================================================================
// Default Export
// ============================================================================

export default {
  toolingImportTableHeaders,
  import2TableData,
  import3TableData,
  importAsOptions,
};
