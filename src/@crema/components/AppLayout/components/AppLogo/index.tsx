import React, { useState, useEffect } from 'react';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import { StyledAppLogo } from './index.styled';



type AppLogoProps = {
  hasSidebarColor?: boolean;
};

const AppLogo: React.FC<AppLogoProps> = ({ hasSidebarColor }) => {
  const { sidebarColorSet } = useSidebarContext();
  const { theme } = useThemeContext();
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLogoSrc = () => {
    const isDark = hasSidebarColor
    ? sidebarColorSet.mode === 'dark'
    : theme.palette.mode === 'dark';

    if (isLargeScreen) {

      return isDark ? '/assets/images/logo-white-with-name.png' : '/assets/images/logo-with-name.png';
    } else {
  
      return isDark ? '/assets/images/logo-white.png' : '/assets/images/logo.png';
    }
  };

  return (
    <StyledAppLogo>
      <img src={getLogoSrc()} alt="logo" />
    </StyledAppLogo>
  );
};

export default AppLogo;
