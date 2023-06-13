// material-ui
import { Grid, Typography } from "@mui/material";

// project imports
import Layout from "layout";
import Page from "components/Page";
import MainCard from "components/MainCard";
import ApiaryTable from "sections/apiaries/hives/HiveTable";

// / ==============================|| Apiarios ||==============================

const Hives = () => (
  <Page title="Colméias">
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="Colméias" content={false}>
          <ApiaryTable />
        </MainCard>
      </Grid>
    </Grid>
  </Page>
);

Hives.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Hives;
