import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import TextDropDownItem from "./text-dropdown-item";
const TextDropDown = (props) => {
  const [show, setShow] = useState(false);
  const styles = {
    width: props?.width ? props.width:'100%',
    height: props?.height ? props.height :53,
  };
  return (
    <div
      className=" text-white h-auto"
      style={styles}
      onMouseEnter={()=> {setShow(true);}}
      onMouseLeave={()=> {setShow(false);}}
    >
      <div className="flex items-center justify-center w-[100%] h-[100%] bg-[#1C1C1C]">
        <p>{props.label}</p>
        {show ? <MdExpandLess /> : <MdExpandMore />}
      </div>
      {
        show && (<div className="w-[100%] flex items-center justify-center flex-col bg-[#1C1C1C]">{props?.items.map((element) => 
            (<TextDropDownItem key={element} onClick={()=>
              {
              if(props.label=="STAY PRICE") {const filter ={...props.filter}; filter.stayPrice =element; props.setFilter(filter);}
              else if(props.label=="ROOM SIZE"){const filter ={...props.filter}; filter.roomSize =element; props.setFilter(filter);}
             setShow(false)
            }} content={element} />)
          )}</div>)
      }
    </div>
  );
};

export default TextDropDown;
