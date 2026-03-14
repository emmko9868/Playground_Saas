/**
 * Soft Light Theme - Manufacturing Management SaaS
 *
 * ZenHR 스타일에서 영감을 받은 부드러운 라이트 모드 테마입니다.
 * 파스텔 그라데이션, 둥근 모서리, 부드러운 그림자가 특징입니다.
 *
 * ## 핵심 철학
 * - **Rounded Corners**: borderRadius 16px (부드러운 모서리)
 * - **Soft Shadow**: 은은한 파스텔 톤 그림자
 * - **Pastel Gradient**: 배경에 파스텔 그라데이션 분위기
 * - **Inter Font**: 부드럽고 현대적인 폰트
 */

import { createTheme } from '@mui/material/styles';

// ============================================================
// 1. Color Tokens (색상 토큰)
// ============================================================

// Grey Scale (부드러운 톤)
const greyScale = {
  50: '#FFFFFF',
  100: '#F8FAFC',
  200: '#F1F5F9',
  300: '#E8EDF3',
  400: '#C5CDD8',
  500: '#94A3B8',
  600: '#6B7B90',
  700: '#475569',
  800: '#334155',
  900: '#1E293B',
};

// Alert Colors (부드러운 톤)
const alertColors = {
  error: {
    main: '#EF4444',
    light: '#FEE2E2',
    lighter: '#FEF2F2',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#F59E0B',
    light: '#FEF3C7',
    lighter: '#FFFBEB',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#10B981',
    light: '#D1FAE5',
    lighter: '#ECFDF5',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#6366F1',
    light: '#E0E7FF',
    lighter: '#EEF2FF',
    contrastText: '#FFFFFF',
  },
};

// Brand Palette (파스텔 톤)
const brandPalette = [
  '#F87171',  // Soft Red
  '#FB7185',  // Soft Pink
  '#A78BFA',  // Soft Purple
  '#818CF8',  // Soft Indigo
  '#60A5FA',  // Soft Blue
  '#38BDF8',  // Soft Sky
  '#22D3EE',  // Soft Cyan
  '#2DD4BF',  // Soft Teal
  '#34D399',  // Soft Emerald
  '#4ADE80',  // Soft Green
  '#A3E635',  // Soft Lime
  '#FACC15',  // Soft Yellow
  '#FBBF24',  // Soft Amber
  '#FB923C',  // Soft Orange
  '#F97316',  // Soft Deep Orange
  '#78716C',  // Soft Stone
  '#EC4899',  // Soft Fuchsia
];

// Soft pastel accent colors (카드 배경용)
const softAccents = {
  blue: '#E8F4FD',
  green: '#E6F7ED',
  pink: '#FDE8F0',
  purple: '#EDE9FE',
  orange: '#FFF3E6',
  cyan: '#E6FAFE',
};

const palette = {
  mode: 'light',

  primary: {
    light: '#93B8F8',
    main: '#6366F1',
    dark: '#4F46E5',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#94A3B8',
    main: '#475569',
    dark: '#334155',
    contrastText: '#FFFFFF',
  },

  error: alertColors.error,
  warning: alertColors.warning,
  success: alertColors.success,
  info: alertColors.info,

  text: {
    primary: greyScale[800],
    secondary: greyScale[600],
    disabled: greyScale[400],
  },

  background: {
    default: '#F5F7FB',
    paper: '#FFFFFF',
    subtle: greyScale[100],
  },

  divider: greyScale[300],
  border: greyScale[300],

  action: {
    active: greyScale[600],
    hover: 'rgba(99, 102, 241, 0.06)',
    selected: 'rgba(99, 102, 241, 0.10)',
    disabled: greyScale[400],
    disabledBackground: greyScale[200],
    focus: 'rgba(99, 102, 241, 0.12)',
  },

  grey: greyScale,
  brand: brandPalette,
};

// ============================================================
// 2. Typography Tokens (타이포그래피 토큰)
// ============================================================
const typography = {
  fontFamily: [
    'Inter',
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

  headingFontFamily: 'Inter, sans-serif',

  fontSize: 14,
  htmlFontSize: 16,

  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightBlack: 900,

  h1: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '4rem',
    lineHeight: 1.25,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h5: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.3,
    letterSpacing: 0,
  },
  h6: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.3,
    letterSpacing: 0,
  },

  body1: {
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  body2: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
  },

  subtitle1: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '0.01em',
  },
  subtitle2: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '0.01em',
  },

  button: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.75,
    letterSpacing: '0.02em',
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: 2,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
};

