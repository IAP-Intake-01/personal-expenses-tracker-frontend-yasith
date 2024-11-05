import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
export default function BudgetItem({budget}){
    return(
        <div className={'p-5 border rounded-lg hover:shadow-md cursor-pointer'}>
            <div className={'flex items-center gap-2 justify-between'}>
                <div className={'flex items-center gap-2 '}>
                    <h2 className={'p-2 bg-slate-200 rounded-full'}>
                        <CurrencyExchangeSharpIcon sx={{color:'#007DFC'}}/>
                    </h2>
                    <div>
                        <h2 className={'font-bold '}>{budget.name}</h2>
                        <h2 className={'text-sm text-gray-500'}>{budget.totalItem}</h2>
                    </div>
                </div>
                <h2 className={'font-bold'} style={{color:'#007DFC'}}>${budget.amount}</h2>
            </div>
            <div className={'mt-5'}>
                <div className={'flex justify-between items-center mb-3'}>
                    <h2 className={'text-xs text-slate-400'}>${budget.totalSpend} Spend</h2>
                    <h2 className={'text-xs text-slate-400'}>${budget.amount-budget.totalSpend} Remaining</h2>
                </div>
                <div className={'w-full bg-slate-300 rounded-full h-2 '}>
                    <div className={'w-[40%] bg-blue-500 rounded-full h-2'} >

                    </div>
                </div>
            </div>

        </div>
    )
}