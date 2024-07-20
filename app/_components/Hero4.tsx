"use client";

import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";

export default function Hero4() {
  const correct = useSelector((state:RootState)=>state.ScoreReducer.score);
  const deg = {
    background: `conic-gradient(#3b7df5 ${
      (correct / 15) * 360
    }deg,#eaf2fe 0deg`,
  };
  return (
    <div className="w-[100%] mt-20  border-slate-200 border-2 rounded-md flex justify-center items-center flex flex-col gap-6 p-6">
        <div className="flex justify-between w-full">
            <h1 className="text-black font-bold">Question Analysis</h1>
            <h1 className="text-blue-600 font-bold">{correct}/15</h1>
        </div>
        <div>
            <span className="text-gray-400">You scores {correct} correct out of 15. </span>
            However you can still improve
        </div>
      <div
        className="w-64 h-64 rounded-full flex justify-center items-center"
        style={deg}
      >
        <div className="w-48 h-48 rounded-full bg-white flex justify-center items-center">
          <FontAwesomeIcon
            icon={faBullseye}
            style={{ color: "#e70808" }}
            size="2xl"
          />
        </div>
      </div>
    </div>
  );
}
