import BudgetList from "../BudgetList/BudgetList.jsx";

export default function Budget(){
    return(
        <div className={'pt-8 pl-5 '}>
            <h2 className={'font-bold text-3xl'} style={{fontFamily:'Poppins, sans-serif'}}>My Budgets</h2>
            <BudgetList/>
        </div>
    )
}