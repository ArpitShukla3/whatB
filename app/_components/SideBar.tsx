"use client"
import {
  Description,
  DescriptionOutlined,
  Equalizer,
  WorkspacePremium,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { useState } from "react";

const Sidebar: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState("");
    const SideList = [
        {
            icon: <Equalizer />,
            text: "Dashboard"
        },
        {
            icon: <WorkspacePremiumOutlined />,
            text: "Skill Test"
        },
        {
            icon: <DescriptionOutlined />,
            text: "Internship"
        }
    ];
return (
    <>
        <ul className="flex flex-col gap-4 py-10">
            {SideList.map((item) => (
                <li className={`flex gap-2 cursor-pointer font-bold px-2 py-4 rounded-r-3xl pr-8 ${selectedTab === item.text ? 'text-[#4658be] bg-[#f4f6f8]' : 'text-[#6c7585]'}`} key={item.text} onClick={()=>setSelectedTab(item.text)}>
                    {item.icon}
                    {item.text}
                </li>
            ))}
        </ul>
    </>
);
};

export default Sidebar;
