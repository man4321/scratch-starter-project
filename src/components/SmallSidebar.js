import React from "react";
import Icon from "./Icon";

export default function SmallSideBar() {
  return (
    <div className="w-20 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="divide-y divide-black-200">
      <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm cursor-pointer">
        <Icon name="circle" size={24} className="text-blue-500 mx-2" />
        {"Motion"}
      </div>

      <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm cursor-pointer">
        <Icon name="circle" size={24} className="text-pink-800 mx-2" />
        {"Looks"}
      </div>
      <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm cursor-pointer">
        <Icon name="circle" size={24} className="text-yellow-400 mx-2" />
        {"Events"}
      </div>
      <div className="flex flex-row flex-wrap text-black px-2 py-1 my-2 text-sm cursor-pointer">
        <Icon name="circle" size={24} className="text-yellow-700 mx-2" />
        {"Control"}
      </div>
      </div>
    </div>
  );
}
