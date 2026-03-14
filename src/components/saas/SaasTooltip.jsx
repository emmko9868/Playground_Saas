import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasTooltip 컴포넌트
 *
 * Manufacturing Management SaaS 전용 툴팁/팝오버.
 * 4가지 방향(top/bottom/left/right) 지원.
 * 화살표와 그림자가 있는 흰색 컨테이너.
 *
 * Props:
 * @param {ReactNode} children - 툴팁을 트리거할 요소 [Required]
 * @param {ReactNode} content - 툴팁 내용 [Required]
 * @param {string} placement - 툴팁 위치 [Optional, 기본값: 'top']
 *   'top' | 'top-start' | 'top-end' |
 *   'bottom' | 'bottom-start' | 'bottom-end' |
 *   'left' | 'left-start' | 'left-end' |
 *   'right' | 'right-start' | 'right-end'
 * @param {boolean} arrow - 화살표 표시 여부 [Optional, 기본값: true]
 * @param {boolean} open - 제어 모드용 열림 상태 [Optional]
 * @param {function} onOpen - 열림 핸들러 [Optional]
 * @param {function} onClose - 닫힘 핸들러 [Optional]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasTooltip
 *   content={<SaasTooltipElement type="summary" title="Info" linkText="View" />}
 *   placement="top"
 * >
 *   <Button>Hover me</Button>
 * </SaasTooltip>
 */

const SaasTooltip = forwardRef(function SaasTooltip({
  children,
  content,
  placement = 'top',
  arrow = true,
  open,
  onOpen,
  onClose,
  enterDelay = 200,
  leaveDelay = 0,
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);

  return (
    <Tooltip
      ref={ref}
      title={content}
      placement={placement}
      arrow={arrow}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      slotProps={{
        tooltip: {
          sx: {
            backgroundColor: colors.surfaceBg,
            color: colors.textPrimary,
            padding: '8px',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
            borderRadius: 0,
            maxWidth: 'none',
            fontSize: 14,
            fontFamily: 'Roboto, sans-serif',
          },
        },
        arrow: {
          sx: {
            color: colors.surfaceBg,
            '&::before': {
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            },
          },
        },
      }}
      {...props}
    >
      <Box component="span" sx={{ display: 'inline-flex', ...sx }}>
        {children}
      </Box>
    </Tooltip>
  );
});

export { SaasTooltip };
