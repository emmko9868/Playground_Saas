import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { SaasButton } from './SaasButton';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasBottomBar 컴포넌트
 *
 * Manufacturing Management SaaS 전용 하단 버튼 바.
 * Progress Stepper와 함께 사용되는 네비게이션 바.
 *
 * Props:
 * @param {string} status - 상태 ('default' | 'next') [Optional, 기본값: 'default']
 *   - default: Next 버튼 비활성화 (회색), Save 버튼 표시
 *   - next: Next 버튼 활성화 (파란색)
 * @param {boolean} showSaveButton - Save 버튼 표시 여부 [Optional, 기본값: true]
 * @param {string} cancelLabel - Cancel 버튼 라벨 [Optional, 기본값: 'Cancel']
 * @param {string} saveLabel - Save 버튼 라벨 [Optional, 기본값: 'Save']
 * @param {string} nextLabel - Next 버튼 라벨 [Optional, 기본값: 'Next']
 * @param {function} onCancel - Cancel 버튼 클릭 핸들러 [Optional]
 * @param {function} onSave - Save 버튼 클릭 핸들러 [Optional]
 * @param {function} onNext - Next 버튼 클릭 핸들러 [Optional]
 * @param {boolean} nextDisabled - Next 버튼 비활성화 여부 (status='next'일 때도 강제 비활성화) [Optional, 기본값: false]
 * @param {boolean} saveDisabled - Save 버튼 비활성화 여부 [Optional, 기본값: false]
 * @param {number} width - 바 너비 [Optional, 기본값: '100%']
 * @param {boolean} isDarkMode - 다크모드 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * // Default 상태 (Next 비활성화)
 * <SaasBottomBar onCancel={handleCancel} onSave={handleSave} onNext={handleNext} />
 *
 * // Next 상태 (Next 활성화)
 * <SaasBottomBar status="next" onCancel={handleCancel} onNext={handleNext} />
 *
 * // Save 버튼 없이
 * <SaasBottomBar showSaveButton={false} status="next" onCancel={handleCancel} onNext={handleNext} />
 */
const SaasBottomBar = forwardRef(function SaasBottomBar({
  status = 'default',
  showSaveButton = true,
  cancelLabel = 'Cancel',
  saveLabel = 'Save',
  nextLabel = 'Next',
  onCancel,
  onSave,
  onNext,
  nextDisabled = false,
  saveDisabled = false,
  width = '100%',
  isDarkMode = false,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  // Next 버튼 활성화 여부
  const isNextEnabled = status === 'next' && !nextDisabled;

  return (
    <Box
      ref={ref}
      sx={{
        width,
        height: 80,
        px: 5, // 40px
        py: 1.5, // 12px
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.surfaceBg,
        borderTop: `2px solid ${colors.divider}`,
        ...sx,
      }}
      {...props}
    >
      {/* Left Side - Cancel Button */}
      <SaasButton
        variant="ghost"
        onClick={onCancel}
        sx={{ width: 200 }}
      >
        {cancelLabel}
      </SaasButton>

      {/* Right Side - Button Container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 5, // 40px
        }}
      >
        {/* Save Button (Optional) */}
        {showSaveButton && (
          <SaasButton
            variant="secondary"
            onClick={onSave}
            disabled={saveDisabled}
            sx={{ width: 200 }}
          >
            {saveLabel}
          </SaasButton>
        )}

        {/* Next Button */}
        <SaasButton
          variant="primary"
          onClick={onNext}
          disabled={!isNextEnabled}
          sx={{ width: 200 }}
        >
          {nextLabel}
        </SaasButton>
      </Box>
    </Box>
  );
});

export { SaasBottomBar };
