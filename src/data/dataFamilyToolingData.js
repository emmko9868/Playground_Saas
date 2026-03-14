/**
 * Data Family - Tooling Tab Table Data
 *
 * Manufacturing Management SaaS의 Data Family > Tooling 탭에서 사용하는
 * 테이블 데이터.
 *
 * Figma 디자인 기준 (node-id=2313-33949)
 *
 * 테이블 컬럼:
 * - Tooling ID: 금형 ID (하이퍼링크) + 업데이트 날짜
 * - Part: 부품명 (하이퍼링크) + 부품 코드, 연관 부품 수
 * - Company: 회사명 (하이퍼링크) + 회사 코드
 * - Utilization Rate: 사용량/전체량 + 프로그레스 바 + 퍼센트
 * - Tooling Status: 금형 상태 (In Production / Sensor Offline / Inactive)
 * - Sensor Status: 센서 상태 (Installed / Detached / Not Installed)
 */

// ============================================================================
// Tooling Status 상수
// ============================================================================

export const TOOLING_STATUS = {
  IN_PRODUCTION: 'inProduction',
  SENSOR_OFFLINE: 'sensorOffline',
  INACTIVE: 'inactive',
};

export const TOOLING_STATUS_CONFIG = {
  [TOOLING_STATUS.IN_PRODUCTION]: {
    label: 'In Production',
    color: '#078F00',
  },
  [TOOLING_STATUS.SENSOR_OFFLINE]: {
    label: 'Sensor Offline',
    color: '#F92C2D',
  },
  [TOOLING_STATUS.INACTIVE]: {
    label: 'Inactive',
    color: '#AAAAAA',
  },
};

// ============================================================================
// Sensor Status 상수
// ============================================================================

export const SENSOR_STATUS = {
  INSTALLED: 'installed',
  DETACHED: 'detached',
  NOT_INSTALLED: 'notInstalled',
};

export const SENSOR_STATUS_CONFIG = {
  [SENSOR_STATUS.INSTALLED]: {
    label: 'Installed',
    chipStatus: 'low',
  },
  [SENSOR_STATUS.DETACHED]: {
    label: 'Detached',
    chipStatus: 'high',
  },
  [SENSOR_STATUS.NOT_INSTALLED]: {
    label: 'Not Installed',
    chipStatus: null,
  },
};

// ============================================================================
// Tab 정의
// ============================================================================

export const dataFamilyTabs = [
  { id: 'company', label: 'Company' },
  { id: 'plant', label: 'Plant' },
  { id: 'productCategory', label: 'Product & Category' },
  { id: 'part', label: 'Part' },
  { id: 'bom', label: 'BOM' },
  { id: 'tooling', label: 'Tooling' },
  { id: 'machine', label: 'Machine' },
];

// ============================================================================
// Table Headers
// ============================================================================

export const dataFamilyToolingHeaders = [
  { id: 'toolingId', label: 'Tooling ID', sortable: true, flex: 1 },
  { id: 'part', label: 'Part', sortable: true, flex: 1 },
  { id: 'company', label: 'Company', sortable: true, flex: 1 },
  { id: 'utilizationRate', label: 'Utilization Rate', sortable: true, flex: 1 },
  { id: 'toolingStatus', label: 'Tooling Status', sortable: true, flex: 1 },
  { id: 'sensorStatus', label: 'Sensor Status', sortable: true, flex: 1 },
];

// ============================================================================
// Table Data
// ============================================================================

