import React, { useState, useContext } from "react";
import * as Icon from "react-feather";
import Tag from "./Right/Tag";
import Origin from "./Right/Origin";
import Tran from "./Right/Tran";
import "./style.css";
import { GlobalContext } from "../context/GlobalContext";
import { RightContext } from "../context/RightContext";

function Right() {
  //是否输入完
  const { newTodo, newTodoContent, setNewTodoContent } =
    useContext(GlobalContext);
  const { isInput, setIsInput,rightIsHidden,setRightIsHidden} = useContext(RightContext);
  //点击下一步按钮
  const nextStepClick = () => {
    const tagText = document.getElementById("tagText");
    const originText = document.getElementById("originText");
    const tranText = document.getElementById("tranText");

    const tagTextValue = tagText.value;
    const originTextValue = originText.value;
    const tranTextValue = tranText.value;
    if (tagTextValue) {
      if (tranTextValue) {
        if (originTextValue) {
          //修改原始数据
          const result = newTodoContent;
          const tagTextValueList = [tagTextValue]; //先把输入的内容套到列表里
          result.tag = tagTextValueList; //修改tag数据
          result.tran = tranTextValue; //修改tran
          result.origin = originTextValue;
          //修改result.tran的老办法，用push的方法在Tag的值（列表）里增加内容，适合做好多个标签的功能之后。
          // const result = newTodoContent
          // result.tag.push(tagTextValue);
          // setNewTodoContent(result);
          setNewTodoContent(result);
          //改变输入状态
          setIsInput(false);
        } else {
          originText.focus();
        }
      } else {
        tranText.focus();
      }
    } else {
      tagText.focus();
    }
  };
  const completeClick = () => {
    newTodo();
    resetNewTodo();
    setIsInput(true);
    setIsInput(true);
  };

  //清空卡片内容
  const resetNewTodo = () => {
    setNewTodoContent({
      id: "000",
      time: {},
      tag: [],
      state: false,
      origin: "",
      tran: "",
      underline: {},
    });
    //清空文本框
    document.getElementById("tagText").value = "";
    document.getElementById("originText").value = "";
    document.getElementById("tranText").value = "";
  };

  return (
    <div
      className={`right ${
        rightIsHidden ? "rightHide" : "rightShow"
      } bg-gray-300 shadow-2xl rounded pt-8 px-7 flex-none overflow-auto z-1`}
    >
      {/* 标记 */}
      <Tag></Tag>
      {/* 输入翻译 */}
      <Tran></Tran>
      {/* 输入原文 */}
      <Origin></Origin>
      {/* 下方按钮 */}
      {isInput ? (
        <div className="flex justify-center">
          <div
            onClick={()=>{setRightIsHidden(true)}}
            className="flex justify-start p-4 -mr-16 rounded-lg w-7·3rem rounded-1rem bg-gray-200 mt-2 h-12 transition-all hover:text-gray-400 text-gray-light p-2 text-center items-center cursor-pointer"
          >
            <Icon.ChevronLeft strokeWidth="3" size={26} />
          </div>
          <div
            onClick={(nextStepClick)}
            className="flex justify-center rounded-lg w-7·3rem rounded-1rem bgGrassGreen mt-2 h-12 transition-all hover:bg-green-700 text-white p-2 text-center items-center cursor-pointer"
          >
            下一步
            <Icon.ChevronRight strokeWidth="3" size={30} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div
            onClick={() => {
              setIsInput(true);
            }}
            className="flex justify-start p-4 -mr-16 rounded-lg w-7·3rem rounded-1rem bg-gray-200 mt-2 h-12 transition-all hover:text-gray-400 text-gray-light p-2 text-center items-center cursor-pointer"
          >
            <Icon.ChevronLeft strokeWidth="3" size={30} />
          </div>
          <div
            onClick={completeClick}
            className="flex justify-center rounded-lg w-7·3rem rounded-1rem bgGrassGreen mt-2 h-12 transition-all hover:bg-green-700 text-white p-2 text-center items-center cursor-pointer"
          >
            完成
            <Icon.ChevronsRight strokeWidth="3" size={30} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Right;
