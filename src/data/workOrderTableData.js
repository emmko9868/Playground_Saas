/**
 * Work Order Table Data
 *
 * Manufacturing Management SaaS의 Work Order 페이지에서 사용하는
 * 테이블 데이터.
 *
 * Figma 디자인 기준 (node-id=2313-34368)
 *
 * 테이블 컬럼:
 * - Work Order ID: 작업지시 ID (하이퍼링크)
 * - Start Data: 시작일
 * - Due Date: 마감일
 * - Priority: 우선순위 (Low/Medium/High 칩)
 * - Type: 작업 유형 (General/C.M/PM)
 * - Created By: 생성자 (아바타 + 이름)
 * - Assigned To: 담당자 (아바타 + 이름)
 * - Status: 상태 (Request/Upcoming/Completed/Overdue)
 * - Action: 액션 (설정 아이콘)
 */

// ============================================================================
// Avatar Colors (사용자별 아바타 색상)
// ============================================================================

export const AVATAR_COLORS = {
  HS: '#F44336', // Haylie Saris - Red
  ES: '#2196F3', // Emerson Saris - Blue
  AW: '#795548', // Ashlynn Workman - Brown
  MV: '#FF9800', // Mira Vaccaro - Orange
  CL: '#4CAF50', // Charlie Levin - Green
};

// ============================================================================
// Table Headers
// ============================================================================

export const workOrderTableHeaders = [
  { id: 'workOrderId', label: 'Work Order ID', sortable: true, width: 180 },
  { id: 'startDate', label: 'Start Data', sortable: true, width: 160, flex: true },
  { id: 'dueDate', label: 'Due Date', sortable: true, width: 160, flex: true },
  { id: 'priority', label: 'Priority', sortable: true, width: 120 },
  { id: 'type', label: 'Type', sortable: true, width: 100, flex: true },
  { id: 'createdBy', label: 'Created By', sortable: true, width: 180 },
  { id: 'assignedTo', label: 'Assigned To', sortable: true, width: 180 },
  { id: 'status', label: 'Status', sortable: true, width: 120, flex: true },
  { id: 'action', label: 'Action', sortable: false, width: 80 },
];

// ============================================================================
// Table Data (Figma 디자인 행별 데이터 기준)
// ============================================================================

