import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import SmallSideBar from "./components/SmallSidebar";
import { DragDropContext } from "react-beautiful-dnd";
import { demoData } from "./demo";
import Icon from "./components/Icon";

export default function App() {
  const [areaActions, setAreaActions] = useState([]);
  const [sideBarItems, setsideBarItems] = useState(demoData);
  const [RBD, setRBD] = useState(false);
  const [mouse, setMouse] = useState({ mx: 0, my: 0 });
  const [value,setValue] = useState({});
  const [imageProp,setImageProp] = useState({xPos:0,yPos:0,rotation:0})


  const clickHandler = () => {
     setImageProp({...imageProp,xPos:imageProp.xPos+10})
}

  const mouseOverHandler = (event) => {
    const x = event.screenX - event.target.offsetLeft;
    const y = event.screenY - event.target.offsetTop;
    if (x < 300 || x > 1000) {
      setRBD(true);
    }
    else {
      setRBD(false);
    }
    setMouse({ mx: x, my: y });
  }

  const onDragEndHandler = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    let add, areaAction = areaActions;
    if (source.droppableId === 'midArea') {
      add = areaAction[source.index];
      areaAction.splice(source.index, 1);
    }
    if (destination.droppableId === 'midArea') {
      add = sideBarItems[source.index];
      add.defaultValue = value[add.id];
      add.id = `${add.id}-${destination.index + 1}`;
      add.value = value;
      add.pos = { x: mouse.mx, y: mouse.my }
      add.isRBD = RBD;
      add.setValue = setValue;
      add.setImageProp = setImageProp;
      add.imageProp = imageProp;
      add.className = `flex bg-${add.color} text-white text-center items-center px-2 w-50 py-1 my-2 text-sm cursor-pointer`;
      areaAction.splice(destination.index, 0, add);
    }
    setAreaActions(areaAction);
  }
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">  
        <DragDropContext onDragEnd={onDragEndHandler}>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <SmallSideBar />
            <Sidebar setValue={setValue} value={value} imageProp={imageProp} setImageProp={setImageProp} sideBarItems={sideBarItems} />
             <MidArea areaActions={areaActions} imageProp={imageProp} setImageProp={setImageProp} value={value} onMouseOver={mouseOverHandler} />
          </div>
        </DragDropContext>
        <div onClick={clickHandler} className="cursor-pointer">
        <Icon name='flag' size={15} className="text-green-600 mx-2" />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea  xPos={imageProp.xPos} yPos={imageProp.yPos} rotation={imageProp.rotation}/>
        </div>
      </div>
    </div>
  );
}
