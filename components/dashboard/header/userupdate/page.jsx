import React from "react";
import { FaRegUser, FaRegBell } from "react-icons/fa";

const NotificationBell = ({ notificationCount }) => {
  return (
    <div className="relative">
      {/* Bell Icon */}
      <FaRegBell className="text-2xl cursor-pointer" />

      {/* Notification Count */}
      {notificationCount > 0 && (
        <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full px-2 py-1 text-[10px]">
          {notificationCount}
        </span>
      )}
    </div>
  );
};

const Userupdate = () => {
  return (
    <div className="flex justify-around">
      <div>
        <NotificationBell notificationCount={2} />
      </div>

      <div className="flex flex-row">
        <FaRegUser className="text-2xl mr-3 ml-6 cursor-pointer" />

        <p className="mr-4 break-words">asasdasdasdasdas</p>
      </div>
    </div>
  );
};

export default Userupdate;
