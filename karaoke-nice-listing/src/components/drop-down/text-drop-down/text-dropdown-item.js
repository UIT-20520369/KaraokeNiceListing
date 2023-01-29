import React,{useState,useEffect} from "react";

const TextDropDownItem = (props) =>{
    return(
        <div onClick={()=>props.onClick()} className="bg-[#1C1C1C] w-[100%] h-[53px] flex justify-center items-center cursor-pointer">
            <p>{props.content}</p>
        </div>
    )
}

export default TextDropDownItem;