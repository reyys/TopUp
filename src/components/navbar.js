import React from "react";
import { HomeIcon, IdentificationIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { BsFacebook, BsTwitter, BsYoutube, BsTwitch } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import "../index.css";

function Nav() {
  const [state, setState] = React.useState(false);

  const changeValue = () => {
    setState(!state);
  };
  return (
    <nav className="w-full h-[10vh] flex items-center justify-between px-3">
      <div className="font-bold md:text-2xl">
        <span className="text-yellow-500">Top</span>
        <span className="text-white">Up</span>
      </div>

      <ul className="hidden md:flex md:text-sm items-center">
        <li>
          <HomeIcon className="max-w-[30px]" />
          <a href="/">Beranda</a>
        </li>
        {/* <li>
          <SearchIcon className="max-w-[30px]" />
          <a href="/">Cek Pesanan</a>
        </li>
        <li>
          <TagIcon className="max-w-[30px]" />
          <a href="/">Daftar Harga</a>
        </li> */}
        <li>
          <IdentificationIcon className="max-w-[30px]" />
          <a href="#game">Tentang Kami</a>
        </li>
      </ul>

      <MenuAlt1Icon onClick={changeValue} className="md:hidden max-w-[30px]" />

      <div className={`menu-left ${state ? "to-right" : ""}`}>
        <div className="cancel absolute right-2 text-3xl top-2">
          <ImCancelCircle onClick={changeValue} />
        </div>
        <ul className="p-5 flex flex-col items-center justify-center">
          <li className="mt-12">
            <HomeIcon className="max-w-[30px]" />
            <a href="/">Beranda</a>
          </li>
          <li className="mt-12">
            <IdentificationIcon className="max-w-[30px]" />
            <a href="/">Tentang Kami</a>
          </li>
        </ul>

        <div className="social p-4 text-2xl font-bold">
          <h1>Social Media</h1>
          <div className="flex mt-5 gap-[20px]">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <BsFacebook className="text-2xl"></BsFacebook>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <BsTwitter className="text-2xl"></BsTwitter>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <BsYoutube className="text-2xl"></BsYoutube>
            </a>
            <a href="https://twitch.com/" target="_blank" rel="noreferrer">
              <BsTwitch className="text-2xl"></BsTwitch>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
