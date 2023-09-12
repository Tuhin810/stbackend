import React, { useEffect } from 'react'

export const ApplicantPerformance = () => {
    const getChart = () => {
        let option = {
          chart: {
            height: "100%",
            maxWidth: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          tooltip: {
            enabled: true,
            x: {
              show: false,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              opacityFrom: 0.55,
              opacityTo: 0,
              shade: "#1C64F2",
              gradientToColors: ["#1C64F2"],
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 6,
          },
          grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: 0
            },
          },
          series: [
            {
              name: "New users",
              data: [6500, 6418, 6456, 6526, 6356, 6456],
              color: "#1A56DB",
            },
          ],
          xaxis: {
            categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
          },
        }
    
        if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
          const chart = new ApexCharts(document.getElementById("area-chart"), option);
          chart.render();
        }
      };
      useEffect(() => {
        getChart();
      }, [])
    
  return (
    <div className='mt-20'>
       
<div className="  flex ">
	
	<main
		className="my-1 pt-2 pb-2 px-10 flex-1  dark-bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
		
		<div className="flex">
			<div
				className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark-bg-gray-600 rounded-lg">
			

				<h3
					className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize dark-text-gray-300">
					
					<span>nearby jobs</span>
					<button className="ml-2">
						<svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
							<path
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"></path>
						</svg>
					</button>
				</h3>

				<div>
				

					<ul className="pt-1 pb-2 px-3 overflow-y-auto">

						<li className="mt-2">

							<a
								className="p-5 flex flex-col justify-between
								bg-gray-100 dark-bg-gray-200 rounded-lg"
								href="#">

								<div
									className="flex items-center justify-between
									font-semibold capitalize dark-text-gray-700">
									

									<span>english lesson</span>

									<div className="flex items-center">
										<svg
											className="h-5 w-5 fill-current mr-1
											text-gray-600"
											viewBox="0 0 24 24">
											<path
												d="M14 12l-4-4v3H2v2h8v3m12-4a10
												10 0 01-19.54 3h2.13a8 8 0
												100-6H2.46A10 10 0 0122 12z"></path>
										</svg>
										<span>4.2 mi</span>
									</div>

								</div>

								<p
									className="text-sm font-medium leading-snug
									text-gray-600 my-3">
									
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Explicabo assumenda porro
									sapiente, cum nobis tempore delectus
									consectetur ullam reprehenderit quis ducimus,
									iusto dolor nam corporis id perspiciatis
									consequuntur saepe excepturi.
								</p>

								<div className="flex justify-between">
									

									<div className="flex">
										<img
											className="h-6 w-6 rounded-full mr-3"
											src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
											alt="" />
										<span>
											<span
												className="text-blue-500
												font-semibold">
												Regina C.
											</span>
											via HeyTutor
										</span>
									</div>

									<p
										className="text-sm font-medium leading-snug
										text-gray-600">
										14 hours ago
									</p>

								</div>

							</a>
						</li>
						<li className="mt-2">

							<a
								className="p-5 flex flex-col justify-between
								bg-gray-100 dark-bg-gray-200 rounded-lg"
								href="#">

								<div
									className="flex items-center justify-between
									font-semibold capitalize dark-text-gray-700">
									{/* <!-- Top section --> */}

									<span>english lesson</span>

									<div className="flex items-center">
										<svg
											className="h-5 w-5 fill-current mr-1
											text-gray-600"
											viewBox="0 0 24 24">
											<path
												d="M14 12l-4-4v3H2v2h8v3m12-4a10
												10 0 01-19.54 3h2.13a8 8 0
												100-6H2.46A10 10 0 0122 12z"></path>
										</svg>
										<span>4.2 mi</span>
									</div>

								</div>

								<p
									className="text-sm font-medium leading-snug
									text-gray-600 my-3">
									{/* <!-- Middle section --> */}
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Explicabo assumenda porro
									sapiente, cum nobis tempore delectus
									consectetur ullam reprehenderit quis ducimus,
									iusto dolor nam corporis id perspiciatis
									consequuntur saepe excepturi.
								</p>

								<div className="flex justify-between">
									{/* <!-- Bottom section --> */}

									<div className="flex">
										<img
											className="h-6 w-6 rounded-full mr-3"
											src="https://i.pinimg.com/originals/b7/06/0b/b7060b60f6ee1beeedf7d648dabd89a1.jpg"
											alt="Issue" />
										<span>
											<span
												className="text-blue-500
												font-semibold">
												Regina C.
											</span>
											via HeyTutor
										</span>
									</div>

									<p
										className="text-sm font-medium leading-snug
										text-gray-600">
										14 hours ago
									</p>

								</div>

							</a>
						</li>
					</ul>

					<a
						href="#"
						className="flex justify-center capitalize text-blue-500
						dark-text-blue-200">
						<span>see all</span>
					</a>

				</div>

			</div>

			<div
				className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col
				bg-purple-300 rounded-lg text-white">

				<h3
					className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize">
					{/* <!-- Header --> */}
					<span>scheduled lessons</span>
					<button className="ml-2">
						<svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
							<path
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"></path>
						</svg>
					</button>
				</h3>

				<div className="flex flex-col items-center mt-12">
					<img
						src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
						alt=" empty schedule" />

					<span className="font-bold mt-8">Your schedule is empty</span>

					<span className="text-purple-500">
						Make your first appointment
					</span>

					<button className="mt-8 bg-purple-800 rounded-lg py-2 px-4">
						Find a Job
					</button>

				</div>
			</div>

		</div>

	</main>

	<aside
		className="w-1/4 my-1 mr-1 px-6 py-4 flex flex-col bg-gray-200 dark-bg-black
		dark-text-gray-400 rounded-r-lg overflow-y-auto">
		{/* <!-- Right side NavBar --> */}

		
        <div className="flex flex-col capitalize text-3xl">
			<span className="font-semibold">hello,</span>
			<span>tempest!</span>

		</div>
        
        <div className="max-w-sm mt-5 w-full bg-white rounded-lg shadow -bg-gray-800 p-4 md:p-6">
  <div className="flex justify-between mb-5">
    <div className="grid gap-4 grid-cols-2">
      <div>
        <h5 className="inline-flex items-center text-gray-500 -text-gray-400 leading-none font-normal mb-2">Clicks
          <svg data-popover-target="clicks-info" data-popover-placement="bottom" className="w-3 h-3 text-gray-400 hover:text-gray-900 -hover:text-white cursor-pointer ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <div data-popover id="clicks-info" role="tooltip" className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 -bg-gray-800 -border-gray-600 -text-gray-400">
              <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-gray-900 -text-white">Clicks growth - Incremental</h3>
                  <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
                  <h3 className="font-semibold text-gray-900 -text-white">Calculation</h3>
                  <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
                  <a href="#" className="flex items-center font-medium text-blue-600 -text-blue-500 -hover:text-blue-600 hover:text-blue-700 hover:underline">Read more <svg className="w-2 h-2 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg></a>
              </div>
              <div data-popper-arrow></div>
          </div>
        </h5>
        <p className="text-gray-900 -text-white text-2xl leading-none font-bold">42,3k</p>
      </div>
      <div>
        <h5 className="inline-flex items-center text-gray-500 -text-gray-400 leading-none font-normal mb-2">CPC
        <svg data-popover-target="cpc-info" data-popover-placement="bottom" className="w-3 h-3 text-gray-400 hover:text-gray-900 -hover:text-white cursor-pointer ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <div data-popover id="cpc-info" role="tooltip" className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 -bg-gray-800 -border-gray-600 -text-gray-400">
              <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-gray-900 -text-white">CPC growth - Incremental</h3>
                  <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
                  <h3 className="font-semibold text-gray-900 -text-white">Calculation</h3>
                  <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
                  <a href="#" className="flex items-center font-medium text-blue-600 -text-blue-500 -hover:text-blue-600 hover:text-blue-700 hover:underline">Read more <svg className="w-2 h-2 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg></a>
              </div>
              <div data-popper-arrow></div>
          </div>
        </h5>
        <p className="text-gray-900 -text-white text-2xl leading-none font-bold">$5.40</p>
      </div>
    </div>
    <div>
      <button id="dropdownDefaultButton"
        data-dropdown-toggle="lastDaysdropdown"
        data-dropdown-placement="bottom" type="button" className="px-3 py-2 inline-flex items-center text-sm font-medium text-gray-900 -:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 -:z-10 -:ring-4 -:ring-gray-200 --:ring-gray-700 -bg-gray-800 -text-gray-400 -border-gray-600 -hover:text-white -hover:bg-gray-700">Last week <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg></button>
    <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 -bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 -text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 -hover:bg-gray-600 -hover:text-white">Yesterday</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 -hover:bg-gray-600 -hover:text-white">Today</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 -hover:bg-gray-600 -hover:text-white">Last 7 days</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 -hover:bg-gray-600 -hover:text-white">Last 30 days</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 -hover:bg-gray-600 -hover:text-white">Last 90 days</a>
            </li>
          </ul>
      </div>
    </div>
  </div>
  <div id="line-chart"></div>
  <div className="grid grid-cols-1 items-center border-gray-200 border-t -border-gray-700 justify-between mt-2.5">
    <div className="pt-5">      
      <a href="#" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 -:ring-4 -:outline-none -:ring-blue-300 rounded-lg text-center -bg-blue-600 -hover:bg-blue-700 --:ring-blue-800">
        <svg className="w-3.5 h-3.5 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z"/>
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
        View full report
      </a>
    </div>
  </div>
</div>




		<button
			className="mt-8 flex items-center py-4 px-3 text-white rounded-lg
			bg-red-600 shadow -:outline-none">
			{/* <!-- Action --> */}

			<svg className="h-5 w-5 fill-current mr-2 ml-3" viewBox="0 0 24 24">
				<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
			</svg>

			<span>Bill your Students</span>

		</button>

		

		

		

		

		

	</aside>

</div>
    </div>
  )
}
