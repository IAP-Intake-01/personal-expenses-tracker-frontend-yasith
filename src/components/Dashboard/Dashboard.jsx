import DashboardCard from "../DashboardCard/DashboardCard.jsx";
import BarChartDashboard from "../BarChartDashboard/BarChartDashboard.jsx";
import BudgetItem from "../BudgetItem/BudgetItem.jsx";
import {useContext, useEffect} from "react";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";
import AllExpenseTable from "../AllExpensesTable/AllExpenseTable.jsx";

export default function Dashboard(){
    const savedUserEmail = localStorage.getItem('userEmail');
    const { budgets, getBudgetList } = useContext(FinancialContext);


    return(
        <div className={'p-5'}>
            <h2 className={'font-bold text-3xl'} style={{fontFamily:'popin'}}>Hi, {savedUserEmail}</h2>
            <p className={'text-gray-500'} style={{fontFamily:'popin'}}>Here's what happening with your money, Lets manage your expense</p>
            <DashboardCard/>
            <div className={'grid grid-cols-1 md:grid-cols-3 mt-6 gap-5'}>
                <div className={'md:col-span-2'}>
                    <BarChartDashboard/>
                    <h2 className={'font-bold text-lg mt-3'}>Latest Expenses</h2>
                    <AllExpenseTable/>

                </div>
                <div className={'grid  gap-5'}>
                    <h2 className={'font-bold text-lg'}>Latest Budgets</h2>
                    {budgets.map((budget,index)=>(
                        <BudgetItem
                            key={budget.id}
                            budget={budget}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}