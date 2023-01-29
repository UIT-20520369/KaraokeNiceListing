import React, { useState, useEffect } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import CheckListDropDownItem from "./checklist-dropdown-item";
const CheckListDropDown = (props) => {
    const [show, setShow] = useState(false);
    const [listChecked,setChecked] = useState(props.items);
    setTimeout(() => {
      if(listChecked.length==0) setChecked(props.items)
    },1000);
    const UpdateCheckList= (index,value)=>{
    const temCheckList= listChecked.map((item,subindex)=>{
        if(subindex==index) return value;
        else return item;
      })
      setChecked(temCheckList);
      const filter={...props.filter}
      filter.services =temCheckList
      console.log(filter)
      props.setFilter(filter)
    }
    const styles = {
    width: props?.width ? props.width :'100%',
     height: props?.height ? props.height :'100%',
  };
  
  return (
    <div
      className=" w-[100%] h-[100%]"
      style={styles}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="h-[100%] w-[100%] flex justify-between items-center">
        <p className="text-[20px]">{props.label}</p>
        {show ? <MdExpandLess className="font-light text-[#5C5C5C] w-[24px] h-[24px]" /> :<MdExpandMore className="font-light text-[#5C5C5C] w-[24px] h-[24px]" />}
      </div>
      {show && (
        <div className="grid grid-cols-2 h-[100%] border-b-[1px]">
          { listChecked.map((item,index) => (
            <CheckListDropDownItem key={item.value} update={UpdateCheckList} element={item} index={index} ></CheckListDropDownItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckListDropDown;
