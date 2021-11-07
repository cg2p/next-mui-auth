import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Layout from '@components/Layout';
import LoglineAnalysis from '@components/LoglineAnalysis';

function LoglinePage() {

  return (
    <Layout>
        <Container maxWidth="sm">
        <h1>Logline Analysis</h1>
        <Typography variant="h7" align="left" color="textPrimary" gutterBottom>
          the logline page
          <LoglineAnalysis/>
        </Typography>
        </Container>
    </Layout>
  );
}
  
export default LoglinePage;
  
