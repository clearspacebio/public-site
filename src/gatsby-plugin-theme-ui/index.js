// Refs:
// - https://theme-ui.com/theming
// - https://github.com/system-ui/theme-ui/tree/master/packages/gatsby-plugin-theme-ui
// - https://github.com/system-ui/theme-ui/tree/master/packages/preset-base
// - https://github.com/system-ui/theme-ui/blob/master/packages/preset-tailwind

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //

import { tailwind } from "@theme-ui/presets";
import { merge } from "theme-ui";

export default merge(tailwind, {
  breakpoints: ["640px", "960px"],
  colors: {
    background: "#fff",
    text: "#264653",
    primary: "#2a9d8f",
    secondary: "#e9c46a",
    muted: "#A0AEC0",
    alert: "#e76f51",
  },
  fonts: {
    body: "Input, sans-serif",
    heading: "Montserrat, sans-serif",
    logo: "'Montserrat Alternates', sans-serif",
  },
  // Variants: text - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  text: {
    // heading: {
    //   fontFamily: "heading",
    //   fontWeight: "heading",
    //   lineHeight: "heading",
    // },
    headline1: {
      variant: "heading",
      fontSize: [3, 4, 5],
      letterSpacing: ["tight", null, "tighter"],
      lineHeight: ["snug", null, "tight"],
    },
    headline2: {
      variant: "heading",
      fontSize: [2, 3, 4, 5],
      fontWeight: "medium",
      lineHeight: ["snug", null, "tight"],
      opacity: 0.95,
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
  },
  // Styles - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //
  // - https://theme-ui.com/theming#styles
  // - https://theme-ui.com/theme-spec#styles
  // - https://theme-ui.com/styled/
  styles: {
    a: {
      color: "inherit",
      textDecoration: "inherit",
    },
  },
});
