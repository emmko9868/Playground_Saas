/**
 * Figma 디자인 시스템 기반 컬러 토큰
 *
 * 출처: Figma "Supplier chain Saas" 파일
 * - Grey Colors (node-id=1070-27737)
 * - Brand palette Colour (node-id=1127-27148)
 * - Alert Colors (node-id=1131-27573)
 * - Chip/Avatar palette Colour (node-id=1142-29545)
 */

// ── Figma Grey Scale ──
const grey = {
  white: '#FFFFFF',
  100: '#FAFAFA',
  200: '#F5F5F5',
  300: '#EEEEEE',
  400: '#CCCCCC',
  500: '#AAAAAA',
  600: '#888888',
  700: '#666666',
  800: '#444444',
  900: '#222222',
};

// ── Figma Brand Palette (GNB 등에 사용) ──
const brand = {
  500: '#3491FF',
  600: '#287EE4',
  700: '#1663BD',
};

// ── Figma Alert Colors ──
const alert = {
  errorOn: '#F92C2D',
  errorBg: '#FEE6E6',
  errorSubBg: '#FFEEEE',
  warningOn: '#F9AE09',
  warningBg: '#FEF5E1',
  warningSubBg: '#FFF9EB',
  successOn: '#078F00',
  successBg: '#E1F2E0',
  successSubBg: '#EBF6EB',
  instructOn: '#387DFF',
  instructBg: '#E7EFFF',
  instructSubBg: '#EFF5FF',
};

// ── Figma Chip/Avatar Palette ──
const chip = {
  50: '#FF5252',
  100: '#e91e63',
  200: '#9c27b0',
  300: '#673ab7',
  400: '#3f51b5',
  500: '#2196f3',
  600: '#03a9f4',
  700: '#00bcd4',
  800: '#009688',
  // 800 계열 추가
  '800g': '#4caf50',
  '800lg': '#8bc34a',
  '800y': '#cddc39',
  '800ly': '#ffeb3b',
  900: '#ffc107',
  '900o': '#ff9800',
  '900r': '#ff5722',
  '900b': '#795548',
};

// ── 라이트모드 시맨틱 토큰 (Figma Grey Scale 기반) ──
const lightColors = {
  // 배경
  pageBg: grey[200],          // Grey 200 — 페이지 배경
  surfaceBg: grey.white,      // White — 카드/드롭다운 배경
  sidebarBg: grey.white,      // White — 사이드바 배경
  surfaceBgSubtle: grey[100], // Grey 100 — 연한 배경
  gnbBg: brand[500],          // Brand 500 — GNB 배경
  gnbDropdownBg: brand[600],  // Brand 600 — GNB 드롭다운
  lnbBg: grey.white,          // White — LNB 배경
  inputBg: grey.white,         // White — 드롭다운/입력필드 배경
  gnbTextColor: '#FFFFFF',     // GNB 텍스트/아이콘
  gnbHoverBg: 'rgba(255,255,255,0.1)',
  // 보더
  sidebarBorder: grey[300],   // Grey 300
  lnbBorder: grey[200],       // Grey 200
  divider: grey[300],         // Grey 300
  // 텍스트
  textPrimary: grey[800],     // Grey 800
  textSecondary: grey[700],   // Grey 700
  textTertiary: grey[600],    // Grey 600
  textDisabled: grey[500],    // Grey 500
  copyright: grey[500],       // Grey 500
  // 강조 (Brand)
  accentBlue: brand[600],                 // Brand 600
  accentBlueBg: '#EBF4FF',               // Brand tint
  accentBlueHover: 'rgba(52,145,255,0.04)',
  accentBlueActive: 'rgba(52,145,255,0.08)',
  // 보더
  borderDefault: grey[400],           // Grey 400 — 체크박스/라디오 기본 보더
  // 강조 다크
  accentBlueDark: brand[700],         // Brand 700 — 호버/액티브 강조
  // Alert 시맨틱 토큰
  alertErrorOn: alert.errorOn,
  alertErrorBg: alert.errorBg,
  alertErrorSubBg: alert.errorSubBg,
  alertWarningOn: alert.warningOn,
  alertWarningBg: alert.warningBg,
  alertWarningSubBg: alert.warningSubBg,
  alertSuccessOn: alert.successOn,
  alertSuccessBg: alert.successBg,
  alertSuccessSubBg: alert.successSubBg,
  alertInstructOn: alert.instructOn,
  alertInstructBg: alert.instructBg,
  alertInstructSubBg: alert.instructSubBg,
  // Chart 텍스트/그리드 토큰
  chartTextPrimary: '#444444',
  chartTextSecondary: '#666666',
  chartGridColor: '#E0E0E0',
  // 유틸리티
  contrastWhite: '#FFFFFF',
  chipLowBg: '#EBF6EB',
  chipLowText: '#078F00',
  chipMediumBg: '#FFF9EB',
  chipMediumText: '#F9AE09',
  chipHighBg: '#FFEEEE',
  chipHighText: '#F92C2D',
  chipDefaultBg: '#DEEDFF',
  chipDefaultText: '#4B4B4B',
  tooltipChipBg: '#F7F4B6',
  tooltipChipText: '#4E4A4A',
};

