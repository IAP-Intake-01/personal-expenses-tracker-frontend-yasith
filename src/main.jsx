import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import {BrowserRouter} from "react-router-dom";
import ExpencesTrackerContext from "./components/Context/ExpencesTrackerContext.jsx";

createRoot(document.getElementById('root')).render(
    <ExpencesTrackerContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    </ExpencesTrackerContext>

)
