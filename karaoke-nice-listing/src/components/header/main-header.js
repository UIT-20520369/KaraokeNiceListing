import React from "react";
import {MdCreditCard,MdOutlineCheckBox,MdFontDownload,MdFontDownloadOff,MdCreate} from 'react-icons/md'
const header = () =>{
    return (
        <div>
            <div className="flex justify-around w-[100%] items-center h-12 ">
                <div className="flex justify-evenly text-[14px] w-[40%] items-center text-gray-700">
                    <div className="flex justify-center items-center"> <MdCreditCard className="mr-1 w-4 h-4" /><p>Cách thức thanh toán</p></div>
                    <div className="flex justify-center items-center"><MdOutlineCheckBox className="mr-1 w-4 h-4" /><p>Quy định phòng karaoke</p></div>
                    <div className="flex justify-center items-center"><MdFontDownload className="mr-1 w-4 h-4" /><p>Tiếng Anh</p></div>
                    <div className="flex justify-center items-center"><MdFontDownloadOff className="mr-1 w-4 h-4" /><p>Tiếng Việt</p></div>
                </div>
                <div className="text-[15px] text-gray-700 flex justify-center items-center"><MdCreate className="mr-1 w-4 h-4" /><p>Phản hồi về dịch vụ</p></div>
            </div>
            <div className="flex items-center bg-[#1C1C1D] h-20 justify-around">
                <div className=" text-2xl text-white">Karaoke Nice</div>
                <div className="flex items-center justify-evenly font-normal text-[#A3A3A3] w-[50%] ml-[-180px]">
                    <div><a href="/">Home</a></div>
                    <div><a href="/listing">Listing Room </a></div>
                </div>
                <div className=" w-24 h-6 bg-white text-black text-center text-sm font-medium align-middle "><a href="/booking">Booking</a></div>
            </div>
        </div>
    )
}

export default header;  