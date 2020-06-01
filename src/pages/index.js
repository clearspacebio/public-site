/** @jsx jsx */
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { Box, Button, Donut, Flex, Heading, jsx, Text, useThemeUI } from "theme-ui";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const IndexPage = ({ data }) => {
  const { theme } = useThemeUI()

  const { image } = data

  return (
    <Layout headerColor="white" headerBg="secondary">
      <SEO title="Monitor your building for coronavirus" />

      {/* Hero  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Box
        sx={{
          pt: 6,
          background: `linear-gradient(${theme.colors.teal[4]},${theme.colors.green[4]})`,
          height: "100vh",
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            width: theme.breakpoints,
            mx: "auto",
            overflow: "hidden",
          }}
        >
          <Heading as="h1" variant="indexTitle">
            Monitor your building for coronavirus
          </Heading>
          <Heading as="h2" variant="indexSubtitle" px={6}>
            Clearspace is an subscription service to monitor offices, schools,
            hotels, nursing homes, and other shared spaces for the presence of
            coronavirus.
          </Heading>
        </Flex>
        <Image
          fluid={image.childImageSharp.fluid}
          sx={{
            width: theme.breakpoints,
            mx: "auto",
            mb: -1,
            bottom: 0,
            borderRadius: "default",
            boxShadow: "2xl",
          }}
        />
      </Box>

      {/* Section 1 - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          height: "75vh",
          color: "white",
          background: `linear-gradient(-45deg, ${theme.colors.yellow[3]},${theme.colors.yellow[5]})`,
        }}
      >
        <Box sx={{ width: theme.breakpoints, mx: "auto" }}>
          <Flex sx={{ alignItems: "center", mx: -4 }}>
            <Box sx={{ flex: 1, px: 4 }}>
              <Heading as="h3" variant="indexSectionTitle" mb={3}>
                Easy to get started
              </Heading>
              <Text variant="indexSectionBody">
                You decide which spaces in your building to monitor. Track only
                your reception, or include cafeteria and bathrooms. Each space
                is tested separately, to help identify who may be affected if a
                virus is detected.
              </Text>
            </Box>
            <Donut sx={{ flex: 1, px: 4, color: "white" }} value={1} />
          </Flex>
        </Box>
      </Flex>

      {/* Section 2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          height: "75vh",
          color: "white",
          background: `linear-gradient(45deg, ${theme.colors.teal[3]},${theme.colors.teal[5]})`,
        }}
      >
        <Box sx={{ width: theme.breakpoints, mx: "auto" }}>
          <Flex sx={{ alignItems: "center", mx: -4 }}>
            <Donut sx={{ flex: 1, px: 4, color: "white" }} value={1} />
            <Box sx={{ flex: 1, px: 4 }}>
              <Heading as="h3" variant="indexSectionTitle" mb={3}>
                No overheads
              </Heading>
              <Text variant="indexSectionBody">
                Our solution doesn't require specialized personel. You or your
                cleaning crew can easily administer the test. Instructions
                included in the kit you'll receive by mail make sure every test
                produces consistent results.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* Section 3 - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          height: "75vh",
          color: "white",
          background: `linear-gradient(-45deg, ${theme.colors.blue[3]},${theme.colors.blue[5]})`,
        }}
      >
        <Box sx={{ width: theme.breakpoints, mx: "auto" }}>
          <Flex sx={{ alignItems: "center", mx: -4 }}>
            <Box sx={{ flex: 1, px: 4 }}>
              <Heading as="h3" variant="indexSectionTitle" mb={3}>
                Shipments are on us
              </Heading>
              <Text variant="indexSectionBody">
                Each kit is pre-labeled for a fast and easy return. You can
                monitor the status of the shipment on our website or in our
                mobile app.
              </Text>
            </Box>
            <Donut sx={{ flex: 1, px: 4, color: "white" }} value={1} />
          </Flex>
        </Box>
      </Flex>

      {/* Section 4 - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          height: "75vh",
          color: "white",
          background: `linear-gradient(45deg, ${theme.colors.green[3]},${theme.colors.green[5]})`,
        }}
      >
        <Box sx={{ width: theme.breakpoints, mx: "auto" }}>
          <Flex sx={{ alignItems: "center", mx: -4 }}>
            <Donut sx={{ flex: 1, px: 4, color: "white" }} value={1} />
            <Box sx={{ flex: 1, px: 4 }}>
              <Heading as="h3" variant="indexSectionTitle" mb={3}>
                Results in 24 hours
              </Heading>
              <Text variant="indexSectionBody">
                We will notify you of the results in less than 24 hours from the
                reception of your kit. You'll be able to access your current and
                past results on our website and mobile app.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      {/* Section 5 - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Flex
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          height: "75vh",
          color: "white",
          background: `linear-gradient(-45deg, ${theme.colors.orange[3]},${theme.colors.orange[5]})`,
        }}
      >
        <Box sx={{ width: theme.breakpoints, mx: "auto" }}>
          <Flex sx={{ alignItems: "center", mx: -4 }}>
            <Box sx={{ flex: 1, px: 4 }}>
              <Heading as="h3" variant="indexSectionTitle" mb={3}>
                We're here to help
              </Heading>
              <Text variant="indexSectionBody">
                If coronavirus is detected in your sample, we will contact you
                and remian available to provide assistance and education to best
                deal with the situation.
              </Text>
            </Box>
            <Donut sx={{ flex: 1, px: 4, color: "white" }} value={1} />
          </Flex>
        </Box>
      </Flex>

      {/* Upsell  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Flex
        sx={{
          alignItems: "center",
          width: theme.breakpoints,
          mx: "auto",
          my: 6,
          px: 5,
          py: 5,
          background: `linear-gradient(${theme.colors.teal[4]},${theme.colors.green[4]})`,
          borderRadius: "default",
          boxShadow: "2xl",
        }}
      >
        <Flex sx={{ flexDirection: "column", width: "50%" }}>
          <Box sx={{ color: "white" }}>
            {/* <Text sx={{ fontWeight: "bold", fontSize: 4 }}>Request access</Text> */}
            <Text variant="indexSectionTitle">Request access</Text>
            <Text variant="indexSectionBody">
              We're starting our pilot studies with select partners. Get in
              touch if you are interested in participating.
            </Text>
          </Box>
        </Flex>
        <Box mx="auto"></Box>
        <a
          href="http://access.clearspace.bio"
          target={"_blank"}
          rel="noreferrer"
        >
          <Button variant="elevated">Sign up for the pilot study</Button>
        </a>
      </Flex>
    </Layout>
  );
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default IndexPage

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    image: file(absolutePath: { regex: "/assets/dashboard.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
