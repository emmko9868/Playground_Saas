/**
 * Data Import Table Data
 *
 * Manufacturing Management SaaS의 Data Import 페이지에서 사용하는
 * 테이블 데이터.
 *
 * Figma 디자인 기준 (node-id=4030-18547)
 *
 * 테이블 컬럼:
 * - Import ID: 가져오기 ID (하이퍼링크)
 * - Created Items: 생성된 항목 수
 * - Updated Items: 업데이트된 항목 수
 * - Description: 설명
 * - Supplier: 공급사
 * - Plant: 공장
 * - Imported by: 가져온 사용자 (아바타 + 이름)
 * - Import Date: 가져오기 날짜
 */

// ============================================================================
// Avatar Colors (사용자별 아바타 색상)
// ============================================================================

export const AVATAR_COLORS = {
  HS: '#F44336', // Haylie Saris - Red
  ES: '#2196F3', // Emerson Saris - Blue
  AW: '#795548', // Ashlynn Workman - Brown
  CL_RED: '#F44336', // Charlie Levin - Red
  CL_GREEN: '#4CAF50', // Charlie Levin - Green
};

// ============================================================================
// Table Headers
// ============================================================================

export const dataImportTableHeaders = [
  { id: 'importId', label: 'Import ID', sortable: true, width: 200 },
  { id: 'createdItems', label: 'Created Items', sortable: true, width: 200, align: 'right', flex: true },
  { id: 'updatedItems', label: 'Updated Items', sortable: true, width: 200, align: 'right', flex: true },
  { id: 'description', label: 'Description', sortable: false, width: 320 },
  { id: 'supplier', label: 'Supplier', sortable: true, width: 200, flex: true },
  { id: 'plant', label: 'Plant', sortable: true, width: 200, flex: true },
  { id: 'importedBy', label: 'Imported by', sortable: true, width: 200 },
  { id: 'importDate', label: 'Import Date', sortable: true, width: 200, flex: true },
];

// ============================================================================
// Table Data
// ============================================================================

export const dataImportTableData = [
  {
    id: 1,
    importId: 'Import -1111',
    createdItems: 120,
    updatedItems: 0,
    description: 'Airwrap gen 3',
    supplier: 'Supplier E',
    plant: 'Plant E',
    importedBy: {
      name: 'Haylie Saris',
      initials: 'HS',
      avatarColor: AVATAR_COLORS.HS,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 2,
    importId: 'Import -1112',
    createdItems: 222,
    updatedItems: 0,
    description: 'Dyson Spot+Scrub AI logo.',
    supplier: 'Supplier A',
    plant: 'Plant A',
    importedBy: {
      name: 'Emerson Saris',
      initials: 'ES',
      avatarColor: AVATAR_COLORS.ES,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 3,
    importId: 'Import -1113',
    createdItems: 200,
    updatedItems: 0,
    description: '-',
    supplier: 'Supplier B',
    plant: 'Plant C',
    importedBy: {
      name: 'Ashlynn Workman',
      initials: 'AW',
      avatarColor: AVATAR_COLORS.AW,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 4,
    importId: 'Import -1114',
    createdItems: 12,
    updatedItems: 12,
    description: 'Purifier Hot',
    supplier: 'Supplier A',
    plant: 'Plant E',
    importedBy: {
      name: 'Emerson Saris',
      initials: 'ES',
      avatarColor: AVATAR_COLORS.ES,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 5,
    importId: 'Import -1115',
    createdItems: 25,
    updatedItems: 23,
    description: 'HEPA Filter',
    supplier: 'Supplier B',
    plant: 'Plant C',
    importedBy: {
      name: 'Charlie Levin',
      initials: 'CL',
      avatarColor: AVATAR_COLORS.CL_RED,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 6,
    importId: 'Import -1116',
    createdItems: 34,
    updatedItems: 0,
    description: '-',
    supplier: 'Supplier E',
    plant: 'Plant E',
    importedBy: {
      name: 'Haylie Saris',
      initials: 'HS',
      avatarColor: AVATAR_COLORS.ES, // Blue variant
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 7,
    importId: 'Import -1117',
    createdItems: 189,
    updatedItems: 189,
    description: 'K-Carbon Filter',
    supplier: 'Supplier G',
    plant: 'Plant E',
    importedBy: {
      name: 'Charlie Levin',
      initials: 'CL',
      avatarColor: AVATAR_COLORS.CL_GREEN,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 8,
    importId: 'Import -1118',
    createdItems: 64,
    updatedItems: 0,
    description: '-',
    supplier: 'Supplier E',
    plant: 'Plant C',
    importedBy: {
      name: 'Emerson Saris',
      initials: 'ES',
      avatarColor: AVATAR_COLORS.ES,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 9,
    importId: 'Import -1119',
    createdItems: 25,
    updatedItems: 12,
    description: '-',
    supplier: 'Supplier G',
    plant: 'Plant A',
    importedBy: {
      name: 'Emerson Saris',
      initials: 'ES',
      avatarColor: AVATAR_COLORS.ES,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 10,
    importId: 'Import -1120',
    createdItems: 234,
    updatedItems: 23,
    description: '-',
    supplier: 'Supplier E',
    plant: 'Plant C',
    importedBy: {
      name: 'Charlie Levin',
      initials: 'CL',
      avatarColor: AVATAR_COLORS.CL_RED,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 11,
    importId: 'Import -1121',
    createdItems: 43,
    updatedItems: 0,
    description: '-',
    supplier: 'Supplier B',
    plant: 'Plant B',
    importedBy: {
      name: 'Ashlynn Workman',
      initials: 'AW',
      avatarColor: AVATAR_COLORS.AW,
    },
    importDate: '2024-12-12 01:23',
  },
  {
    id: 12,
    importId: 'Import -1122',
    createdItems: 675,
    updatedItems: 0,
    description: '-',
    supplier: 'Supplier A',
    plant: 'Plant A',
    importedBy: {
      name: 'Ashlynn Workman',
      initials: 'AW',
      avatarColor: AVATAR_COLORS.AW,
    },
    importDate: '2024-12-12 01:23',
  },
];

// ============================================================================
// Filter Options
// ============================================================================

export const supplierFilterOptions = [
  { value: 'all', label: 'All Suppliers' },
  { value: 'supplierA', label: 'Supplier A' },
  { value: 'supplierB', label: 'Supplier B' },
  { value: 'supplierE', label: 'Supplier E' },
  { value: 'supplierG', label: 'Supplier G' },
];

export const plantFilterOptions = [
  { value: 'all', label: 'All Plants' },
  { value: 'plantA', label: 'Plant A' },
  { value: 'plantB', label: 'Plant B' },
  { value: 'plantC', label: 'Plant C' },
  { value: 'plantE', label: 'Plant E' },
];

export const importerFilterOptions = [
  { value: 'all', label: 'All Importers' },
  { value: 'haylieSaris', label: 'Haylie Saris' },
  { value: 'emersonSaris', label: 'Emerson Saris' },
  { value: 'ashlynnWorkman', label: 'Ashlynn Workman' },
  { value: 'charlieLevin', label: 'Charlie Levin' },
];

// ============================================================================
// Default Export
// ============================================================================

export default {
  AVATAR_COLORS,
  dataImportTableHeaders,
  dataImportTableData,
  supplierFilterOptions,
  plantFilterOptions,
  importerFilterOptions,
};
