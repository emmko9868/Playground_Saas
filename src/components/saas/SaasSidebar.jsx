import { useState, forwardRef, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Plug,
  Download,
  FileText,
  Archive,
  Activity,
  Calendar,
  BarChart3,
  AlertCircle,
  GitBranch,
  Clock,
  TrendingUp,
  Layers,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  PieChart,
  LineChart,
} from 'lucide-react';
import { getColors } from '../../data/darkModeColors';

/**
 * 메뉴 아이콘 매핑
 */
const iconMap = {
  dashboard: LayoutDashboard,
  workOrder: FolderKanban,
  moldFamily: Users,
  sensor: Plug,
  dataImport: Download,
  lifeManagement: FileText,
  moldLibrary: Archive,
  asset: Briefcase,
  production: PieChart,
  supplyChain: LineChart,
  general: LayoutDashboard,
  toolingAudit: Activity,
  maintenancePlanner: Calendar,
  oeeCenter: BarChart3,
  rejectRate: AlertCircle,
  processChange: GitBranch,
  cycleTime: Clock,
  demandForecaster: TrendingUp,
  capacity: Layers,
};

/**
 * 기본 메뉴 구조
 */
const defaultMenuSections = {
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
  Reports: {
    icon: 'production',
    items: [
      { id: 'oeeCenter', label: 'Performance', icon: 'oeeCenter' },
      { id: 'rejectRate', label: 'Issue Rate', icon: 'rejectRate' },
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
};

/**
 * SaasSidebar 컴포넌트
 *
 * Manufacturing Management SaaS 전용 사이드바.
 * 확장/축소 상태 지원, 섹션별 메뉴 그룹핑.
 *
 * Props:
 * @param {boolean} isExpanded - 사이드바 확장 상태 [Optional, 기본값: true]
 * @param {function} onToggle - 확장/축소 토글 핸들러 [Optional]
 * @param {string} activeSection - 현재 활성화된 섹션 [Optional, 기본값: 'General']
 * @param {string} activeItem - 현재 활성화된 메뉴 아이템 ID [Optional]
 * @param {function} onItemClick - 메뉴 아이템 클릭 핸들러 [Optional]
 * @param {function} onSectionChange - 섹션 변경 핸들러 [Optional]
 * @param {object} menuSections - 커스텀 메뉴 구조 [Optional]
 * @param {number} expandedWidth - 확장 시 너비 [Optional, 기본값: 320]
 * @param {number} collapsedWidth - 축소 시 너비 [Optional, 기본값: 72]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasSidebar
 *   isExpanded={true}
 *   activeSection="General"
 *   activeItem="dashboard"
 *   onItemClick={(item) => console.log(item)}
 * />
 */
const SaasSidebar = forwardRef(function SaasSidebar({
  isExpanded = true,
  onToggle,
  activeSection = 'Overview',
  activeItem,
  onItemClick,
  onSectionChange,
  menuSections = defaultMenuSections,
  expandedWidth = 320,
  collapsedWidth = 72,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const isNature = isDarkMode === 'nature';
  const isCosmic = isDarkMode === 'cosmic';
  const isObsidian = isDarkMode === 'obsidian';
  const [openSections, setOpenSections] = useState({ [activeSection]: true });
  // Collapsed dropdown state
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const [dropdownSection, setDropdownSection] = useState(null);
  const sectionRefs = useRef({});

  const handleSectionToggle = (section) => {
    if (isExpanded) {
      // Expanded: toggle collapse
      setOpenSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
      if (onSectionChange) {
        onSectionChange(section);
      }
    } else {
      // Collapsed: show dropdown
      const anchorEl = sectionRefs.current[section];
      if (dropdownSection === section && dropdownAnchor) {
        // Close if already open
        setDropdownAnchor(null);
        setDropdownSection(null);
      } else {
        setDropdownAnchor(anchorEl);
        setDropdownSection(section);
      }
    }
  };

  const handleDropdownClose = () => {
    setDropdownAnchor(null);
    setDropdownSection(null);
  };

  const handleItemClick = (item) => {
    handleDropdownClose();
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || LayoutDashboard;
    return IconComponent;
  };

  const sidebarWidth = isExpanded ? expandedWidth : collapsedWidth;
  const isDropdownOpen = Boolean(dropdownAnchor);

  return (
    <Box
      ref={ref}
      component="aside"
      sx={{
        width: sidebarWidth,
        minWidth: sidebarWidth,
        height: '100%',
        backgroundColor: colors.sidebarBg,
        borderRight: isNature
          ? '1px solid rgba(255, 255, 255, 0.5)'
          : `2px solid ${colors.sidebarBorder}`,
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.2s ease-in-out, min-width 0.2s ease-in-out, background-color 0.4s ease, border-color 0.4s ease',
        overflow: 'hidden',
        ...(isNature && {
          backdropFilter: 'blur(40px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(40px) saturate(1.8)',
          boxShadow: '4px 0 24px rgba(0, 50, 20, 0.06)',
        }),
        ...(isCosmic && {
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }),
        ...(isObsidian && {
          borderRight: `1.5px solid ${colors.sidebarBorder}`,
        }),
        ...sx,
      }}
      {...props}
    >
      {/* Menu Content */}
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          py: 2.5,
        }}
      >
        {Object.entries(menuSections).map(([sectionName, section], index, arr) => {
          const SectionIcon = getIcon(section.icon);
          const isSectionOpen = openSections[sectionName];
          const isSectionActive = activeSection === sectionName;
          const isLastSection = index === arr.length - 1;

          return (
            <Box key={sectionName} sx={{ mb: isExpanded ? 1 : 0.5 }}>
              {/* Section Header */}
              <ListItemButton
                onClick={() => handleSectionToggle(sectionName)}
                sx={{
                  height: 48,
                  px: isExpanded ? 2.5 : 0,
                  justifyContent: isExpanded ? 'flex-start' : 'center',
                  '&:hover': {
                    backgroundColor: isExpanded ? colors.accentBlueHover : 'transparent',
                  },
                }}
              >
                {isExpanded ? (
                  <>
                    <ListItemIcon sx={{ minWidth: 40, color: colors.accentBlue }}>
                      <SectionIcon size={24} />
                    </ListItemIcon>
                    <ListItemText
                      primary={sectionName}
                      primaryTypographyProps={{
                        fontWeight: 700,
                        fontSize: 16,
                        color: colors.accentBlue,
                      }}
                    />
                    {isSectionOpen ? (
                      <ChevronUp size={20} color={colors.accentBlue} />
                    ) : (
                      <ChevronDown size={20} color={colors.accentBlue} />
                    )}
                  </>
                ) : (
                  <Box
                    ref={(el) => { sectionRefs.current[sectionName] = el; }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: 64,
                      height: 48,
                      px: 1,
                      backgroundColor: (dropdownSection === sectionName && isDropdownOpen) || isSectionActive
                        ? colors.accentBlueBg
                        : colors.sidebarBg,
                      '&:hover': {
                        backgroundColor: colors.accentBlueBg,
                      },
                    }}
                  >
                    <Box sx={{ color: isSectionActive || (dropdownSection === sectionName && isDropdownOpen) ? colors.accentBlue : colors.textTertiary }}>
                      <SectionIcon size={24} />
                    </Box>
                    <ChevronRight size={20} color={isSectionActive || (dropdownSection === sectionName && isDropdownOpen) ? colors.accentBlue : colors.textTertiary} />
                  </Box>
                )}
              </ListItemButton>

              {/* Section Items (Expanded) */}
              {isExpanded && (
                <Collapse in={isSectionOpen} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {section.items.map((item) => {
                      const ItemIcon = getIcon(item.icon);
                      const isActive = activeItem === item.id;

                      return (
                        <ListItem key={item.id} disablePadding>
                          <ListItemButton
                            onClick={() => handleItemClick(item)}
                            sx={{
                              height: 48,
                              pl: 5,
                              pr: 2.5,
                              backgroundColor: isActive
                                ? colors.accentBlueActive
                                : 'transparent',
                              '&:hover': {
                                backgroundColor: colors.accentBlueHover,
                              },
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 40,
                                color: isActive ? colors.accentBlue : colors.textTertiary,
                              }}
                            >
                              <ItemIcon size={24} />
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 16,
                                fontWeight: isActive ? 500 : 400,
                                color: isActive ? colors.accentBlue : colors.textPrimary,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              )}

              {/* Divider between sections (Collapsed) */}
              {!isExpanded && !isLastSection && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 0.5,
                  }}
                >
                  <Divider sx={{ width: 60, borderColor: colors.divider }} />
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {/* Collapsed Dropdown Popover */}
      <Popover
        open={isDropdownOpen}
        anchorEl={dropdownAnchor}
        onClose={handleDropdownClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 0,
              ml: 0.5,
              border: `2px solid ${colors.divider}`,
              backgroundColor: colors.sidebarBg,
              borderRadius: 0,
              boxShadow: 'none',
              minWidth: 280,
            },
          },
        }}
      >
        {dropdownSection && menuSections[dropdownSection] && (
          <Box sx={{ py: 1, px: 1.5 }}>
            {/* Section Title */}
            <Box sx={{ px: 2.5, py: 1.5 }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: 700,
                  fontSize: 16,
                  color: colors.accentBlue,
                }}
              >
                {dropdownSection}
              </Typography>
            </Box>

            {/* Menu Items */}
            <List disablePadding>
              {menuSections[dropdownSection].items.map((item) => {
                const ItemIcon = getIcon(item.icon);
                const isActive = activeItem === item.id;

                return (
                  <ListItem key={item.id} disablePadding>
                    <ListItemButton
                      onClick={() => handleItemClick(item)}
                      sx={{
                        height: 48,
                        px: 2.5,
                        backgroundColor: isActive ? colors.accentBlueBg : 'transparent',
                        '&:hover': {
                          backgroundColor: colors.accentBlueBg,
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          color: colors.accentBlue,
                        }}
                      >
                        <ItemIcon size={24} />
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontFamily: 'Roboto, sans-serif',
                          fontSize: 16,
                          fontWeight: 400,
                          color: colors.accentBlue,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        )}
      </Popover>

      {/* Toggle Button & Footer */}
      <Box
        sx={{
          borderTop: `1px solid ${colors.divider}`,
          py: 1.5,
          px: isExpanded ? 2.5 : 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isExpanded ? 'flex-start' : 'center',
        }}
      >
        <IconButton
          onClick={onToggle}
          size="small"
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          sx={{
            color: colors.textTertiary,
            '&:hover': {
              color: colors.accentBlue,
              backgroundColor: colors.accentBlueHover,
            },
          }}
        >
          {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </IconButton>
        {isExpanded && (
          <Typography
            variant="caption"
            sx={{
              ml: 1,
              color: colors.textTertiary,
              fontSize: 12,
            }}
          >
            Collapse
          </Typography>
        )}
      </Box>

      {/* Copyright */}
      {isExpanded && (
        <Box sx={{ px: 2.5, pb: 2 }}>
          <Typography
            variant="caption"
            sx={{
              color: colors.copyright,
              fontSize: 11,
            }}
          >
            Copyright 2024. nexflow.io
          </Typography>
        </Box>
      )}
    </Box>
  );
});

export { SaasSidebar, defaultMenuSections };
