// import Register from "@/components/register/page";
"use client";
import Dashboard from "@/components/dashboard/page";
import Screensize from "@/components/errorPages/screensize/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check initial screen width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <main>{isSmallScreen ? <Screensize /> : <Dashboard />}</main>;
}
