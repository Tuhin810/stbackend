import { useEffect, useState } from 'react';
import "./postedjobsdashboard.css"
import ApexCharts from 'apexcharts';
const PostedJobDashboard = () => {

  const [isRender, setIsRender] = useState<boolean>(false);

  // ApexCharts options and config
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

    <main className="job-dashboard">
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>

            <span className="block text-2xl font-bold"></span>

            <span className="block text-2xl font-bold">20</span>

            <span className="block text-gray-500">job aplies</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">6.8</span>
            <span className="block text-gray-500">Average mark</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
          <div>
            <span className="inline-block text-2xl font-bold">9</span>
            <span className="inline-block text-xl text-gray-500 font-semibold">(14%)</span>
            <span className="block text-gray-500">Underperforming job aplies</span>
          </div>
        </div>

      </section>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3 xl:grid-flow-col gap-6">
        <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
          <div className="px-6 py-5 font-semibold border-b border-gray-100">The number of applied and left job aplies per month</div>
          <div className="p-4 flex-grow">
            <div className="flex items-center justify-center h-full text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">

              <div className="w-full bg-white rounded-lg shadow darkno:bg-gray-800 p-4 md:p-6">
                <div className="flex justify-between">
                  <div>
                    <h5 className="leading-none text-3xl font-bold text-gray-900 darkno:text-white pb-2">32.4k</h5>
                    <p className="text-base font-normal text-gray-500 darkno:text-gray-400">Users this week</p>
                  </div>
                  <div
                    className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 darkno:text-green-500 text-center">
                    12%
                    <svg className="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                    </svg>
                  </div>
                </div>
                <div id="area-chart"></div>
                <div className="grid grid-cols-1 items-center border-gray-200 border-t darkno:border-gray-700 justify-between">
                  <div>
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="lastDaysdropdown"
                      data-dropdown-placement="bottom"
                      className="text-sm font-medium text-gray-500 darkno:text-gray-400 hover:text-gray-900 text-center inline-flex items-center darkno:hover:text-white"
                      type="button">
                      Last 7 days
                      <svg className="w-2.5 m-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                    <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 darkno:bg-gray-700">
                      <ul className="py-2 text-sm text-gray-700 darkno:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 darkno:hover:bg-gray-600 darkno:hover:text-white">Yesterday</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 darkno:hover:bg-gray-600 darkno:hover:text-white">Today</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 darkno:hover:bg-gray-600 darkno:hover:text-white">Last 7 days</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 darkno:hover:bg-gray-600 darkno:hover:text-white">Last 30 days</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 darkno:hover:bg-gray-600 darkno:hover:text-white">Last 90 days</a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 darkno:hover:text-blue-500  hover:bg-gray-100 darkno:hover:bg-gray-700 darkno:focus:ring-gray-700 darkno:border-gray-700 px-3 py-2">
                      Users Report
                      <svg className="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">25</span>
            <span className="block text-gray-500">Lections left</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">139</span>
            <span className="block text-gray-500">jobPost views</span>
          </div>
        </div>
        <div className="row-span-3 bg-white shadow rounded-lg">
          <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
            <span>job aplies by average mark</span>
            <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
              Descending
              <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            {/* <!-- Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns --> */}
          </div>
          <div className="overflow-y-auto" >
            <ul className="p-6 space-y-6">
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture" />
                </div>
                <span className="text-gray-600">Annette Watson</span>
                <span className="ml-auto font-semibold">9.3</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture" />
                </div>
                <span className="text-gray-600">Calvin Steward</span>
                <span className="ml-auto font-semibold">8.9</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture" />
                </div>
                <span className="text-gray-600">Ralph Richards</span>
                <span className="ml-auto font-semibold">8.7</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture" />
                </div>
                <span className="text-gray-600">Bernard Murphy</span>
                <span className="ml-auto font-semibold">8.2</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture" />
                </div>
                <span className="text-gray-600">Arlene Robertson</span>
                <span className="ml-auto font-semibold">8.2</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture" />
                </div>
                <span className="text-gray-600">Jane Lane</span>
                <span className="ml-auto font-semibold">8.1</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture" />
                </div>
                <span className="text-gray-600">Pat Mckinney</span>
                <span className="ml-auto font-semibold">7.9</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture" />
                </div>
                <span className="text-gray-600">Norman Walters</span>
                <span className="ml-auto font-semibold">7.7</span>
              </li>
            </ul>
          </div>
        </div>

      </section>

    </main>

  )
}

export default PostedJobDashboard;