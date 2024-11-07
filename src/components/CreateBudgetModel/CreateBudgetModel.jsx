import {Avatar, Box, Paper, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext, useState} from "react";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";

export default function CreateBudgetModel({closeModel}){

    const [budgetName,setBudgetName]=useState('');
    const [budgetAmount,setBudgetAmount]=useState('');
    const {createBudget}=useContext(FinancialContext);

    const handelSubmit=()=>{
        const newBudget={
            name:budgetName,
            amount:budgetAmount,
        };
        createBudget(newBudget)
        closeModel();
    }

    return(
        <Box className={'model'}
            sx={{
            display: 'flex',
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            position: 'fixed',
            bottom: '0px',
            left:'60px',
            top:'20px',
            width: { xs: '70%', sm: '110%', md: '100%' },
            // width: '100%',
            height: '100%',
            zIndex:1000,
        }}

             onClick={(e)=>{
                 if (e.target.classList.contains("model")) {
                     closeModel();
                 }
             }}
        >
            <Paper elevation={10} sx={{ padding: 2, width: '420px', height:'auto', margin: '100px auto'}}>
                <Box sx={{textAlign:'center' ,marginTop:'8px'}}>
                    <Avatar sx={{ margin: 'auto',backgroundColor:'#007DFC' }}>
                        <ShoppingCartIcon/>
                    </Avatar>
                    <Typography variant="h2" sx={{ fontSize: '20px',fontWeight:'550' ,color:'#007DFC',marginTop:'15px',marginBottom:'18px'}}>Create New Budget</Typography>
                </Box>

                <Box sx={{display:'flex' ,flexDirection:'column',gap:'15px'}}>
                    <Box sx={{display:'flex' ,flexDirection:'column',gap:'3px'}}>
                        <Typography variant="h2" sx={{ fontSize: '14px',fontWeight:'550' }}>Budget Name</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            placeholder={'e.g Home Decor'}
                            onChange={(e)=>setBudgetName(e.target.value)}
                        />
                    </Box>
                    <Box sx={{display:'flex' ,flexDirection:'column',gap:'3px'}}>
                        <Typography variant="h2" sx={{ fontSize: '14px' ,fontWeight:'550'}}>Budget Amount</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            type={'number'}
                            placeholder={'e.g. 5000$'}
                            onChange={(e)=>setBudgetAmount(e.target.value)}
                        />
                    </Box>
                </Box>
                <Button
                    variant="contained"
                    fullWidth sx={{marginBottom:'14px',marginTop:'22px'}}
                    onClick={handelSubmit}
                    disabled={!(budgetName&&budgetAmount)}
                >
                    Create Budget
                </Button>
            </Paper>
        </Box>
    )
}