import React from "react";
import DashboardPage from "../pages/DashboardPage.jsx";
import BudgetsPage from "../pages/BudgetsPage.jsx";
import ExpensesPage from "../pages/ExpensesPage.jsx";
import UpgradePage from "../pages/UpgradePage.jsx";


const routes=[
    {
        name: 'Dashboard',
        key:'dashboard',
        path:'main/dashboard',
        element: <DashboardPage/>
    },
    {
        name: 'Budgets',
        key:'budgets',
        path:'main/budgets',
        element: <BudgetsPage/>
    },
    {
        name: 'Expenses',
        key:'expenses',
        path:'main/expenses',
        element: <ExpensesPage/>
    },

]
export  default routes