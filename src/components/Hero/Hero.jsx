import './Hero.css'
import hero from '../../assets/hero.jpg'
export default function Hero(){
    return(
        <section className="bg-gray-50 flex flex-col items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold font-poppins sm:text-5xl">
                        Manage your Expense
                        <br className="sm:hidden" />
                        <strong className="font-extrabold  mt-3 text-primary  sm:block">Control your Money</strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed font-poppins font-medium">Start Creating your budget and save ton of money</p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
            <img src={hero} alt={''} style={{height:550,width:1000}} className={'-mt-9 rounded-xl border-2'}/>
        </section>
    )
}