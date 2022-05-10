import React from "react";
import Data from "../../data.js";
import "../../index.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { FaMobileAlt, FaGamepad } from "react-icons/fa";
import fireGif from "../../assets/fire.gif";
import hotGif from "../../assets/hot-icon-1.gif";

function RenderGame() {
  const [state, setState] = React.useState(Data);
  const renderList = () => {
    return state.map((each, index) => {
      return (
        <div key={index} className="card flex flex-col w-[200px] h-[300px]">
          <img src={require(`../../assets/gameIcons/${each.img}.png`)} className="max-w-[200px]" alt={each.title} />
          <div className="flex justify-center font-bold title">{each.title}</div>
          <div className="flex mt-2 justify-center items-center">
            <div className="outer-shape relative">
              {each.randomNumber > 85 ? <img src={hotGif} alt="" className="absolute hot-gif" /> : ""}
              {/* {each.randomNumber > 85 ? <img className="fire-gif absolute top-0" src={fireGif} alt="loading.." /> : ""} */}
              <div className={`shape ${each.randomNumber <= 40 ? "red-progress" : each.randomNumber <= 70 ? "yellow-progress" : each.randomNumber <= 85 ? "blue-progress" : "green-progress"}`}>
                <div className="inner">
                  <div className={"number"}>{each.randomNumber}%</div>
                </div>
              </div>
            </div>
            <button className="flex items-center main p-2 hover:scale-110 transition-all">
              <AiFillPlayCircle className="text-white" />
              <h4 className="ml-2">Main</h4>
            </button>
          </div>
        </div>
      );
    });
  };

  const valueCheck = (e) => {
    setState(Data.filter((each) => each.version === e.target.name));
  };

  return (
    <>
      <div className="flex mt-32 justify-center items-center h-auto text-l font-bold">
        <div name="ALL" className="  flex flex-col px-3 justify-center items-center">
          <FaGamepad name="All" className="text-6xl h-[50px] mb-3" />
          <button onClick={() => setState(Data.filter((each) => each))}>All Games</button>
        </div>
        <div name="pc" className="flex flex-col ml-5 px-3 justify-center items-center">
          <RiComputerLine className="text-6xl h-[50px] mb-3" />
          <button name="pc" onClick={valueCheck}>
            PC
          </button>
        </div>
        <div name="mobile" className="flex flex-col ml-5 px-3 justify-center items-center">
          <FaMobileAlt className="text-2xl h-[50px]  mb-3" />
          <button name="mobile" onClick={valueCheck}>
            Mobile
          </button>
        </div>
      </div>
      <div className="mt-16 gameList">
        <>{renderList()}</>
      </div>
    </>
  );
}

export default RenderGame;
