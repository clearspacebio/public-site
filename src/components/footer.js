/** @jsx jsx */
import { graphql, Link, useStaticQuery } from "gatsby";
import { Fragment } from "react";
import { Facebook, GitHub, Linkedin, Mail, Twitter } from "react-feather";
import { Flex, Grid, jsx, Text } from "theme-ui";
import { LogoType } from "./logo";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          sentence1
        }
      }
    }
  `);

  return (
    <Fragment>
      <Grid
        columns={[1, 1, `2fr 1fr 1fr`]}
        sx={{
          maxWidth: (theme) => theme.breakpoints[theme.breakpoints.length - 1],
          mx: "auto",
          p: [3, 4, 2],
        }}
      >
        {/* Logo & social links - - - - - - - - - - - - - - - - - - - - - - */}
        <Flex sx={{ flexDirection: "column" }}>
          <Link
            to="/"
            title={siteMetadata.title}
            sx={{ display: "flex", pb: 4 }}
          >
            <LogoType sx={{ color: "primary" }} />
          </Link>
          <Text pb={4}>{siteMetadata.sentence1}</Text>
          <Flex color="primary">
            <a sx={{ mr: 3 }} href="mailto:info@clearspace.bio">
              <Mail />
            </a>
            <a sx={{ mr: 3 }} href="https://linkedin.com/company/clearspacebio">
              <Linkedin />
            </a>
            <a sx={{ mr: 3 }} href="https://github.com/clearspacebio">
              <GitHub />
            </a>
            <a sx={{ mr: 3 }} href="https://facebook.com/clearspacebio">
              <Facebook />
            </a>
            <a sx={{ mr: 3 }} href="https://twitter.com/clearspacebio">
              <Twitter />
            </a>
          </Flex>
        </Flex>
        {/* Solutions - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
        <Flex sx={{ flexDirection: "column", pt: 3, display: "none" }}>
          <Text pb={2} variant="footerHeading">
            Our solutions
          </Text>
          <Grid gap={2}>
            <Link pb={1} to="#">
              Care facilities
            </Link>
            <Link pb={1} to="#">
              Hotels
            </Link>
            <Link pb={1} to="#">
              Schools
            </Link>
            <Link pb={1} to="#">
              Offices
            </Link>
          </Grid>
        </Flex>
        {/* About us  - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
        <Flex sx={{ flexDirection: "column", pt: 3, display: "none" }}>
          <Text pb={2} variant="footerHeading">
            About us
          </Text>
          <Grid gap={2}>
            <Link pb={1} to="/">
              Home
            </Link>
            <Link pb={1} to="/our-team">
              Our team
            </Link>
            <Link pb={1} to="/privacy-policy">
              Privacy policy
            </Link>
            <Link pb={1} to="/terms-of-service">
              Terms of service
            </Link>
            <Link pb={1} to="/contact-us">
              Contact us
            </Link>
          </Grid>
        </Flex>
      </Grid>
      {/* Copyright - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Text
        sx={{
          color: "muted",
          textAlign: "center",
          fontSize: 0,
          fontWeight: "semibold",
          mt: [4, 4, 6],
          mb: 4,
        }}
      >
        &copy;2020 Clearspace, Inc. All rights reserved.
      </Text>
    </Fragment>
  );
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Footer.propTypes = {
//   siteTitle: PropTypes.string,
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Footer.defaultProps = {
//   siteTitle: ``,
// }
