import React, { useEffect, useState, useContext } from "react";
import * as Icon from "react-feather";
import Tag from "./Bottom/Tag";
import Origin from "./Bottom/Origin";
import Tran from "./Bottom/Tran";
import "./style.css";
import { GlobalContext } from "../context/GlobalContext";
import { RightContext } from "../context/RightContext";

function Bottom() {
  const { testList, setTestList, swingAnimation,setUserAnswer,setTestTips} = useContext(GlobalContext);
  const { bottomIsHidden, setBottomIsHidden,setIsChecked } = useContext(RightContext);
  const [oneTest, setOneTest] = useState("");
  const nextBtnClick = () => {
    const result = [...testList];
    result.shift();
    //如果剩余列表不为空，执行setTestList，如果为空，不再清除删除元素。
    if (result.length) {
      setUserAnswer("")
      setTestList(result);
      setIsChecked(false)
      //设置提示内容默认值为答案第一个单词
      setTestTips(result[0].tag[0]);
    } else {
      alert("完成");
    }
  };
  return (
    <div
      className={`flex items-center justify-evenly ${
        bottomIsHidden ? "bottomHide" : "bottomShow"
      } z-1`}
    >
      <div
        style={swingAnimation}
        className="bottom  bg-gray-300 shadow-2xl rounded py-8 px-7 overflow-auto"
      >
        {/* 标记 */}
        <Tag></Tag>
        {/* 输入翻译 */}
        <Tran></Tran>
        {/* 输入原文 */}
        <Origin></Origin>
        <div className="flex justify-center w-full">
          <div
            onClick={nextBtnClick}
            className=" h-8 w-11 rounded-full bgGrassGreen flex items-center hover:bg-green-700 cursor-pointer justify-center text-gray-100 select-none"
          >
            <Icon.ChevronsRight size={25} className="text-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bottom;
