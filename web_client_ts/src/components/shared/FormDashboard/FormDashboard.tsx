import { FormDashBoardProps } from "../../../@types/interfaces/props/FormDashboardProps/FormDashboardProps"

const FormDashboard = ({ image, child }: FormDashBoardProps) => {
    return (
        <div>
            <section className="h-screen ">
                <div className="flex h-screen items-center justify-center">
                    <div className="mb-10 bg-zinc-200 w-1/2 min-h-screen justify-center items-center hidden md:flex md:flex-col">
                        <div className="w-3/4">
                            <h2 className="text-5xl mb-4 font-serif leading-tight font-medium">Your <span className="text-indigo-700">Dream Job</span> Awaits, Find it Here!</h2>
                            <p className="text-gray-500 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe deserunt voluptates animi eveniet, culpa molestiae deleniti voluptas dignissimos recusandae dolor. </p>
                        </div>
                        <img
                            src={image}
                            className="w-3/4"
                            alt="Phone image" />
                    </div>

                    <div className="w-full md:w-1/2 bg-zinc-50">

                        {child}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default FormDashboard