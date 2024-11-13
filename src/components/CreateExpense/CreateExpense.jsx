import {Avatar, Box, Paper, TextField, Typography} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import {useContext, useState} from "react";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";

export default function CreateExpense({budgetId}){
    const[expenseName,setExpenseName]=useState('');
    const[expenseAmount,setExpenseAmount]=useState('');

    const {addNewExpense}=useContext(FinancialContext);

    const handleNewExpense=()=>{
        const newExpense={
            name:expenseName,
            amount:expenseAmount,
            budget_id:budgetId
        };
        console.log(newExpense)
        addNewExpense(newExpense)
    }

    return(
        <div className={'border p-5 rounded-lg'}>
            <h2 className={'font-bold text-lg mb-2'}>Add Expense</h2>
                    <Box sx={{display:'flex' ,flexDirection:'column',gap:'3px'}}>
                        <Typography variant="h2" sx={{ fontSize: '14px',fontWeight:'550' ,marginBottom:'4px' }}>Expense Name</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            placeholder={'e.g Bedroom Decor'}
                            onChange={(e)=>setExpenseName(e.target.value)}
                        />
                    </Box>
                    <Box sx={{display:'flex' ,flexDirection:'column',gap:'3px'}}>
                        <Typography variant="h2" sx={{ fontSize: '14px' ,fontWeight:'550',marginTop:'10px'}}>Expense Amount</Typography>
                        <TextField
                            required
                            id="outlined-required"
                            fullWidth
                            type={'number'}
                            placeholder={'e.g. 5000$'}
                            onChange={(e)=>setExpenseAmount(e.target.value)}
                            sx={{marginTop:'5px'}}
                        />
                    </Box>
            <Button
                variant="contained"
                fullWidth sx={{marginBottom:'14px',marginTop:'22px'}}
                onClick={handleNewExpense}
                disabled={!(expenseName&&expenseAmount)}
            >
                Create Expense
            </Button>
        </div>
    )
}