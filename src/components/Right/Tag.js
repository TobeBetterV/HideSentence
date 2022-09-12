import React, { useState, useContext } from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../../context/GlobalContext";
import "../style.css";

function Tag() {
  const { newTodoContent, setNewTodoContent, removeTag,editTag } =
    useContext(GlobalContext);
  const [tagBoxWidth, setTagBoxWidth] = useState({});
  const [tagInputWidth, setTagInputWidth] = useState({ width: "80px" });
  const [ShowTagDelBtn, setShowTagDelBtn] = useState(false);

  //点击完成按钮
  const tagBtnClick = () => {
    const tagTextValue = document.getElementById("tagText").value;

    //老办法，用push的方法在Tag的值（列表）里增加内容，适合做好多个标签的功能之后。
    const result = newTodoContent;
    result.tag.push(tagTextValue);
    setNewTodoContent(result);
    document.getElementById("tagText").value = ""
  };
  // tag输入框被点击时
  const tagBoxOnfocus = (e) => {
    if (e.target.value.length < 13) {
      setTagInputWidth({ width: "160px" });
      setTagBoxWidth({});
    }
  };
  // tag输入框失去焦点时
  const tagBoxOnBlur = (e) => {
    const tagText = document.getElementById("tagText");
    setTagBoxWidth({
      background: "rgb(229, 231, 235)",
    });
    setTagInputWidth({
      width: tagText.value.length * 10 + 20 + "px",
    });
  };
  return (
    <div className=" flex flex-col justify-start mb-6">
      <div className=" text-sm textGrassGreen">标记</div>
      <div className="flex content-center mt-2">
        <div
          style={tagBoxWidth}
          className="flex rounded-xl bg-gray-100 h-9 minWidth115 flex-row pl-4 pr-1 py-1 justify-between items-center"
        >
          <div className=" mr-2 text-gray-400 select-none">#</div>
          {newTodoContent.tag.map((v, i) => {
            //加上下一个之后的长度
            const testLen = newTodoContent.tag
              .slice(0, i + 1)
              .toString().length;
            const totalLen = (testLen - i) * 11 + (i + 1) * 41.33;
            //之前的长度
            const testLastLen = newTodoContent.tag
              .slice(0, i)
              .toString().length;
            const totalLastLen = (testLastLen - i - 1) * 11 + i * 41.33;
            if (totalLen < 440) {
              return (
                <div
                  key={i}
                  onClick={()=>{editTag(v,i)}}
                  className="left-tag bg-gray-300 flex h-full rounded-full px-3 py-1 mr-1 items-center"
                >
                  {v}
                </div>
              );
            } else if (totalLastLen < 480) {
              return (
                <div
                  key={i}
                  className={`left-tag bg-gray-light flex h-full rounded-full px-3 py-1 mr-1 mt-1`}
                >
                  <div className="text-gray-600 select-none">···</div>
                </div>
              );
            }
          })}
          <input
            style={tagInputWidth}
            onKeyPress={(e) => {
              // if (e.key == "Enter" || e.key == " ") {
              if (e.key == "Enter") {
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
            className=" bg-gray-100 flex-grow h-8 outline-none bg-opacity-0 w-20"
          ></input>
          {/* <div
            onClick={tagBtnClick}
            className="rounded-full bgGrassGreen h-8 w-9 ml-1 flex items-center justify-center"
          >
            <Icon.ChevronRight size={25} className="text-gray-100 ml-1" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Tag;
