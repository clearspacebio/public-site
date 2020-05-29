// Refs:
// - https://theme-ui.com/theming
// - https://github.com/system-ui/theme-ui/tree/master/packages/gatsby-plugin-theme-ui
// - https://github.com/system-ui/theme-ui/tree/master/packages/preset-base
// - https://github.com/system-ui/theme-ui/blob/master/packages/preset-tailwind
// - https://coolors.co/palettes/popular/green
// - https://colorhunt.co/palettes/green

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import { tailwind } from "@theme-ui/presets"
import { merge } from "theme-ui"

export default merge(tailwind, {
  breakpoints: ["640px", "768px", "1024px"],
  colors: {
    background: "#fff",
    text: "#264653",
    primary: "#2a9d8f",
    secondary: "#e9c46a",
    muted: "#A0AEC0",
    alert: "#e76f51",
    // green: "#4caf50",
    // cyan: "#00bcd4",
  },
  fonts: {
    body: "Input, sans-serif",
    heading: "Montserrat, sans-serif",
    logo: "'Montserrat Alternates', sans-serif",
  },
  // Variants: buttons - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      // width: "128",
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
    gray: {
      color: "background",
      bg: "gray",
    },
  },
  // Variants: text - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  text: {
    // default: {
    //   color: "text",
    //   fontSize: 3,
    // },
    // heading: {
    //   fontFamily: "heading",
    //   fontWeight: "heading",
    //   lineHeight: "heading",
    // },
    indexTitle: {
      variant: "heading",
      fontSize: 5,
      letterSpacing: -0.5,
      my: 4,
    },
    indexSubtitle: {
      variant: "heading",
      fontSize: 2,
      fontWeight: "medium",
      lineHeight: 1.5,
      opacity: 0.9,
      my: 4,
    },
    indexSectionTitle: {
      variant: "heading",
      fontSize: 5,
      fontWeight: "bold",
    },
    indexSectionBody: {
      variant: "body",
      fontSize: 2,
      fontWeight: "medium",
    },
    footerHeading: {
      fontSize: 1,
      fontWeight: "bold",
      textTransform: "uppercase",
      // letterSpacing: "0.2em",
    },
    footerCopyright: {
      color: "muted",
      textAlign: "center",
      fontSize: 0,
      fontWeight: "semibold",
      mt: 6,
      mb: 4,
    },
    footerLink: {
      pb: 1,
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  // Styles - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  // https://theme-ui.com/theme-spec#styles
  styles: {
    a: {
      color: 'inherit',
      textDecoration: 'inherit',
    },
    // h1: {
    //   variant: "text.heading",
    //   fontSize: 5,
    // },
  },
})
