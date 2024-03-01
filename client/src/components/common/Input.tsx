import React from "react";

function Input({
  name,
  state,
  setState,
  label = false,
  type,
}: {
  type: "text" | "image" | "file";
  name: string;
  state: any;
  setState: any;
  label: boolean;
}) {
  return (
    <div className="flex gap-1 flex-col">
      {label && (
        <label htmlFor={name} className="text-teal-light text-lg px-1">
          {name}
        </label>
      )}
      <div>
        <input
          className="bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
          type={type}
          name={name}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Input;
