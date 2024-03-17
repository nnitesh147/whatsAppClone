import React, { useRef } from "react";

function ContextMenu({
  option,
  coordinate,
  contextmenu,
  setcontextmenu,
}: {
  option: any;
  coordinate: any;
  contextmenu: boolean;
  setcontextmenu: any;
}) {
  const contextMenuRef = useRef(null);

  console.log({ option });

  function handleClick(e: React.MouseEvent, callback: any) {
    e.stopPropagation();
    setcontextmenu(false);
    callback();
  }

  return (
    <div
      className={`bg-dropdown-background fixed py-2 z-50 shadow-xl`}
      style={{
        top: coordinate.y,
        left: coordinate.x,
      }}
      ref={contextMenuRef}
    >
      <ul>
        {option.map(({ name, callback }: { name: string; callback: any }) => (
          <li
            key={name}
            onClick={(e) => handleClick(e, callback)}
            className="px-5 py-2 cursor-pointer hover:bg-background-default-hover"
          >
            <span className="text-white">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