// ============================================================
// 3. Spacing Token (간격 토큰)
// ============================================================
const spacing = 8;

// ============================================================
// 4. Shape Token (모양 토큰)
// ============================================================
const shape = {
  borderRadius: 16,
};

// ============================================================
// 5. Shadow Tokens (그림자 토큰) - 부드러운 파스텔 그림자
// ============================================================
const customShadows = {
  none: 'none',
  sm: '0 2px 8px rgba(99, 102, 241, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
  md: '0 4px 16px rgba(99, 102, 241, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
  lg: '0 8px 24px rgba(99, 102, 241, 0.10), 0 4px 10px rgba(0, 0, 0, 0.04)',
  xl: '0 12px 32px rgba(99, 102, 241, 0.12), 0 6px 14px rgba(0, 0, 0, 0.04)',
};

// ============================================================
// 6. Breakpoints (브레이크포인트)
// ============================================================
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
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
        background: 'linear-gradient(135deg, #F5F7FB 0%, #EDE9FE 25%, #E8F4FD 50%, #FDE8F0 75%, #FFF3E6 100%)',
        backgroundAttachment: 'fixed',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: customShadows.md,
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
        borderRadius: 12,
        textTransform: 'none',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 20,
      },
    },
  },
};

// ============================================================
// Theme 생성
// ============================================================
const softLightTheme = createTheme({
  palette,
  typography,
  spacing,
  shape,
  breakpoints,
  zIndex,
  transitions,
  components,
});

// 커스텀 속성 추가
softLightTheme.customShadows = customShadows;

/**
 * 대시보드 스타일 설정 (Soft Light)
 */
softLightTheme.dashboard = {
  style: 'softLight',
  iconStyle: 'rounded',
  iconWeight: 400,
  cardBorderRadius: 16,
  cardColors: [
    `linear-gradient(135deg, ${softAccents.blue} 0%, #FFFFFF 100%)`,
    `linear-gradient(135deg, ${softAccents.green} 0%, #FFFFFF 100%)`,
    `linear-gradient(135deg, ${softAccents.pink} 0%, #FFFFFF 100%)`,
    `linear-gradient(135deg, ${softAccents.purple} 0%, #FFFFFF 100%)`,
    `linear-gradient(135deg, ${softAccents.orange} 0%, #FFFFFF 100%)`,
    `linear-gradient(135deg, ${softAccents.cyan} 0%, #FFFFFF 100%)`,
  ],
  subCardColors: [
    `linear-gradient(135deg, ${softAccents.blue} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(135deg, ${softAccents.green} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(135deg, ${softAccents.pink} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(135deg, ${softAccents.purple} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(135deg, ${softAccents.orange} 0%, ${greyScale[100]} 100%)`,
    `linear-gradient(135deg, ${softAccents.cyan} 0%, ${greyScale[100]} 100%)`,
  ],
  textColor: greyScale[800],
  textSecondary: greyScale[600],
  textShadow: '0 0 0 rgba(0, 0, 0, 0)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `1px solid rgba(255, 255, 255, 0.6)`,
  borderColor: 'rgba(255, 255, 255, 0.6)',
  shadow: customShadows.md,
  subBorder: `1px solid ${greyScale[300]}`,
  subShadow: customShadows.sm,
  subBackdropFilter: 'blur(12px)',
  subBorderRadius: 12,
  dividerColor: greyScale[300],
  progressHeight: 8,
  progressTrackColor: greyScale[200],
  progressBarColor: palette.primary.main,
  progressGradient: true,
  progressBorderRadius: 20,
  background: '#F5F7FB',
  atmosphere: 'linear-gradient(135deg, #F5F7FB 0%, #EDE9FE 25%, #E8F4FD 50%, #FDE8F0 75%, #FFF3E6 100%)',
  atmosphereOpacity: 1,
  accentColor: palette.primary.main,
  statusColors: {
    error: alertColors.error.main,
    warning: alertColors.warning.main,
    success: alertColors.success.main,
    info: alertColors.info.main,
  },
  brandColors: brandPalette,
  blobs: [
    { color: 'rgba(165, 180, 252, 0.3)', size: 400, x: '10%', y: '5%' },
    { color: 'rgba(251, 113, 133, 0.2)', size: 350, x: '70%', y: '10%' },
    { color: 'rgba(96, 165, 250, 0.2)', size: 300, x: '40%', y: '60%' },
    { color: 'rgba(250, 204, 21, 0.15)', size: 280, x: '80%', y: '70%' },
  ],
};

export default softLightTheme;

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
  greyScale,
  alertColors,
  brandPalette,
  softAccents,
};
