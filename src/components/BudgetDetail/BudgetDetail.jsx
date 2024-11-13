import {useNavigate, useParams} from "react-router-dom";
import {useContext, useState} from "react";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";
import BudgetItem from "../BudgetItem/BudgetItem.jsx";
import CreateExpense from "../CreateExpense/CreateExpense.jsx";
import LatestExpensesList from "../LatestExpensesList/LatestExpensesList.jsx";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditBudget from "../EditBudget/EditBudget.jsx";
import CreateBudgetModel from "../CreateBudgetModel/CreateBudgetModel.jsx";
export default function BudgetDetail(){
    const[modelOpen,setModelOpen]=useState(false);
    const { id } = useParams();
    const { budgets ,deleteBudget} = useContext(FinancialContext);
    const navigate = useNavigate();

    // Check if budgets data is available before rendering
    if (!budgets || budgets.length === 0) {
        return <div>Loading...</div>; // Display loading state
    }

    const handleBudgetDelete=()=>{
        deleteBudget(id)
        navigate(`/main/budgets`);
    }
    const openDialog = () => {
        setModelOpen(true);
    };

    // Function to close the dialog
    const closeDialog = () => {
        setModelOpen(false);
    };
    const budget = budgets.find(budget => budget.id === parseInt(id)); // Find budget by ID

    return(
        <div className={'pt-10 '}>
            <h2 className={'text-2xl font-bold flex justify-between'}>
                <span>My Expenses</span>
                <div className={'flex gap-2'}>
                    <Button onClick={openDialog} className={'flex gap-2 '} sx={{backgroundColor: '#007DFC'}} ><EditIcon sx={{color:'white'}}/><span style={{color:'white'}}>Edit</span></Button>
                    <Button onClick={handleBudgetDelete} className={'flex gap-2 '} sx={{backgroundColor: 'red'}} ><DeleteIcon sx={{color:'white'}}/><span style={{color:'white'}}>Delete</span></Button>
                </div>
            </h2>
            <div className={'grid grid-cols-1 md:grid-cols-2 mt-6 gap-5'}>
                    <BudgetItem budget={budget}/>
                    <CreateExpense budgetId={id}/>
            </div>
            {modelOpen &&
                <EditBudget
                    budget={budget}
                    closeModel={() => setModelOpen(false)}
                />
            }
            <LatestExpensesList budgetId={id}/>

        </div>
    )
}