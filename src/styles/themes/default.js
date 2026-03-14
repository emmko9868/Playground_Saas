/**
 * Default Theme - Manufacturing Management SaaS
 *
 * 프로젝트의 기본 디자인 토큰을 정의하는 표준 테마입니다.
 * Figma Design Tokens과 동기화되어 있습니다.
 *
 * ## 핵심 철학
 * - **Sharp Corners**: borderRadius 0 (날카로운 모서리)
 * - **Dimmed Shadow**: offset 없이 blur만 사용하는 은은한 그림자
 * - **Pure White**: 깔끔한 흰색 배경
 * - **Roboto Font**: 산업용 SaaS에 적합한 명료한 폰트
 *
 * ## Figma 원본
 * - Typography: node-id=1042-17931
 * - Grey Colors: node-id=1070-27737
 * - Alert Colors: node-id=1131-27573
 * - Chip/Avatar Palette: node-id=1142-29545
 */

import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

// ============================================================
// 1. Color Tokens (색상 토큰) - Figma Sync
// ============================================================

// Grey Scale (Figma: Grey Colors 확정)
const greyScale = {
  50: '#FFFFFF',   // White
  100: '#FAFAFA',  // Grey 100
  200: '#F5F5F5',  // Grey 200
  300: '#EEEEEE',  // Grey 300
  400: '#CCCCCC',  // Grey 400
  500: '#AAAAAA',  // Grey 500
  600: '#888888',  // Grey 600
  700: '#666666',  // Grey 700
  800: '#444444',  // Grey 800
  900: '#222222',  // Grey 900
};

// Alert Colors (Figma: Alert Colors 확정)
const alertColors = {
  error: {
    main: '#F92C2D',      // On Error
    light: '#FEE6E6',     // Error BG
    lighter: '#FFEEEE',   // Error Sub BG
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#F9AE09',      // On Warning
    light: '#FEF5E1',     // Warning BG
    lighter: '#FFF9EB',   // Warning Sub BG
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#078F00',      // On Success
    light: '#E1F2E0',     // Success BG
    lighter: '#EBF6EB',   // Success Sub BG
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#387DFF',      // On Instruct
    light: '#E7EFFF',     // Instruct BG
    lighter: '#EFF5FF',   // Instruct Sub BG
    contrastText: '#FFFFFF',
  },
};

// Brand Palette (Figma: Chip/Avatar Palette 확정)
const brandPalette = [
  '#FF5252',  // Brand 50 - Red
  '#E91E63',  // Brand 100 - Pink
  '#9C27B0',  // Brand 200 - Purple
  '#673AB7',  // Brand 300 - Deep Purple
  '#3F51B5',  // Brand 400 - Indigo
  '#2196F3',  // Brand 500 - Blue
  '#03A9F4',  // Brand 600 - Light Blue
  '#00BCD4',  // Brand 700 - Cyan
  '#009688',  // Brand 800-1 - Teal
  '#4CAF50',  // Brand 800-2 - Green
  '#8BC34A',  // Brand 800-3 - Light Green
  '#CDDC39',  // Brand 800-4 - Lime
  '#FFEB3B',  // Brand 800-5 - Yellow
  '#FFC107',  // Brand 900-1 - Amber
  '#FF9800',  // Brand 900-2 - Orange
  '#FF5722',  // Brand 900-3 - Deep Orange
  '#795548',  // Brand 900-4 - Brown
];

const palette = {
  mode: 'light',

  // 브랜드 색상 (Primary: Instruct Blue 사용)
  primary: {
    light: '#6B9FFF',
    main: '#387DFF',
    dark: '#2B5FCC',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: blueGrey[700],
    main: blueGrey[900],
    dark: '#1a252b',
    contrastText: '#FFFFFF',
  },

  // 상태 색상 (Figma Alert Colors)
  error: alertColors.error,
  warning: alertColors.warning,
  success: alertColors.success,
  info: alertColors.info,

  // 텍스트 색상 (Figma Grey Scale 기반)
  text: {
    primary: greyScale[800],    // #444444
    secondary: greyScale[700],  // #666666
    disabled: greyScale[400],   // #CCCCCC
  },

  // 배경 색상
  background: {
    default: greyScale[50],     // #FFFFFF
    paper: greyScale[50],       // #FFFFFF
    subtle: greyScale[100],     // #FAFAFA
  },

  // 구분선 (Figma Border Color)
  divider: '#E0E0E0',
  border: '#E0E0E0',

  // 액션 상태
  action: {
    active: greyScale[600],
    hover: greyScale[200],
    selected: greyScale[300],
    disabled: greyScale[400],
    disabledBackground: greyScale[200],
    focus: greyScale[300],
  },

  // Grey 스케일 (Figma Grey Colors)
  grey: greyScale,

  // Brand Palette (Chip, Avatar용)
  brand: brandPalette,
};

