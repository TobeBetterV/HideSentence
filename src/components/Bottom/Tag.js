import React, { useState,useContext } from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../../context/GlobalContext";
import "../style.css";

function Tag() {
  const {testList} = useContext(GlobalContext)

  const oneTag = testList[0].tag
  const [tagBoxWidth, setTagBoxWidth] = useState({
    width: "45px",
    background: "rgb(229, 231, 235)",
  });

  //点击按钮
  const tagBtnClick = () => {
    const tagText = document.getElementById("tagTextTest");
    setTagBoxWidth({
      width: tagText.innerHTML.length * 10 + 60 + "px",
      background: "rgb(229, 231, 235)",
    });
    setTimeout(() => {
      setTagBoxWidth({
        width: "45px",
        background: "rgb(229, 231, 235)",
      })
    }, 4000);
  };

  // 鼠标移走
  const tagBoxMouseOut = () => {
    console.log("a");
    setTagBoxWidth({
      width: "45px",
      background: "rgb(229, 231, 235)",
    });
  };
  return (
    <div className=" flex flex-col justify-start mb-6">
      <div
        onClick={tagBtnClick}
        // onmouseout={tagBoxMouseOut}
        style={tagBoxWidth}
        className="transition-all overflow-hidden flex rounded-full bg-gray-100 h-9 flex-row pl10px pr-1 py-1 justify-start items-center mt-2"
      >
        <div className=" mr-3 align-middle text-gray-400 select-none text-2xl">💡</div>
        <div
          id="tagTextTest"
          className=" ml-px align-middle text-gray-900 select-none"
        >
          {oneTag}
        </div>
      </div>
    </div>
  );
}
export default Tag;
