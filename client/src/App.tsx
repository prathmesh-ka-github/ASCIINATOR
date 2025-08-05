import './App.css'
import Landing from "./pages/Landing.tsx"
import Main from "./pages/Main.tsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <Router>
            <div className='githubico'>
                <a href="https://github.com/prathmesh-ka-github/ASCIINATOR">
                <img src="/github_logo_icon.svg" alt="github icon" />
                </a>
            </div>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/app' element={<Main/>}/>

            </Routes>
        </Router>
    )
}

export default App
