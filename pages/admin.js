import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Layout from '@components/Layout';

export default function AdminDashboard() {

  return (
    <Layout>
        <Container maxWidth="sm">
        <h1>Admin Dashoard</h1>
        <Typography variant="h7" align="left" color="textPrimary" gutterBottom>
          Some super secret dashboard
        </Typography>
        </Container>
    </Layout>
  );
}

AdminDashboard.auth = true;