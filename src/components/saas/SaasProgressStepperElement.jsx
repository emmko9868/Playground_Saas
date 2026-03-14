import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Check } from 'lucide-react';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasProgressStepperElement 컴포넌트
 *
 * Manufacturing Management SaaS 전용 진행 단계 요소.
 * 데이터 입력 및 정보 입력 과정의 진행 상태 표시.
 *
 * Props:
 * @param {string} element - 요소 타입 [Optional, 기본값: 'inProgress']
 *   'inProgress' - 중간 단계 (오른쪽에 progress bar 표시)
 *   'end' - 마지막 단계 (progress bar 없음)
 * @param {string} status - 상태 [Optional, 기본값: 'inactive']
 *   'done' - 완료됨 (체크 아이콘, 파란 배경)
 *   'active' - 현재 진행 중 (점, 파란 테두리)
 *   'inactive' - 비활성 (빈 원, 회색 테두리)
 * @param {string} label - 라벨 텍스트 [Optional, 기본값: 'Label']
 * @param {function} onClick - 클릭 핸들러 [Optional]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasProgressStepperElement
 *   element="inProgress"
 *   status="done"
 *   label="Step 1"
 * />
 */

const SaasProgressStepperElement = forwardRef(function SaasProgressStepperElement({
  element = 'inProgress',
  status = 'inactive',
  label = 'Label',
  onClick,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const isEnd = element === 'end';
  const isDone = status === 'done';
  const isActive = status === 'active';
  const isInactive = status === 'inactive';

  // 인디케이터 배경색
  const getIndicatorBgColor = (hovered) => {
    if (isDone) {
      return hovered ? colors.accentBlueDark : colors.accentBlue;
    }
    return 'transparent';
  };

  // 인디케이터 테두리
  const getIndicatorBorder = () => {
    if (isDone) return 'none';
    if (isActive) return `2px solid ${colors.accentBlue}`;
    return `2px solid ${colors.divider}`;
  };

  // 라벨 색상
  const getLabelColor = (hovered) => {
    if (isDone) {
      return hovered ? colors.accentBlueDark : colors.accentBlue;
    }
    if (isActive) return colors.accentBlue;
    return colors.textDisabled;
  };

  // Progress bar 색상
  const getProgressBarColor = (hovered) => {
    if (isDone) {
      return hovered ? colors.accentBlueDark : colors.accentBlue;
    }
    return colors.divider;
  };

  return (
    <Box
      ref={ref}
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        flex: isEnd ? '0 0 auto' : '1 0 0',
        minWidth: isEnd ? 'auto' : 0,
        '&:hover': {
          '& .indicator': {
            backgroundColor: getIndicatorBgColor(true),
          },
          '& .label': {
            color: getLabelColor(true),
          },
          '& .progress-bar': {
            backgroundColor: getProgressBarColor(true),
          },
          '& .inner-dot': {
            opacity: isInactive ? 1 : undefined,
          },
        },
        ...sx,
      }}
      {...props}
    >
      {/* Indicator Circle */}
      <Box
        className="indicator"
        sx={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          backgroundColor: getIndicatorBgColor(false),
          border: getIndicatorBorder(),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'background-color 0.2s ease',
          position: 'relative',
        }}
      >
        {/* Done: Check icon */}
        {isDone && (
          <Check
            size={16}
            color="#FFFFFF"
            strokeWidth={3}
          />
        )}

        {/* Active: Blue dot */}
        {isActive && (
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: colors.accentBlue,
            }}
          />
        )}

        {/* Inactive: Grey dot on hover */}
        {isInactive && (
          <Box
            className="inner-dot"
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: colors.textDisabled,
              opacity: 0,
              transition: 'opacity 0.2s ease',
            }}
          />
        )}
      </Box>

      {/* Progress Bar (only for inProgress type) */}
      {!isEnd && (
        <Box
          className="progress-bar"
          sx={{
            flex: '1 0 0',
            height: 2,
            backgroundColor: getProgressBarColor(false),
            minWidth: 0,
            transition: 'background-color 0.2s ease',
          }}
        />
      )}

      {/* Label */}
      <Typography
        className="label"
        sx={{
          position: 'absolute',
          top: 47,
          left: 16,
          transform: 'translate(-50%, -50%)',
          width: 80,
          fontFamily: 'Roboto, sans-serif',
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 1.25,
          color: getLabelColor(false),
          textAlign: 'center',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          transition: 'color 0.2s ease',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
});

export { SaasProgressStepperElement };
