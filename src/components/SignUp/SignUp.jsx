import  './SignUp.css'
import {Avatar, Box, Checkbox, FormControlLabel, Paper, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {useState} from "react";
import Button from "@mui/material/Button";

export default function SignUp({closeModel,onSubmit}){
    const [userName, setName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    const handleSubmit=()=>{
        const newSignUp={
            name:userName,
            email:userEmail,
            password:userPassword
        };
        onSubmit(newSignUp);
        closeModel();
    }
    return(
        <div className={'signUp'}
             onClick={(e)=>{
                 if (e.target.classList.contains("signUp")) {
                     closeModel();
                 }
             }}
        >
        <div className={'signUp'}>
            <Paper  elevation={10} sx={{ padding: 2, width: '320px', height:'65vh', margin: '100px auto '}}>
                <Box sx={{textAlign:'center'}}>
                    <Avatar sx={{ margin: 'auto',marginTop:2,backgroundColor:'#007DFC'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight:600,marginTop:1,color:'#007DFC' }}>Sign Up</Typography>
                </Box>
                <TextField
                    label="name"
                    placeholder={'Enter your name'}
                    fullWidth
                    margin="normal"
                    variant={'standard'}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Email"
                    placeholder={'Enter your email'}
                    fullWidth
                    margin="normal"
                    variant={'standard'}

                    onChange={(e) => setEmail(e.target.value)}

                />
                <TextField
                    label="Password"
                    placeholder={'Enter your password'}
                    type="password"
                    fullWidth
                    margin="normal"
                    variant={'standard'}

                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the terms and conditions" />
                <Button onClick={handleSubmit} variant="contained" fullWidth sx={{marginTop:'18px',backgroundColor:'#007DFC'}} >Sign Up</Button>
            </Paper>
        </div>
    )
}

