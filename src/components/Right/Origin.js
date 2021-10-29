import React, { useState,useContext } from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../../context/GlobalContext";
import { RightContext } from "../../context/RightContext";
import "../style.css";

function Origin() {
  const {newTodoContent,setNewTodoContent} = useContext(GlobalContext)
  //是否输入完成
  const {isInput,setIsInput} = useContext(RightContext)
  const [originBoxHeight, setOriginBoxHeight] = useState({ height: "80px",background: "rgb(229, 231, 235)"});

  // Origin输入框被点击时
  const originBoxOnfocus = (e) => {
    setOriginBoxHeight({ height: "105px" });
  };
  // Origin输入框失去焦点时
  const originBoxOnBlur = (e) => {
    const originText = document.getElementById("originText");
    setTimeout((e) => {
      if (originText.value.length <= 80) {
        setOriginBoxHeight({ height: "75px" , background: "rgb(229, 231, 235)"});
      }
    }, 100);
  };
  //点击完成按钮
  const originBtnClick = () => {
    const tagText = document.getElementById("tagText");
    const originText = document.getElementById("originText");
    const tranText = document.getElementById("tranText");

    const tagTextValue = tagText.value;
    const originTextValue = originText.value;
    // const tranTextValue = tranText.value;
    const tranTextValue = true;

    //判断其他输入框是否已经输入
    if (originTextValue) {
      if (tagTextValue) {
        console.log(tagTextValue);
        if (tranTextValue) {
          console.log("OriginOK");
        } else {
          tranText.focus();
        }
      } else {
        tagText.focus();
      }
    } else {
      console.log("请输入");
    }
    //修改原始数据
    const result = newTodoContent
    result.origin = originTextValue
    setNewTodoContent(result,()=>console.log(newTodoContent))
  };
  return (
    <div className="mt-1 flex flex-col justify-start mb-6">
      <div className=" text-sm textGrassGreen">原文</div>
      <div
        style={originBoxHeight}
        className=" originBox transition-all flex rounded-lg bg-gray-100 w-full flex-col pl-4 p-2 justify-between items-end mt-2"
      >
        <textarea
          // disabled //不允许修改，普通游标 
          readOnly = {!isInput} //不允许修改，游标为编辑
          //关闭拼写检查
          spellCheck={false}
          defaultValue={newTodoContent.origin}
          onKeyPress={(e) => {
            if (e.key == "Enter" && e.target.value) {
              originBtnClick();
            }
          }}
          onFocus={isInput?originBoxOnfocus:""}
          onBlur={isInput?originBoxOnBlur:""}
          maxLength="190"
          name=""
          id="originText"
          placeholder="在这里输入英文原文……"
          className=" mt-1  w-full flex-grow none resize-none outline-none bg-gray-100 bg-opacity-0"
        ></textarea>
        {/* <div className="flex justify-end w-full mTop-15 width8">
          <div
            onClick={originBtnClick}
            className="originGo rounded-lg bgGrassGreen flex items-center justify-center text-gray-100 select-none"
          >
            →
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Origin;
