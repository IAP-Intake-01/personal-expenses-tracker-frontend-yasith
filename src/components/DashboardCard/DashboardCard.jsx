import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import {useContext, useEffect, useState} from "react";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";
export  default function DashboardCard(){

    const { budgets, getBudgetList } = useContext(FinancialContext);
    const[totalBudget,setTotalBudget]=useState(0)
    const[totalSpend,setTotalSpend]=useState(0)
    const[totalNoOfBudgets,setTotalNoOfBudgets]=useState(0)


    useEffect(() => {
        calculateCardiNfo();
    }, [budgets]);

    const calculateCardiNfo=()=>{
        let totalBudget_=0;
        let totalSpend_=0
        budgets.forEach(element=>{
            totalBudget_=totalBudget_+Number(element.amount)
            totalSpend_=totalSpend_+Number(element.totalSpend)
        })
        setTotalBudget(totalBudget_)
        setTotalSpend(totalSpend_)
        console.log(totalSpend_+"   "+totalBudget_)
    }
    return(
        <div className={'mt-7 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3'}>
            <div className={'p-7 border rounded-lg  flex items-center justify-between'}>
                <div>
                    <h2 className={'text-sm'}>Total Budget</h2>
                    <h2 className={'font-bold text-2xl'}>${totalBudget}</h2>
                </div>
                <div className="border rounded-full w-9 h-9 flex items-center justify-center" style={{backgroundColor:'#007DFC'}}>
                    <AddCardOutlinedIcon sx={{color:'white'}}/>
                </div>
            </div>
            <div className={'p-7 border rounded-lg  flex items-center justify-between'}>
                <div>
                    <h2 className={'text-sm'}>Total Spend</h2>
                    <h2 className={'font-bold text-2xl'}>${totalSpend}</h2>
                </div>

                <div className="border rounded-full w-9 h-9 flex items-center justify-center" style={{backgroundColor:'#007DFC'}}>
                    <AddCardOutlinedIcon sx={{color:'white'}}/>
                </div>
            </div>
            <div className={'p-7 border rounded-lg  flex items-center justify-between'}>
                <div>
                    <h2 className={'text-sm'}>No.of Budget</h2>
                    <h2 className={'font-bold text-2xl'}>{budgets.length}</h2>
                </div>
                <div className="border rounded-full w-9 h-9 flex items-center justify-center" style={{backgroundColor:'#007DFC'}}>
                    <AddCardOutlinedIcon sx={{color:'white'}}/>
                </div>
            </div>
        </div>
    )
}