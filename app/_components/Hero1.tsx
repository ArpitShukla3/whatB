import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider } from "@mui/material";
import React from "react";
import BasicModal from "./BasicModal";

const Hero1: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-6 items-center px-4 border-slate-200 border-2 rounded-md">
      <FontAwesomeIcon
        icon={faHtml5}
        style={{ color: "#ff9500" }}
        className="h-16"
      />
      <div className="flex flex-col gap-2 text-black flex-1">
        <h1 className="font-semibold text-lg md:text-xl">Hyper Text Markup Language</h1>
        <div className="flex flex-col md:flex-row text-[#9198a0] gap-2 md:gap-4">
          <p>Questions: 10</p>
          <Divider orientation="vertical" flexItem />
          <p>Duration: 15 mins</p> 
          <Divider orientation="vertical" flexItem />
          <p>Submitted on 21 June 2023</p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-auto">
       <BasicModal/>
      </div>
    </div>
  );
};

export default Hero1;
