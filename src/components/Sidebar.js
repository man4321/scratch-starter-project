import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Icon from "./Icon";
import ActionCard from "./ActionCards";

export default function Sidebar({ sideBarItems, value,setValue, imageProp, setImageProp }) {
  return (
    <Droppable droppableId="sideBar">
      {
        (provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
            <div className="font-bold"> {"Events"} </div>
            {sideBarItems.map((item, index) => {
              if(item.optionName==="Events")
              return (
                <ActionCard
                  key={index}
                  value={value}
                  setValue={setValue}
                  imageProp={imageProp}
                  setImageProp={setImageProp}
                  optionName={item.optionName}
                  style={`flex flex-row flex-wrap text-center items-center bg-${item.color} text-white px-2 py-1 my-2 text-sm cursor-pointer`}
                  id={item.id}
                  index={index}
                  icon={item.icon}
                  color={item.color}
                  condition={item.condition}
                  actionCall={item.actionCall}
                  action={item.action}
                />
              )
            })}
               <div className="font-bold"> {"Motion"} </div>
            {sideBarItems.map((item, index) => {
              if(item.optionName==="Motion")
              return (
                <ActionCard
                  key={index}
                  value={value}
                  setValue={setValue}
                  imageProp={imageProp}
                  setImageProp={setImageProp}
                  optionName={item.optionName}
                  style={`flex flex-row flex-wrap text-center items-center bg-${item.color} text-white px-2 py-1 my-2 text-sm cursor-pointer`}
                  id={item.id}
                  index={index}
                  icon={item.icon}
                  color={item.color}
                  condition={item.condition}
                  actionCall={item.actionCall}
                  action={item.action}
                />
              )
            })}


            {provided.placeholder}

          </div>
        )
      }
    </Droppable>

  );
}
