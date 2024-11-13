import imadge_budget from '../../assets/Image_budgetList.png'
import imadge_creatBudget from '../../assets/Image_createBudget.png'
import imadge_dashboard from '../../assets/Image_dashboard.png'
import imadge_budgeting from '../../assets/Image_painless_budegeting.png'

export default function HomePageImageSection(){
    return(
        <div className="px-6 mt-40 w-full">
            <div className={'flex gap-10  justify-center'}>
                <div className={'w-[43%] '}>
                    <img className={'border-2 rounded-lg drop-shadow-2xl'} src={imadge_budget} alt={'Error'}/>
                </div>
                <div className={'w-[33%] mt-16'}>
                    <h2 className={'font-bold text-3xl mb-3'}>Simple Money Tracker</h2>
                    <p className={'text-gray-500'}>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
                </div>
            </div>
            <div>
                <div className={'flex gap-10  justify-center mt-28'}>
                    <div className={'w-[53%] mt-28'}>
                        <h2 className={'font-bold text-3xl mb-3'}>Painless budgeting</h2>
                        <p className={'text-gray-500'}>Managing your finances doesn’t have to be complicated. With our expense tracker, you can easily record every transaction, categorize expenses, and gain clear insights into your spending habits. Set budgeting goals, monitor your progress, and make adjustments with ease. Our intuitive design ensures that budgeting is quick, effective, and, most importantly, stress-free. Start taking control of your finances without the hassle!</p>
                    </div>
                    <div className={'w-[23%]'}>
                        <img className={'border-2 rounded-lg drop-shadow-2xl'} src={imadge_budgeting} alt={'Error'}/>
                    </div>
                </div>
            </div>
            <div>
                <div className={'flex gap-10  justify-center mt-24'}>
                    <div className={'w-[43%]'}>
                        <img className={'border-2 rounded-lg drop-shadow-2xl'} src={imadge_dashboard} alt={'Error'}/>
                    </div>
                    <div className={'w-[33%] mt-20'}>
                        <h2 className={'font-bold text-3xl mb-3'}>The whole picture in one place</h2>
                        <p className={'text-gray-500'}>One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}