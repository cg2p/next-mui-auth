import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Layout from '@components/Layout';

function ContactPage() {

  return (
    <Layout>
        <Container maxWidth="sm">
        <h1>Contact Us</h1>
        <Typography variant="h7" align="left" color="textPrimary" gutterBottom>
          the contact page
        </Typography>
        </Container>
    </Layout>
  );
}
  
export default ContactPage;
  
