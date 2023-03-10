import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { Button, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import  Topbar from "./scenes/global/Topbar";
import { Sidebar } from "./scenes/global/Sidebar";
import { Dashboard } from "./scenes";
import { Team } from "./scenes/team/team";
import { Invocies } from "./scenes/invocies/invocies";
import { Contacts } from "./scenes/contacts/contacts";

import { Form } from "./scenes/form/form";
import { FAQ } from "./scenes/faq/faq";
import { Calendar2 } from "./scenes/calendar/calendar";
import "./App.css"
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Bar } from "./scenes/bar/bar";
import { Pie } from "./scenes/pie/pie";
import { Line } from "./scenes/line/line";
import { Geo } from "./scenes/geo/geo";
const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={{colorMode,theme}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>


            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/invocies" element={<Invocies/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/calendar" element={<Calendar2/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie" element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
           
             
              <Route path="/geography" element={<Geo/>}/>
              
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
// / npm i react-pro-sidebar bu narsa kutubxonadir bizga bu navbar yasab beradigan kutubxona

// Bu ham kutubxona hisoblanadi bu bizga calendar yasashimiz uchun kerak buladi
// npm install \
//   @fullcalendar/core \
//   @fullcalendar/daygrid \
//   @fullcalendar/timegrid \
//   @fullcalendar/list

// npm i @nivo/core @nivo/pie @nivo/line @nivo/bar @nivo/geo =>bunda ham bizkutubxona install qidik bu kutub xona bizga bazi kerakli  narsalarni beradi grafikalarni
