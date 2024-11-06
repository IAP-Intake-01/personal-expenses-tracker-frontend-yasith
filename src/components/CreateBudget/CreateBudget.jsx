import CreateBudgetModel from "../CreateBudgetModel/CreateBudgetModel.jsx";
import {useState} from "react";

export default function CreateBudget(){

    const[modelOpen,setModelOpen]=useState(false);

    const openDialog = () => {
        setModelOpen(true);
    };

    // Function to close the dialog
    const closeDialog = () => {
        setModelOpen(false);
    };
    return(
        <div>
            <div className={'bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer  hover:shadow-md'}
                 onClick={openDialog}
            >
                <h2>+</h2>
                <h2>Create New Budget</h2>
            </div>
            {modelOpen &&
                <CreateBudgetModel
                    closeModel={() => setModelOpen(false)}
                />
            }

        </div>
    )
}