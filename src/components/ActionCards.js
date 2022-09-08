import React, { useEffect } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Icon from "./Icon";

export default function ActionCard(props) {
    const { optionName, icon, color, condition, value, setValue, action, id, style, index, isRBD,defaultValue, removeDraggable, setImageProp, imageProp, actionCall } = props;
  

     useEffect(()=>{
        console.log(id,value,defaultValue)
        if(id && value && defaultValue)
      setValue({...value,[id]:defaultValue})
     },[])
    const clickHandler = () => {
        console.log(value[id],id,actionCall,"value...")
        let prvXpos = imageProp.xPos||0;
        let prvYpos = imageProp.yPos || 0;
        let prvRotation = imageProp.rotation ||0;    
        let updatedValue = Number(value[id]) || 0;
        console.log(updatedValue,imageProp.rotation,"here....")
        switch (actionCall) {
            case "move-hr":
                setImageProp({ ...imageProp, xPos: prvXpos+updatedValue });
                return;
            case "move-vr":
                setImageProp({ ...imageProp, yPos:prvYpos+updatedValue });
                return;
            case "trun-anti-clock":
                setImageProp({ ...imageProp, rotation:prvRotation-updatedValue });
                return;
            case "trun-clock":
                setImageProp({ ...imageProp, rotation: prvRotation+updatedValue });
                return;
            default:
                return;
        }
    }
    return (
        <>
            {(removeDraggable && !isRBD) ? (
                <div className={style} onClick={clickHandler}>
                    {condition}
                    {icon &&
                        <Icon name={icon} size={15} className="text-green-600 mx-2" />
                    }
                    {optionName === "Motion" && (
                        <input className="w-10 mx-2 border-none rounded-full px-2 py-1 text-black" defaultValue={defaultValue} name={id} value={value[id]} onChange={(e)=>{e.stopPropagation();   setValue({...value,[e.target.name]:e.target.value});}} />
                    )}
                    {action}
                </div>
            ) : (
                <Draggable draggableId={id} index={index}>
                    {(provided) => (
                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className={style} onClick={clickHandler}>
                            {condition}
                            {icon &&
                                <Icon name={icon} size={15} className="text-green-600 mx-2" />
                            }
                            {optionName === "Motion" && (
                                <input className="w-10 mx-2 border-none rounded-full px-2 py-1 text-black" name={id} value={value[id]} onChange={(e)=>{e.stopPropagation();  setValue({...value,[e.target.name]:e.target.value})}} />
                            )}
                            {action}
                        </div>
                    )}
                </Draggable>)}
        </>
    )
}