/**
 * Data Import 4개 페이지(Page3~Page6)에서 공유되는 공통 데이터.
 */

/**
 * Progress Stepper 단계 (4단계)
 */
export const dataImportSteps = [
  { label: 'Type' },
  { label: 'Upload' },
  { label: 'Map' },
  { label: 'Details' },
];

/**
 * Feature 정의 (아이콘 제외 — JSX이므로 컴포넌트에서 매핑)
 */
export const dataImportFeatures = [
  {
    id: 'basicAssets',
    title: 'Basic Asset(s) Library',
    categoryCount: 1,
    fieldCount: 10,
  },
  {
    id: 'bom',
    title: 'BOM',
    categoryCount: 1,
    fieldCount: 8,
  },
  {
    id: 'oeeCenter',
    title: 'OEE Center',
    categoryCount: 1,
    fieldCount: 12,
  },
  {
    id: 'preventiveMaintenance',
    title: 'Preventive maintenance',
    categoryCount: 1,
    fieldCount: 15,
  },
  {
    id: 'toolingRating',
    title: 'Tooling Rating',
    categoryCount: 1,
    fieldCount: 6,
  },
];

/**
 * 기본 선택 Feature 이름 배열 (Page4 기본값)
 */
export const defaultSelectedFeatures = [
  'Basic Asset(s) Library',
  'BOM',
  'OEE Center',
  'Preventive maintenance',
  'Tooling Rating',
];

/**
 * Import/Update/Sync 위젯 설명 텍스트
 */
export const importWidgetDescriptions = {
  import: `Upload any CSV or XLSX file with the required information to digitalize your tooling.
By importing the data, the following features
will be enabled: Basic Asset(s) Library, BOM, OEE Center, Preventive maintenance, Tooling Rating.`,

  update: `When importing to update existing data, you do not need to include all the fields in your table within the import file. You can include only
the tooling id and the fields you want to update in your import file.`,

  sync: `Feel free to contact us, and our IT team will promptly assist with syncing eMoldino and
your company.`,
};

/**
 * Data Import 목록 페이지 View 필터 옵션
 */
export const dataImportViewFilterOptions = [
  { value: 'all', label: 'View All' },
  { value: 'recent', label: 'Recent' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
];
