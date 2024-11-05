import './SignIn.css'
import {Avatar, Box, Checkbox, FormControlLabel, Link, Paper, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import {useState} from "react";
export default function SignIn({closeModel}){
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    return(
        <div className={'signIn'}
             onClick={(e)=>{
                 if (e.target.classList.contains("signIn")) {
                     closeModel();
                 }
             }}
        >
            <Paper  elevation={10} sx={{ padding: 2, width: '320px', height:'65vh', margin: '100px auto '}}>
                <Box sx={{textAlign:'center'}}>
                    <Avatar sx={{ margin: 'auto',marginTop:2,backgroundColor:'#007DFC'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight:600,marginTop:1,color:'#007DFC' }}>Sign In</Typography>
                </Box>
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
                <Button  variant="contained" fullWidth sx={{marginTop:'18px',backgroundColor:'#007DFC',marginBottom:'10px'}}>Sign In</Button>
                <Typography>
                    <Link href="">Forget password ?</Link>
                </Typography>
                <Typography>
                    Do you have an account
                    <Link href=""> Sign up</Link>
                </Typography>
            </Paper>
        </div>
    )
}