// ── 다크모드 시맨틱 토큰 (Figma node-id=4124-5992 기준) ──
const darkColors = {
  // 배경: Figma 다크모드 Dashboard_1.1 기준
  pageBg: '#222222',           // 페이지 배경 (Figma bg-[#222])
  surfaceBg: '#333333',        // 카드/위젯 배경 (Figma bg-[#333])
  sidebarBg: '#333333',        // 사이드바 배경 (Figma bg-[#333])
  surfaceBgSubtle: '#3A3A3A',  // 연한 배경 (surfaceBg보다 약간 밝게)
  gnbBg: '#1565c0',           // GNB 배경
  gnbDropdownBg: '#0D47A1',   // GNB 드롭다운
  lnbBg: '#333333',           // LNB 배경 (Figma bg-[#333])
  inputBg: '#222222',          // 드롭다운/입력필드 배경 (Figma bg-[#222])
  gnbTextColor: '#FFFFFF',
  gnbHoverBg: 'rgba(255,255,255,0.1)',
  // 보더: Figma border-[#444] 기준
  sidebarBorder: '#444444',    // 사이드바 보더 (Figma border-[#444])
  lnbBorder: '#444444',        // LNB 보더
  divider: '#444444',          // 구분선
  // 텍스트: Figma 다크모드 텍스트 색상 기준
  textPrimary: '#FFFFFF',      // 제목, 값 텍스트 (Figma text-white)
  textSecondary: '#AAAAAA',    // 부제목, 보조 텍스트 (Figma text-[#aaa])
  textTertiary: '#888888',     // Legend 라벨 등 (Figma text-[#888])
  textDisabled: '#666666',     // Disabled 텍스트
  copyright: '#AAAAAA',        // Copyright 텍스트 (Figma text-[#aaa])
  // 강조: Figma 다크모드 Brand 색상 기준
  accentBlue: '#3491FF',       // 링크/강조 색상 (Figma text-[#3491ff])
  accentBlueBg: 'rgba(52,145,255,0.15)',  // 선택된 메뉴 배경 (~#333D4C)
  accentBlueHover: 'rgba(52,145,255,0.08)',
  accentBlueActive: 'rgba(52,145,255,0.15)',
  // 보더
  borderDefault: '#444444',    // 체크박스/라디오 기본 보더 (Figma border-[#444])
  // 강조 다크
  accentBlueDark: '#287EE4',   // 호버/액티브 강조 (Figma Brand/600)
  // Alert 시맨틱 토큰 (다크모드 — 동일한 시그널 색상 유지, 배경만 어둡게)
  alertErrorOn: '#FF6B6B',
  alertErrorBg: '#4A2020',
  alertErrorSubBg: '#3D1A1A',
  alertWarningOn: '#FFD54F',
  alertWarningBg: '#4A3D1A',
  alertWarningSubBg: '#3D331A',
  alertSuccessOn: '#69F0AE',
  alertSuccessBg: '#1A3D1A',
  alertSuccessSubBg: '#1A331A',
  alertInstructOn: '#82B1FF',
  alertInstructBg: '#1A2A4A',
  alertInstructSubBg: '#1A2540',
  // Chart 텍스트/그리드 토큰
  chartTextPrimary: '#FFFFFF',   // 차트 제목/값 (Figma text-white)
  chartTextSecondary: '#AAAAAA', // 차트 부제/축 (Figma text-[#aaa])
  chartGridColor: '#333333',     // 차트 그리드선/stroke (Figma stroke #333)
  // 유틸리티
  contrastWhite: '#FFFFFF',
  chipLowBg: '#1A3D1A',
  chipLowText: '#69F0AE',
  chipMediumBg: '#4A3D1A',
  chipMediumText: '#FFD54F',
  chipHighBg: '#4A2020',
  chipHighText: '#FF6B6B',
  chipDefaultBg: 'rgba(52,145,255,0.15)',
  chipDefaultText: '#AAAAAA',
  tooltipChipBg: '#5A5730',
  tooltipChipText: '#FFFFFF',
};

