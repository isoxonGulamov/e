import { createContext, useState, useMemo } from "react";
import React from "react";
import { createTheme } from "@mui/material/styles";
// color design tokens
export const tokens = (mode) => ({
  ...(mode == "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : // dark
      // white
      {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#AAC8CC",
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});
//  biz bu funksiyada return qilib beradi agar mode == "dark" bizga 5  xil color dagi obyekt return qiladi aks holda bizga shu dark mode b=ni rangni teskarisini return qiladi agar mode teng bolmasa darkga
/// MUI theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : //  1
          //  2
          {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro"].join(","),
        fontSize:32
      },
      h3: {
        fontFamily: ["Source Sans Pro"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro"].join(","),
        fontSize: 14,
      },
    },
  };
};

//  bu funksiyada biz  o'zgaruvchini tengladik tokens(mode) ga yani token dan chiqqan jvobg tengladik agar mode tng bolsa dark ga bizga obyekt return qiladi aks holda boshqa narsaga teng qilsak dark ga teskari ranglarni retrun qiladi endi biz buni App.js ni orab shu qiymatni berib yuborsak yani colors nomli o'zgaruvchi funksiyadan chiqqan javobni
// va bunsda Typography larni berib chiqdik

// context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
export const useMode = () => {
  const [mode, setMode] = React.useState("dark");
  const colorMode = useMemo(
    () => ({  
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")), //  bunda biz aytdiki setmode ichidage prebv yani Mode qiymat light g teng bolsa dark ni berib yubor aks holda light berub yubor dedik
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // biz bu yerda themeSttings ni chaqirdik va unga fuksiyani chaqirib argument sifatida mode ni berib yubordik mode = dark ga biz useState da mode ga qiymat sifatida darkni berganmiz va toggleColorMode f1unksiya ichlaganda yanu bu onclick bulganda ishlaydui ishlaganda dark light ga  ozgaradi yana bosilganda dark ka o;zgaradi shu holatda boslia ktma ket ozgarib ketaveradi va biz thema nomli ozgaruvchi ochdik va buni useMemo ga urab createThem(themeSettings(mode)) yani state ishlaganda bu funksiyani useMemo render qilishiga qoymaydi

  return [theme, colorMode];
};
