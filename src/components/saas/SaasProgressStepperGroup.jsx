import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { SaasProgressStepperElement } from './SaasProgressStepperElement';

/**
 * SaasProgressStepperGroup 컴포넌트
 *
 * Manufacturing Management SaaS 전용 진행 단계 그룹.
 * 여러 단계를 가로로 배치하여 전체 진행 상태를 표시.
 * 데이터 입력 및 정보 입력 과정에서 사용.
 *
 * Props:
 * @param {Array} steps - 단계 데이터 배열 [Required]
 *   [{ label: string, status?: 'done' | 'active' | 'inactive' }]
 * @param {number} activeStep - 현재 활성 단계 인덱스 [Optional]
 *   이 값이 제공되면 steps의 status를 무시하고 자동 계산
 * @param {function} onStepClick - 단계 클릭 핸들러 [Optional]
 *   (stepIndex) => void
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasProgressStepperGroup
 *   steps={[
 *     { label: 'Basic Info' },
 *     { label: 'Details' },
 *     { label: 'Review' },
 *     { label: 'Complete' },
 *   ]}
 *   activeStep={1}
 *   onStepClick={(index) => setActiveStep(index)}
 * />
 */

const SaasProgressStepperGroup = forwardRef(function SaasProgressStepperGroup({
  steps = [],
  activeStep,
  onStepClick,
  sx,
  ...props
}, ref) {
  // activeStep이 제공되면 자동으로 status 계산
  const getStepStatus = (index, step) => {
    if (activeStep !== undefined) {
      if (index < activeStep) return 'done';
      if (index === activeStep) return 'active';
      return 'inactive';
    }
    return step.status || 'inactive';
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: '20px',
        height: 80,
        width: '100%',
        ...sx,
      }}
      {...props}
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        const status = getStepStatus(index, step);

        return (
          <SaasProgressStepperElement
            key={index}
            element={isLast ? 'end' : 'inProgress'}
            status={status}
            label={step.label}
            onClick={onStepClick ? () => onStepClick(index) : undefined}
          />
        );
      })}
    </Box>
  );
});

export { SaasProgressStepperGroup };
