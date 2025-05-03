import { useState } from 'react'
import { BrouserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Router>
      <>
        <AppRoutes />
      </>
    </Router>
  );
}

export default App;