import React, { useEffect, useState, useContext } from "react";
import * as Icon from "react-feather";
import Tag from "./Bottom/Tag";
import Origin from "./Bottom/Origin";
import Tran from "./Bottom/Tran";
import "./style.css";
import { GlobalContext } from "../context/GlobalContext";
import { RightContext } from "../context/RightContext";

function Bottom() {
  const { swingAnimation } = useContext(GlobalContext);
  const { bottomIsHidden, setBottomIsHidden } = useContext(RightContext);

  // const [oneTest, setOneTest] = useState({
  //   id: "100",
  //   time: "",
  //   tag: "weapon",
  //   state: false,
  //   origin: "A foreign language is a weapon in the struggle of life.",
  //   tran: "[外国语](a.foreign.language)是[人生斗争](struggle.of.life)的一件武器。",
  // });
  const [oneTest, setOneTest] = useState("");

  // const nextTest = () => {
  //   const result = testList1.pop();
  //   console.log("result");
  //   console.log(result);
  //   setOneTest(result);
  //   console.log("oneTest");
  //   console.log(oneTest);
  //   // //设置最后一个测试题
  //   // const result = testList.pop()
  //   // console.log("result")
  //   // console.log(result)
  //   // setOneTest(result)
  //   // console.log("oneTest")
  //   // console.log(oneTest)
  //   // console.log('testList')
  //   // console.log(testList)
  // };
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
        <div
          className="rounded-full bgGrassGreen hover:bg-green-700 cursor-pointer h-8 w-8 text-gray-100 flex justify-center items-center"
          onClick={() => setBottomIsHidden(true)}
        >
          <Icon.ChevronsDown></Icon.ChevronsDown>
        </div>
      </div>
    </div>
  );
}
export default Bottom;
