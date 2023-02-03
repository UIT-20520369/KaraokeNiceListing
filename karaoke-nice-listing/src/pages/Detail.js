import React,{useState,useEffect} from "react";
import { useQuery } from "@apollo/client";
import BasicDateRangePicker from "../components/date-picker/range-date-picker";
const DetailRoom = ()=>{
    return(
       <div>
        <BasicDateRangePicker></BasicDateRangePicker>
       </div>
    )
}

export default DetailRoom;