export const workOrderTableData = [
  {
    id: 1,
    workOrderId: 'WO-1111',
    startDate: '2024-12-12 01:23',
    dueDate: '2024-12-12 01:23',
    priority: 'low',
    type: 'General',
    createdBy: {
      name: 'Haylie Saris',
      initials: 'HS',
      avatarColor: AVATAR_COLORS.HS,
    },
    assignedTo: {
      name: 'Emerson Saris',
      initials: 'ES',
      avatarColor: AVATAR_COLORS.ES,
    },
    status: 'Request',
  },
  {
    id: 2,
    workOrderId: 'WO-1112',
    startDate: '2024-12-12 01:23',
    dueDate: '2024-12-12 01:23',
    priority: 'high',
    type: 'C.M',
    createdBy: {
      name: 'Haylie Saris',
      initials: 'HS',
      avatarColor: AVATAR_COLORS.HS,
    },
    assignedTo: {
      name: 'Emerson Saris',
      initials: 'ES',
      avatarColor: AVATAR_COLORS.ES,
    },
    status: 'Upcoming',
  },
  {
    id: 3,
    workOrderId: 'WO-1113',
    startDate: '2024-12-12 01:23',
    dueDate: '2024-12-12 01:23',
    priority: 'medium',
    type: 'C.M',
    createdBy: {
      name: 'Emerson Saris',
      initials: 'ES',
      avatarColor: AVATAR_COLORS.ES,
    },
    assignedTo: {
      name: 'Mira Vaccaro',
      initials: 'MV',
      avatarColor: AVATAR_COLORS.MV,
    },
    status: 'Request',
  },
  {
    id: 4,
    workOrderId: 'WO-1114',
    startDate: '2024-12-12 01:23',
    dueDate: '2024-12-12 01:23',
    priority: 'low',
    type: 'PM',
    createdBy: {
      name: 'Haylie Saris',
      initials: 'HS',
      avatarColor: AVATAR_COLORS.HS,
    },
    assignedTo: {
      name: 'Ashlynn Workman',
      initials: 'AW',
      avatarColor: AVATAR_COLORS.AW,
    },
    status: 'Upcoming',
  },
  {
    id: 5,
    workOrderId: 'WO-1115',
    startDate: '2024-12-12 01:23',
    dueDate: '2024-12-12 01:23',
    priority: 'low',
    type: 'General',
    createdBy: {
      name: 'Haylie Saris',
      initials: 'HS',
      avatarColor: AVATAR_COLORS.HS,
    },
    assignedTo: {
      name: 'Ashlynn Workman',
      initials: 'AW',
      avatarColor: AVATAR_COLORS.AW,
    },
    status: 'Upcoming',
  },
  {
    id: 6,
    workOrderId: 'WO-1116',
    startDate: '2024-12-12 01:23',
    dueDate: '2024-12-12 01:23',
    priority: 'high',
    type: 'C.M',
    createdBy: {
      name: 'Ashlynn Workman',
      initials: 'AW',
      avatarColor: AVATAR_COLORS.AW,
    },
    assignedTo: {
      name: 'Mira Vaccaro',
      initials: 'MV',
      avatarColor: AVATAR_COLORS.MV,
    },
    status: 'Completed',
  },
  {
    id: 7,
    workOrderId: 'WO-1117',
    startDate: '2024-12-12 01:23',
    dueDate: '2024-12-12 01:23',
    priority: 'medium',
    type: 'General',
    createdBy: {
      name: 'Mira Vaccaro',
      initials: 'MV',
      avatarColor: AVATAR_COLORS.MV,
    },
    assignedTo: {
      name: 'Charlie Levin',
      initials: 'CL',
      avatarColor: AVATAR_COLORS.CL,
    },
    status: 'Completed',
  },
  {
    id: 8,
    workOrderId: 'WO-1118',
    startDate: '2024-12-12 01:23',
    dueDate: '2024-12-12 01:23',
    priority: 'high',
    type: 'C.M',
    createdBy: {
      name: 'Charlie Levin',
      initials: 'CL',
      avatarColor: AVATAR_COLORS.CL,
    },
    assignedTo: {
      name: 'Emerson Saris',
      initials: 'ES',
      avatarColor: AVATAR_COLORS.ES,
    },
    status: 'Overdue',
  },
  {
    id: 9,
    workOrderId: 'WO-1119',
    startDate: '2024-12-12 01:23',
    dueDate: '2024-12-12 01:23',
    priority: 'medium',
    type: 'PM',
    createdBy: {
      name: 'Mira Vaccaro',
      initials: 'MV',
      avatarColor: AVATAR_COLORS.MV,
    },
    assignedTo: {
      name: 'Ashlynn Workman',
      initials: 'AW',
      avatarColor: AVATAR_COLORS.AW,
    },
    status: 'Completed',
  },
];

// ============================================================================
// Overview Dashboard Data
// ============================================================================

export const overviewSummary = [
  { label: 'Total', value: 220 },
  { label: 'Request', value: 10 },
  { label: 'Upcoming', value: 100 },
  { label: 'Completed', value: 60 },
  { label: 'Overdue', value: 50 },
];

// ============================================================================
// Filter Options
// ============================================================================

export const woTypeFilterOptions = [
  { value: 'all', label: 'All WO Types' },
  { value: 'general', label: 'General' },
  { value: 'cm', label: 'C.M' },
  { value: 'pm', label: 'PM' },
];

export const createdAssignedFilterOptions = [
  { value: 'all', label: 'Created/Assigned to all' },
  { value: 'haylieSaris', label: 'Haylie Saris' },
  { value: 'emersonSaris', label: 'Emerson Saris' },
  { value: 'ashlynnWorkman', label: 'Ashlynn Workman' },
  { value: 'miraVaccaro', label: 'Mira Vaccaro' },
  { value: 'charlieLevin', label: 'Charlie Levin' },
];

// ============================================================================
// Default Export
// ============================================================================

export default {
  AVATAR_COLORS,
  workOrderTableHeaders,
  workOrderTableData,
  overviewSummary,
  woTypeFilterOptions,
  createdAssignedFilterOptions,
};
