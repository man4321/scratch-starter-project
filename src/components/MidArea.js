import React, { useRef, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import ActionCard from "./ActionCards";
import Draggable from 'react-draggable'
export default function MidArea({ areaActions,value,setImageProp,imageProp, onMouseOver }) {
  const nodeRef = useRef();
  const [RBD,setRBD] = useState(false);
const [mouse,setMouse] = useState({mx:0,my:0})
  const mouseOverHandler = (event)=>{
    const x =event.screenX ;
    const y = event.screenY;
    if(x<320 || x>1000){
      setRBD(true);
    }
      else{
        setRBD(false);
      }
  }

  return <div className="flex-1 h-full overflow-auto">{"mid area"}
    <Droppable droppableId="midArea" direction="none">
      {
        (provided) => (
          <div ref={provided.innerRef}
            {...provided.droppableProps}
            onMouseMove={mouseOverHandler}
            style={{width:'100%',height:'500px'}}
          >
            {areaActions.map((item, index) => {
              return (
                <Draggable nodeRef={nodeRef}
                // handle=".handle"
                  onDrag={(e)=> {console.log(e)}}
                  onStop={(e)=> {console.log(e)}}
                  grid={[10,10]}
                  enableUserSelectHack={true}
                  // position={{x:item.pos.x,y:item.pos.y}}
                >
                  <div key={index}
                    ref={nodeRef} className='absolute'>
                    <ActionCard
                    value ={value}
                    defaultValue = {item.defaultValue}
                    setValue ={item.setValue}
                      removeDraggable={true}
                      isRBD = {RBD}
                      imageProp={imageProp}
                      setImageProp={setImageProp}
                      style={item.className}
                      optionName={item.optionName}
                      id={`${item.id}-${index}`}
                      index={index}
                      icon={item.icon}
                      color={item.color}
                      condition={item.condition}
                      actionCall={item.actionCall}
                      action={item.action}
                    />
                  </div>
                </Draggable>
              )
            })}


            {provided.placeholder}

            {/* <input type="file" name="upload" className="hidden cursor-pointer"/> */}
          </div>
        )
      }
    </Droppable>
  </div>
}
