/** @jsx jsx */
import { graphql, Link, useStaticQuery } from "gatsby"
import { Facebook, GitHub, Linkedin, Twitter } from "react-feather"
import { Flex, jsx, Text, useThemeUI } from "theme-ui"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const Footer = () => {
  const { theme } = useThemeUI()

  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer
      sx={{
        variant: "styles.footer",
      }}
    >
      <Flex
        sx={{
          width: theme.breakpoints,
          mx: "auto",
        }}
      >
        {/* Logo & social links - - - - - - - - - - - - - - - - - - - - - - */}
        <Flex sx={{ flexDirection: "column", width: "50%", pr: 6 ,}}>
          <Link
            to="/"
            title={siteMetadata.title}
            sx={{ display: "flex", pb: 4 }}
          >
            <svg
              sx={{
                display: "inline",
                height: "48px",
                mr: 3,
                fill: "none",
                fillRule: "nonzero",
                stroke: "primary",
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
                color: "primary",
                fontFamily: "logo",
                fontWeight: "semibold",
                fontSize: 5,
                verticalAlign: "middle",
              }}
            >
              {siteMetadata.title}
            </span>
          </Link>
          <Text pb={4}>
            Clearspace is an subscription service that helps monitor offices,
            schools, hotels, nursing homes, and other shared spaces for the presence of coronavirus.
          </Text>
          <Flex color="primary">
            <a sx={{ mr: 3 }} href="#">
              <Linkedin />
            </a>
            <a sx={{ mr: 3 }} href="#">
              <GitHub />
            </a>
            <a sx={{ mr: 3 }} href="#">
              <Twitter />
            </a>
            <a sx={{ mr: 3 }} href="#">
              <Facebook />
            </a>
          </Flex>
        </Flex>
        {/* About us  - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
        <Flex
          sx={{
            flexDirection: "column",
            flex: 1,
            pt: 3,
          }}
        >
          <Text pb={2} variant="footerHeading">
            About us
          </Text>
          <div
            sx={{
              display: "grid",
              gridTemplateRows: "repeat(5, 1fr)",
            }}
          >
            <Link to="/">Home</Link>
            <Link sx={{ variant: "styles.footerLink" }} to="/our-team">
              Our team
            </Link>
            <Link
              sx={{ variant: "styles.footerLink", pb: 1 }}
              to="/privacy-policy"
            >
              Privacy policy
            </Link>
            <Link
              sx={{ variant: "styles.footerLink", pb: 1 }}
              to="/terms-of-service"
            >
              Terms of service
            </Link>
            <Link sx={{ variant: "styles.footerLink", pb: 1 }} to="/contact-us">
              Contact us
            </Link>
          </div>
        </Flex>
        {/* Solutions - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
        <Flex
          sx={{
            flexDirection: "column",
            flex: 1,
            pt: 3,
          }}
        >
          <Text pb={2} variant="footerHeading">
            Our solutions
          </Text>
          <div
            sx={{
              display: "grid",
              gridTemplateRows: "repeat(5, 1fr)",
            }}
          >
            <Link sx={{ variant: "styles.footerLink", pb: 1 }} to="#">
              For offices
            </Link>
            <Link sx={{ variant: "styles.footerLink", pb: 1 }} to="#">
              For schools
            </Link>
            <Link sx={{ variant: "styles.footerLink", pb: 1 }} to="#">
              For nursing homes
            </Link>
          </div>
        </Flex>
      </Flex>
      {/* Copyright - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Text variant="footerCopyright">
        &copy;2020 Clearspace, Inc. All rights reserved.
      </Text>
    </footer>
  );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Footer.propTypes = {
//   siteTitle: PropTypes.string,
// }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

// Footer.defaultProps = {
//   siteTitle: ``,
// }
