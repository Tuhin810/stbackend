import { CountUp } from 'use-count-up'

const Stats = () => {
    
    return (
        <div className="px-4 py-8 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" >
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                <div className="text-center md:border-r mb-4">
                    <h6 className="text-5xl font-bold "><CountUp isCounting end={200} duration={1.2} />K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Users
                    </p>
                </div>
                <div className="text-center md:border-r">
                    <h6 className="text-4xl md:text-5xl font-bold text-indigo-600"><CountUp isCounting end={35} duration={1.2} />K</h6>
                    <p className="text-sm font-medium tracking-widest text-indigo-600 uppercase lg:text-base">
                        Jobs
                    </p>
                </div>
                <div className="text-center md:border-r">
                    <h6 className="text-4xl md:text-5xl font-bold "><CountUp isCounting end={14} duration={1.2} />K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                        Employers
                    </p>
                </div>
                <div className="text-center">
                    <h6 className="text-4xl md:text-5xl font-bold  text-indigo-600"><CountUp isCounting end={35} duration={1.2} />K</h6>
                    <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base  text-indigo-600">
                        Cookies
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Stats