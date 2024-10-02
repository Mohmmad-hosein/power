import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeroSectionBack from "../../../assets/landing/HeroSection/herosectionBack.png";
import YadgiriPic from "../../../assets/landing/HeroSection/Group 8.png";
import ArowPic from "../../../assets/landing/HeroSection/arow.png";
import HeroSectionPic from "../../../assets/landing/HeroSection/Untitled-1.png";
import AboutUsPic from "../../../assets/landing/AboutUs/image.png";
import HezaranContainerPic from "../../../assets/landing/AboutUs/AboutUsMiniPic.png";
import BackPic from "../../../assets/landing/713742647f10dcb14454ca157e835864.png";
import { GetLandingApi } from "@/core/services/api/landing";

export const Body = () => {
  const [LandingApi, setLandingApi] = useState([]);

  // GetLandingReportApi
  const fetchData = async () => {
    const result = await GetLandingApi();
    setLandingApi(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="h-auto lg:h-[520px] w-full flex-wrap lg:flex-nowrap bg-cover bg-center flex justify-center"
        style={{ backgroundImage: `url(${HeroSectionBack.src})` }}
      >
        <div className="h-[433.5px] w-[600px] flex justify-right flex-wrap items-center">
          <div className="text-[40px] w-[490px] justify-center leading-[60px] font-semibold text-center flex flex-wrap ">
            هرگز از <Image src={YadgiriPic} alt="یادگیری" /> دست نکشید زندگی
            هرگز از آموزش دست نمی کشد
          </div>
          <div className=" text-[#6D6C80] font-normal leading-7 w-[490px]">
            هر سفر آموزشی و یادگیری دنبال کردن منحصر به فرد است ما به شما کمک
            خواهیم کرد
          </div>
          <button className=" w-[215px] h-12 bg-[#5751E1] text-white rounded-[50px] shadow-[4px_6px_0px] shadow-[#050071] flex justify-around items-center ">
            {" "}
            رایگان ازمایش کنید <Image src={ArowPic} alt="" />
          </button>
        </div>
        <div
          className="h-[450px] lg:h-full w-[720px]"
          style={{
            backgroundImage: `url(${HeroSectionPic.src})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="w-full mt-32 h-auto flex flex-wrap justify-center">
        <div className=" w-[80%] flex flex-wrap justify-center lg:w-[1440px] h-[485.58px]">
          <div className="w-[187.5px] h-[30px] bg-[#EFEEFE] rounded-[30px] text-center text-[#5751E1] font-medium">
            دسته یندی های پر طرف دار
          </div>
          <h1 className=" w-full text-center h-[45px] font-semibold text-[36px] text-[#161439]">
            دسته بندی های پر طرف دار
          </h1>
          <p className="w-[437px] text-[#6D6C80] h-[55px]">
            امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است
          </p>
          <div className=" w-[1410px] h-[315px] rounded-[500px]  bg-[#F7F7F9] "></div>
        </div>
        <div className="mt-32 w-full h-auto flex justify-center items-center gap-16">
          <div
            className=" w-[520px] h-[470px]"
            style={{
              backgroundImage: `url(${AboutUsPic.src})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className=" h-auto flex flex-wrap items-center w-[515px]">
            <div className="h-8 w-44 bg-[#EFEEFE] rounded-[30px] text-[#5751E1] text-center font-medium content-center">
              {" "}
              درباره ما بیشتر بدانید{" "}
            </div>
            <div className="h-[100px] font-semibold text-[#161439] leading-[48px] text-4xl w-[350px] flex flex-wrap gap-5 mt-4">
              هزاران{" "}
              <div
                className=" font-bold w-[180px] text-center content-center text-[#FFFFFF] h-[60px]"
                style={{
                  backgroundImage: `url(${HezaranContainerPic.src})`,
                  backgroundSize: "cover",
                }}
              >
                {" "}
                دوره های{" "}
              </div>{" "}
              برتر اکنون در این مکان
            </div>
            <div className=" w-[515px] h-[85px] mt-8 leading-7 text-[#6D6C80] ">
              صندوق ورودی مشترک بصری Groove این کار را برای اعضای تیم آسان می
              کند سازماندهی، اولویت بندی و. در این قسمت از Smashing Pod ما هستیم
              صحبت در مورد پایه پلتفرم وب.
            </div>
            <div className="mt-6 w-full h-auto">
              <div className="w-full flex gap-3">
                <div
                  dir="ltr"
                  className="w-8 h-8 rounded-full text-center content-center bg-[#FFC224] border text-[#161439] border-[#282568] shadow-[4px_3px_0_0] shadow-[#00000040]"
                >
                  {" "}
                  &lt;{" "}
                </div>
                <p className=" font-semibold text-[#161439] text-[18px]">
                  {" "}
                  بهترین مربیان{" "}
                </p>
              </div>
              <div className="w-full mt-4 flex gap-3">
                <div
                  dir="ltr"
                  className="w-8 h-8 rounded-full text-center content-center bg-[#FFC224] border text-[#161439] border-[#282568] shadow-[4px_3px_0_0] shadow-[#00000040]"
                >
                  {" "}
                  &lt;{" "}
                </div>
                <p className=" font-semibold text-[#161439] text-[18px]">
                  {" "}
                  از هر کجا به کلاس خود دسترسی داشته باشید
                </p>
              </div>
              <div className="w-full mt-4 flex gap-3">
                <div
                  dir="ltr"
                  className="w-8 h-8 rounded-full text-center content-center bg-[#FFC224] border text-[#161439] border-[#282568] shadow-[4px_3px_0_0] shadow-[#00000040]"
                >
                  {" "}
                  &lt;{" "}
                </div>
                <p className=" font-semibold text-[#161439] text-[18px]">
                  {" "}
                  برنامه دوره ای انعطاف پذیر
                </p>
              </div>
            </div>
            <button className=" mt-5 bg-[#5751E1] rounded-[50px] w-56 h-11 shadow-[4px_6px_0_0] shadow-[#050071] text-[#FFFFFF] flex items-center justify-around">
              {" "}
              رایگان آزمایش کنید <Image src={ArowPic} alt="" />{" "}
            </button>
          </div>
        </div>
        <div
          className="mt-32 w-full h-[1024px]"
          style={{ backgroundImage: `url(${HeroSectionBack.src})` }}
        ></div>
      </div>
      <div className="h-[321px] relative overflow-hidden w-full bg-[#5751E1] flex items-center gap-8">
        <Image
          dir="ltr"
          className=" absolute top-0 left-[15%] z-0"
          src={BackPic}
          alt=""
        />
        <div className="w-[430px] h-full"></div>
        <div className="w-[765px]  flex flex-wrap h-[146.5px]">
          <h1 className=" relative z-10 w-[540px] h-[85px]  text-[#FFFFFF] text-4xl leading-[43.2px]">
            {" "}
            می خواهید از دوره های جدید در جریان باشید؟{" "}
          </h1>
          <div className=" relative z-10 w-full h-auto flex items-center gap-2">
            <input
              type="text"
              className=" mt-6 w-[535px] h-16 border border-[#433EC2] outline-none p-5 bg-[#4A44D1] rounded-[50px] text-[#9E9BF1] leading-5"
              placeholder="ایمیل خود را تایپ کنید"
            />
            <button className=" font-semibold w-[220px] h-[60px] rounded-[50px] border bg-[#FFC224] border-[#141109] text-center content-center shadow-[4px_6px_0_0] shadow-[#3D3D3D]">
              {" "}
              اکنون مشترک شوید{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="h-[1105px] w-full flex justify-center items-center">
        <div className="w-[1410px] text-[#FFFFFF] flex items-center h-[270px] rounded-[40px] bg-[#282568] shadow-[0_25px_70px_0] shadow-[#28256866] ">
          <div className=" border-l-2 border-white/50 h-[90%] w-1/4 flex flex-col items-center justify-center">
          <div className="text-[56px] font-semibold">{LandingApi?.newsCount ?? 0}</div>
          <div>جایزه به دست آمده</div></div>
          <div className=" border-l-2 border-white/50 h-[90%] w-1/4 flex flex-col items-center justify-center">
          <div className="text-[56px] font-semibold">{LandingApi?.teacherCount ?? 0}</div>
          <div> بهترین اساتید</div>
          </div>
          <div className=" border-l-2 border-white/50 h-[90%] w-1/4 flex flex-col items-center justify-center">
          <div className="text-[56px] font-semibold">{LandingApi?.courseCount ?? 0}</div>
          <div> دروس دانشکده</div>
          </div>
          <div className="h-[90%] w-1/4 flex flex-col items-center justify-center">
            <div className="text-[56px] font-semibold">{LandingApi?.studentCount ?? 0}</div>
            <div> دانشجو های فعال </div>
          </div>
        </div>
      </div>
    </>
  );
};
