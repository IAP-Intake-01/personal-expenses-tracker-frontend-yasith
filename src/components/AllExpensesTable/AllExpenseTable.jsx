import {useContext} from "react";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";
import DeleteIcon from "@mui/icons-material/Delete";

export default function  AllExpenseTable(){
    const {allExpense,deleteExpense} = useContext(FinancialContext);

    const handleDeleteExpense=(id)=>{
        deleteExpense(id);
    }
    return(
        <div className={'mt-2'}>
            <div className={'grid grid-cols-4 bg-slate-400 p-2 font-bold text-sm'}>
                <h2>Name</h2>
                <h2>Amount</h2>
                <h2>Date</h2>
                <h2>Action</h2>

            </div>
            {allExpense.map((expense,index)=>(
                <div key={index} className={'grid grid-cols-4 bg-slate-200 p-2 '}>
                    <h2>{expense.name}</h2>
                    <h2>{expense.amount}</h2>
                    <h2>{new Date(expense.createdAt).toLocaleDateString()}</h2>
                    <h2>{<DeleteIcon sx={{color:'red',cursor:'pointer'}} onClick={()=>handleDeleteExpense(expense.id)}/>}</h2>

                </div>
            ))}
        </div>
    )
}