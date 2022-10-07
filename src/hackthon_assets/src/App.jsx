import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth } from "./components/Auth"
import FetchData from "./fetchData"
import { Hero } from "./Homepage"
import List from "./List"
import Error from "./pages/Error";
import Mint from "./pages/Mint";
import PrivateRoute from "./PrivateRoute";
import SentInvitation from "./pages/sentInvitation";
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='mint' element={
            <PrivateRoute>
              <Mint />
            </PrivateRoute>
          } />
          <Route path="/invite" element={<PrivateRoute><SentInvitation /></PrivateRoute>} />
          <Route path="/test" element={<List />} />
          <Route path='*' element={<Error />} />
        </Routes>

      </Router>



    </div>
  )
}

export default App
