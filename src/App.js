import React from "react";
import NavBar from "./Components/NavBar";
import Intro from "./Components/Intro";
import Steps from "./Components/Steps";
import HorizontalLinearStepper from "./Components/HorizontalLinearStepper";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Steps />
      <Container className="Container">
        <Box className="Box">
          <HorizontalLinearStepper />
        </Box>
      </Container>
    </div>
  );
}

export default App;