// ============================================================
// 2. Typography Tokens (타이포그래피 토큰) - Figma Sync
// ============================================================
const typography = {
  // 기본 폰트 패밀리 (Figma: Roboto)
  fontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    '"Helvetica Neue"',
    '"Segoe UI"',
    '"Apple SD Gothic Neo"',
    '"Noto Sans KR"',
    '"Malgun Gothic"',
    'sans-serif',
  ].join(','),

  // 헤딩 폰트 패밀리
  headingFontFamily: 'Roboto, sans-serif',

  // 폰트 크기 기준
  fontSize: 14,
  htmlFontSize: 16,

  // 폰트 굵기 (Figma Font Weights)
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightBlack: 900,

  // 헤딩 스타일 (Figma Headlines)
  h1: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,          // Bold
    fontSize: '4rem',         // 64px (Headline 1)
    lineHeight: 1.25,         // 125%
    letterSpacing: 0,
  },
  h2: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,          // Bold
    fontSize: '2rem',         // 32px (Headline 2)
    lineHeight: 1.25,         // 125%
    letterSpacing: 0,
  },
  h3: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,          // Semi Bold
    fontSize: '1.5rem',       // 24px (Headline 3)
    lineHeight: 1.25,         // 125%
    letterSpacing: 0,
  },
  h4: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,          // Semi Bold
    fontSize: '1.25rem',      // 20px (Headline 4)
    lineHeight: 1.25,         // 125%
    letterSpacing: 0,
  },
  h5: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,          // Semi Bold
    fontSize: '1.125rem',     // 18px (Body 1 강조)
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  h6: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,          // Semi Bold
    fontSize: '1rem',         // 16px (Body 2 강조)
    lineHeight: 1.25,
    letterSpacing: 0,
  },

  // 본문 스타일 (Figma Body)
  body1: {
    fontSize: '1.125rem',     // 18px (Body 1)
    fontWeight: 400,          // Regular
    lineHeight: 1.25,         // 125%
    letterSpacing: 0,
  },
  body2: {
    fontSize: '1rem',         // 16px (Body 2)
    fontWeight: 400,          // Regular
    lineHeight: 1.5,          // 150%
    letterSpacing: 0,
  },

  // 부제목
  subtitle1: {
    fontSize: '1.125rem',     // 18px
    fontWeight: 600,          // Semi Bold
    lineHeight: 1.25,
    letterSpacing: '0.01em',
  },
  subtitle2: {
    fontSize: '1rem',         // 16px
    fontWeight: 600,          // Semi Bold
    lineHeight: 1.25,
    letterSpacing: '0.01em',
  },

  // 기타
  button: {
    fontSize: '0.875rem',     // 14px
    fontWeight: 600,          // Semi Bold
    lineHeight: 1.75,
    letterSpacing: '0.02em',
    textTransform: 'none',    // 대문자 변환 비활성화
  },
  caption: {
    fontSize: '0.875rem',     // 14px (Body 3)
    fontWeight: 400,          // Regular
    lineHeight: 1.25,         // 125%
    letterSpacing: 0,
  },
  overline: {
    fontSize: '0.75rem',      // 12px
    fontWeight: 600,          // Semi Bold
    lineHeight: 2,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
};

// ============================================================
// 3. Spacing Token (간격 토큰)
// ============================================================
const spacing = 8; // 기본 단위: 8px

// ============================================================
// 4. Shape Token (모양 토큰)
// ============================================================
const shape = {
  borderRadius: 0, // Sharp corners (0px)
};

