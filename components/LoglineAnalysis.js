import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


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

const logline = [
  {"status":"OK",
    "result":
      { "usage":
        {"text_units":1,"text_characters":16,"features":6},
        "sentiment":
        {"document":
          {"score":-0.933999,"label":"negative"}
        },
        "semantic_roles":[],
        "language":"en",
        "keywords": [
          {"text":"big bad wolf",
          "sentiment":
            {"score":-0.933999,
            "label":"negative"
          },
          "relevance":1,"emotion":
          {"sadness":0.581607,
          "joy":0.004631,
          "fear":0.326501,
          "disgust":0.229823,
          "anger":0.190403},
          "count":1}],
          "entities":[],
          "emotion":
          {"document":
            {"emotion":
              {"sadness":0.581607,
              "joy":0.004631,"fear":0.326501,"disgust":0.229823,"anger":0.190403}}},"concepts":[{"text":"Big Bad","relevance":0.91136,"dbpedia_resource":"http://dbpedia.org/resource/Big_Bad"},{"text":"Big Bad Wolf","relevance":0.886784,"dbpedia_resource":"http://dbpedia.org/resource/Big_Bad_Wolf"}]}};
];

function LoglineAnalysis() {

  return (
    <React.Fragment>
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
      </Container>
    </React.Fragment>
  );
}
  
export default LoglineAnalysis;