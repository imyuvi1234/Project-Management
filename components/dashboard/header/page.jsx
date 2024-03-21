import Image from "next/image";
import React from "react";
import SearchBox from "./searchbox/page";
import Userupdate from "./userupdate/page";

const Header = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-1/6 m-3">
        <Image
          src="/assets/images/logo.png"
          alt="Logo Image"
          width={500}
          height={500}
        />
      </div>
      <div className="w-2/6 m-3">
        <SearchBox />
      </div>
      <div className="w-1/6 my-auto">
        <Userupdate />
      </div>
    </div>
  );
};

export default Header;
