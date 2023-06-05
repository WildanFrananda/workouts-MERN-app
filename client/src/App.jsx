import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
    return (
        <React.Fragment>
            <div className="App">
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                    </Routes>
                </div>
            </div>
        </React.Fragment>
    )
}

export default App
