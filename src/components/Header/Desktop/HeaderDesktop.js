import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiHeart } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./HeaderDesktop.css";

function HeaderDesktop() {
  return (
    <div className="header-desktop">
      {/* Header top start */}
      <div className="header-top-container">
        <div className="header-desktop-top">
          <div className="header-top-left">
            <ul>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  marginLeft: 0,
                }}
                className="header-hover-regions"
              >
                <MdOutlineLocationOn color="#fff" fontSize={"18px"} /> Toshkent
                <ul className="header-region">
                  <li>Toshkent</li>
                  <li>Samarqand</li>
                  <li>Buxara</li>
                  <li>Jizzax</li>
                  <li>Sirdaryo</li>
                  <li>Qashqadaryo</li>
                  <li>Jizzax</li>
                  <li>Sirdaryo</li>
                  <li>Qashqadaryo</li>
                </ul>
              </li>
              <li>Bizning dukonlarimiz</li>
              <li
                style={{
                  backgroundColor: "gray",
                  borderRadius: 5,
                  padding: "0px 5px",
                }}
              >
                Yuridik shaxslar uxhun
              </li>
              <li>Mudatli to'lovga sotib olish</li>
              <li>To'lov usullari</li>
            </ul>
          </div>
          <div className="header-top-right">
            <span>Aloqa markazi: +998994483690</span>
            <select name="" id="">
              <option value="">Uz</option>
              <option value="">Ru</option>
            </select>
          </div>
        </div>
      </div>
      {/* Header top end */}
      {/* Header middle start */}
      <div className="header-middle-container">
        <div className="header-desktop-middle">
          <div className="header-middle-left">
            <img
              src="https://texnomart.uz/_nuxt/img/texnomart-logo.fcda25c.svg"
              alt=""
            />
            <button>
              <HiOutlineMenu fontSize={20} style={{ marginRight: 10 }} />{" "}
              Katalog
            </button>
            <div className="search-input">
              <LuSearch />
              <input type="text" placeholder="Qidirish" />
            </div>
          </div>
          <div className="header-middle-right">
            <div className="header-right-box">
              <FiUser />
              <span>Kirish</span>
            </div>
            <div className="header-right-box">
              <BiHeart />
              <span>Sevimlilar</span>
            </div>
            <div className="header-right-box">
              <MdOutlineShoppingCart />
              <span>Savatcha</span>
            </div>
          </div>
        </div>
      </div>
      {/* Header middle end */}
      {/* Heaser-bottom */}
      <div className="header-bottom-container">
        <div className="header-desktop-bottom">
          <ul>
            <li>AKSIYALAR</li>
            <li>
              <span></span>
            </li>
            <li className="header-bottom-tag">⚡Mazzali narxlar</li>
            <li>XAVO SOVUTGICHLARI</li>
            <li>SMARTFONLAR</li>
            <li>MUZLATGICHLAR</li>
            <li>CHANGYUTGICHLAR</li>
            <li>NOUTBUKLAR</li>
            <li>TELEVEZORLAR</li>
            <li>BARCHA KATEGORIYALAR</li>
          </ul>
        </div>
      </div>

      {/* Header-bottom end */}
    </div>
  );
}

export default HeaderDesktop;
