"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import BasketPic from "../../../assets/header/basket.png";
import FavoritePic from "../../../assets/header/favorite.png";
import SearchPic from "../../../assets/header/search.png";
import Image from "next/image";
import { Link, NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const location = useLocation();

  const getLinkClassName = (path: string): string => {
    return location.pathname === path
      ? "p-2 md:p-3 lg:p-4 border-b-2 border-[#433FAE80] text-[#5751E1] cursor-pointer"
      : "p-2 md:p-3 lg:p-4";
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[100px] p-4 md:p-6">
      <div className="w-full md:w-[40%] flex flex-col md:flex-row justify-between">
        <div className="flex text-[85%] font-medium">
          <NavLink to="./" className={getLinkClassName("/")}>
            صفحه اصلی
          </NavLink>
          <NavLink to="/CourseList" className={getLinkClassName("/CourseList")}>
            دوره های اموزشی
          </NavLink>
          <NavLink to="" className={getLinkClassName("/Contact")}>
            درباره ما
          </NavLink>
          <NavLink to="" className={getLinkClassName("")}>
            فروشگاه
          </NavLink>
          <NavLink to="" className={getLinkClassName("")}>
            وبلاگ
          </NavLink>
          <NavLink to="" className={getLinkClassName("")}>
            مربیان
          </NavLink>
        </div>
      </div>
      <div className="w-full md:w-[65%] p-0 md:p-10 flex flex-col md:flex-row justify-between items-center h-auto md:h-full">
        <div className="flex overflow-hidden w-full md:w-[535px] rounded-[100px] h-[50px] border border-[#D3D2DF]">
          <select className="w-[150px] text-center outline-none h-full border-none appearance-none">
            <option>دسته بندی ها</option>
          </select>
          <div className="flex items-center justify-center h-full">
            <div className="h-3 border-l border-[#D3D2DF] mx-2"></div>
          </div>
          <div className="flex-grow h-full flex justify-center items-center">
            <input
              type="text"
              className="w-[85%] outline-none h-5"
              placeholder="جستجو برای دوره ..."
            />
            <button className="w-10 h-10 rounded-3xl flex justify-center items-center bg-[#5751E1]">
              <Image src={SearchPic} className="w-7 h-[26px]" alt="Search" />
            </button>
          </div>
        </div>
        <div className="w-10 h-10 rounded-[20px] flex justify-center items-center border border-[#7F7E97] relative">
          <Image src={BasketPic} alt="Basket" className="h-5 w-5" />
          <div className="absolute top-0 right-[-5px] w-[22px] h-[22px] rounded-[11px] bg-[#FFC224] text-center">
            0
          </div>
        </div>
        <div className="w-10 h-10 rounded-[20px] flex justify-center items-center border border-[#7F7E97] relative">
          <Image src={FavoritePic} alt="Favorite" className="h-5 w-5" />
          <div className="absolute top-0 right-[-5px] w-[22px] h-[22px] rounded-[11px] bg-[#FFC224] text-center">
            0
          </div>
        </div>
        <Link to="/Login" className="bg-[#FFC224] h-11 w-full md:w-36 border border-[#06235B30] rounded-[50px] text-center">
          حساب کاربری
        </Link>
      </div>
    </div>
  );
};
