import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea(props) {
  const {xPos,yPos,rotation} = props;
  return (
    <div className="flex-none w-full h-full overflow-y-auto p-2 relative">
      <div className={`flex-none h-full w-full overflow-x-auto p-2 origin-center absolute top-${yPos} left-${xPos} `}>
      <CatSprite  rotation={rotation} />
      </div>
    </div>
  );
}
