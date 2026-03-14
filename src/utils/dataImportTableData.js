/**
 * Data Import 테이블 데이터
 *
 * Page 5 (Map 단계)와 Page 6 (Details 단계)에서 사용하는
 * 데이터 테이블의 컬럼 정의, 행 데이터, 드롭다운 옵션을 관리한다.
 *
 * Figma 디자인 기준:
 * - Page 5 (에러 상태): node-id=4030-22854
 * - Page 6 (완료 상태): node-id=4030-23226
 */

/**
 * 테이블 컬럼 정의
 *
 * 7개 컬럼으로 구성:
 * - Tooling ID: 하이퍼링크 타입 (파란색 텍스트)
 * - Category, Row, Column, Import Date: 일반 텍스트 타입
 * - Reason: 상태 표시 타입 (에러/완료)
 * - Import as: 드롭다운 타입
 */
export const DATA_IMPORT_COLUMNS = [
  {
    key: 'toolingId',
    header: 'Tooling ID',
    sortable: true,
    type: 'hyperlink',
    width: 220,
  },
  {
    key: 'category',
    header: 'Category',
    sortable: true,
    type: 'text',
    width: 220,
  },
  {
    key: 'row',
    header: 'Row',
    sortable: true,
    type: 'text',
    width: 220,
  },
  {
    key: 'column',
    header: 'Column',
    sortable: true,
    type: 'text',
    width: 220,
  },
  {
    key: 'reason',
    header: 'Reason',
    sortable: true,
    type: 'importStatus',
    width: 220,
  },
  {
    key: 'importAs',
    header: 'Import as',
    sortable: false,
    type: 'dropdown',
    flex: 1,
  },
  {
    key: 'importDate',
    header: 'Import Date',
    sortable: true,
    type: 'text',
    width: 220,
  },
];

/**
 * Reason 상태 타입 정의
 *
 * - missingData: 필수 데이터 누락 (빨간 아이콘 + 빨간 텍스트, 배경 #FFEEEE)
 * - incorrectFormatting: 데이터 형식 오류 (빨간 아이콘 + 빨간 텍스트, 배경 #FFEEEE)
 * - invalidDataType: 데이터 타입 불일치 (빨간 아이콘 + 빨간 텍스트, 배경 #FFEEEE)
 * - completed: 매핑 완료 (초록 체크 아이콘 + 초록 텍스트, 배경 #EBF6EB)
 */
export const REASON_TYPES = {
  missingData: {
    label: 'Missing Data',
    color: '#F92C2D',
    backgroundColor: '#FFEEEE',
    icon: 'error',
  },
  incorrectFormatting: {
    label: 'Incorrect Formatting',
    color: '#F92C2D',
    backgroundColor: '#FFEEEE',
    icon: 'error',
  },
  invalidDataType: {
    label: 'Invalid Data Type',
    color: '#F92C2D',
    backgroundColor: '#FFEEEE',
    icon: 'error',
  },
  completed: {
    label: 'Completed',
    color: '#078F00',
    backgroundColor: '#EBF6EB',
    icon: 'success',
  },
};

/**
 * Import as 드롭다운 옵션 (매핑 전 - Page 5)
 *
 * 카테고리별 드롭다운 옵션. 사용자가 업로드한 데이터를
 * 시스템의 어떤 속성으로 매핑할지 선택한다.
 */
export const IMPORT_AS_OPTIONS = [
  { value: 'supplierProperties', label: 'Supplier properties' },
  { value: 'languageProperties', label: 'Language properties' },
  { value: 'partProperties', label: 'Part properties' },
];

/**
 * Import as 드롭다운 옵션 (매핑 후 - Page 6)
 *
 * 매핑이 완료된 후 실제 값이 표시되는 옵션.
 */
export const IMPORT_AS_MAPPED_OPTIONS = [
  { value: 'supplierA', label: 'Supplier A' },
  { value: 'korean', label: 'Korean' },
  { value: 'partB', label: 'Part B' },
];

/**
 * Page 5 테이블 데이터 (Map 단계 - 에러 상태)
 *
 * Figma node-id=4030-22854
 * 업로드된 파일에서 발견된 데이터 이슈 목록.
 * 사용자가 "Import as" 드롭다운으로 매핑을 수정해야 한다.
 */
