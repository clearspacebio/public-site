/** @jsx jsx */
import { graphql, Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { Button, Flex, jsx, Text } from "theme-ui";
import { LogoIcon } from "./logo";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const Header = ({ color, bg }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Flex
      sx={{
        maxWidth: (theme) => theme.breakpoints[theme.breakpoints.length - 1],
        mx: "auto",
        my: 4,
        p: [3, 4, 2],
        position: "absolute",
        left: 0,
        right: 0,
        width: "100%",
        color: color,
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        title={siteMetadata.title}
        sx={{
          display: "flex",
          textDecoration: "none",
          flex: 1,
          justifyContent: ["center", "normal", "normal"],
        }}
      >
        <LogoIcon sx={{ mr: 3 }} />
        <Text
          sx={{
            fontFamily: "logo",
            fontWeight: "semibold",
            fontSize: 5,
            letterSpacing: -1,
            verticalAlign: "middle",
          }}
        >
          {siteMetadata.title}
        </Text>
      </Link>
      <a
        href={"http://access.clearspace.bio"}
        target={"_blank"}
        rel="noreferrer"
        sx={{ display: ["none", "block", "block"] }}
      >
        <Button variant="elevated">Sign up for the pilot study</Button>
      </a>
    </Flex>
  );
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

Header.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

Header.defaultProps = {
  color: `primary`,
  bg: `background`,
};
