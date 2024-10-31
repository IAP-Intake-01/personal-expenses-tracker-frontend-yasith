import React from "react";
import DashboardPage from "../pages/DashboardPage.jsx";
import BudgetsPage from "../pages/BudgetsPage.jsx";
import ExpensesPage from "../pages/ExpensesPage.jsx";
import UpgradePage from "../pages/UpgradePage.jsx";


const routes=[
    {
        name: 'Dashboard',
        key:'dashboard',
        path:'/dashboard',
        element: <DashboardPage/>
    },
    {
        name: 'Budgets',
        key:'budgets',
        path:'/budgets',
        element: <BudgetsPage/>
    },
    {
        name: 'Expenses',
        key:'expenses',
        path:'/expenses',
        element: <ExpensesPage/>
    },
    {
        name: 'Upgrade',
        key:'upgrade',
        path:'/upgrade',
        element: <UpgradePage/>
    }
]
export  default routes