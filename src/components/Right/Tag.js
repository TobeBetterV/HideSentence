import React, { useState, useContext } from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../../context/GlobalContext";
import "../style.css";

function Tag() {
  const { newTodoContent, setNewTodoContent } = useContext(GlobalContext);
  const [tagBoxWidth, setTagBoxWidth] = useState({ width: "115px" });

  //点击完成按钮
  const tagBtnClick = () => {
    const tagText = document.getElementById("tagText");
    const originText = document.getElementById("originText");
    const tranText = document.getElementById("tranText");

    const tagTextValue = tagText.value;
    const originTextValue = originText.value;
    const tranTextValue = tranText.value;

    //判断其他输入框是否已经输入
    if (tagTextValue) {
      console.log(tagTextValue);
      if (tranTextValue) {
        console.log(tranTextValue);
        if (originTextValue) {
          console.log("TagOK");
        } else {
          originText.focus();
        }
      } else {
        tranText.focus();
      }
    } else {
      console.log("请输入");
    }
    //修改原始数据
    // const tagTextValueList = [tagTextValue]; //先把输入的内容套到列表里
    // const result = newTodoContent; //复制一份newTodoContent
    // result.tag = tagTextValueList; //修改tag数据
    // setNewTodoContent(result); //更新newTodoContent
    // console.log("newTodoContent");
    // console.log(newTodoContent);

    //老办法，用push的方法在Tag的值（列表）里增加内容，适合做好多个标签的功能之后。
    // const result = newTodoContent
    // result.tag.push(tagTextValue);
    // setNewTodoContent(result);
  };
  // tag输入框被点击时
  const tagBoxOnfocus = (e) => {
    if (e.target.value.length < 13) {
      setTagBoxWidth({ width: "200px" });
    }
  };
  // tag输入框失去焦点时
  const tagBoxOnBlur = (e) => {
    const tagText = document.getElementById("tagText");
    setTimeout((e) => {
      setTagBoxWidth({
        width: tagText.value.length * 10 + 70 + "px",
        background: "rgb(229, 231, 235)",
      });
    }, 100);
  };
  return (
    <div className=" flex flex-col justify-start mb-6">
      <div className=" text-sm textGrassGreen">输入标记</div>
      <div
        style={tagBoxWidth}
        className="transition-all flex rounded-full bg-gray-100 h-9 minWidth115 flex-row pl-4 pr-1 py-1 justify-between items-center mt-2"
      >
        <div className=" mr-2 text-gray-400 select-none">#</div>
        <input
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              console.log(e);
              e = "";
              tagBtnClick();
            }
          }}
          defaultValue={newTodoContent.tag[0]}
          id="tagText"
          type="text"
          onFocus={tagBoxOnfocus}
          onBlur={tagBoxOnBlur}
          spellCheck={false}
          className=" bg-gray-100 flex-grow h-8 w-5 outline-none bg-opacity-0"
        ></input>
        <div
          onClick={tagBtnClick}
          className="rounded-full bgGrassGreen h-8 w-9 ml-1 flex items-center justify-center"
        >
          <Icon.ChevronRight size={25} className="text-gray-100 ml-1" />
        </div>
      </div>
    </div>
  );
}
export default Tag;
