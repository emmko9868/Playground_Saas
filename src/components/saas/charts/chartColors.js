/**
 * SaaS Dashboard Chart Color Palette
 *
 * Manufacturing Management SaaS 대시보드 차트에서 사용하는 색상 팔레트.
 * Figma 디자인 시스템 기반.
 */

// Primary Chart Colors (상태 표시용)
export const CHART_COLORS = {
  teal: '#26C6DA',      // In Production, Within, In Operation, Primary positive
  blue: '#42A5F5',      // Idle, Secondary, Informational
  yellow: '#FFCA28',    // Inactive, Medium, Warning
  orange: '#FFA726',    // Disabled, High, Caution
  pink: '#EC407A',      // Disposed, Prolonged, Critical
  green: '#66BB6A',     // Success, Completed
  purple: '#AB47BC',    // Special, Highlight
};

// Sequential Color Palette (도넛/파이 차트용)
export const DONUT_COLORS = [
  '#26C6DA',  // Teal
  '#42A5F5',  // Blue
  '#EC407A',  // Pink
  '#FFCA28',  // Yellow
  '#FFA726',  // Orange
  '#66BB6A',  // Green
  '#AB47BC',  // Purple
];

// Nature 전용 도넛/파이 색상 — 자연 톤 + 높은 채도/대비
export const NATURE_DONUT_COLORS = [
  '#2E8B57',  // Sea Green — 숲
  '#4A90D9',  // Steel Blue — 맑은 하늘
  '#D4713B',  // Copper — 흙/나무
  '#8B6DB0',  // Muted Purple — 라벤더
  '#C9A435',  // Dark Gold — 가을 잎
  '#2BA5A5',  // Teal — 호수
  '#B85C5C',  // Rosewood — 꽃
];

// Cosmic 전용 도넛/파이 색상 — 네온/글로우 톤
export const COSMIC_DONUT_COLORS = [
  '#00E5FF',  // Cyan Glow
  '#C77DFF',  // Purple Glow
  '#FF6B9D',  // Pink Neon
  '#FBBF24',  // Amber Glow
  '#34D399',  // Emerald Neon
  '#818CF8',  // Indigo Glow
  '#F97316',  // Orange Neon
];

// Vintage 전용 도넛/파이 색상 — 따뜻한 레트로 톤
export const VINTAGE_DONUT_COLORS = [
  '#4ECDC4',  // Teal/Mint — 주요 액센트
  '#D4A44A',  // Warm Gold — 가을빛
  '#E57373',  // Dusty Rose — 부드러운 빨강
  '#7EB8D4',  // Muted Blue — 차분한 하늘
  '#A89880',  // Warm Taupe — 베이지 톤
  '#81C784',  // Sage Green — 빈티지 초록
  '#B39DDB',  // Lavender — 보라 톤
];

// Obsidian 전용 도넛/파이 색상 — 골드 크림 + 민트 톤
export const OBSIDIAN_DONUT_COLORS = [
  '#4ECDC4',  // Mint/Teal — 주요 악센트
  '#FBBF24',  // Warm Amber — 골드
  '#F87171',  // Soft Red — 경고
  '#93C5FD',  // Sky Blue — 정보
  '#E8DCC8',  // Cream — 베이지 톤
  '#6EE7B7',  // Emerald Light — 성공
  '#C4B5A0',  // Taupe — 뮤트
];

// Stacked Bar Colors (수평 스택 바 차트용) - Figma 기준
export const STACKED_BAR_COLORS = {
  low: '#357AF6',       // Low (0-30%) - Blue
  medium: '#F7CB45',    // Medium (30-70%) - Yellow/Amber
  high: '#5CC8BE',      // High (70%-100%) - Teal
  prolonged: '#F7CB45', // Prolonged (>100%) - Yellow/Amber
};

// Nature 전용 스택 바 색상
export const NATURE_STACKED_BAR_COLORS = {
  low: '#4A90D9',       // Steel Blue
  medium: '#C9A435',    // Dark Gold
  high: '#2E8B57',      // Sea Green
  prolonged: '#D4713B', // Copper
};

// Cosmic 전용 스택 바 색상
export const COSMIC_STACKED_BAR_COLORS = {
  low: '#818CF8',       // Indigo Glow
  medium: '#FBBF24',    // Amber Glow
  high: '#00E5FF',      // Cyan Glow
  prolonged: '#F97316', // Orange Neon
};

// Vintage 전용 스택 바 색상
export const VINTAGE_STACKED_BAR_COLORS = {
  low: '#7EB8D4',       // Muted Blue
  medium: '#D4A44A',    // Warm Gold
  high: '#4ECDC4',      // Teal/Mint
  prolonged: '#E57373', // Dusty Rose
};

