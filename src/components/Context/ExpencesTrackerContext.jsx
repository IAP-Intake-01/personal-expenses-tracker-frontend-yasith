import {createContext, useEffect, useState} from "react";
import instance from "../../services/AxiosOrder.jsx";
import {useNavigate} from "react-router-dom";
export const  FinancialContext=createContext(null);

const ExpencesTrackerContext=({children})=>{
    const [user, setUser] = useState(null);
    const [budgets, setBudgets] = useState([]);
    const [expenses, setExpenses] = useState([]);


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
                    console.log(res.data.user.email)
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
    const logOut = () => {
        localStorage.removeItem('login');
        window.location.reload()
        localStorage.removeItem('userEmail'); // Remove user ID on logout

    };
    const contextValue = {
        signIn,
        signUp,
        createBudget,
        logOut,
        budgets,
        getBudgetList
    }
    return (
        <FinancialContext.Provider value={contextValue}>
            {children}
        </FinancialContext.Provider>
    )
}
export default ExpencesTrackerContext;