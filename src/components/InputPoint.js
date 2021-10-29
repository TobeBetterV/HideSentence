import React, { useEffect, useState, useContext } from "react";
import * as Icon from "react-feather";
import "./style.css";
import { GlobalContext } from "../context/GlobalContext";
import { RightContext } from "../context/RightContext";

function InputPoint() {
  const {
    newTodoContent,
    setNewTodoContent,
    isShowPointBtn,
    setIsShowPointBtn,
  } = useContext(GlobalContext);
  const [isInputPoint, setIsInputPoint] = useState(false);
  const [selectContent, setSelectContent] = useState("");
  const inputPointBtnClick = () => {
    setIsInputPoint(true);
    setIsShowPointBtn(false);
    //聚焦到输入框
    setTimeout(() => {
      const pointInputEle = document.getElementById("pointInputId");
      pointInputEle.focus();
    }, 10);
  };
  const inputPointBlur = () => {
    //插入到字典
    const pointInputEleValue = document.getElementById("pointInputId").value;
    if (pointInputEleValue) {
      const result = newTodoContent;
      result["underline"][selectContent] = pointInputEleValue; //把选中的内容和输入的内容加到字典里
      setNewTodoContent(result);
    }
    //修改输入状态
    setIsInputPoint(false);
    //隐藏输入Point按钮
    setIsShowPointBtn(false);
  };
  useEffect(() => {
    document.addEventListener("selectionchange", () => {
      const selection = document.getSelection();
      //选中的文本
      const selectionText = selection.toString();
      if (selectionText) {
        setSelectContent(selectionText);
        //展示输入point按钮
        setIsShowPointBtn(true);
        console.log("123456");
      } else {
        setTimeout(() => {
          setIsShowPointBtn(false);
        }, 200);
      }
    });
  });
  return (
    <div
      className=" absolute z-2"
      style={{
        left: "750px",
        top: "350px",
      }}
    >
      {isInputPoint ? (
        <div
          className="inputPoint items-center shadow-md flex "
          style={{
            width: "11.5rem",
          }}
        >
          <div className="rounded-full bg-yellow-200 w-3 h-3 ml-3 mr-1"></div>
          <input
            type="text"
            spellCheck={false}
            className=" w-24 flex-grow none resize-none outline-none bg-gray-100 bg-opacity-0"
            placeholder="在这里输入…"
            onBlur={inputPointBlur}
            id="pointInputId"
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                inputPointBlur();
              }
            }}
          />
          <div
            className="closeInputPoint cursor-pointer w-4 h-4 mr-3 rounded-full flex items-center justify-center"
            onClick={() => setIsInputPoint(false)}
          >
            <Icon.X size="12" />
          </div>
        </div>
      ) : (
        <div
          className={`inputPoint items-center ${
            isShowPointBtn ? "flex" : "hidden"
          } shadow-md `}
          style={{
            width: "6rem",
          }}
          onClick={inputPointBtnClick}
        >
          <div className="rounded-full bg-yellow-200 w-3 h-3 ml-3 mr-1"></div>
          添加标注
        </div>
      )}
    </div>
  );
}
export default InputPoint;