// ── 코즈믹 퍼플 시맨틱 토큰 (ELECTRA-style dark aurora glassmorphism) ──
const cosmicColors = {
  // 배경: 딥 네이비/퍼플 계열
  pageBg: '#0B0B1E',                          // 코즈믹 딥 다크
  surfaceBg: 'rgba(25, 15, 55, 0.65)',         // 글래스모피즘 카드 배경
  sidebarBg: 'rgba(15, 10, 40, 0.9)',          // 사이드바 배경
  surfaceBgSubtle: 'rgba(35, 20, 65, 0.5)',    // 연한 배경
  gnbBg: 'rgba(15, 10, 35, 0.85)',             // GNB 반투명 배경
  gnbDropdownBg: 'rgba(30, 15, 55, 0.95)',     // GNB 드롭다운
  lnbBg: 'rgba(15, 10, 35, 0.6)',             // LNB 반투명 배경
  inputBg: 'rgba(20, 12, 45, 0.8)',            // 입력필드 배경
  gnbTextColor: '#FFFFFF',
  gnbHoverBg: 'rgba(255,255,255,0.1)',
  // 보더: 미세한 퍼플 글로우
  sidebarBorder: 'rgba(140, 100, 255, 0.15)',
  lnbBorder: 'rgba(140, 100, 255, 0.1)',
  divider: 'rgba(140, 100, 255, 0.12)',
  // 텍스트: 밝은 퍼플~화이트 계열
  textPrimary: '#FFFFFF',
  textSecondary: '#B8A9D4',                    // 라이트 퍼플
  textTertiary: '#8B7AAF',                     // 뮤트 퍼플
  textDisabled: '#5A4D7A',
  copyright: '#8B7AAF',
  // 강조: 시안 + 퍼플
  accentBlue: '#C77DFF',                       // 퍼플 악센트 (메인)
  accentBlueBg: 'rgba(199, 125, 255, 0.15)',
  accentBlueHover: 'rgba(199, 125, 255, 0.08)',
  accentBlueActive: 'rgba(199, 125, 255, 0.2)',
  // 보더
  borderDefault: 'rgba(140, 100, 255, 0.25)',
  // 강조 다크
  accentBlueDark: '#A855F7',
  // Alert 시맨틱 토큰 (코즈믹 — 네온 톤)
  alertErrorOn: '#FF6B9D',
  alertErrorBg: 'rgba(255, 107, 157, 0.15)',
  alertErrorSubBg: 'rgba(255, 107, 157, 0.08)',
  alertWarningOn: '#FBBF24',
  alertWarningBg: 'rgba(251, 191, 36, 0.15)',
  alertWarningSubBg: 'rgba(251, 191, 36, 0.08)',
  alertSuccessOn: '#34D399',
  alertSuccessBg: 'rgba(52, 211, 153, 0.15)',
  alertSuccessSubBg: 'rgba(52, 211, 153, 0.08)',
  alertInstructOn: '#00E5FF',
  alertInstructBg: 'rgba(0, 229, 255, 0.15)',
  alertInstructSubBg: 'rgba(0, 229, 255, 0.08)',
  // Chart 텍스트/그리드 토큰
  chartTextPrimary: '#FFFFFF',
  chartTextSecondary: '#B8A9D4',
  chartGridColor: 'rgba(140, 100, 255, 0.12)',
  // 유틸리티
  contrastWhite: '#FFFFFF',
  chipLowBg: 'rgba(52, 211, 153, 0.15)',
  chipLowText: '#34D399',
  chipMediumBg: 'rgba(251, 191, 36, 0.15)',
  chipMediumText: '#FBBF24',
  chipHighBg: 'rgba(255, 107, 157, 0.15)',
  chipHighText: '#FF6B9D',
  chipDefaultBg: 'rgba(199, 125, 255, 0.15)',
  chipDefaultText: '#B8A9D4',
  tooltipChipBg: 'rgba(199, 125, 255, 0.25)',
  tooltipChipText: '#FFFFFF',
  // 코즈믹 전용 토큰
  cardBorderRadius: 16,
  cardBorder: '1px solid rgba(140, 100, 255, 0.2)',
  cardBackdropFilter: 'blur(20px)',
  cardShadow: '0 8px 32px rgba(100, 50, 200, 0.25)',
  accentCyan: '#00E5FF',
  accentMagenta: '#E040FB',
  atmosphereGradient: 'radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.3) 0%, rgba(168, 85, 247, 0.15) 30%, rgba(11, 11, 30, 0) 70%)',
};

