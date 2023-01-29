import React ,{useEffect, useState}from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import {MdOutlinePerson,MdOutlineRoundedCorner} from "react-icons/md";
import { useQuery, gql } from '@apollo/client';
// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GET_ROOMTYPE = gql`
    query getRoomType{
      roomTypes{
        id,
        name,
        guests,
        price,
        areas,
        thumnail
      }
    }
`;
const Home = () => {
  const { loading, error, data } = useQuery(GET_ROOMTYPE);
  const rooms =data?.roomTypes;
  console.log(rooms)
  return (
    <div className="relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-[100%] h-[600px]"
      >
        <SwiperSlide>
          <img
            className="w-[100%] h-[600px]"
            src="https://maico-hub-record.ss-hn-1.bizflycloud.vn/apartment-resource/4bf30163-7954-4620-b8e9-804e7ed30b40/24-02-2022_0658/image/z3208124728819_57fa52088b8869efccba79dc68284800.jpg"
          />
          {/* <div className="absolute flex justify-center items-center">
              <div className=" flex flex-col items-center justify-center">
                <p>HƠN 30 PHÒNG HÁT MỖI PHÒNG MỘT PHONG CÁCH</p>
                <p>TRẢI NGHIỆM PHÒNG HÁT KARAOKE</p>
                <p>HIỆN ĐẠI BẬC NHẤT SÀI GÒN</p>
                <div>Khám phá ngay</div>
              </div>
            </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-[100%] h-[600px]"
              src="https://maico-hub-record.ss-hn-1.bizflycloud.vn/apartment-resource/4bf30163-7954-4620-b8e9-804e7ed30b40/24-02-2022_0658/image/z3208124728819_57fa52088b8869efccba79dc68284800.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-center my-36">
        <img
          className="h-[444px] w-[30%]"
          src="http://avatarkaraoke.com/wp-content/uploads/2022/11/phonto-1536x1019.jpg"
        ></img>
        <div className="w-[38%] h-[420px] ml-24">
          <div className="flex flex-col justify-evenly top-0">
            <p className=" text-[#5C5C5C] text-[12px] ">
              Phòng hát với sức chứa 50 người
            </p>
            <p className="text-[#2E2E2E] text-[80px] font-normal mb-10">
              TƯNG BỪNG TỔ CHỨC TIỆC
            </p>
            <div className=" flex h-[150px]">
              <div className="h-[100%] flex flex-col justify-start text-[#5C5C5C] text-[14px] font-light">
                <p className="mb-5">
                  Hệ thống âm thanh ánh sáng đỉnh cao, hiện đại bậc nhất
                </p>
                <p>
                  Thay đổi khái niệm về phòng hát karaoke với không gian 3D
                  chuyển động không ngừng
                </p>
              </div>
              <div className="h-[100%] flex flex-col justify-start items-center text-[#5C5C5C] text-[14px] font-light">
                <p className="mb-5">
                  Màn hình 3D chuyển động phủ kín toàn phòng với những hình ảnh
                  đẹp chất ngất
                </p>
                <p>
                  Tôn vinh chủ tiệc với chương trình hoạt náo độc đáo có 1-0-2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] max-h-[600px] flex items-center justify-center">
        <div className="grid grid-cols-3 w-[90%] h-[80%] gap-5">
          {
            rooms && rooms.map(room =>(<div className="w-[100%]">
            <div className="relative w-[100%]">
              <div className="w-[100%] relative">
                <img
                  className="w-[100%]"
                  src={room?.thumnail ? room.thumnail :"http://avatarkaraoke.com/wp-content/uploads/2022/03/room-1-1024x664.jpeg"}
                />
                <div className="absolute top-7 right-0 w-[90%] h-[80%]">
                    <div className="absolute w-[140px] h-[32px] text-center bg-[#c19b76] text-white text-xs top-0 right-0 flex items-center justify-center">
                        <p>F R O M {room.price}</p>
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <div className="">
                            <div className=" text-[#fff] text-[20px]">
                                <p>{room.name}</p>
                            </div>
                            <div className="flex items-center text-[#fff] text-[14px] font-normal">
                                <div className="flex items-center"><MdOutlinePerson className="h-[30px] w-[30px]" /><p>{room.guests} Guest</p></div>
                                <div className="mx-5"></div>
                                <div className="flex items-center"><MdOutlineRoundedCorner className="h-[30px] w-[30px]"/><p>{room.areas}FT</p></div>
                            </div>
                        </div>

                    </div>
                </div>
              </div>
            </div>
          </div>))
          }
        </div>
      </div>
      <div className="w-[100%] max-h-[400px] flex items-center justify-center mt-36">
        <div className="flex flex-col items-start justify-start w-1/4 h-[250px]">
          <div className="text-[#5C5C5C] text-[13px]"><p>HÁT ĐI NGẠI CHI</p></div>
          <div className="text-[#1C1C1C] text-[55px]"><p>ƯU ĐÃI SINH NHẬT</p></div>
          <div className="text-[#5C5C5C] text-[14px] font-bold"><p>SINH NHẬT BAO NHIÊU TUỔI GIẢM BẤY NHIÊU % GIỜ HÁT</p></div>
        </div>
        <div className="flex items-center justify-center">
          <img className="h-[245px]" src="http://avatarkaraoke.com/wp-content/uploads/2022/11/phonto-1536x1019.jpg"></img>
        </div>
        <div className="w-1/3 h-[400px] flex flex-col justify-between">
          <div className="flex items-center justify-around">
            <div>
              <img className="h-[85px] aspect-square]" src="http://avatarkaraoke.com/wp-content/uploads/2022/11/sn-1-150x150.jpg"></img>
            </div>
            <div className=" flex flex-col items-start justify-between">
              <p className="text-[#5C5C5C] text-[14px] font-light">Bánh kem sinh nhật</p>
              <p className="text-[#1C1C1C] text-[22px]">nêu bật cá tính</p>
            </div>
            <div className=" flex items-center justify-center bg-[#1C1C1C] text-white h-[24px] py-2 px-3">
              <p>Miễn phí</p>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div>
              <img className="h-[85px] aspect-square]" src="http://avatarkaraoke.com/wp-content/uploads/2022/11/phonto-1-150x150.jpg"></img>
            </div>
            <div className=" flex flex-col items-start justify-center">
              <p className="text-[#5C5C5C] text-[14px] font-light">Trang trí tiệc</p>
              <p className="text-[#1C1C1C] text-[22px]">theo màu tự chọn</p>
            </div>
            <div className=" flex items-center justify-center bg-[#1C1C1C] text-white h-[24px] py-2 px-3">
              <p>Miễn phí</p>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div>
              <img className="h-[85px] aspect-square]" src="http://avatarkaraoke.com/wp-content/uploads/2022/11/image-150x150.jpg"></img>
            </div>
            <div className=" flex flex-col items-start justify-center">
              <p className="text-[#5C5C5C] text-[14px] font-light">Hoạt náo đặc biệt</p>
              <p className="text-[#1C1C1C] text-[22px]">cùng dàn dancer</p>
            </div>
            <div className=" flex items-center justify-center bg-[#1C1C1C] text-white h-[24px] py-2 px-3">
              <p>Miễn phí</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] max-h-[400px] flex items-center justify-evenly mt-36">
        <div className="flex items-center justify-center w-[35%] h-[180px] border-2">
          <div className="flex items-center justify-start ml-[-20%] w-[100%] h-[45%] ">
          <div className="flex items-center justify-start h-[100%] w-[100%]">
            <div className="flex items-center justify-start h-[120%] w-[100%]">
              <img className="rounded-full h-[104px] w-[104px] mr-5" src="http://avatarkaraoke.com/wp-content/uploads/2022/11/3e21278d99e1e0b67772400b983471d4-150x150.jpg"></img>
              <div className="flex flex-col items-start justify-start h-[100%]">
                <p className="text-[#1C1C1C] text-[25px] font-bold mb-4">Hoạt động từ T2 đến Chủ Nhật</p>
                <p className="text-[#5C5C5C] text-[14px] font-light">Không bỏ lỡ bất cứ dịp đặc biệt nào</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[35%] h-[180px] border-2">
          <div className="flex items-center justify-start ml-[-20%] w-[100%] h-[45%] ">
          <div className="flex items-center justify-start h-[100%] w-[100%]">
            <div className="flex items-center justify-start h-[120%] w-[100%]">
              <img className="rounded-full h-[104px] w-[104px] mr-5" src="http://avatarkaraoke.com/wp-content/uploads/2022/11/IMG_4399-150x150.jpg"></img>
              <div className="flex flex-col items-start justify-start h-[100%]">
                <p className="text-[#1C1C1C] text-[25px] font-bold mb-4">Đặt phòng online</p>
                <p className="text-[#5C5C5C] text-[14px] font-light">Đặt phòng dễ dàng chỉ với 1 cú chạm</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
