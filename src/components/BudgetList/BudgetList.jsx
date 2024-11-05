import CreateBudget from "../CreateBudget/CreateBudget.jsx";
import {useContext, useEffect} from "react";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";
import BudgetItem from "../BudgetItem/BudgetItem.jsx";

export default function BudgetList(){

    const { budgets, getBudgetList } = useContext(FinancialContext);

    useEffect(() => {
        getBudgetList();
    }, []);
    return(
        <div className={'mt-7'}>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'}>
                <CreateBudget/>
                {budgets.map((budget,index)=>(
                    <BudgetItem
                        key={budget.id}
                        budget={budget}
                    />
                ))}
            </div>
        </div>
    )
}