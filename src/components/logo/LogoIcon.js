// next
import Image from 'next/legacy/image';

// material-ui
import { useTheme } from '@mui/material/styles';

// project-imports
import { ThemeMode } from "config";

/**
 *
 * if you want to use image instead of <svg> uncomment following.
 *
 **/

const logoIconDark = '/assets/images/logo-dark.svg';
const logoIcon = '/assets/images/logo.svg';


// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
    */
    <Image src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIcon} alt="Colonymon" width={129} height={129} />
  );
};

export default LogoIcon;
