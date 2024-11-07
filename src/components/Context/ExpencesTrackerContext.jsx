import {createContext, useEffect, useState} from "react";
import instance from "../../services/AxiosOrder.jsx";
export const  FinancialContext=createContext(null);

const ExpencesTrackerContext=({children})=>{
    const [user, setUser] = useState({});
    const [budgets, setBudgets] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const[allExpense,setAllExpense]=useState([])

    //SignUp
    const signUp=(newSignUp)=>{
        instance.post('/register',{
            name:newSignUp.name,
            email:newSignUp.email,
            password:newSignUp.password
        })
            .then(res=>{
                if(res.data.status==="Success"){
                    alert('success')
                }else{
                    alert('Error')
                }
            })
            .catch(error=>{
                alert('SignUp error')
            })
        console.log(newSignUp);
    }

    //SignIn
    const signIn=(newSignIn)=>{
        instance.post('/login',{
            email:newSignIn.email,
            password:newSignIn.password
        })
            .then(res=>{
                if(res.data.status==="Success"){
                    const token=res.data.token;
                    localStorage.setItem('login',token)
                    localStorage.setItem('userEmail', res.data.user.email);
                    console.log(token)
                    window.location.reload();
                    alert('Success')

                }else{
                    alert('Password not matches')
                }
            })
            .catch(err=>{
                alert('Error')
            })
        console.log(newSignIn);
    }

    const createBudget=(newBudget)=>{
        const savedUserEmail = localStorage.getItem('userEmail');

        instance.post('/create-budget',{
            name:newBudget.name,
            amount:newBudget.amount,
            createdBy:savedUserEmail
        })
            .then(res=>{
                if(res.data.status==="Success"){
                    alert('Success')
                }else{
                    alert('Error')
                }
            })
            .catch(err=>{
                alert('Error')
            })
    }

    useEffect(() => {
        getBudgetList();
        getAllExpenseList();
    }, []);

    const getBudgetList=()=>{

        const userEmail=localStorage.getItem('userEmail');
        instance.get('get-budget-list',{
            params: { email: userEmail }  // Send email as query parameter
        })
            .then(res=>{
                setBudgets(res.data.budget_list);
            })
            .catch(err=>{
                alert("Failed to fetch budget list");
            })
    }
    const getAllExpenseList=()=>{
        const userEmail=localStorage.getItem('userEmail');
        instance.get('get-all-expense-list',{
            params: { email: userEmail }  // Send email as query parameter
        })
            .then(res=>{
                setAllExpense(res.data.allExpenseList);
                console.log(res.data)
            })
            .catch(err=>{
                alert("Failed to fetch expense list");
            })
    }
    const logOut = () => {
        localStorage.removeItem('login');
        window.location.reload()
        localStorage.removeItem('userEmail'); // Remove user ID on logout

    };

    const addNewExpense=(newExpense)=>{
        console.log(newExpense.name+" "+newExpense.amount+" "+newExpense.budget_id+" "+ new Date().toISOString()+ " "+"correct")


        instance.post('create-expense',{
            name:newExpense.name,
            amount:newExpense.amount,
            budget_id:newExpense.budget_id,
            createdAt: new Date().toISOString().split('T')[0] // Only the date part

        })
            .then(res=>{
                setExpenses(res.data.expense)
                console.log(res.data.expense)
                window.location.reload();
            })
            .catch(err=>{
                alert("Failed to fetch expenses");
            })
    }

    const getExpenseList=(budgetId)=>{
        instance.get(`get-expense/${budgetId}`)
            .then(res=>{
                console.log(res.data);
                setExpenses(res.data.expense_List)
            })
            .catch(err=>{
                alert('Error')
            })
    }

    const deleteExpense=(id)=>{
        instance.delete(`delete-expense/${id}`)
            .then(res=>{
                setExpenses((prevExpenses) =>
                    prevExpenses.filter((expense) => expense.id !== id)
                );
                window.location.reload();
            })
            .catch(err=>{
                alert('Error')
            })
    }

    const  deleteBudget=(id)=>{
        instance.delete(`delete-budget/${id}`)
            .then(res=>{
                setBudgets((prevBudgets) =>
                    prevBudgets.filter((budget) => budget.id !== id)
                );
                window.location.reload();
            })
            .catch(err=>{
                alert('Error')
            })
    }

    const editBudget=(newBudget)=>{
        console.log("Id "+newBudget.id)
        console.log("Name "+newBudget.name)
        console.log("Amount "+newBudget.amount)

        instance.put(`edit-budget/${newBudget.id}`,{
            name:newBudget.name,
            amount:newBudget.amount
        })
            .then(res=>{
                alert('Success')
                console.log(res.data)
                setBudgets((prevBudgets) =>
                    prevBudgets.map((budget) =>
                        budget.id === res.data.newBudget.id
                            ? { ...budget, name: res.data.newBudget.name, amount: res.data.newBudget.amount }
                            : budget
                    )
                );
                window.location.reload();
            })
            .catch(err=>{
                alert('Error')
            });

    }
    const contextValue = {
        signIn,
        signUp,
        createBudget,
        logOut,
        budgets,
        getBudgetList,
        addNewExpense,
        getExpenseList,
        expenses,
        deleteExpense,
        deleteBudget,
        editBudget,
        allExpense,
        user
    }
    return (
        <FinancialContext.Provider value={contextValue}>
            {children}
        </FinancialContext.Provider>
    )
}
export default ExpencesTrackerContext;