export const DATA_IMPORT_ERROR_ROWS = [
  {
    id: 'row-1',
    toolingId: 'Tooling -1111',
    category: 'PM',
    row: '2',
    column: 'B',
    reason: 'missingData',
    importAs: 'supplierProperties',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-2',
    toolingId: 'Tooling -1111',
    category: 'PM',
    row: '2',
    column: 'G',
    reason: 'incorrectFormatting',
    importAs: 'languageProperties',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-3',
    toolingId: 'Tooling -1112',
    category: 'PM',
    row: '5',
    column: 'B',
    reason: 'missingData',
    importAs: 'supplierProperties',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-4',
    toolingId: 'Tooling -1114',
    category: 'PM',
    row: '6',
    column: 'B',
    reason: 'missingData',
    importAs: 'supplierProperties',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-5',
    toolingId: 'Tooling -1115',
    category: 'Tooling Rating',
    row: '7',
    column: 'G',
    reason: 'incorrectFormatting',
    importAs: 'languageProperties',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-6',
    toolingId: 'Tooling -1116',
    category: 'Tooling Rating',
    row: '7',
    column: 'B',
    reason: 'missingData',
    importAs: 'supplierProperties',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-7',
    toolingId: 'Tooling -1116',
    category: 'Tooling Rating',
    row: '9',
    column: 'F',
    reason: 'invalidDataType',
    importAs: 'partProperties',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-8',
    toolingId: 'Tooling -1118',
    category: 'OEE Center',
    row: '9',
    column: 'F',
    reason: 'invalidDataType',
    importAs: 'partProperties',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-9',
    toolingId: 'Tooling -1118',
    category: 'Tooling Rating',
    row: '9',
    column: 'F',
    reason: 'invalidDataType',
    importAs: 'partProperties',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-10',
    toolingId: 'Tooling -1120',
    category: 'OEE Center',
    row: '11',
    column: 'F',
    reason: 'invalidDataType',
    importAs: 'partProperties',
    importDate: '2024-12-12 01:23',
  },
];

/**
 * Page 6 테이블 데이터 (Details 단계 - 완료 상태)
 *
 * Figma node-id=4030-23226
 * 모든 데이터 매핑이 완료된 상태. Reason이 모두 "Completed".
 * Import as에 실제 매핑된 값이 표시된다.
 */
export const DATA_IMPORT_COMPLETED_ROWS = [
  {
    id: 'row-1',
    toolingId: 'Tooling -1111',
    category: 'PM',
    row: '2',
    column: 'B',
    reason: 'completed',
    importAs: 'supplierA',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-2',
    toolingId: 'Tooling -1111',
    category: 'PM',
    row: '2',
    column: 'G',
    reason: 'completed',
    importAs: 'korean',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-3',
    toolingId: 'Tooling -1112',
    category: 'PM',
    row: '3',
    column: 'B',
    reason: 'completed',
    importAs: 'supplierA',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-4',
    toolingId: 'Tooling -1114',
    category: 'PM',
    row: '5',
    column: 'B',
    reason: 'completed',
    importAs: 'supplierA',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-5',
    toolingId: 'Tooling -1115',
    category: 'Tooling Rating',
    row: '6',
    column: 'G',
    reason: 'completed',
    importAs: 'korean',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-6',
    toolingId: 'Tooling -1116',
    category: 'Tooling Rating',
    row: '7',
    column: 'B',
    reason: 'completed',
    importAs: 'supplierA',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-7',
    toolingId: 'Tooling -1116',
    category: 'Tooling Rating',
    row: '7',
    column: 'F',
    reason: 'completed',
    importAs: 'partB',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-8',
    toolingId: 'Tooling -1118',
    category: 'OEE Center',
    row: '9',
    column: 'F',
    reason: 'completed',
    importAs: 'partB',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-9',
    toolingId: 'Tooling -1118',
    category: 'Tooling Rating',
    row: '9',
    column: 'F',
    reason: 'completed',
    importAs: 'partB',
    importDate: '2024-12-12 01:23',
  },
  {
    id: 'row-10',
    toolingId: 'Tooling -1120',
    category: 'OEE Center',
    row: '11',
    column: 'F',
    reason: 'completed',
    importAs: 'partB',
    importDate: '2024-12-12 01:23',
  },
];

/**
 * Import as 값 → 표시 라벨 매핑 헬퍼
 *
 * @param {string} value - importAs 값 (예: 'supplierProperties', 'supplierA')
 * @param {Array} options - 드롭다운 옵션 배열
 * @returns {string} 표시용 라벨
 */
export const getImportAsLabel = (value, options) => {
  const option = options.find((opt) => opt.value === value);
  return option ? option.label : value;
};

/**
 * Reason 값 → 표시 정보 매핑 헬퍼
 *
 * @param {string} reasonKey - reason 키 (예: 'missingData', 'completed')
 * @returns {object} { label, color, backgroundColor, icon }
 */
export const getReasonInfo = (reasonKey) => {
  return REASON_TYPES[reasonKey] || REASON_TYPES.missingData;
};
