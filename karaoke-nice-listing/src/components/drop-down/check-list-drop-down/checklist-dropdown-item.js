import React from "react";
import { MdCheckBox } from "react-icons/md";

const CheckListDropDownItem =(props)=>{
    return (
        <div className="flex justify-start items-center w-[100%] h-[12px]">
            <input checked={props.element.checked} onChange={(e)=>{props.update(props.index,{value:props.element.value,checked:e.target.checked,id:props.element.id})}} className="mr-2" type="checkbox"></input>
            <p className="font-light">{props.element.value}</p>
        </div>
    )
}

export default CheckListDropDownItem