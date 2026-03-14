import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Bell, HelpCircle, User } from 'lucide-react';
import { SaasButton } from './SaasButton';
import { getColors } from '../../data/darkModeColors';

/**
 * SaasGNB 컴포넌트
 *
 * Manufacturing Management SaaS 전용 글로벌 네비게이션 바.
 * 상단 고정, 파란색 배경, 로고 + OEM 배지 + 언어 선택 + 아이콘 버튼 구성.
 *
 * Props:
 * @param {string} companyName - 회사명 (로고 텍스트) [Optional, 기본값: 'Company']
 * @param {string} userType - 사용자 유형 배지 텍스트 [Optional, 기본값: 'OEM']
 * @param {string} language - 현재 선택된 언어 [Optional, 기본값: 'English']
 * @param {function} onLanguageChange - 언어 변경 핸들러 [Optional]
 * @param {function} onNotificationClick - 알림 버튼 클릭 핸들러 [Optional]
 * @param {function} onHelpClick - 도움말 버튼 클릭 핸들러 [Optional]
 * @param {function} onProfileClick - 프로필 버튼 클릭 핸들러 [Optional]
 * @param {Array} languages - 언어 목록 [Optional, 기본값: ['English', 'Korean', 'Japanese']]
 * @param {node} logo - 커스텀 로고 컴포넌트 [Optional]
 * @param {object} sx - 추가 스타일 [Optional]
 *
 * Example usage:
 * <SaasGNB
 *   companyName="Dyson"
 *   userType="OEM"
 *   language="English"
 *   onLanguageChange={(lang) => console.log(lang)}
 * />
 */
const SaasGNB = forwardRef(function SaasGNB({
  companyName = 'Company',
  userType = 'OEM',
  language = 'English',
  onLanguageChange,
  onNotificationClick,
  onHelpClick,
  onProfileClick,
  languages = ['English', 'Korean', 'Japanese'],
  logo,
  isDarkMode = false,
  onDarkModeToggle,
  sx,
  ...props
}, ref) {
  const colors = getColors(isDarkMode);
  const gnbText = colors.gnbTextColor || '#FFFFFF';
  const gnbHover = colors.gnbHoverBg || 'rgba(255,255,255,0.1)';
  const isNature = isDarkMode === 'nature';
  const isCosmic = isDarkMode === 'cosmic';
  const isObsidian = isDarkMode === 'obsidian';
  const isGlass = isNature || isCosmic;
  const handleLanguageChange = (event) => {
    if (onLanguageChange) {
      onLanguageChange(event.target.value);
    }
  };

  return (
    <Box
      ref={ref}
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 80,
        px: '20px',
        py: 2.5,
        backgroundColor: colors.gnbBg,
        transition: 'background-color 0.4s ease, border-color 0.4s ease',
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        ...(isNature && {
          backdropFilter: 'blur(40px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(40px) saturate(1.8)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 4px 24px rgba(0, 50, 20, 0.08)',
        }),
        ...(isCosmic && {
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(140, 100, 255, 0.15)',
        }),
        ...(isObsidian && {
          borderBottom: '1.5px solid #2A2520',
        }),
        ...sx,
      }}
      {...props}
    >
      {/* Left: Logo + Badge */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {logo || (
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: gnbText,
              letterSpacing: '0.05em',
            }}
          >
            {companyName}
          </Typography>
        )}
        {userType && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 0.5,
              py: 0.25,
              backgroundColor: isNature
                ? 'rgba(255, 255, 255, 0.4)'
                : isObsidian
                  ? 'rgba(232, 220, 200, 0.15)'
                  : 'rgba(255, 255, 255, 0.2)',
              borderRadius: isNature || isObsidian ? '4px' : 0,
              ...(isNature && {
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }),
              ...(isObsidian && {
                border: '1px solid #2A2520',
              }),
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: 9,
                fontWeight: 500,
                color: gnbText,
                lineHeight: 1,
              }}
            >
              {userType}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Right: Controls */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3.5 }}>
        {/* Language Dropdown - Brand 600 배경, 흰색 텍스트/화살표 */}
        <FormControl size="small">
          <Select
            value={language}
            onChange={handleLanguageChange}
            displayEmpty
            sx={{
              width: 200,
              height: 40,
              backgroundColor: colors.gnbDropdownBg,
              border: isNature
                ? '1px solid rgba(255, 255, 255, 0.5)'
                : isObsidian
                  ? '1.5px solid #2A2520'
                  : 'none',
              borderRadius: isNature || isObsidian ? '8px' : 1,
              ...(isNature && {
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }),
              '& .MuiSelect-select': {
                py: 1,
                px: 2,
                fontFamily: 'Roboto, sans-serif',
                fontSize: 14,
                fontWeight: 400,
                color: gnbText,
              },
              '& .MuiSelect-icon': {
                color: gnbText,
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: isNature
                  ? '1px solid rgba(255, 255, 255, 0.5)'
                  : isObsidian
                    ? '1.5px solid #2A2520'
                    : 'none',
              },
              '&:hover': {
                backgroundColor: isNature
                  ? 'rgba(255, 255, 255, 0.9)'
                  : isObsidian
                    ? 'rgba(232, 220, 200, 0.1)'
                    : (isDarkMode ? '#1E6FCC' : '#1663BD'),
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: isNature
                  ? '1px solid rgba(255, 255, 255, 0.7)'
                  : isObsidian
                    ? '1.5px solid #3A3530'
                    : 'none',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: isNature
                  ? '1px solid rgba(13, 110, 58, 0.4)'
                  : isObsidian
                    ? '1.5px solid #4ECDC4'
                    : 'none',
              },
            }}
          >
            {languages.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Icon Buttons */}
        <SaasButton
          variant="ghost"
          iconPosition="only"
          icon={<Bell size={20} color={gnbText} />}
          onClick={onNotificationClick}
          aria-label="Notifications"
          sx={{ color: gnbText, '&:hover': { backgroundColor: gnbHover } }}
        />

        <SaasButton
          variant="ghost"
          iconPosition="only"
          icon={<HelpCircle size={20} color={gnbText} />}
          onClick={onHelpClick}
          aria-label="Help"
          sx={{ color: gnbText, '&:hover': { backgroundColor: gnbHover } }}
        />

        <SaasButton
          variant="ghost"
          iconPosition="only"
          icon={<User size={20} color={gnbText} />}
          onClick={onProfileClick}
          aria-label="Profile"
          sx={{ color: gnbText, '&:hover': { backgroundColor: gnbHover } }}
        />
      </Box>
    </Box>
  );
});

export { SaasGNB };
