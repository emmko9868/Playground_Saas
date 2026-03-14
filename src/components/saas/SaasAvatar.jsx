import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/**
 * SaasAvatar 컴포넌트
 *
 * Manufacturing Management SaaS 전용 아바타.
 * 텍스트 또는 이미지 타입 지원.
 *
 * Props:
 * @param {string} type - 아바타 타입 ('text' | 'image') [Optional, 기본값: 'text']
 * @param {string} size - 아바타 크기 ('small' | 'medium' | 'large') [Optional, 기본값: 'medium']
 * @param {string} text - 텍스트 타입일 때 표시할 이니셜 (1-2자) [Optional]
 * @param {string} src - 이미지 타입일 때 이미지 URL [Optional]
 * @param {string} alt - 이미지 alt 텍스트 [Optional]
 * @param {string} color - 아바타 배경색 [Optional, 기본값: 'blue']
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasAvatar type="text" text="JD" size="large" color="blue" />
 * <SaasAvatar type="image" src="/avatar.jpg" size="medium" />
 */

// 사이즈별 크기 매핑
const sizeMap = {
  small: 20,
  medium: 24,
  large: 40,
};

// 사이즈별 폰트 크기 매핑
const fontSizeMap = {
  small: 8,
  medium: 10,
  large: 14,
};

// 색상 팔레트 (14 colors)
const colorPalette = {
  blue: { bg: '#287EE4', text: '#FFFFFF' },
  lightBlue: { bg: '#5CB8FF', text: '#FFFFFF' },
  cyan: { bg: '#00BCD4', text: '#FFFFFF' },
  teal: { bg: '#009688', text: '#FFFFFF' },
  green: { bg: '#4CAF50', text: '#FFFFFF' },
  lightGreen: { bg: '#8BC34A', text: '#FFFFFF' },
  lime: { bg: '#CDDC39', text: '#444444' },
  yellow: { bg: '#FFEB3B', text: '#444444' },
  amber: { bg: '#FFC107', text: '#444444' },
  orange: { bg: '#FF9800', text: '#FFFFFF' },
  deepOrange: { bg: '#FF5722', text: '#FFFFFF' },
  red: { bg: '#F44336', text: '#FFFFFF' },
  pink: { bg: '#E91E63', text: '#FFFFFF' },
  purple: { bg: '#9C27B0', text: '#FFFFFF' },
};

const SaasAvatar = forwardRef(function SaasAvatar({
  type = 'text',
  size = 'medium',
  text = '',
  src = '',
  alt = '',
  color = 'blue',
  sx,
  ...props
}, ref) {
  const dimension = sizeMap[size] || sizeMap.medium;
  const fontSize = fontSizeMap[size] || fontSizeMap.medium;
  const colorSet = colorPalette[color] || colorPalette.blue;

  // 텍스트 이니셜 추출 (최대 2자)
  const displayText = text.slice(0, 2).toUpperCase();

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dimension,
        height: dimension,
        borderRadius: '50%',
        backgroundColor: type === 'image' ? 'transparent' : colorSet.bg,
        overflow: 'hidden',
        flexShrink: 0,
        ...sx,
      }}
      {...props}
    >
      {type === 'image' && src ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <Typography
          sx={{
            fontFamily: 'Roboto, sans-serif',
            fontSize,
            fontWeight: 500,
            color: colorSet.text,
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {displayText}
        </Typography>
      )}
    </Box>
  );
});

export { SaasAvatar, colorPalette };
