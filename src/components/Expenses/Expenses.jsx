import BudgetList from "../BudgetList/BudgetList.jsx";
import LatestExpensesList from "../LatestExpensesList/LatestExpensesList.jsx";
import AllExpenseTable from "../AllExpensesTable/AllExpenseTable.jsx";

export default function Expenses(){
    return(
        <div className={'pt-8 pl-5 '}>
            <h2 className={'font-bold text-3xl'} style={{fontFamily:'Poppins, sans-serif'}}>My Expense</h2>
            <h2 className={'font-bold text-lg mt-3'}>Latest Expenses</h2>
            <AllExpenseTable/>
        </div>
    )
}