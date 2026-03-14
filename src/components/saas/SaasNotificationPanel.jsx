import { forwardRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { Mail, Bell, FileText, Wrench, Cog, History } from 'lucide-react';
import { SaasButton } from './SaasButton';
import { SaasNotificationCard } from './SaasNotificationCard';
import { SaasNotificationTab } from './SaasNotificationTab';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasNotificationPanel 컴포넌트
 *
 * Manufacturing Management SaaS 전용 알림 패널.
 * 헤더 + 사이드바 탭 + 알림 카드 목록으로 구성.
 *
 * Props:
 * @param {Array} notifications - 알림 데이터 배열 [Required]
 *   [{
 *     id: string,
 *     type: 'read' | 'unread',
 *     message: string,
 *     timestamp: string,
 *     avatarText: string,
 *     avatarSrc: string,
 *     avatarColor: string,
 *     category: string,
 *   }]
 * @param {string} selectedTab - 선택된 탭 ID [Optional, 기본값: 'all']
 * @param {function} onTabChange - 탭 변경 핸들러 [Optional]
 * @param {boolean} unreadOnly - 안읽음만 표시 여부 [Optional, 기본값: false]
 * @param {function} onUnreadOnlyChange - 안읽음 필터 변경 핸들러 [Optional]
 * @param {function} onNotificationClick - 알림 클릭 핸들러 [Optional]
 * @param {function} onMarkAllRead - 전체 읽음 처리 핸들러 [Optional]
 * @param {string} markAllReadLabel - 전체 읽음 버튼 라벨 [Optional, 기본값: 'Mark all read']
 * @param {number} width - 패널 너비 [Optional, 기본값: 476]
 * @param {number} height - 패널 높이 [Optional, 기본값: 1012 (1080px 화면 기준)]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasNotificationPanel
 *   notifications={notificationData}
 *   selectedTab="all"
 *   onTabChange={handleTabChange}
 *   onNotificationClick={handleNotificationClick}
 * />
 */

// 기본 탭 목록 (SaasIcons 가이드 기준)
const defaultTabs = [
  { id: 'all', label: 'All', icon: Mail },           // Unread → Mail
  { id: 'alert', label: 'Alert', icon: Bell },       // Alert Center → Bell
  { id: 'workorder', label: 'Work Order', icon: FileText }, // Work Order → FileText
  { id: 'note', label: 'Note', icon: FileText },     // Note → FileText
  { id: 'tooling', label: 'Tooling', icon: Wrench }, // Tooling → Wrench
  { id: 'machine', label: 'Machine', icon: Cog },    // Machine → Cog
  { id: 'history', label: 'History', icon: History }, // History Log → History
];

const SaasNotificationPanel = forwardRef(function SaasNotificationPanel({
  notifications = [],
  selectedTab = 'all',
  onTabChange,
  unreadOnly = false,
  onUnreadOnlyChange,
  onNotificationClick,
  onMarkAllRead,
  markAllReadLabel = 'Mark all read',
  tabs = defaultTabs,
  width = 476,
  height = 1012,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const [internalSelectedTab, setInternalSelectedTab] = useState(selectedTab);
  const [internalUnreadOnly, setInternalUnreadOnly] = useState(unreadOnly);

  const activeTab = onTabChange ? selectedTab : internalSelectedTab;
  const isUnreadOnly = onUnreadOnlyChange ? unreadOnly : internalUnreadOnly;

  const handleTabChange = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalSelectedTab(tabId);
    }
  };

  const handleUnreadOnlyChange = (event) => {
    const checked = event.target.checked;
    if (onUnreadOnlyChange) {
      onUnreadOnlyChange(checked);
    } else {
      setInternalUnreadOnly(checked);
    }
  };

  // 필터링된 알림 목록
  const filteredNotifications = notifications.filter((notification) => {
    // 탭 필터
    if (activeTab !== 'all' && notification.category !== activeTab) {
      return false;
    }
    // 안읽음 필터
    if (isUnreadOnly && notification.type !== 'unread') {
      return false;
    }
    return true;
  });

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width,
        height,
        backgroundColor: colors.surfaceBg,
        overflow: 'hidden',
        ...sx,
      }}
      {...props}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 60,
          px: 2,
          py: 1,
          backgroundColor: colors.pageBg,
          flexShrink: 0,
        }}
      >
        {/* Left: Title + Toggle */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          <Typography
            sx={{
              fontFamily: 'Helvetica Neue, sans-serif',
              fontSize: 14.66,
              fontWeight: 700,
              color: colors.textPrimary,
            }}
          >
            Notification
          </Typography>

          {/* Unread Only Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Switch
              checked={isUnreadOnly}
              onChange={handleUnreadOnlyChange}
              size="small"
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: colors.accentBlue,
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: colors.accentBlue,
                },
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 1.25,
                color: colors.textPrimary,
              }}
            >
              Unread Only
            </Typography>
          </Box>
        </Box>

        {/* Right: Mark all read button */}
        <SaasButton
          variant="ghost"
          size="small"
          onClick={onMarkAllRead}
        >
          {markAllReadLabel}
        </SaasButton>
      </Box>

      {/* Body */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Sidebar (Tabs) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 76,
            pt: 2.5,
            pb: 1,
            px: 1,
            gap: 2.5,
            backgroundColor: colors.surfaceBg,
            borderRight: `2px solid ${colors.divider}`,
            overflowY: 'auto',
            flexShrink: 0,
          }}
        >
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <SaasNotificationTab
                key={tab.id}
                status={activeTab === tab.id ? 'selected' : 'default'}
                label={tab.label}
                icon={<IconComponent />}
                isDarkMode={isDarkMode}
                onClick={() => handleTabChange(tab.id)}
              />
            );
          })}
        </Box>

        {/* Notification List */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {filteredNotifications.map((notification) => (
            <SaasNotificationCard
              key={notification.id}
              type={notification.type}
              message={notification.message}
              timestamp={notification.timestamp}
              avatarText={notification.avatarText}
              avatarSrc={notification.avatarSrc}
              avatarColor={notification.avatarColor}
              isDarkMode={isDarkMode}
              onClick={() => onNotificationClick?.(notification)}
            />
          ))}

          {/* Empty State */}
          {filteredNotifications.length === 0 && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                p: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: 14,
                  color: colors.textTertiary,
                }}
              >
                No notifications
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
});

export { SaasNotificationPanel, defaultTabs };
