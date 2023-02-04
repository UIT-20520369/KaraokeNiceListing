import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import BasicDateRangePicker from "../components/date-picker/range-date-picker";
import TextField from "@mui/material/TextField";
const BookingRoom = () => {
    const [booking,setBooking]= useState({userId:'63d03047171882f3441b82be',deposit:5,request:"CHo thêm rượu mỗi 30p",roomId:'',total:30,checkIn:Date.now(),checkOut:Date.now()})
    const [user,setUser] =useState({name:'',gender:'Nam',phone:'',address:''})
  return (
    <div className="flex justify-center items-center my-40">
      <div className="w-[20%] h-[800px  relative mr-14">
        <img
          src="http://avatarkaraoke.com/wp-content/uploads/2022/03/room-1-1024x664.jpeg"
          className="w-[100%] h-[180px]"
        ></img>
        <div className=" absolute top-2 left-3 bg-[#1C1C1C] text-white flex items-center justify-center">
          <p>Small Room</p>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <p>Check In</p>
          <BasicDateRangePicker className="text-white"></BasicDateRangePicker>
        </div>
        <div className=" flex flex-col justify-center items-center ">
          <p>Check Out</p>
          <BasicDateRangePicker className="text-white"></BasicDateRangePicker>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col justify-center items-center">
            <p>1</p>
            <p>GUEST</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>1</p>
            <p>NIGHT</p>
          </div>
        </div>
        <div className=" flex justify-center items-center">Total: 56$</div>
      </div>
      <div className="w-[40%]">
        <div>
          <p>Add Your Information:</p>
        </div>
        <div className="flex justify-around items-center mb-10">
          <TextField id="outlined-basic" label="Tên" variant="outlined" />
          <TextField id="outlined-basic" label="SĐT" variant="outlined" />
        </div>
        <div className="flex justify-around items-center mb-20">
          <TextField id="outlined-basic" label="Địa chỉ" variant="outlined" />
          <TextField id="outlined-basic" label="Ghi chú" variant="outlined" />
        </div>
        <div className="flex items-center justify-center bg-red-500 rounded-sm text-white">
            <p>Đặt</p>
        </div>
      </div>
    </div>
  );
};

export default BookingRoom;
