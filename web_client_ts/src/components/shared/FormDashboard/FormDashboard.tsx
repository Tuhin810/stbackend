import { FormDashBoardProps } from "../../../@types/interfaces/props/FormDashboardProps/FormDashboardProps"

const FormDashboard = ({image,child}:FormDashBoardProps) => {
    return (
        <div>
            <section className="h-screen ">
                    <div className="flex h-screen items-center justify-center">
                        <div className="mb-10 bg-slate-200 w-1/2 min-h-screen justify-center align-middle hidden md:flex">
                            <img
                                src={image}
                                className="w-2/3"
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