import { createTheme } from "@mui/material/styles";

export const theme = () =>
  createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#000000",
        paper: "#0a0a0a",
      },
      primary: {
        main: "#ffffff",
        contrastText: "#000000",
      },
      secondary: {
        main: "#8a8a8a",
      },
      text: {
        primary: "#ffffff",
        secondary: "#8a8a8a",
      },
      divider: "rgba(255,255,255,0.12)",
      error: { main: "#ff3b30" },
      success: { main: "#00d26a" },
    },
    typography: {
      fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
      },
      h2: {
        fontWeight: 700,
        fontSize: "2.5rem",
        textTransform: "uppercase",
        letterSpacing: "0.03em",
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.02em",
      },
      button: {
        textTransform: "uppercase",
        fontWeight: 600,
        letterSpacing: "0.02em",
      },
    },
    shape: {
      borderRadius: 0,
    },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 0, padding: "12px 32px", fontWeight: 600 },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: "none", borderRadius: 0 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { border: "1px solid rgba(255,255,255,0.12)", borderRadius: 0 },
        },
      },
    },
  });

export default theme();
