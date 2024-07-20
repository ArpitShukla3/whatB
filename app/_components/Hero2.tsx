"use client"
import { faCircleCheck, faClipboard, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";

const Hero2: React.FC = () => {
  const rank = useSelector((state:RootState)=> state.ScoreReducer.rank)
  const percentile = useSelector((state:RootState)=> state.ScoreReducer.percentile)
  const correct = useSelector((state:RootState)=> state.ScoreReducer.score)
  const list = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faTrophy}
          style={{ color: "#ffd500" }}
          className="h-8"
        />
      ),
      heading: rank,
      text: "Your Rank",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faClipboard}
          style={{ color: "#808389" }}
          className="h-8"
        />
      ),
      heading: percentile,
      text: "Percentile",
    },
    {
        icon: (
            <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#13be8b" }}
            className="h-8"
            />
        ),
        heading: `${correct}/15`,
        text: "Correct Answers",
    }
  ];
return (
    <div className="my-6 py-4 px-2 border-2 border-gray-200 rounded-lg">
        <div className="font-bold text-black">Quick Statistics</div>
        <div className="flex gap-4 w-full justify-around">
            {list.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2  w-1/3 justify-around"
                >
                    {item.icon}
                    <div className="flex flex-col">
                        <p className="text-black font-bold">{item.heading}</p>
                        <p className="text-[#9198a0] text-sm">{item.text}</p>
                    </div>
                    <Divider orientation="vertical"/>
                </div>
            ))}
        </div>
    </div>
);
};

export default Hero2;
