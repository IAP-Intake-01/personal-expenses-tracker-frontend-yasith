import {createContext, useState} from "react";
import axios from "axios";

export const  FinancialContext=createContext(null);
const ExpencesTrackerContext=({children})=>{
    const [user, setUser] = useState(null);
    const [budgets, setBudgets] = useState([]);
    const [expenses, setExpenses] = useState([]);

    //SignUp
    const signUp=(newSignUp)=>{
        axios.post('http://localhost:3000/register',{
            name:newSignUp.name,
            email:newSignUp.email,
            password:newSignUp.password
        })
            .then(res=>{
                if(res.data.status==="Success"){
                    alert('success')
                    setUser({
                        name:res.data.user.name,
                        email: res.data.user.email
                    });
                    console.log(res.data.user.email)
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
        axios.post('http://localhost:3000/login',{
            email:newSignIn.email,
            password:newSignIn.password
        })
            .then(res=>{
                if(res.data.status==="Success"){
                    alert('Sucess')
                }else{
                    alert('Passwrod not matches')
                }
            })
            .catch(err=>{
                alert('Error')
            })
        console.log(newSignIn);
    }

    const createBudget=()=>{

    }
    const contextValue = {
        signIn,
        signUp
    }
    return (
        <FinancialContext.Provider value={contextValue}>
            {children}
        </FinancialContext.Provider>
    )
}
export default ExpencesTrackerContext;