// ── 네이처 시맨틱 토큰 (Nature Sky — 자연 배경 + frosted glass) ──
const natureColors = {
  // 배경: 투명/반투명 — frosted glass
  pageBg: 'transparent',
  surfaceBg: 'rgba(255, 255, 255, 0.55)',        // 글래스 카드 — 배경 비침
  sidebarBg: 'rgba(255, 255, 255, 0.45)',        // 사이드바 — 강한 블러로 보정
  surfaceBgSubtle: 'rgba(255, 255, 255, 0.35)',  // 연한 배경
  gnbBg: 'rgba(255, 255, 255, 0.4)',             // GNB — 하늘이 비치는 frosted
  gnbDropdownBg: 'rgba(255, 255, 255, 0.75)',    // GNB 드롭다운
  lnbBg: 'rgba(255, 255, 255, 0.4)',             // LNB — 블러로 보정
  inputBg: 'rgba(255, 255, 255, 0.85)',          // 입력필드
  gnbTextColor: '#1A2E1A',                       // GNB 텍스트 (딥 그린)
  gnbHoverBg: 'rgba(255,255,255,0.35)',
  // 보더: 화이트 글로우 + 미세한 그레이
  sidebarBorder: 'rgba(255, 255, 255, 0.6)',
  lnbBorder: 'rgba(255, 255, 255, 0.5)',
  divider: 'rgba(0, 0, 0, 0.06)',
  // 텍스트: 다크 그린 차콜 계열
  textPrimary: '#1A2E1A',
  textSecondary: '#3D5A3D',
  textTertiary: '#5A7A5A',
  textDisabled: '#94B294',
  copyright: '#5A7A5A',
  // 강조: 포레스트 블루-그린 계열
  accentBlue: '#0D6E3A',
  accentBlueBg: 'rgba(13, 110, 58, 0.1)',
  accentBlueHover: 'rgba(13, 110, 58, 0.06)',
  accentBlueActive: 'rgba(13, 110, 58, 0.15)',
  // 보더
  borderDefault: 'rgba(0, 0, 0, 0.12)',
  // 강조 다크
  accentBlueDark: '#0A5C30',
  // Alert 시맨틱 토큰 (네이처 — 클래식 톤)
  alertErrorOn: '#DA1E28',
  alertErrorBg: 'rgba(255, 241, 241, 0.85)',
  alertErrorSubBg: 'rgba(255, 245, 245, 0.8)',
  alertWarningOn: '#B28600',
  alertWarningBg: 'rgba(255, 248, 225, 0.85)',
  alertWarningSubBg: 'rgba(255, 253, 231, 0.8)',
  alertSuccessOn: '#198038',
  alertSuccessBg: 'rgba(222, 251, 230, 0.85)',
  alertSuccessSubBg: 'rgba(232, 245, 233, 0.8)',
  alertInstructOn: '#0043CE',
  alertInstructBg: 'rgba(237, 245, 255, 0.85)',
  alertInstructSubBg: 'rgba(240, 244, 255, 0.8)',
  // Chart 텍스트/그리드 토큰
  chartTextPrimary: '#1A2E1A',
  chartTextSecondary: '#3D5A3D',
  chartGridColor: 'rgba(0, 0, 0, 0.08)',
  // 유틸리티
  contrastWhite: '#FFFFFF',
  chipLowBg: 'rgba(222, 251, 230, 0.8)',
  chipLowText: '#198038',
  chipMediumBg: 'rgba(255, 248, 225, 0.8)',
  chipMediumText: '#B28600',
  chipHighBg: 'rgba(255, 241, 241, 0.8)',
  chipHighText: '#DA1E28',
  chipDefaultBg: 'rgba(237, 245, 255, 0.8)',
  chipDefaultText: '#0043CE',
  tooltipChipBg: 'rgba(255, 255, 255, 0.6)',
  tooltipChipText: '#1A2E1A',
  // 네이처 전용 토큰
  cardBorderRadius: 16,
  cardBorder: '1px solid rgba(255, 255, 255, 0.6)',
  cardBackdropFilter: 'blur(40px) saturate(1.8)',
  cardShadow: '0 8px 32px rgba(0, 50, 20, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)',
};

