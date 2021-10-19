import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Layout from '@components/Layout';
import Link from '@mui/material/Link';

export default function ContactUs() {
  const { query: { callbackUrl } } = useRouter();

  return (
    <Layout>
      <Container maxWidth="sm">    
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Custom Login
        </Typography>
        <Typography variant="h7" align="left" color="textPrimary" gutterBottom>
            <div>
            <Button variant="contained" color="primary" component={Link} naked onClick={() => signIn("google", { callbackUrl: callbackUrl})}>
            Sign in with Google
            </Button>
            </div>
        </Typography>
      </Box>
      </Container>
    </Layout>
  );
}

