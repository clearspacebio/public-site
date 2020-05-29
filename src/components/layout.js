import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Footer } from "./footer"
import { Header } from "./header"

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
  `)

  return (
    <>
      <Header
        siteTitle={siteMetadata.title}
        color={headerColor}
        bg={headerBg}
      />
      <main>{children}</main>
      <Footer />
    </>
  )
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerColor: PropTypes.string,
}
