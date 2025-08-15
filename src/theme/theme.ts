import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    background: "#ffffff",
    surface: "#f8f9fa",
    text: {
      primary: "#212529",
      secondary: "#6c757d",
      disabled: "#adb5bd",
    },
    error: "#dc3545",
  },
  spacing: {
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
  },
  typography: {
    fontFamily: {
      primary:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    fontSize: {
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      xxl: "1.5rem", // 24px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
    wide: "1200px",
  },
  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    md: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
  borderRadius: {
    sm: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
  },
};
