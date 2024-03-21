import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-64 p-3">
        <Image
          src="/assets/images/logo.png"
          alt="Logo Image"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Header;
