import { useEffect } from "react";

export default function ProgBar({
  heading,
  value,
  color,
  bgColor
}: {
  heading: string;
  value: number;
  color: string;
  bgColor: string;
}) {
  const barStyle = {
    width: `${value}%`
  };
  const valueColorStyle = {
    color: `${color}`
  };
  return (
    <div className="flex flex-col gap-4 px-2 py-4 w-full">
      <h1 className="text-[#9198a0] text-sm">{heading}</h1>
      <div className="flex w-full justify-between items-center gap-2">
        <div className={`flex w-full h-2 ${bgColor} rounded-lg`}>
          <div style={barStyle} className={`h-2 ${color} rounded-lg`}></div>
        </div>
        <h1 style={valueColorStyle}>{value}%</h1>
      </div>
    </div>
  );
}
