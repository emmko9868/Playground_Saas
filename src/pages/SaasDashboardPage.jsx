import { forwardRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Sun, Moon, Sparkles, TreePine, Gem, CloudSun } from 'lucide-react';
import { SaasGNB } from '../components/saas/SaasGNB';
import { SaasSidebar } from '../components/saas/SaasSidebar';
import { SaasLnb } from '../components/saas/SaasLnb';
import { SaasOverviewDashboard } from '../components/saas/SaasOverviewDashboard';
import { sidebarMenuSections, menuRoutes } from '../data/sidebarMenuData';
import { getColors } from '../data/darkModeColors';

/**
 * SaasDashboardPage 컴포넌트
 *
 * Manufacturing Management SaaS Overview Dashboard 페이지.
 * Figma 디자인 (node-id=2313-37734) 기준.
 *
 * 구성:
 * - SaasGNB: 상단 글로벌 네비게이션 바
 * - SaasSidebar: 좌측 사이드바 메뉴
 * - SaasLnb: 페이지별 로컬 네비게이션 바
 * - SaasOverviewDashboard: 8개 차트 위젯 그룹
 *
 * Props:
 * @param {string} companyName - 회사명 [Optional, 기본값: 'dyson']
 * @param {string} language - 현재 언어 [Optional, 기본값: 'English']
 * @param {function} onLanguageChange - 언어 변경 핸들러 [Optional]
 * @param {function} onMenuChange - 메뉴 선택 핸들러 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasDashboardPage companyName="dyson" />
 */
