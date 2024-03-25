import React from "react";
import "./styleSidebar.css";
import Link from "next/link";
import { useActivePath } from "./useActivePath";

const Sidebar = () => {
  const activePath = useActivePath();

  const sidebarOptions = [
    { label: "Project", link: "/project" },
    { label: "Tasks", link: "/tasks" },
    { label: "Work Logs", link: "/work-logs" },
    { label: "Performance", link: "/performance" },
    { label: "Settings", link: "/settings" },
  ];

  const handleClickSidebarMenu = (e, option, index) => {
    e.preventDefault();
    const { label } = option;
    console.log(label);
  };

  return (
    <div className="sidebar">
      <ul>
        {sidebarOptions.map((option, index) => (
          <li key={index}>
            <Link
              href={option.link}
              onClick={(e) => handleClickSidebarMenu(e, option, index)}
              className={activePath(option.link) ? "active" : ""}>
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
