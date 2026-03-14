import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  Info,
  X,
} from 'lucide-react';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasSnackbar 컴포넌트
 *
 * Manufacturing Management SaaS 전용 알림 배너(스낵바).
 * 경고, 에러, 성공, 정보 메시지를 표시하는 전체 너비 배너.
 *
 * Figma 디자인 (node-id=4069-5761) 기준.
 *
 * 동작 흐름:
 * 1. 메시지가 배너 형태로 표시된다
 * 2. 닫기(X) 버튼 클릭 시 onClose 콜백이 호출된다
 * 3. severity에 따라 배경색과 아이콘이 변경된다
 *
 * Props:
 * @param {string} message - 표시할 메시지 텍스트 [Required]
 * @param {'warning'|'error'|'success'|'info'} severity - 알림 유형 [Optional, 기본값: 'warning']
 * @param {function} onClose - 닫기 버튼 클릭 핸들러 [Optional]
 * @param {boolean} isClosable - 닫기 버튼 표시 여부 [Optional, 기본값: true]
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasSnackbar
 *   message="15 errors are detected, of 20 rows."
 *   severity="warning"
 *   onClose={() => setVisible(false)}
 * />
 */

const getSeverityConfig = (colors) => ({
  warning: {
    backgroundColor: colors.alertWarningSubBg,
    iconColor: colors.alertWarningOn,
    Icon: AlertTriangle,
  },
  error: {
    backgroundColor: colors.alertErrorSubBg,
    iconColor: colors.alertErrorOn,
    Icon: AlertCircle,
  },
  success: {
    backgroundColor: colors.alertSuccessSubBg,
    iconColor: colors.alertSuccessOn,
    Icon: CheckCircle,
  },
  info: {
    backgroundColor: colors.alertInstructSubBg,
    iconColor: colors.alertInstructOn,
    Icon: Info,
  },
});

const SaasSnackbar = forwardRef(function SaasSnackbar({
  message,
  severity = 'warning',
  onClose,
  isClosable = true,
  isDarkMode = false,
  sx: sxProp,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const severityConfig = getSeverityConfig(colors);
  const config = severityConfig[severity] || severityConfig.warning;
  const { Icon, iconColor, backgroundColor } = config;

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor,
        px: '20px',
        ...sxProp,
      }}
      {...props}
    >
      <Icon size={24} color={iconColor} style={{ flexShrink: 0 }} />
      <Typography
        sx={{
          flex: 1,
          fontFamily: 'Roboto, sans-serif',
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 'normal',
          color: colors.textPrimary,
        }}
      >
        {message}
      </Typography>
      {isClosable && (
        <IconButton
          size="small"
          onClick={onClose}
          sx={{
            color: colors.textPrimary,
            flexShrink: 0,
            p: 0,
          }}
        >
          <X size={20} />
        </IconButton>
      )}
    </Box>
  );
});

export { SaasSnackbar };