// ── 빈티지 시맨틱 토큰 (Luxury Dark — 블랙 + 웜 베이지 + 틸 악센트) ──
const vintageColors = {
  // 배경: 딥 블랙 계열
  pageBg: '#0A0A0A',                             // 거의 퓨어 블랙
  surfaceBg: '#1A1A18',                           // 따뜻한 다크 카드
  sidebarBg: '#111110',                           // 사이드바
  surfaceBgSubtle: '#222220',                     // 연한 배경
  gnbBg: '#111110',                               // GNB 배경
  gnbDropdownBg: '#1A1A18',                       // GNB 드롭다운
  lnbBg: '#1A1A18',                               // LNB 배경
  inputBg: '#111110',                             // 입력필드 배경
  gnbTextColor: '#C8B89A',                        // GNB 텍스트 (웜 베이지)
  gnbHoverBg: 'rgba(200, 184, 154, 0.1)',
  // 보더: 따뜻한 톤의 미세 보더
  sidebarBorder: '#2A2A26',
  lnbBorder: '#2A2A26',
  divider: '#2A2A26',
  // 텍스트: 웜 베이지/크림 계열
  textPrimary: '#D4C5A9',                         // 크림 베이지
  textSecondary: '#A89880',                        // 뮤트 베이지
  textTertiary: '#7A6F5E',                         // 다크 베이지
  textDisabled: '#4A4538',
  copyright: '#7A6F5E',
  // 강조: 틸/민트 그린
  accentBlue: '#4ECDC4',                          // 틸 악센트
  accentBlueBg: 'rgba(78, 205, 196, 0.12)',
  accentBlueHover: 'rgba(78, 205, 196, 0.06)',
  accentBlueActive: 'rgba(78, 205, 196, 0.18)',
  // 보더
  borderDefault: '#3A3A35',
  // 강조 다크
  accentBlueDark: '#3BAFA8',
  // Alert 시맨틱 토큰 (빈티지 — 뮤트 톤)
  alertErrorOn: '#E57373',
  alertErrorBg: 'rgba(229, 115, 115, 0.12)',
  alertErrorSubBg: 'rgba(229, 115, 115, 0.06)',
  alertWarningOn: '#D4A44A',
  alertWarningBg: 'rgba(212, 164, 74, 0.12)',
  alertWarningSubBg: 'rgba(212, 164, 74, 0.06)',
  alertSuccessOn: '#4ECDC4',
  alertSuccessBg: 'rgba(78, 205, 196, 0.12)',
  alertSuccessSubBg: 'rgba(78, 205, 196, 0.06)',
  alertInstructOn: '#7EB8D4',
  alertInstructBg: 'rgba(126, 184, 212, 0.12)',
  alertInstructSubBg: 'rgba(126, 184, 212, 0.06)',
  // Chart 텍스트/그리드 토큰
  chartTextPrimary: '#D4C5A9',
  chartTextSecondary: '#A89880',
  chartGridColor: '#2A2A26',
  // 유틸리티
  contrastWhite: '#D4C5A9',
  chipLowBg: 'rgba(78, 205, 196, 0.12)',
  chipLowText: '#4ECDC4',
  chipMediumBg: 'rgba(212, 164, 74, 0.12)',
  chipMediumText: '#D4A44A',
  chipHighBg: 'rgba(229, 115, 115, 0.12)',
  chipHighText: '#E57373',
  chipDefaultBg: 'rgba(200, 184, 154, 0.12)',
  chipDefaultText: '#C8B89A',
  tooltipChipBg: 'rgba(200, 184, 154, 0.2)',
  tooltipChipText: '#D4C5A9',
  // 빈티지 전용 토큰
  cardBorderRadius: 20,
  cardBorder: '1px solid #2A2A26',
  cardShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
};

