import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SaasAvatar } from './SaasAvatar';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasAvatarGroup 컴포넌트
 *
 * Manufacturing Management SaaS 전용 아바타 그룹.
 * 여러 아바타를 겹쳐서 표시하고, 초과 시 "+N" 버튼 표시.
 *
 * Props:
 * @param {Array} avatars - 아바타 데이터 배열 [{ text, src, color }] [Required]
 * @param {number} max - 표시할 최대 아바타 수 [Optional, 기본값: 4]
 * @param {string} size - 아바타 크기 ('small' | 'medium' | 'large') [Optional, 기본값: 'medium']
 * @param {number} spacing - 아바타 간격 (음수: 겹침) [Optional, 기본값: -8]
 * @param {function} onMoreClick - "+N" 버튼 클릭 핸들러 [Optional]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasAvatarGroup
 *   avatars={[
 *     { text: 'JD', color: 'blue' },
 *     { text: 'AB', color: 'red' },
 *     { src: '/avatar.jpg' },
 *   ]}
 *   max={3}
 *   size="medium"
 * />
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

const SaasAvatarGroup = forwardRef(function SaasAvatarGroup({
  avatars = [],
  max = 4,
  size = 'medium',
  spacing = -8,
  onMoreClick,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const dimension = sizeMap[size] || sizeMap.medium;
  const fontSize = fontSizeMap[size] || fontSizeMap.medium;

  // 표시할 아바타와 나머지 수 계산
  const displayAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;
  const showMore = remainingCount > 0;

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
      {...props}
    >
      {displayAvatars.map((avatar, index) => (
        <Box
          key={index}
          sx={{
            marginLeft: index === 0 ? 0 : `${spacing}px`,
            zIndex: displayAvatars.length - index,
            position: 'relative',
          }}
        >
          <SaasAvatar
            type={avatar.src ? 'image' : 'text'}
            size={size}
            text={avatar.text}
            src={avatar.src}
            alt={avatar.alt}
            color={avatar.color}
            sx={{
              border: `2px solid ${colors.surfaceBg}`,
              boxSizing: 'content-box',
            }}
          />
        </Box>
      ))}

      {/* +N More Button */}
      {showMore && (
        <Box
          onClick={onMoreClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: dimension,
            height: dimension,
            borderRadius: '50%',
            backgroundColor: colors.divider,
            border: `2px solid ${colors.surfaceBg}`,
            marginLeft: `${spacing}px`,
            zIndex: 0,
            cursor: onMoreClick ? 'pointer' : 'default',
            boxSizing: 'content-box',
            '&:hover': onMoreClick ? {
              backgroundColor: colors.divider,
            } : {},
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize,
              fontWeight: 500,
              color: colors.textSecondary,
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            +{remainingCount}
          </Typography>
        </Box>
      )}
    </Box>
  );
});

export { SaasAvatarGroup };
