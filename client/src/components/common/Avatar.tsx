import Image from "next/image";
import React, { useState } from "react";

import { FaCamera } from "react-icons/fa";

function Avatar({ type, image, setimage }) {
  const [hover, sethover] = useState(false);
  const [isContextMenuVisible, setisContextMenuVisible] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative h-10 w-10">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "lg" && (
          <div className="relative h-14 w-14">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "xl" && (
          <div
            className="relative cursor-pointer z-0"
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
          >
            <div
              className={`bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 
            ${hover ? "visible" : "hidden"}
             z-10
            `}
            >
              <FaCamera className="text-2xl" id="context-opener" />
              <span>Change Photo</span>
            </div>
            <div className="flex items-center justify-center h-60 w-60">
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Avatar;
