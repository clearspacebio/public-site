/** @jsx jsx */
import { graphql, Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { Button, Flex, jsx, Styled, useThemeUI } from "theme-ui";
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const Header = ({ color, bg }) => {
  const { theme } = useThemeUI()

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
  `)

  return (
    <header
      sx={{
        variant: "styles.header",
        position: "absolute",
        width: "100%",
        top: "40px",
      }}
    >
      <Flex
        sx={{
          width: theme.breakpoints,
          mx: "auto",
          alignItems: "center",
        }}
      >
        <Link to="/" title={siteMetadata.title} sx={{ display: "flex", textDecoration: 'none' }}>
          <svg
            sx={{
              display: "inline",
              height: "48px",
              mr: 3,
              fill: "none",
              fillRule: "nonzero",
              stroke: color,
              strokeWidth: "12px",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 128 128"
          >
            <path d="M116,51.939C116,49.455 114.846,47.113 112.878,45.598C104.147,38.882 79.434,19.872 68.878,11.752C66.002,9.54 61.998,9.54 59.122,11.752C48.566,19.872 23.853,38.882 15.122,45.598C13.154,47.113 12,49.455 12,51.939C12,63.352 12,96.6 12,112C12,114.122 12.843,116.157 14.343,117.657C15.843,119.157 17.878,120 20,120C39.372,120 88.628,120 108,120C110.122,120 112.157,119.157 113.657,117.657C115.157,116.157 116,114.122 116,112C116,96.6 116,63.352 116,51.939Z" />
            <path d="M36,76L56,96L92,60" />
          </svg>
          <span
            sx={{
              color: color,
              fontFamily: "logo",
              fontWeight: "semibold",
              fontSize: 5,
              letterSpacing: -1,
              verticalAlign: "middle",
            }}
          >
            {siteMetadata.title}
          </span>
        </Link>
        <div sx={{ mx: "auto" }} />
        <Styled.a
          href={"http://access.clearspace.bio"}
          target={"_blank"}
          rel="noreferrer"
        >
          <Button variant="elevated">Sign up for the pilot study</Button>
        </Styled.a>
      </Flex>
    </header>
  );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

Header.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

Header.defaultProps = {
  color: `primary`,
  bg: `background`,
}
