/** @jsx jsx */
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { CheckCircle, Package } from "react-feather";
import {
  Box,
  Button,
  Donut,
  Flex,
  Grid,
  Heading,
  jsx,
  Text,
  useThemeUI,
} from "theme-ui";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

const IndexPage = ({ data }) => {
  const { theme } = useThemeUI();

  const {
    site: {
      siteMetadata: { description, sentence1, sentence2 },
    },
    image,
  } = data;

  return (
    <Layout headerColor="white" headerBg="secondary">
      <SEO title={description} />

      {/* Hero  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Box
        sx={{
          minHeight: "100vh",
          background: ({ colors }) =>
            `linear-gradient(${colors.teal[4]},${colors.green[4]})`,
          pt: [6, 7, 7],
          px: 2,
          textAlign: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: ({ breakpoints }) => breakpoints[breakpoints.length - 1],
            mx: "auto",
            overflow: "hidden",
          }}
        >
          <Heading as="h1" variant="headline1" mx={[2, 4, 6]} my={[2, 3, 4]}>
            {sentence1}
          </Heading>
          <Heading as="h2" variant="headline2" mx={[2, 4, 6]} my={[2, 3, 4]}>
            {sentence2}
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
      <Box
        sx={{
          background: ({ colors }) =>
            `linear-gradient(-45deg, ${colors.yellow[3]}, ${colors.yellow[5]})`,
          color: "white",
        }}
      >
        <Grid
          columns={[null, null, 2]}
          sx={{
            maxWidth: ({ breakpoints }) => breakpoints[breakpoints.length - 1],
            minHeight: "75vh",
            mx: "auto",
            p: [3, 4, 5],
            alignItems: "center",
          }}
        >
          <Box>
            <Heading as="h3" variant="indexSectionTitle" mb={3}>
              Easy to get started
            </Heading>
            <Text variant="indexSectionBody">
              You decide which spaces to monitor: test only your reception, or
              include cafeteria and bathrooms. Each space is tested separately,
              to help identify who may be affected if a virus is found.
            </Text>
          </Box>
          {/* <Donut
            sx={{ flex: 1, px: 4, color: "white", mx: "auto" }}
            value={1}
          /> */}
          <CheckCircle size={64} sx={{ mx: "auto" }} />
        </Grid>
      </Box>

      {/* Section 2 - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Box
        sx={{
          background: ({ colors }) =>
            `linear-gradient(-45deg, ${colors.teal[3]},${colors.teal[5]})`,
          color: "white",
        }}
      >
        <Grid
          columns={[null, null, 2]}
          sx={{
            maxWidth: ({ breakpoints }) => breakpoints[breakpoints.length - 1],
            minHeight: "75vh",
            mx: "auto",
            p: [3, 4, 5],
            alignItems: "center",
          }}
        >
          <Box sx={{ order: [null, null, 1] }}>
            <Heading as="h3" variant="indexSectionTitle" mb={3}>
              Simple to use
            </Heading>
            <Text variant="indexSectionBody">
              You or your staff can collect the samples without special training
              or equipment. Each kit includes clear instructions and everything
              you need to get reliable results.
            </Text>
          </Box>
          {/* <Donut
            sx={{ flex: 1, px: 4, color: "white", mx: "auto" }}
            value={1}
          /> */}
          <Package size={64} sx={{ mx: "auto" }} />
        </Grid>
      </Box>

      {/* Section 3 - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Box
        sx={{
          background: ({ colors }) =>
            `linear-gradient(-45deg, ${colors.blue[3]},${colors.blue[5]})`,
          color: "white",
        }}
      >
        <Grid
          columns={[null, null, 2]}
          sx={{
            maxWidth: ({ breakpoints }) => breakpoints[breakpoints.length - 1],
            minHeight: "75vh",
            mx: "auto",
            p: [3, 4, 5],
            alignItems: "center",
          }}
        >
          <Box sx={{}}>
            <Heading as="h3" variant="indexSectionTitle" mb={3}>
              Fast results
            </Heading>
            <Text variant="indexSectionBody">
              We're developing different solutions that adapt to your needs.
              Ship the samples to our lab and receive results in 24 to 48 hours,
              or run the analysis yourself on site in 1 to 2 hours.
            </Text>
          </Box>
          <Donut
            sx={{ flex: 1, px: 4, color: "white", mx: "auto" }}
            value={1}
          />
        </Grid>
      </Box>

      {/* Section 4 - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Box
        sx={{
          background: ({ colors }) =>
            `linear-gradient(-45deg, ${colors.green[3]},${colors.green[5]})`,
          color: "white",
        }}
      >
        <Grid
          columns={[null, null, 2]}
          sx={{
            maxWidth: ({ breakpoints }) => breakpoints[breakpoints.length - 1],
            minHeight: "75vh",
            mx: "auto",
            p: [3, 4, 5],
            alignItems: "center",
          }}
        >
          <Box sx={{ order: [null, null, 1] }}>
            <Heading as="h3" variant="indexSectionTitle" mb={3}>
              Operate with confidence
            </Heading>
            <Text variant="indexSectionBody">
              If traces of the virus are found, you'll have time to make your
              space safer. Our test help you make sure that the people in your
              building are safe.
            </Text>
          </Box>
          <Donut
            sx={{ flex: 1, px: 4, color: "white", mx: "auto" }}
            value={1}
          />
        </Grid>
      </Box>

      {/* Section 5 - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Box
        sx={{
          background: ({ colors }) =>
            `linear-gradient(-45deg, ${colors.orange[3]},${colors.orange[5]})`,
          color: "white",
        }}
      >
        <Grid
          columns={[null, null, 2]}
          sx={{
            maxWidth: ({ breakpoints }) => breakpoints[breakpoints.length - 1],
            minHeight: "75vh",
            mx: "auto",
            p: [3, 4, 5],
            alignItems: "center",
          }}
        >
          <Box>
            <Heading as="h3" variant="indexSectionTitle" mb={3}>
              Promote your business
            </Heading>
            <Text variant="indexSectionBody">
              Let your customers, residents, and guests know that you are taking
              additional precautions by showing a "Clearspace certified" sign.
              If coronavirus is detected in your sample, we will contact you and
              remian available to provide assistance and education to best deal
              with the situation.
            </Text>
          </Box>
          <Donut
            sx={{ flex: 1, px: 4, color: "white", mx: "auto" }}
            value={1}
          />
        </Grid>
      </Box>

      {/* Upsell  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
      <Grid
        columns={[1, 2, 2]}
        gap={[4, 0, 0]}
        sx={{
          maxWidth: ({ breakpoints }) => breakpoints[breakpoints.length - 1],
          mx: [3, 4, "auto"],
          my: 6,
          px: [3, 4, 6],
          py: 5,
          alignItems: "center",
          background: ({ colors }) =>
            `linear-gradient(${colors.teal[4]},${colors.green[4]})`,
          borderRadius: "default",
          boxShadow: "2xl",
        }}
      >
        <Flex sx={{ flexDirection: "column" }}>
          <Box sx={{ color: "white" }}>
            {/* <Text sx={{ fontWeight: "bold", fontSize: 4 }}>Request access</Text> */}
            <Text variant="indexSectionTitle">Request access</Text>
            <Text variant="indexSectionBody">
              We're starting our pilot studies with select partners. Get in
              touch if you are interested in participating.
            </Text>
          </Box>
        </Flex>
        {/* <Box mx="auto"></Box> */}
        <a
          href="http://access.clearspace.bio"
          target={"_blank"}
          rel="noreferrer"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button variant="elevated">Sign up for the pilot study</Button>
        </a>
      </Grid>
    </Layout>
  );
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export default IndexPage;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        sentence1
        sentence2
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
`;
