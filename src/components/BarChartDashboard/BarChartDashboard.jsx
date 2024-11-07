import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useContext} from "react";
import {FinancialContext} from "../Context/ExpencesTrackerContext.jsx";

export default function BarChartDashboard(){
    const { budgets, getBudgetList } = useContext(FinancialContext);

    return(
        <div className={'border rounded-lg p-5'}>
            <h2 className={'font-bold text-lg'}>Activity</h2>
            <ResponsiveContainer width={'80%'} height={300}>
                <BarChart
                    width={500}
                    height={300}
                    data={budgets}
                    margin={{
                        top:7
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalSpend" stackId={'a'} fill="#007DFC" />
                    <Bar dataKey="amount" stackId={'a'} fill="#C2C3ff" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}