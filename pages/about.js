import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Layout from '@components/Layout';

function AboutPage() {

  return (
    <Layout>
        <Container maxWidth="sm">
        <h1>About Us</h1>
        <Typography variant="h7" align="left" color="textPrimary" gutterBottom>
          the about page
        </Typography>
        </Container>
    </Layout>
  );
}
  
export default AboutPage;
  