// ============================================================
// 5. Shadow Tokens (그림자 토큰)
// ============================================================
const customShadows = {
  none: 'none',
  sm: '0 0 12px rgba(0, 0, 0, 0.06)',
  md: '0 0 16px rgba(0, 0, 0, 0.08)',
  lg: '0 0 20px rgba(0, 0, 0, 0.10)',
  xl: '0 0 24px rgba(0, 0, 0, 0.12)',
};

// ============================================================
// 6. Breakpoints (브레이크포인트)
// ============================================================
const breakpoints = {
  values: {
    xs: 0,      // 모바일
    sm: 600,    // 태블릿 세로
    md: 900,    // 태블릿 가로
    lg: 1200,   // 데스크톱
    xl: 1536,   // 대형 데스크톱
  },
};

// ============================================================
// 7. Z-Index (레이어 순서)
// ============================================================
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

// ============================================================
// 8. Transitions (전환 효과)
// ============================================================
const transitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

// ============================================================
// 9. Component Overrides (컴포넌트 오버라이드)
// ============================================================
const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarWidth: 'thin',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: customShadows.lg,
      },
      elevation0: {
        boxShadow: customShadows.none,
      },
      elevation1: {
        boxShadow: customShadows.sm,
      },
      elevation2: {
        boxShadow: customShadows.md,
      },
      elevation3: {
        boxShadow: customShadows.lg,
      },
      elevation4: {
        boxShadow: customShadows.xl,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 0,
        textTransform: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 0,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
    },
  },
};

// ============================================================
// Theme 생성
// ============================================================
const defaultTheme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  breakpoints,
  zIndex,
  transitions,
  components,
});

// 커스텀 속성 추가 (타입 확장 없이 접근 가능하도록)
defaultTheme.customShadows = customShadows;

/**
 * 대시보드 스타일 설정 (Manufacturing Management SaaS)
 */
defaultTheme.dashboard = {
  style: 'default',
  iconStyle: 'outlined',
  iconWeight: 400,
  cardBorderRadius: 0,
  cardColors: [
    `linear-gradient(to bottom, ${greyScale[50]} 0%, ${greyScale[50]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[50]} 0%, ${greyScale[50]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[50]} 0%, ${greyScale[50]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[50]} 0%, ${greyScale[50]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[50]} 0%, ${greyScale[50]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[50]} 0%, ${greyScale[50]} 100%)`,
  ],
  subCardColors: [
    `linear-gradient(to bottom, ${greyScale[100]} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[100]} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[100]} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[100]} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[100]} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(to bottom, ${greyScale[100]} 0%, ${greyScale[100]} 100%)`,
  ],
  textColor: greyScale[800],
  textSecondary: greyScale[700],
  textShadow: '0 0 0 rgba(0, 0, 0, 0)',
  backdropFilter: 'blur(0px)',
  WebkitBackdropFilter: 'blur(0px)',
  border: `1px solid ${palette.border}`,
  borderColor: palette.border,
  shadow: customShadows.lg,
  subBorder: `1px solid ${greyScale[300]}`,
  subShadow: '0 0 0 rgba(0, 0, 0, 0)',
  subBackdropFilter: 'blur(0px)',
  subBorderRadius: 0,
  dividerColor: greyScale[300],
  progressHeight: 6,
  progressTrackColor: greyScale[200],
  progressBarColor: palette.primary.main,
  progressGradient: false,
  progressBorderRadius: 0,
  background: greyScale[50],
  atmosphere: `linear-gradient(to bottom, ${greyScale[50]} 0%, ${greyScale[50]} 100%)`,
  atmosphereOpacity: 0,
  accentColor: palette.primary.main,
  // 상태별 색상 (Alert Colors 기반)
  statusColors: {
    error: alertColors.error.main,
    warning: alertColors.warning.main,
    success: alertColors.success.main,
    info: alertColors.info.main,
  },
  // Brand Palette (Chip, Avatar용)
  brandColors: brandPalette,
  blobs: null,
};

export default defaultTheme;

// 개별 토큰 내보내기 (문서화용)
export {
  palette,
  typography,
  spacing,
  shape,
  customShadows,
  breakpoints,
  zIndex,
  transitions,
  components,
  // Figma Design Tokens
  greyScale,
  alertColors,
  brandPalette,
};
