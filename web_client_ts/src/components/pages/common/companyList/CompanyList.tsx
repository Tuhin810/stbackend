import { useEffect } from "react";
import "./company.css"
import { company1, company10, company11, company12, company13, company14, company15, company16, company2, company3, company4, company5, company6, company7, company8, company9 } from "../../../../assets/Company_logo";
const CompanyList = () => {

    useEffect(() => {
        const root = document.documentElement;
        const marqueeElementsDisplayed: any = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent: any = document.querySelector("ul.marquee-content");

        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }

    }, [])



    return (
        <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container bg-white py-10">
            <div className="md:pt-12 py-8 px-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-gray-800">Our<span className="text-indigo-700"> Trusted</span> Partners</h1>
                    <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">We just got featured in the following magazines and it has been the most incredible journey. We work with the best fashion magazines across the world</p>
                </div>
                <div className="marquee bg-white w-full px- h-56 mx-auto mt-10">
                    <ul className="ul marquee-content">
                        <li><img src={company1}/></li>
                        <li><img src={company2}/></li>
                        <li><img src={company3}/></li>
                        <li><img src={company4}/></li>
                        <li><img src={company5}/></li>
                        <li><img src={company6}/></li>
                        <li><img src={company7}/></li>
                        <li><img src={company8}/></li>
                        <li><img src={company9}/></li>
                        <li><img src={company10}/></li>
                        <li><img src={company11}/></li>
                        <li><img src={company12}/></li>
                        <li><img src={company13}/></li>
                        <li><img src={company14}/></li>
                        <li><img src={company15}/></li>
                        <li><img src={company16}/></li>

                    </ul>
                </div>
            </div>
        </div>


    );
}
export default CompanyList
