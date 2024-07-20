"use client";
import LinearProgress from "@mui/material/LinearProgress";
import ProgBar from "./ProgBar";
function Hero3() {
    const list = [
        {
            heading: "HTML Tools, Forms and History",
            value: 80,
            color: "bg-blue-500",
            bgColor: "bg-blue-100",
        },
        {
            heading: "Tags & References in HTML",
            value: 60,
            color: "bg-orange-500",
            bgColor: "bg-orange-100",
        },
        {
            heading: "Tables & CSS Bascis",
            value: 96,
            color: "bg-green-500",
            bgColor: "bg-green-100",
        },
        {
            heading: "Tables & References in HTML",
            value: 24,
            color: "bg-red-500",
            bgColor: "bg-red-100",
        },
    ];
    return (
        <div className="w-[100%] mt-20  border-slate-200 border-2 rounded-md">
            {list.map((item, idx) => {
                return (
                    <ProgBar
                        key={idx}
                        heading={item.heading}
                        color={item.color}
                        value={item.value}
                        bgColor={item.bgColor}
                    />
                );
            })}
        </div>
    );
}

export default Hero3;
