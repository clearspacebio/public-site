/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { jsx } from "theme-ui";
import { Footer } from "./footer";
import { Header } from "./header";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const Layout = ({ children, headerColor, headerBg }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <header>
        <Header
          siteTitle={siteMetadata.title}
          color={headerColor}
          bg={headerBg}
        />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerColor: PropTypes.string,
};
