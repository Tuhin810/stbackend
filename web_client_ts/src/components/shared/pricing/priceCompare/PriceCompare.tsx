import CrossIcon from "../../icons/crossIcon/CrossIcon"
import RightIcon from "../../icons/rightIcon/RightIcon"

const PriceCompare = () => {
    return (
        <div className="conatiner mt-10 py-14 sm:px-20 px-5">
            <div className="my-5 mb-16">
                <h2 className="text-3xl font-semibold">Plan <span className="text-indigo-700">Comaprision</span></h2>
                <p className="sm:max-w-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum numquam ipsum architecto distinctio, sunt eum omnis tempore vitae mollitia impedit</p>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-3xl text-gray-700">
                        <tr>
                            <th scope="col" className="px-2 py-3 bg-gray-50 ">

                            </th>
                            <th scope="col" className="px-4 py-3 text-center">
                                Starter
                                <br />
                                <span className="text-xl uppercase font-normal text-black">Free</span>
                            </th>
                            <th scope="col" className="px-6 py-3 bg-indigo-100 text-center">
                                Pro
                                <br />
                                <span className="text-xl font-normal text-black">$20 / mo</span>
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Business
                                <br />
                                <span className="text-xl font-normal text-black">$30 / mo</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-16 text-center">
                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50  ">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-4 py-4 text-center">
                                <RightIcon />
                            </td>
                            <td className="px-6 py-4 bg-indigo-100 ">
                                <RightIcon />
                            </td>
                            <td className="px-6 py-4">
                                <RightIcon />
                            </td>
                        </tr>
                        <tr className="h-16 text-center">
                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50  ">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-4 py-4 text-center">
                                <RightIcon />
                            </td>
                            <td className="px-6 py-4 bg-indigo-100 ">
                                <RightIcon />
                            </td>
                            <td className="px-6 py-4">
                                <RightIcon />
                            </td>
                        </tr>
                        <tr className="h-16 text-center">
                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50  ">
                                Magic Mouse 2
                            </th>
                            <td className="px-4 py-4 text-center">
                                <CrossIcon/>
                            </td>
                            <td className="px-6 py-4 bg-indigo-100 ">
                                <RightIcon/>
                            </td>
                            <td className="px-6 py-4">
                            <RightIcon/>
                            </td>
                        </tr>
                        <tr className="h-16 text-center">
                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50  ">
                                Google Pixel Phone
                            </th>
                            <td className="px-4 py-4 text-center">
                                <CrossIcon/>
                            </td>
                            <td className="px-6 py-4 bg-indigo-100 ">
                                <CrossIcon/>
                            </td>
                            <td className="px-6 py-4">
                            <RightIcon/>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50  ">
                                Apple Watch 5
                            </th>
                            <td className="px-4 py-4 text-center">
                                <CrossIcon/>
                            </td>
                            <td className="px-6 py-4 bg-indigo-100 ">
                                <CrossIcon/>
                            </td>
                            <td className="px-6 py-4">
                            <RightIcon/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PriceCompare