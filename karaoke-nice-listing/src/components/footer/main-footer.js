import React from "react";
import { MdOutlineForwardToInbox } from "react-icons/md";
const footer = () => {
  return (
    <div className=" grid grid-cols-3 mt-36 h-[400px]">
      <iframe
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?q=63-65%20Ph%E1%BA%A1m%20Vi%E1%BA%BFt%20Ch%C3%A1nh%2C%20ph%C6%B0%E1%BB%9Dng%20Nguy%E1%BB%85n%20C%C6%B0%20Trinh%2C%20Qu%E1%BA%ADn%201%2C%20HCM&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
        title="63-65 Phạm Viết Chánh, phường Nguyễn Cư Trinh, Quận 1, HCM"
        aria-label="63-65 Phạm Viết Chánh, phường Nguyễn Cư Trinh, Quận 1, HCM"
        className="w-[100%] h-[100%]"
      ></iframe>
      <div className="flex items-center justify-center bg-[#1C1C1C]">
        <div className="w-[80%] h-[100%] text-white flex flex-col items-start justify-evenly">
          <MdOutlineForwardToInbox className="w-[50px] h-[50px]"></MdOutlineForwardToInbox>
          <p className="text-[25px] font-bold">Liên hệ</p>
          <div className="text-[14px] font-light">
            <p className="mb-3">Đặt phòng</p>
            <p>+ 028 22112233</p>
          </div>
          <div className="text-[14px] font-light">
            <p className="mb-3">Hotline CSKH</p>
            <p>+ 0915031111</p>
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage:
            "url(http://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/03/parallax-7.jpeg)",
        }}
      >
        <div className="w-[80%] h-[100%] text-white flex flex-col items-start justify-evenly">
          <MdOutlineForwardToInbox className="w-[50px] h-[50px]"></MdOutlineForwardToInbox>
          <p className="text-[25px] font-bold">Email</p>
          <div className="text-[14px] font-light">
            <p className="mb-3">Tư vấn:</p>
            <p>admin@avatarkaraoke.com</p>
          </div>
          <div className="text-[14px] font-light">
            <p className="mb-3">Quảng cáo và tuyển dụng</p>
            <p>avatarkaraokesg@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
