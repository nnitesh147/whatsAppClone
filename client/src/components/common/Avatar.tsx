import Image from "next/image";
import React, { useState } from "react";

import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu";

function Avatar({
  type,
  image,
  setimage,
}: {
  type: string;
  image: string;
  setimage: any;
}) {
  const [hover, sethover] = useState(false);
  const [isContextMenuVisible, setisContextMenuVisible] = useState(false);

  const [contextMenuCordinate, setcontextMenuCordinate] = useState({
    x: 0,
    y: 0,
  });

  const showContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setisContextMenuVisible(true);
    setcontextMenuCordinate({ x: e.pageX, y: e.pageY });
  };

  const contextMenuOption = [
    { name: "Take Photo", callback: () => {} },
    { name: "Choose From Library", callback: () => {} },
    { name: "Upload Photo", callback: () => {} },
    { name: "Remove Photo", callback: () => {} },
  ];

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
            onClick={(e) => showContextMenu(e)}
          >
            <div
              className={`bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 
            ${hover ? "visible" : "hidden"}
             z-10
            `}
              onClick={(e) => showContextMenu(e)}
            >
              <FaCamera className="text-2xl" id="context-opener" />
              <span>Change Photo</span>
            </div>
            <div
              className="flex items-center justify-center h-60 w-60"
              onClick={(e) => showContextMenu(e)}
            >
              <Image src={image} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )}
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          option={contextMenuOption}
          coordinate={contextMenuCordinate}
          contextmenu={isContextMenuVisible}
          setcontextmenu={setisContextMenuVisible}
        />
      )}
    </>
  );
}

export default Avatar;
