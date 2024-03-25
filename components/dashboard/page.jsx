import React from "react";
import Header from "./header/page";
import Sidebar from "./sidebar/page";
import Content from "./content/page";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <section className="h-16">
        <Header />
      </section>
      <section className="flex-grow flex flex-row">
        <section className="w-1/6">
          <Sidebar />
        </section>
        <section className="w-5/6 bg-[#F0F6FF]">
          <Content />
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
