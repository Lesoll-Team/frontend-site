import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import BlogDashboard from './router/BlogDashboard' 
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import UserDashboard from "./router/UserDashboardt";
// UserDashboard
import PropertyDashboard from './router/PropertyDashboard'
import OverviewDetailsDashboard from "./router/OverviewDetailsDashboard";
function Dashboard() {

  return (
    <div className="flex w-full flex-col ">
      <Tabs aria-label="Options">
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

        <Tab key="overview" title="overview">
          <Card>
            <CardBody>
            <OverviewDetailsDashboard/>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Dashboard;