// Obsidian 전용 스택 바 색상
export const OBSIDIAN_STACKED_BAR_COLORS = {
  low: '#93C5FD',       // Sky Blue
  medium: '#FBBF24',    // Warm Amber
  high: '#4ECDC4',      // Mint/Teal
  prolonged: '#F87171', // Soft Red
};

// Operational Status Colors - Figma 기준
export const OPERATIONAL_COLORS = {
  inOperation: '#357AF6',     // In Operation - Blue
  outOfOperation: '#F7CB45',  // Out of Operation - Yellow/Amber
  unknown: '#5CC8BE',         // Unknown - Teal
};

// Nature 전용 운영 상태 색상
export const NATURE_OPERATIONAL_COLORS = {
  inOperation: '#2E8B57',      // Sea Green
  outOfOperation: '#C9A435',   // Dark Gold
  unknown: '#4A90D9',          // Steel Blue
};

// Cosmic 전용 운영 상태 색상
export const COSMIC_OPERATIONAL_COLORS = {
  inOperation: '#00E5FF',      // Cyan
  outOfOperation: '#FBBF24',   // Amber
  unknown: '#C77DFF',          // Purple
};

// Vintage 전용 운영 상태 색상
export const VINTAGE_OPERATIONAL_COLORS = {
  inOperation: '#4ECDC4',      // Teal/Mint
  outOfOperation: '#D4A44A',   // Warm Gold
  unknown: '#7EB8D4',          // Muted Blue
};

// Obsidian 전용 운영 상태 색상
export const OBSIDIAN_OPERATIONAL_COLORS = {
  inOperation: '#4ECDC4',      // Mint/Teal
  outOfOperation: '#FBBF24',   // Warm Amber
  unknown: '#93C5FD',          // Sky Blue
};

// Line Chart Colors (다중 라인용)
export const LINE_COLORS = [
  '#26C6DA',  // Supplier A - Teal
  '#AB47BC',  // Supplier B - Purple
  '#42A5F5',  // Supplier C - Blue
  '#66BB6A',  // Supplier D - Green
  '#FFA726',  // Supplier E - Orange
];

// Nature 전용 라인 차트 색상
export const NATURE_LINE_COLORS = [
  '#2E8B57',  // Sea Green
  '#8B6DB0',  // Muted Purple
  '#4A90D9',  // Steel Blue
  '#2BA5A5',  // Teal
  '#D4713B',  // Copper
];

// Cosmic 전용 라인 차트 색상
export const COSMIC_LINE_COLORS = [
  '#00E5FF',  // Cyan
  '#C77DFF',  // Purple
  '#818CF8',  // Indigo
  '#34D399',  // Emerald
  '#FF6B9D',  // Pink
];

// Vintage 전용 라인 차트 색상
export const VINTAGE_LINE_COLORS = [
  '#4ECDC4',  // Teal/Mint
  '#D4A44A',  // Warm Gold
  '#E57373',  // Dusty Rose
  '#7EB8D4',  // Muted Blue
  '#81C784',  // Sage Green
];

// Obsidian 전용 라인 차트 색상
export const OBSIDIAN_LINE_COLORS = [
  '#4ECDC4',  // Mint/Teal
  '#FBBF24',  // Warm Amber
  '#F87171',  // Soft Red
  '#93C5FD',  // Sky Blue
  '#6EE7B7',  // Emerald Light
];

// Utilization Level Colors
export const UTILIZATION_COLORS = {
  low: { color: '#66BB6A', label: 'Low (0-30%)' },
  medium: { color: '#FFCA28', label: 'Medium (30-70%)' },
  high: { color: '#26C6DA', label: 'High (70%-100%)' },
  prolonged: { color: '#FFA726', label: 'Prolonged (>100%)' },
};

// Text Colors for Charts
export const CHART_TEXT_COLORS = {
  primary: '#444444',
  secondary: '#666666',
  light: '#999999',
};

// Grid Colors
export const GRID_COLOR = '#E0E0E0';

/**
 * 모드별 차트 텍스트/그리드 색상 헬퍼
 *
 * isDarkMode 값: false(라이트) | true(다크) | 'cosmic' | 'nature' | 'vintage'
 * 'nature'는 라이트 배경이므로 다크 텍스트 사용
 * 'vintage'는 다크 배경 (beige 텍스트)
 */
const isDark = (mode) => mode === true || mode === 'cosmic' || mode === 'vintage' || mode === 'obsidian';

