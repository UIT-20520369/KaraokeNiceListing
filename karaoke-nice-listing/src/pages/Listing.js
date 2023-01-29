import React, { useState, useEffect } from "react";
import TextDropDown from "../components/drop-down/text-drop-down/text-dropdown";
import CheckListDropDown from "../components/drop-down/check-list-drop-down/checklist-dropdown";
import { Slide, Slider } from '@mui/material';
import { MdOutlinePerson, MdOutlineRoundedCorner } from "react-icons/md";
import { ROOM_TYPE_PAGINATION } from "../api/roomTypes/roomTypes";
import { useQuery, gql ,onCompleted} from "@apollo/client";
import { GetService } from "../api/Service/service";
const Listing = () => {
  const stayPriceItems = ["Lowest Price", "Highest Price"];
  const roomSizeItems = ["Smallest", "Largest"];
  let checklist=[];
  const services =GetService();
  if(services?.serviceData)
  {
    const list = services?.serviceData?.service.map((sv) => {
      return {value:sv.name,
        checked:false,
      id:sv.id}
    })
    checklist=list;
  }
  const input = { take: 6, skip: 0, condition: {} };
  const [condition, setCondition] = useState({});
  const [rooms, setRooms] = useState([]);
  const { loading, error, data ,refetch} = useQuery(ROOM_TYPE_PAGINATION, {
    variables: input,
    onCompleted:(data) =>{console.log("yêu bé iu lắm ớ");setRooms(data?.roomTypesWithPagination?.items)}
  });
  const [filter, setFilter] = useState({
    stayPrice: "",
    services: [],
    roomSize: "",
    nightPrice:25
  });
  const createInput =(filter) =>{
    const condition = {};
    if(filter?.services)
    {
      const chooseItem=filter.services.filter(service => service.checked);
      const temp = chooseItem.map(service =>{
          return {
            services:{
              some:{
                eq:service.id
              }
            }
          }
      })
      condition.or=temp;
    }
    if(filter?.nightPrice)
    {
      condition.or.push({
        price:{
          lte:filter.nightPrice
        }
      })
    }
    let order = [];
    if(filter?.stayPrice)
    {
      if(filter.stayPrice=="Lowest Price")
      {
        order.push({price:"ASC"})
      }
      else if(filter.stayPrice=="Highest Price")
      {
        order.push({price:"DESC"})
      }
    }
    if(filter?.roomSize)
    {
      if(filter.roomSize=="Smallest")
      {
      order.push({areas:"ASC"})
      }
      else if(filter.roomSize=="Largest")
      {
      order.push({areas:"DESC"})
      }
    }
    const tempinput ={ take: 6, skip: 0, condition: {} }
    if(order.length ==0 ) order =null;
    tempinput.order=order;
    tempinput.condition=condition;
    refetch(tempinput);
    if(data?.roomTypesWithPagination)
    {
      setRooms(data?.roomTypesWithPagination?.items)
    }
  }
  useEffect(()=>{
    createInput(filter);
  })
  return (
    <div>
      <div
        className="w-[100%] h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url(http://avatarkaraoke.com/wp-content/uploads/2022/03/room-1-1024x664.jpeg)",
        }}
      >
        <div className="flex justify-center items-center">
          <p className="text-[#FFFFFF] text-[60px]">Search</p>
        </div>
      </div>
      <div className="w-[100%] h-[95px] flex items-center justify-center bg-[#1C1C1C]">
        <TextDropDown
          label="STAY PRICE"
          width={143}
          height={53}
          items={stayPriceItems}
          filter={filter}
          setFilter={setFilter}
        ></TextDropDown>
        <TextDropDown
          label="ROOM SIZE"
          width={143}
          height={53}
          items={roomSizeItems}
          filter={filter}
          setFilter={setFilter}
        ></TextDropDown>
      </div>
      <div className=" flex justify-evenly items-start mt-36">
        <div className="w-[20%] h-[100%] flex flex-col justify-start items-start ">
          <p className="font-light text-[30px]">Night Price : {filter.nightPrice} $</p>
          <Slider
          step={10}
          min={25}
          max={200}
          valueLabelDisplay="auto"
          value={filter.nightPrice}
          onChange={(e,v)=>{let tempFilter={...filter}; tempFilter.nightPrice=v; setFilter(tempFilter)}}
          sx={{
            color: 'black',
            '& .MuiSlider-thumb': {
              borderRadius: '1px',
            },
          }}
          >
          </Slider>
          <CheckListDropDown
            label="Services"
            height={80}
            items={checklist}
            setFilter={setFilter}
            filter={filter}
          ></CheckListDropDown>
        </div>
        <div className="grid grid-cols-2 gap-y-6 w-[60%] h-[100%]">
          {rooms &&
            rooms.map((room) => (
              <div className="w-[80%] h-[580px] border-[1px] flex flex-col items-start justify-start">
                <img
                  className="w-[100%] h-[234px]"
                  src={room.thumnail}
                />
                <div className="flex flex-col justify-evenly items-start ml-3 h-[70%]">
                  <p className="text-[#1C1C1C] text-[30px]">{room.name}</p>
                  <div className="flex justify-center text-[#5C5C5C]">
                    <div className="flex justify-center items-center">
                      <MdOutlinePerson></MdOutlinePerson>
                      <p>{room.guests} GUEST</p>
                    </div>
                    <div className="flex justify-center items-center">
                      <MdOutlineRoundedCorner></MdOutlineRoundedCorner>
                      <p>{room.areas} Ft</p>
                    </div>
                  </div>
                  <p className="text-[#5C5C5C]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel molestie nisl. Duis ac mi leo.
                  </p>
                  <div className="flex justify-start items-center w-[100%]">
                    <div className="border-[#c19b76] border-2 flex items-center justify-center w-[50%]">
                      <p className="text-[#c19b76] text-[16px]">
                        {" "}
                        BOOK FOR NOW {room.price} $
                      </p>
                    </div>
                    <div className="bg-[#c19b76] w-[10%] flex justify-center items-center">
                      <p className="text-[19px] text-white">i</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
