import PropTypes from 'prop-types';

// next
import Image from 'next/legacy/image';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';

// project-imports
import { ThemeMode } from 'config';

/**
 * if you want to use image instead of <svg> uncomment following.
 */

const logoDark = '/assets/images/logo-dark.svg';
const logo = '/assets/images/logo.svg';

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse }) => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
    */
   <>
    <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
      <Grid item md={3} style={{ display: 'inline-flex' }}>
        <Image src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Colonymon" width={118} height={85} />
      </Grid>
      <Grid item >
        Colonymon
      </Grid>
    </Grid>
   </>
  );
};

LogoMain.propTypes = {
  reverse: PropTypes.bool
};

export default LogoMain;