export const dataFamilyToolingData = [
  {
    id: 1,
    toolingId: 'Tooling -1111',
    updatedDate: '2024-12-10',
    part: { name: 'SMALL CAP ELS', code: '12345', extraCount: 0 },
    company: { name: 'Berry Global', code: '1234' },
    utilizationRate: { current: 500000, total: 1000000, percentage: 50 },
    toolingStatus: TOOLING_STATUS.IN_PRODUCTION,
    sensorStatus: SENSOR_STATUS.INSTALLED,
  },
  {
    id: 2,
    toolingId: 'Tooling -1112',
    updatedDate: '2024-12-11',
    part: { name: 'Handle', code: 'EK-02', extraCount: 0 },
    company: { name: 'Trantow Klein', code: 'CP-001' },
    utilizationRate: { current: 200000, total: 1000000, percentage: 20 },
    toolingStatus: TOOLING_STATUS.IN_PRODUCTION,
    sensorStatus: SENSOR_STATUS.INSTALLED,
  },
  {
    id: 3,
    toolingId: 'Tooling -1113',
    updatedDate: '2024-12-14',
    part: { name: 'Agitator-001', code: 'T-3', extraCount: 0 },
    company: { name: 'Berry Global', code: '1234' },
    utilizationRate: { current: 900000, total: 1000000, percentage: 90 },
    toolingStatus: TOOLING_STATUS.SENSOR_OFFLINE,
    sensorStatus: SENSOR_STATUS.INSTALLED,
  },
  {
    id: 4,
    toolingId: 'Tooling -1114',
    updatedDate: '2024-12-23',
    part: { name: 'Handle', code: 'EK-02', extraCount: 0 },
    company: { name: 'Trantow Klein', code: 'CP-001' },
    utilizationRate: { current: 20000, total: 1000000, percentage: 20 },
    toolingStatus: TOOLING_STATUS.INACTIVE,
    sensorStatus: SENSOR_STATUS.NOT_INSTALLED,
  },
  {
    id: 5,
    toolingId: 'Tooling -1115',
    updatedDate: '2024-12-23',
    part: { name: 'Dryer Lid', code: 'ED-02', extraCount: 2 },
    company: { name: 'Daeyu', code: 'Daeyu' },
    utilizationRate: { current: 0, total: 1000000, percentage: 0 },
    toolingStatus: TOOLING_STATUS.SENSOR_OFFLINE,
    sensorStatus: SENSOR_STATUS.DETACHED,
  },
  {
    id: 6,
    toolingId: 'Tooling -1116',
    updatedDate: '2024-12-22',
    part: { name: 'Handle', code: 'EK-02', extraCount: 0 },
    company: { name: 'Berry Global', code: '1234' },
    utilizationRate: { current: 200000, total: 1000000, percentage: 20 },
    toolingStatus: TOOLING_STATUS.IN_PRODUCTION,
    sensorStatus: SENSOR_STATUS.INSTALLED,
  },
  {
    id: 7,
    toolingId: 'Tooling -1117',
    updatedDate: '2024-12-21',
    part: { name: 'SMALL CAP ELS', code: '12345', extraCount: 0 },
    company: { name: 'Daeyu', code: 'Daeyu' },
    utilizationRate: { current: 20000, total: 1000000, percentage: 20 },
    toolingStatus: TOOLING_STATUS.SENSOR_OFFLINE,
    sensorStatus: SENSOR_STATUS.DETACHED,
  },
  {
    id: 8,
    toolingId: 'Tooling -1118',
    updatedDate: '2024-12-10',
    part: { name: 'On/Off Switch', code: 'EK-06', extraCount: 2 },
    company: { name: 'Grady-Harris', code: 'CV-001' },
    utilizationRate: { current: 0, total: 1000000, percentage: 0 },
    toolingStatus: TOOLING_STATUS.INACTIVE,
    sensorStatus: SENSOR_STATUS.NOT_INSTALLED,
  },
  {
    id: 9,
    toolingId: 'Tooling -1119',
    updatedDate: '2024-12-03',
    part: { name: 'Exhaust Vent', code: 'ED-08', extraCount: 0 },
    company: { name: 'Berry Global', code: '1234' },
    utilizationRate: { current: 20000, total: 1000000, percentage: 20 },
    toolingStatus: TOOLING_STATUS.IN_PRODUCTION,
    sensorStatus: SENSOR_STATUS.INSTALLED,
  },
  {
    id: 10,
    toolingId: 'Tooling -1120',
    updatedDate: '2024-12-10',
    part: { name: 'Magnet', code: '205656', extraCount: 0 },
    company: { name: 'Grady-Harris', code: 'CV-001' },
    utilizationRate: { current: 800000, total: 1000000, percentage: 80 },
    toolingStatus: TOOLING_STATUS.IN_PRODUCTION,
    sensorStatus: SENSOR_STATUS.INSTALLED,
  },
  {
    id: 11,
    toolingId: 'Tooling -1121',
    updatedDate: '2024-12-10',
    part: { name: 'HousingHK', code: 'HK-001', extraCount: 0 },
    company: { name: 'Berry Global', code: '1234' },
    utilizationRate: { current: 80000, total: 1000000, percentage: 8 },
    toolingStatus: TOOLING_STATUS.INACTIVE,
    sensorStatus: SENSOR_STATUS.NOT_INSTALLED,
  },
  {
    id: 12,
    toolingId: 'Tooling -1122',
    updatedDate: '2024-12-10',
    part: { name: 'Magnet', code: '205656', extraCount: 0 },
    company: { name: 'Grady-Harris', code: 'CV-001' },
    utilizationRate: { current: 600000, total: 1000000, percentage: 60 },
    toolingStatus: TOOLING_STATUS.IN_PRODUCTION,
    sensorStatus: SENSOR_STATUS.INSTALLED,
  },
];

// ============================================================================
// Filter Options
// ============================================================================

export const viewFilterOptions = [
  { value: 'all', label: 'All (111)' },
  { value: 'inProduction', label: 'In Production' },
  { value: 'sensorOffline', label: 'Sensor Offline' },
  { value: 'inactive', label: 'Inactive' },
];

export const companyFilterOptions = [
  { value: 'all', label: 'All Companies' },
  { value: 'berryGlobal', label: 'Berry Global' },
  { value: 'trantowKlein', label: 'Trantow Klein' },
  { value: 'daeyu', label: 'Daeyu' },
  { value: 'gradyHarris', label: 'Grady-Harris' },
];

export const statusFilterOptions = [
  { value: 'all', label: 'All Statuses' },
  { value: 'inProduction', label: 'In Production' },
  { value: 'sensorOffline', label: 'Sensor Offline' },
  { value: 'inactive', label: 'Inactive' },
];

// ============================================================================
// Default Export
// ============================================================================

export default {
  TOOLING_STATUS,
  TOOLING_STATUS_CONFIG,
  SENSOR_STATUS,
  SENSOR_STATUS_CONFIG,
  dataFamilyTabs,
  dataFamilyToolingHeaders,
  dataFamilyToolingData,
  viewFilterOptions,
  companyFilterOptions,
  statusFilterOptions,
};