// ── 옵시디언 시맨틱 토큰 (Obsidian — 웜 베이지 배경 + 다크 카드 + 민트 악센트) ──
const obsidianColors = {
  // 배경: 웜 베이지 페이지 + 다크 카드 (레퍼런스 이미지 기준)
  pageBg: '#E8DCC8',                             // 웜 베이지 — 카드 사이 배경
  surfaceBg: '#0C0C0A',                           // 거의 블랙 — 카드 배경
  sidebarBg: '#0C0C0A',                           // 사이드바 — 다크
  surfaceBgSubtle: '#1A1816',                     // 연한 다크 배경
  gnbBg: '#0C0C0A',                               // GNB 배경
  gnbDropdownBg: '#0C0C0A',                       // GNB 드롭다운
  lnbBg: '#0C0C0A',                               // LNB 배경
  inputBg: '#0C0C0A',                             // 입력필드 배경
  gnbTextColor: '#E8DCC8',                        // GNB 텍스트 (골드 크림)
  gnbHoverBg: 'rgba(232, 220, 200, 0.1)',
  // 보더: 웜 톤 보더
  sidebarBorder: '#2A2520',
  lnbBorder: '#2A2520',
  divider: '#2A2520',
  // 텍스트: 크림 계열 — 다크 카드 위 가독성 확보
  textPrimary: '#F0E6D4',                         // 밝은 크림 — 제목, 큰 숫자값
  textSecondary: '#D4C5A9',                        // 골드 크림 — 본문, 라벨
  textTertiary: '#A89880',                         // 웜 토프 — 보조 텍스트, 축 라벨
  textDisabled: '#6B6050',
  copyright: '#A89880',
  // 강조: 민트/틸 그린
  accentBlue: '#4ECDC4',                          // 틸 민트 악센트
  accentBlueBg: 'rgba(78, 205, 196, 0.15)',
  accentBlueHover: 'rgba(78, 205, 196, 0.08)',
  accentBlueActive: 'rgba(78, 205, 196, 0.2)',
  // 보더
  borderDefault: '#2A2520',
  // 강조 다크
  accentBlueDark: '#3BAFA8',
  // Alert 시맨틱 토큰 (옵시디언 — 소프트 네온 톤)
  alertErrorOn: '#F87171',
  alertErrorBg: 'rgba(248, 113, 113, 0.12)',
  alertErrorSubBg: 'rgba(248, 113, 113, 0.06)',
  alertWarningOn: '#FBBF24',
  alertWarningBg: 'rgba(251, 191, 36, 0.12)',
  alertWarningSubBg: 'rgba(251, 191, 36, 0.06)',
  alertSuccessOn: '#4ECDC4',
  alertSuccessBg: 'rgba(78, 205, 196, 0.12)',
  alertSuccessSubBg: 'rgba(78, 205, 196, 0.06)',
  alertInstructOn: '#93C5FD',
  alertInstructBg: 'rgba(147, 197, 253, 0.12)',
  alertInstructSubBg: 'rgba(147, 197, 253, 0.06)',
  // Chart 텍스트/그리드 토큰
  chartTextPrimary: '#F0E6D4',
  chartTextSecondary: '#D4C5A9',
  chartGridColor: '#2A2520',
  // 유틸리티
  contrastWhite: '#E8DCC8',
  chipLowBg: 'rgba(78, 205, 196, 0.15)',
  chipLowText: '#4ECDC4',
  chipMediumBg: 'rgba(251, 191, 36, 0.15)',
  chipMediumText: '#FBBF24',
  chipHighBg: 'rgba(248, 113, 113, 0.15)',
  chipHighText: '#F87171',
  chipDefaultBg: 'rgba(232, 220, 200, 0.15)',
  chipDefaultText: '#E8DCC8',
  tooltipChipBg: 'rgba(232, 220, 200, 0.25)',
  tooltipChipText: '#E8DCC8',
  // 옵시디언 전용 토큰
  cardBorderRadius: 16,
  cardBorder: '1.5px solid #2A2520',
  cardShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
};

