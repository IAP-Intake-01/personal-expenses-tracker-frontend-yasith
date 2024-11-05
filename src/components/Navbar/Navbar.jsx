import './Navbar.css'
import logo from '../../assets/logo.svg'
import Button from '@mui/material/Button';
import SignIn from "../SignIn/SignIn.jsx";
import SignUp from "../SignUp/SignUp.jsx";
import {useContext, useState} from "react";
import axios from "axios";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";

export default function Navbar(){
    const[openSignIn,setOpenSignIn]=useState(false);
    const[openSignUp,setOpenSignUp]=useState(false);

    const {signIn,signUp}=useContext(FinancialContext);

    axios.defaults.withCredentials=true;
    const handleSignInClick = () => {
        setOpenSignIn(true);
        setOpenSignUp(false);
    };

    const handleSignUpClick = () => {
        setOpenSignIn(false);
        setOpenSignUp(true);
    };
    const handleSubmitSignUp=(newSignUp)=>{
        signUp(newSignUp);
    }
    const handleSubmitSignIn=(newSignIn)=>{

        signIn(newSignIn);
    }

    return(
        <div className={'p-6 flex justify-between items-center border shadow-sm navbar '} >
            <img src={logo} alt={''}/>
            <div className={'flex  gap-4'}>
                <Button onClick={handleSignInClick} sx={{fontSize:'0.75rem',backgroundColor: 'white',color:'black',fontWeight:'600',fontFamily: 'Poppins, sans-serif',width:111,height:35}} variant="contained">Dashboard</Button>
                <Button onClick={handleSignUpClick} sx={{fontSize:'0.75rem',backgroundColor:'#007DFC',fontFamily: 'Poppins, sans-serif',width:113,height:35}} variant="contained">Get Started</Button>
            </div>
            {openSignIn && <SignIn closeModel={()=>setOpenSignIn(false)} onSubmit={handleSubmitSignIn}/>}
            {openSignUp && <SignUp closeModel={()=>setOpenSignUp(false)} onSubmit={handleSubmitSignUp}/>}
        </div>
    )
}




