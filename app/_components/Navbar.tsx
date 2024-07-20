import { Avatar, Button } from "@mui/material";
import React from "react";
import logo from "../../public/image.png"
import Image from "next/image";
import BasicModal from "./BasicModal";
const Navbar: React.FC = () => {
return (
    <nav className="flex justify-between w-full px-2 py-4">
        <Image width={250}  src={logo} alt="Logo" className="object-scale-down"/>
        <Button
        variant="outlined"
        sx={{ fontWeight: "bold", color: "black", borderColor: "black" }}
        disableRipple
      >
        <Avatar alt="Arpit Shukla" src="/static/images/avatar/1.jpg" /> Arpit Shukla
      </Button>
    </nav>
);
};

export default Navbar;