// ── 젠 시맨틱 토큰 (Zen — 파스텔 그라데이션 + frosted glass + 둥근 모서리) ──
const zenColors = {
  // 배경: 파스텔 그라데이션 — transparent로 설정하여 전용 배경 위에 글래스 적용
  pageBg: 'transparent',
  surfaceBg: 'rgba(255, 255, 255, 0.65)',        // 글래스 카드 — 반투명 화이트
  sidebarBg: 'rgba(255, 255, 255, 0.5)',          // 사이드바 — frosted
  surfaceBgSubtle: 'rgba(255, 255, 255, 0.4)',    // 연한 배경
  gnbBg: 'rgba(255, 255, 255, 0.45)',             // GNB — 파스텔이 비치는 frosted
  gnbDropdownBg: 'rgba(255, 255, 255, 0.85)',     // GNB 드롭다운
  lnbBg: 'rgba(255, 255, 255, 0.45)',             // LNB — 블러로 보정
  inputBg: 'rgba(255, 255, 255, 0.9)',            // 입력필드
  gnbTextColor: '#1a1a2e',                        // GNB 텍스트 (딥 네이비)
  gnbHoverBg: 'rgba(255,255,255,0.4)',
  // 보더: 화이트 글로우
  sidebarBorder: 'rgba(255, 255, 255, 0.7)',
  lnbBorder: 'rgba(255, 255, 255, 0.5)',
  divider: 'rgba(0, 0, 0, 0.06)',
  // 텍스트: 딥 네이비/인디고 계열
  textPrimary: '#1a1a2e',
  textSecondary: '#4a4a6a',
  textTertiary: '#7a7a9a',
  textDisabled: '#b0b0c8',
  copyright: '#7a7a9a',
  // 강조: 인디고/퍼플
  accentBlue: '#6366F1',
  accentBlueBg: 'rgba(99, 102, 241, 0.1)',
  accentBlueHover: 'rgba(99, 102, 241, 0.06)',
  accentBlueActive: 'rgba(99, 102, 241, 0.15)',
  // 보더
  borderDefault: 'rgba(0, 0, 0, 0.1)',
  // 강조 다크
  accentBlueDark: '#4F46E5',
  // Alert 시맨틱 토큰 (젠 — 소프트 파스텔 톤)
  alertErrorOn: '#EF4444',
  alertErrorBg: 'rgba(254, 226, 226, 0.85)',
  alertErrorSubBg: 'rgba(254, 242, 242, 0.8)',
  alertWarningOn: '#F59E0B',
  alertWarningBg: 'rgba(254, 243, 199, 0.85)',
  alertWarningSubBg: 'rgba(255, 251, 235, 0.8)',
  alertSuccessOn: '#10B981',
  alertSuccessBg: 'rgba(209, 250, 229, 0.85)',
  alertSuccessSubBg: 'rgba(236, 253, 245, 0.8)',
  alertInstructOn: '#6366F1',
  alertInstructBg: 'rgba(224, 231, 255, 0.85)',
  alertInstructSubBg: 'rgba(238, 242, 255, 0.8)',
  // Chart 텍스트/그리드 토큰
  chartTextPrimary: '#1a1a2e',
  chartTextSecondary: '#4a4a6a',
  chartGridColor: 'rgba(0, 0, 0, 0.06)',
  // 유틸리티
  contrastWhite: '#FFFFFF',
  chipLowBg: 'rgba(209, 250, 229, 0.8)',
  chipLowText: '#10B981',
  chipMediumBg: 'rgba(254, 243, 199, 0.8)',
  chipMediumText: '#F59E0B',
  chipHighBg: 'rgba(254, 226, 226, 0.8)',
  chipHighText: '#EF4444',
  chipDefaultBg: 'rgba(224, 231, 255, 0.8)',
  chipDefaultText: '#6366F1',
  tooltipChipBg: 'rgba(255, 255, 255, 0.7)',
  tooltipChipText: '#1a1a2e',
  // 젠 전용 토큰
  cardBorderRadius: 20,
  cardBorder: '1px solid rgba(255, 255, 255, 0.7)',
  cardBackdropFilter: 'blur(24px) saturate(1.6)',
  cardShadow: '0 4px 24px rgba(140, 130, 180, 0.12), 0 1px 6px rgba(0, 0, 0, 0.04)',
};

/**
 * 모드별 색상 반환
 * @param {boolean|string} mode - false(라이트) | true(다크) | 'cosmic' | 'nature' | 'vintage' | 'obsidian' | 'zen'
 */
const getColors = (mode) => {
  if (mode === 'cosmic') return cosmicColors;
  if (mode === 'nature') return natureColors;
  if (mode === 'vintage') return vintageColors;
  if (mode === 'obsidian') return obsidianColors;
  if (mode === 'zen') return zenColors;
  if (mode === true) return darkColors;
  return lightColors;
};

export { grey, brand, alert, chip, lightColors, darkColors, cosmicColors, natureColors, vintageColors, obsidianColors, zenColors, getColors };
