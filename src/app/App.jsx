import './App.css'
import Navbar from "../components/Navbar/Navbar.jsx";
import Main from "../components/Main/Main.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import SignInPage from "../pages/SignInPage.jsx";
import {useEffect, useState} from "react";
import HomePage from "../pages/HomePage.jsx";

function App() {
    const [dashboard,setDashboard]=useState(true);

    useEffect(() => {
        const key=localStorage.getItem('login'); //for this also can use redux
        console.log("in app.jsx "+key)
        if(key!==null){
            setDashboard(true)
        }else{
            setDashboard(false)
        }
    }, []);
    return (
        <div className={'App'}>
            <Routes>
                {dashboard ?
                    <Route path="/*" element={<Main />} />
                    :
                    <>
                        <Route path={'*'} element={<Navigate to={'/'}/>}/>
                        <Route path="/" element={<HomePage />} />
                    </>

                }
            </Routes>

        </div>
        )}

export default App