const SaasDashboardPage = forwardRef(function SaasDashboardPage({
  companyName = 'nexflow',
  language = 'English',
  onLanguageChange,
  onMenuChange,
  sx,
  ...props
}, ref) {
  const navigate = useNavigate();

  // Display mode: false(라이트) | true(다크) | 'cosmic'(코즈믹) | 'nature'(네이처) | 'obsidian'(옵시디언) | 'zen'(젠)
  const [displayMode, setDisplayMode] = useState('cosmic');
  const colors = getColors(displayMode);
  const isCosmic = displayMode === 'cosmic';
  const isNature = displayMode === 'nature';
  const isObsidian = displayMode === 'obsidian';
  const isZen = displayMode === 'zen';
  const isGlass = isCosmic || isNature || isZen;  // 글래스모피즘 적용 모드
  const isDarkMode = displayMode;

  // Sidebar state
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState('Overview');
  const [selectedMenu, setSelectedMenu] = useState('dashboard');

  // LNB state
  const [dateRange, setDateRange] = useState('last7');
  const [appliedFilterCount] = useState(1);

  const handleSidebarToggle = () => {
    setSidebarExpanded((prev) => !prev);
  };

  const handleMenuSelect = (item) => {
    // 라우트가 매핑된 메뉴는 페이지 이동
    if (menuRoutes[item.id]) {
      navigate(menuRoutes[item.id]);
      return;
    }
    setSelectedMenu(item.id);
    // 해당 아이템이 속한 섹션 찾기
    Object.entries(sidebarMenuSections).forEach(([sectionName, section]) => {
      if (section.items.some((i) => i.id === item.id)) {
        setActiveSection(sectionName);
      }
    });
    if (onMenuChange) {
      onMenuChange(item.id);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: colors.pageBg,
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-color 0.4s ease',
        ...sx,
      }}
      {...props}
    >
      {/* 코즈믹 오로라 배경 효과 */}
      {isCosmic && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at 50% -10%, rgba(139, 92, 246, 0.35) 0%, rgba(168, 85, 247, 0.18) 25%, rgba(192, 38, 211, 0.08) 45%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      )}

      {/* 네이처 스카이 배경 효과 */}
      {isNature && (
        <>
          {/* 메인 하늘 + 초원 그라데이션 */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                linear-gradient(180deg,
                  #5BA3E6 0%,
                  #7BB8ED 12%,
                  #9ECDF5 25%,
                  #C1E2FA 38%,
                  #DAEEF8 48%,
                  #E2F0D9 56%,
                  #A8D88A 68%,
                  #7CC45E 78%,
                  #5AAF3A 88%,
                  #4A9930 100%
                )
              `,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          {/* 구름/안개 효과 — 부드러운 대기감 */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(ellipse at 20% 20%, rgba(255, 255, 255, 0.35) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
                radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)
              `,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        </>
      )}
      {/* 젠 파스텔 그라데이션 배경 효과 */}
      {isZen && (
        <>
          {/* 레인보우 탑 바 */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: 5,
              background: 'linear-gradient(90deg, #f0c6d4 0%, #c4d7f5 25%, #a8d8ea 50%, #f5deb3 75%, #f0c6d4 100%)',
              zIndex: 9999,
            }}
          />
          {/* 메인 파스텔 그라데이션 */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(160deg, #f0eafc 0%, #e6f2fc 30%, #fce4ec 55%, #fef9e7 80%, #e8f0fe 100%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
          {/* 블롭 데코레이션 */}
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              zIndex: 0,
              '&::before': {
                content: '""',
                position: 'absolute',
                width: 320,
                height: 320,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(180,160,240,0.25) 0%, transparent 70%)',
                bottom: '-2%',
                right: '5%',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                width: 260,
                height: 260,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(140,210,240,0.2) 0%, transparent 70%)',
                top: '15%',
                right: '20%',
              },
            }}
          />
        </>
      )}

      {/* GNB */}
      <SaasGNB
        companyName={companyName}
        userType=""
        language={language}
        onLanguageChange={onLanguageChange}
        isDarkMode={isDarkMode}
      />

      {/* Main Content Area */}
      <Box sx={{ display: 'flex', flex: 1, position: 'relative', zIndex: 1 }}>
        {/* Sidebar */}
        <SaasSidebar
          isExpanded={sidebarExpanded}
          onToggle={handleSidebarToggle}
          activeSection={activeSection}
          activeItem={selectedMenu}
          onItemClick={handleMenuSelect}
          onSectionChange={handleSectionChange}
          menuSections={sidebarMenuSections}
          isDarkMode={isDarkMode}
          sx={{
            position: 'sticky',
            top: 80,
            height: 'calc(100vh - 80px)',
          }}
        />

        {/* Content */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: 'calc(100vh - 80px)',
            overflowY: 'auto',
          }}
        >
          {/* LNB - 스크롤 시에도 상단 고정 */}
          <Box
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              width: '100%',
              backgroundColor: colors.lnbBg,
              flexShrink: 0,
              ...(isGlass && {
                backdropFilter: isNature
                  ? 'blur(40px) saturate(1.8)'
                  : isZen
                    ? 'blur(24px) saturate(1.6)'
                    : 'blur(16px)',
                WebkitBackdropFilter: isNature
                  ? 'blur(40px) saturate(1.8)'
                  : isZen
                    ? 'blur(24px) saturate(1.6)'
                    : 'blur(16px)',
                borderBottom: isCosmic
                  ? '1px solid rgba(140, 100, 255, 0.1)'
                  : '1px solid rgba(255, 255, 255, 0.4)',
              }),
              ...(isObsidian && {
                borderBottom: '1.5px solid #2A2520',
              }),
            }}
          >
            <SaasLnb
              type="dashboard"
              appliedFilterCount={appliedFilterCount}
              dateRangeValue={dateRange}
              onDateRangeChange={setDateRange}
              isDarkMode={isDarkMode}
            />
          </Box>

          {/* Dashboard Content - 20px 패딩 */}
          <Box
            sx={{
              flex: 1,
              p: '20px',
            }}
          >
            <SaasOverviewDashboard isDarkMode={isDarkMode} />
          </Box>
        </Box>
      </Box>

      {/* 스타일 모드 전환 플로팅 칩 */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          left: '50%',
          zIndex: 1200,
          '@keyframes floatUpDown': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0px)' },
            '50%': { transform: 'translateX(-50%) translateY(-8px)' },
          },
          animation: 'floatUpDown 3s ease-in-out infinite',
          display: 'flex',
          gap: 0.5,
          p: 0.5,
          borderRadius: '999px',
          backgroundColor: isCosmic
            ? 'rgba(25, 15, 55, 0.85)'
            : isNature
              ? 'rgba(255, 255, 255, 0.5)'
              : isZen
                ? 'rgba(255, 255, 255, 0.6)'
                : isObsidian
                  ? 'rgba(10, 10, 10, 0.92)'
                  : displayMode === true
                    ? 'rgba(40, 40, 40, 0.9)'
                    : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: (isNature || isZen)
            ? 'blur(30px) saturate(1.6)'
            : 'blur(12px)',
          WebkitBackdropFilter: (isNature || isZen)
            ? 'blur(30px) saturate(1.6)'
            : 'blur(12px)',
          border: isCosmic
            ? '1px solid rgba(140, 100, 255, 0.3)'
            : (isNature || isZen)
              ? '1px solid rgba(255, 255, 255, 0.6)'
              : isObsidian
                ? '1.5px solid #2A2520'
                : displayMode === true
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: isCosmic
            ? '0 4px 24px rgba(100, 50, 200, 0.3)'
            : isNature
              ? '0 4px 20px rgba(0, 50, 20, 0.1)'
              : isZen
                ? '0 4px 20px rgba(140, 130, 180, 0.15)'
                : isObsidian
                  ? '0 4px 20px rgba(0, 0, 0, 0.5)'
                  : '0 4px 16px rgba(0, 0, 0, 0.12)',
        }}
      >
        {[
          { mode: 'cosmic', label: 'Cosmic', icon: <Sparkles size={18} /> },
          { mode: 'nature', label: 'Nature', icon: <TreePine size={18} /> },
          { mode: 'obsidian', label: 'Obsidian', icon: <Gem size={18} /> },
          { mode: 'zen', label: 'Zen', icon: <CloudSun size={18} /> },
        ].map(({ mode, label, icon }) => {
          const isActive = displayMode === mode;
          const isDarkBg = isCosmic || isObsidian || (displayMode === true);

          // 활성 칩 배경/색상
          const activeStyles = {
            false: { bg: 'rgba(0, 0, 0, 0.08)', color: '#444444' },
            true: { bg: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF' },
            cosmic: { bg: 'rgba(199, 125, 255, 0.35)', color: '#C77DFF' },
            nature: { bg: 'rgba(13, 110, 58, 0.25)', color: '#0D6E3A' },
            obsidian: { bg: 'rgba(78, 205, 196, 0.25)', color: '#4ECDC4' },
            zen: { bg: 'rgba(99, 102, 241, 0.22)', color: '#6366F1' },
          };
          const style = activeStyles[mode] || activeStyles[false];

          return (
            <Box
              key={label}
              onClick={() => setDisplayMode(mode)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1.25,
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: isActive ? style.bg : 'transparent',
                color: isActive
                  ? (isDarkBg && mode === 'nature' ? '#81C784' : style.color)
                  : isDarkBg
                    ? 'rgba(255, 255, 255, 0.6)'
                    : 'rgba(0, 0, 0, 0.45)',
                '&:hover': {
                  backgroundColor: isActive
                    ? undefined
                    : isDarkBg
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.06)',
                },
              }}
            >
              {icon}
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  fontFamily: 'Roboto, sans-serif',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
});

export { SaasDashboardPage };
