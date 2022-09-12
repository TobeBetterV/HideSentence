import React, { useState, useContext, useEffect } from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../../context/GlobalContext";
import { RightContext } from "../../context/RightContext";
import "../style.css";

function Tag() {
  const { testList, testTips, setTestTips} =
    useContext(GlobalContext);
  const { setBottomIsHidden } = useContext(RightContext);

  // 设置提示内容为用户输错的第一个单词
  const oneTag = testTips;
  const [tagBoxWidth, setTagBoxWidth] = useState({
    width: "45px",
    background: "rgb(229, 231, 235)",
  });

  //点击按钮
  const tagBtnClick = () => {
    const tagText = document.getElementById("tagTextTest");
    setTagBoxWidth({
      width: tagText.innerHTML.length * 10 + 72 + "px",
      background: "rgb(229, 231, 235)",
    });
    setTimeout(() => {
      setTagBoxWidth({
        width: "45px",
        background: "rgb(229, 231, 235)",
      });
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
    <div className=" flex justify-between mb-6 items-center">
      <div
        onClick={tagBtnClick}
        // onmouseout={tagBoxMouseOut}
        style={tagBoxWidth}
        className="transition-all overflow-hidden flex rounded-full bg-gray-100 h-9 flex-row pl10px pr-1 py-1 justify-start items-center"
      >
        <div className=" mr-3 align-middle text-gray-400 select-none text-2xl">
          💡
        </div>
        <div
          id="tagTextTest"
          className=" ml-px align-middle text-gray-900 select-none"
        >
          {oneTag}
        </div>
      </div>
      <div
        className="rounded-full border-2 text-gray-600 border-gray-600 hover:bg-gray-800 hover:text-gray-100 cursor-pointer h-8 w-8 text-gray-100 flex justify-center items-center"
        onClick={() => setBottomIsHidden(true)}
      >
        <Icon.X></Icon.X>
      </div>
    </div>
  );
}
export default Tag;
