/**
 * 사이드바 메뉴 구조
 */
export const sidebarMenuSections = {
  Overview: {
    icon: 'general',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
      { id: 'workOrder', label: 'Projects', icon: 'workOrder' },
      { id: 'dataFamily', label: 'Clients', icon: 'moldFamily' },
      { id: 'device', label: 'Integrations', icon: 'sensor' },
      { id: 'dataImport', label: 'Import', icon: 'dataImport' },
      { id: 'listManagement', label: 'Templates', icon: 'lifeManagement' },
      { id: 'codeListCenter', label: 'Archive', icon: 'moldLibrary' },
    ],
  },
  Workspace: {
    icon: 'asset',
    items: [
      { id: 'toolingAudit', label: 'Activity Log', icon: 'toolingAudit' },
      { id: 'maintenancePlanner', label: 'Scheduler', icon: 'maintenancePlanner' },
    ],
  },
  Analytics: {
    icon: 'supplyChain',
    items: [
      { id: 'processChange', label: 'Changelog', icon: 'processChange' },
      { id: 'cycleTime', label: 'Time Tracker', icon: 'cycleTime' },
      { id: 'demandForecaster', label: 'Forecasting', icon: 'demandForecaster' },
      { id: 'capacity', label: 'Workload', icon: 'capacity' },
    ],
  },
  Reports: {
    icon: 'production',
    items: [
      { id: 'oeeCenter', label: 'Performance', icon: 'oeeCenter' },
      { id: 'rejectRate', label: 'Issue Rate', icon: 'rejectRate' },
    ],
  },
};

/**
 * 메뉴 ID → 라우트 매핑
 */
export const menuRoutes = {
  dashboard: '/',
  dataFamily: '/data-family',
  dataImport: '/data-import',
  workOrder: '/work-order',
};
