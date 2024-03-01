"use client";
import Image from "next/image";

import { logo } from "../../context/constants";
import { useStateProvider } from "@/context/StateContext";
import Input from "@/components/common/Input";
import { useState } from "react";

const page = () => {
  const [{ userInfo }, dispatch] = useStateProvider();
  const [name, setname] = useState(userInfo?.name ?? "");
  const [about, setabout] = useState("");
  const [image, setimage] = useState("");

  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={logo}
          alt=""
          height={200}
          width={200}
          className="rounded-full"
        />
        <span className="text-7xl">ChatHub</span>
      </div>
      <h2 className="text-2xl">Create Your Profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          <Input
            name="Display Name"
            state={name}
            setState={setname}
            label
            type="text"
          />
          <Input
            name="About"
            state={about}
            setState={setabout}
            label
            type="text"
          />
          <Input
            name="Display Image"
            state={image}
            setState={setimage}
            label
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
