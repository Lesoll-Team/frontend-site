import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import BlogDashboard from './router/BlogDashboard' 
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import UserDashboard from "./router/UserDashboard";
import PropertyDashboard from './router/PropertyDashboard'
import ContactDashboard from './router/ContactDashboard'
function Dashboard() {

  return (
    <div className="flex w-full flex-col ">
      <Tabs aria-label="Options">
        {/* <Tab key="Details" title="Details">
          <Card>
            <CardBody>
              <Splide
                options={{
                  rewind: true,
                  type: "loop",
                  trimSpace: false,
                  preloadPages: 1000,
                  perPage: "full",
                  breakpoints: {
                    1600: {
                      perPage: 6,
                    },
                    1366: {
                      perPage: 4,
                    },
                    1024: {
                      perPage: 3,
                    },
                    580: {
                      perPage: 2,
                    },
                    410: {
                      perPage: 1,
                      padding: { left: 45 },
                    },
                    350: {
                      perPage: 1,
                      padding: { left: 20 },
                    },
                    300: {
                      perPage: 1,
                    },
                  },
                  focus: "center",
                  gap: "2em",
                  updateOnMove: true,
                  pagination: false,
                  rewindSpeed: 1000,
                }}
                aria-label="My Favorite Images"
                className="m-auto xs:w-9/12 w-full"
              >
                <SplideSlide>
                  <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                    <div className="text-center items-center font-bold text-2xl">
                      Users
                    </div>
                    <div className="text-center items-center">P</div>
                    <div className="text-center items-center font-bold text-1xl">
                      500
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                    <div className="text-center items-center font-bold text-2xl">
                      Property Rent
                    </div>
                    <div className="text-center items-center">P</div>
                    <div className="text-center items-center font-bold text-1xl">
                      120
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                    <div className="text-center items-center font-bold text-2xl">
                      Property Buy
                    </div>
                    <div className="text-center items-center">P</div>
                    <div className="text-center items-center font-bold text-1xl">
                      50
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                    <div className="text-center items-center font-bold text-2xl">
                      Users Leave
                    </div>
                    <div className="text-center items-center">P</div>
                    <div className="text-center items-center font-bold text-1xl">
                      10
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                    <div className="text-center items-center font-bold text-2xl">
                      Company
                    </div>
                    <div className="text-center items-center">P</div>
                    <div className="text-center items-center font-bold text-1xl">
                      22
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                    <div className="text-center items-center font-bold text-2xl">
                      Broker
                    </div>
                    <div className="text-center items-center">P</div>
                    <div className="text-center items-center font-bold text-1xl">
                      60
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                    <div className="text-center items-center font-bold text-2xl">
                      Developers
                    </div>
                    <div className="text-center items-center">P</div>
                    <div className="text-center items-center font-bold text-1xl">
                      5
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                    <div className="text-center items-center font-bold text-2xl">
                      Users Watch
                    </div>
                    <div className="text-center items-center">P</div>
                    <div className="text-center items-center font-bold text-1xl">
                      5000
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                    <div className="text-center items-center font-bold text-2xl">
                      Users Active
                    </div>
                    <div className="text-center items-center">P</div>
                    <div className="text-center items-center font-bold text-1xl">
                      145
                    </div>
                  </div>
                </SplideSlide>
                <SplideTrack>
                  <SplideSlide>
                    <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                      <div className="text-center items-center font-bold text-2xl">
                        Users Active
                      </div>
                      <div className="text-center items-center">P</div>
                      <div className="text-center items-center font-bold text-1xl">
                        145
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="w-36 h-36 my-5 rounded-xl bg-gray-200 grid grid-cols-1 ">
                      <div className="text-center items-center font-bold text-2xl">
                        Users Active
                      </div>
                      <div className="text-center items-center">P</div>
                      <div className="text-center items-center font-bold text-1xl">
                        145
                      </div>
                    </div>
                  </SplideSlide>
                </SplideTrack>
              </Splide>
            </CardBody>
          </Card>
        </Tab> */}

        <Tab key="Property" title="Property">
          <Card>
            <CardBody>
           <PropertyDashboard/>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="User" title="Users">
          <Card>
            <CardBody>

<UserDashboard/>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="Blog" title="Blogs">
          <Card>
            <CardBody>
              <BlogDashboard/>
            </CardBody>
          </Card>
        </Tab>

      </Tabs>
    </div>
  );
}

export default Dashboard;
