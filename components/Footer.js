import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import Copyright from '@components/Copyright';

const footers = [
  { title: 'Company',
    link: [
      { text: "About", route: "/about" },
      { text: "Contact Us", route: "/contact" },
    ]
  },
  { title: 'Resources',
    link: [
      { text: "Resource #1", route: "#" },
      { text: "Resource #2", route: "#" },
    ]
  },
  { title: 'Legal',
    link: [
      { text: "Privacy Policy", route: "/privacy" },
      { text: "Terms of Use", route: "/terms" },
    ]
  },
];

function Footer() {

  return (
    <React.Fragment>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.link.map((item) => (
                  <li key={item}>
                    <Link href={item.route} variant="subtitle1" color="textSecondary">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
  
export default Footer;