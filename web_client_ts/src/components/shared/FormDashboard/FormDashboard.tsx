import { FormDashBoardProps } from "../../../@types/interfaces/props/FormDashboardProps/FormDashboardProps"

const FormDashboard = ({ image, child,HeadingContent }: FormDashBoardProps) => {
    return (
        <div>
            <section className="h-screen ">
                <div className="flex h-screen items-center justify-center">
                    <div className=" bg-zinc-200 w-1/2 min-h-screen justify-center items-center hidden md:flex md:flex-col">
                        <div className="w-3/4">
                            {HeadingContent}
                            </div>
                        <img
                            src={image}
                            className="w-[50%]"
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