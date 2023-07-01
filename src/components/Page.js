import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// next
import Head from 'next/head';

// material-ui
import { Box, Typography } from '@mui/material';

// ==============================|| PAGE HEAD ||============================== //

const PageTitle = ({ children }) => (
  <Typography variant="h2" color="textPrimary" sx={{ mb: 3, mt: -1 }}>
    {children}
  </Typography>
);

PageTitle.propTypes = {
  children: PropTypes.node
};

// ==============================|| Page - SET TITLE & META TAGS ||============================== //

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => (
  <>
    <Head>
      <title>{`${title} | Colonymon`}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </Box>
  </>
));

Page.displayName = 'Page';
Page.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.node,
  children: PropTypes.node
};

export default Page;
