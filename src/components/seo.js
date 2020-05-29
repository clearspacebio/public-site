import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const SEO = ({ title, lang, meta, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: description || site.siteMetadata.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description || site.siteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description || site.siteMetadata.description,
        },
      ].concat(meta)}
    />
  )
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.string,
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}
