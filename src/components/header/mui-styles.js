import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          textTransform: "capitalize",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
      variants: [
        {
          props: { variant: "navbar" },
          style: {
            color: "white",
            "&:hover": {
              background: "rgb(37, 47, 57)",
            },
            "&:active": {
              background: "rgba(215, 182, 93, 0.3)",
              color: "black",
            },
            "&.active-navbar-btn": {
              background: "rgba(215, 182, 93, 0.8)",
              color: "black",
            },
          },
        },
        {
          props: { variant: "authentication" },
          style: {
            color: "#D7B65D",
            border: "2px solid #F1B500",
            "&:hover": {
              background: "rgba(215, 182, 93, 0.3)",
              borderColor: "transparent",
            },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: ["Quicksand", "Roboto", "sans-serif"].join(","),
  },
});

export const stylesSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "100px",
  height: 80,
  mb: "10px",
};
