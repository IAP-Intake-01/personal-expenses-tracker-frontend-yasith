import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
export default function BudgetItem({budget}){
    const navigate = useNavigate();
    const { expenses ,getExpenseList} = useContext(FinancialContext);

    const calculateBudgetProgress=()=>{
        const progress=(budget.totalSpend/budget.amount)*100;
        return Math.min(progress, 100); // Limit to 100%
    }
    const handleClick = () => {
        navigate(`/budget/${budget.id}`);
    };
    return(
        <div>
            <div onClick={handleClick} className={'p-5 border rounded-lg hover:shadow-md cursor-pointer h-[150px]'}>
                <div className={'flex items-center gap-2 justify-between'}>
                    <div className={'flex items-center gap-2 '}>
                        <div className="border rounded-full w-9 h-9 flex items-center justify-center" style={{backgroundColor:'#007DFC'}}>
                            <CurrencyExchangeSharpIcon sx={{color:'white'}}/>
                        </div>
                        <div>
                            <h2 className={'font-bold '}>{budget.name}</h2>
                            <h2 className={'text-sm text-gray-500'}>{budget.totalItem}</h2>
                        </div>
                    </div>
                    <h2 className={'font-bold'} style={{color:'#007DFC'}}>${budget.amount}</h2>
                </div>
                <div className={'mt-5'}>
                    <div className={'flex justify-between items-center mb-3 '}>
                        <h2 className={'text-xs text-slate-400'}>${budget.totalSpend} Spend</h2>
                        <h2 className={'text-xs text-slate-400'}>${budget.amount-budget.totalSpend} Remaining</h2>
                    </div>
                    <div className={'w-full bg-slate-300 rounded-full h-2 overflow-hidden '}>
                        <div className={' bg-blue-500 rounded-full h-2'} style={{
                            width:`${calculateBudgetProgress()}%`
                        }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}