/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby";
import { Fragment } from "react";
import { jsx, Text } from "theme-ui";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const LogoIcon = (props) => {
  return (
    <svg
      viewBox="0 0 128 128"
      sx={{
        display: "inline",
        height: "48px",
        fill: "none",
        fillRule: "nonzero",
        stroke: "currentColor",
        strokeWidth: "12px",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      {...props}
    >
      <path d="M116,51.939C116,49.455 114.846,47.113 112.878,45.598C104.147,38.882 79.434,19.872 68.878,11.752C66.002,9.54 61.998,9.54 59.122,11.752C48.566,19.872 23.853,38.882 15.122,45.598C13.154,47.113 12,49.455 12,51.939C12,63.352 12,96.6 12,112C12,114.122 12.843,116.157 14.343,117.657C15.843,119.157 17.878,120 20,120C39.372,120 88.628,120 108,120C110.122,120 112.157,119.157 113.657,117.657C115.157,116.157 116,114.122 116,112C116,96.6 116,63.352 116,51.939Z" />
      <path d="M36,76L56,96L92,60" />
    </svg>
  );
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const LogoType = (props) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Fragment>
      <LogoIcon sx={{ mr: 3 }} {...props} />
      <Text
        sx={{
          fontFamily: "logo",
          fontWeight: "semibold",
          fontSize: 5,
          letterSpacing: -1,
          verticalAlign: "middle",
        }}
        {...props}
      >
        {siteMetadata.title}
      </Text>
    </Fragment>
  );
};
