import './Hero.css'
export default function Hero(){
    return(
        <section className="bg-gray-50 flex flex-col items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-36 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold font-poppins sm:text-5xl">
                        Manage your Expense
                        <br className="sm:hidden" />
                        <strong className="font-extrabold  mt-3 text-primary  sm:block">Control your Money</strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed font-poppins font-medium">Start Creating your budget and save ton of money</p>

                    <div className="mt-2 flex flex-wrap justify-center gap-4">
                        <h2 className={'font-bold text-3xl'} style={{color:'#007DFC'}}>Effortlessly!</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}