export const getChartTextColor = (isDarkMode) => {
  if (isDarkMode === 'nature') return '#1A2E1A';
  if (isDarkMode === 'vintage') return '#D4C5A9';
  if (isDarkMode === 'obsidian') return '#F0E6D4';
  return isDark(isDarkMode) ? '#FFFFFF' : '#444444';
};

export const getChartSecondaryColor = (isDarkMode) => {
  if (isDarkMode === 'nature') return '#3D5A3D';
  if (isDarkMode === 'vintage') return '#A89880';
  if (isDarkMode === 'obsidian') return '#D4C5A9';
  return isDark(isDarkMode) ? '#AAAAAA' : '#666666';
};

export const getChartGridColor = (isDarkMode) => {
  if (isDarkMode === 'nature') return 'rgba(0, 60, 30, 0.1)';
  if (isDarkMode === 'cosmic') return 'rgba(140, 100, 255, 0.12)';
  if (isDarkMode === 'vintage') return '#2A2A26';
  if (isDarkMode === 'obsidian') return '#2A2520';
  return isDark(isDarkMode) ? '#333333' : '#E0E0E0';
};

export const getChartTooltipBg = (isDarkMode) => {
  if (isDarkMode === 'nature') return 'rgba(255, 255, 255, 0.95)';
  if (isDarkMode === 'cosmic') return 'rgba(25, 15, 55, 0.95)';
  if (isDarkMode === 'vintage') return '#1A1A18';
  if (isDarkMode === 'obsidian') return '#0C0C0A';
  return isDark(isDarkMode) ? '#444444' : '#fff';
};

export const getChartTooltipBorder = (isDarkMode) => {
  if (isDarkMode === 'nature') return 'rgba(0, 60, 30, 0.15)';
  if (isDarkMode === 'cosmic') return 'rgba(140, 100, 255, 0.2)';
  if (isDarkMode === 'vintage') return '#3A3A35';
  if (isDarkMode === 'obsidian') return '#2A2520';
  return isDark(isDarkMode) ? '#333333' : '#E0E0E0';
};

export const getChartStrokeColor = (isDarkMode) => {
  if (isDarkMode === 'nature') return 'rgba(255, 255, 255, 0.7)';
  if (isDarkMode === 'cosmic') return 'rgba(25, 15, 55, 0.6)';
  if (isDarkMode === 'vintage') return '#1A1A18';
  if (isDarkMode === 'obsidian') return '#0C0C0A';
  return isDark(isDarkMode) ? '#333333' : '#fff';
};

/**
 * 모드별 도넛/파이 색상 배열 반환
 */
export const getDonutColors = (isDarkMode) => {
  if (isDarkMode === 'nature') return NATURE_DONUT_COLORS;
  if (isDarkMode === 'cosmic') return COSMIC_DONUT_COLORS;
  if (isDarkMode === 'vintage') return VINTAGE_DONUT_COLORS;
  if (isDarkMode === 'obsidian') return OBSIDIAN_DONUT_COLORS;
  return DONUT_COLORS;
};

/**
 * 모드별 라인 차트 색상 배열 반환
 */
export const getLineColors = (isDarkMode) => {
  if (isDarkMode === 'nature') return NATURE_LINE_COLORS;
  if (isDarkMode === 'cosmic') return COSMIC_LINE_COLORS;
  if (isDarkMode === 'vintage') return VINTAGE_LINE_COLORS;
  if (isDarkMode === 'obsidian') return OBSIDIAN_LINE_COLORS;
  return LINE_COLORS;
};

export default {
  CHART_COLORS,
  DONUT_COLORS,
  NATURE_DONUT_COLORS,
  COSMIC_DONUT_COLORS,
  VINTAGE_DONUT_COLORS,
  OBSIDIAN_DONUT_COLORS,
  STACKED_BAR_COLORS,
  NATURE_STACKED_BAR_COLORS,
  COSMIC_STACKED_BAR_COLORS,
  VINTAGE_STACKED_BAR_COLORS,
  OBSIDIAN_STACKED_BAR_COLORS,
  OPERATIONAL_COLORS,
  NATURE_OPERATIONAL_COLORS,
  COSMIC_OPERATIONAL_COLORS,
  VINTAGE_OPERATIONAL_COLORS,
  OBSIDIAN_OPERATIONAL_COLORS,
  LINE_COLORS,
  NATURE_LINE_COLORS,
  COSMIC_LINE_COLORS,
  VINTAGE_LINE_COLORS,
  OBSIDIAN_LINE_COLORS,
  UTILIZATION_COLORS,
  CHART_TEXT_COLORS,
  GRID_COLOR,
};
