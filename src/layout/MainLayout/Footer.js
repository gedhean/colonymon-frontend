// third-party
import { FormattedMessage } from 'react-intl';

// material-ui
import { Link, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={{ p: '24px 16px 0px', mt: 'auto' }}
  >
    <Typography variant="caption">
      &copy; Made with ❤️ by Gêdhean Alves
    </Typography>
    <Stack
      spacing={1.5}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link href="/about" variant="caption" color="textPrimary">
        <FormattedMessage id="about" />
      </Link>
    </Stack>
  </Stack>
);

export default Footer;
