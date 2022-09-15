import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import * as Icon from "react-feather";
import { Badge, Select, MultiSelect } from "@mantine/core";
import "./style.css";
import Todo from "./Todo";
import { RightContext } from "../context/RightContext";

function Left({ setShowTest }) {
  const {
    todoList,
    saveDataFile,
    setTestList,
    setUserAnswer,
    selectTodo,
    setDefaultTips,
  } = useContext(GlobalContext);
  const { setRightIsHidden, setBottomIsHidden, setIsChecked } =
    useContext(RightContext);
  //开始测试
  const startTest = () => {
    //展开bottom，滚动到底部
    setBottomIsHidden(false);
    //筛选Testlist
    selectTodo();
    //清空输入框
    setUserAnswer("");
    //设置输入框状态
    setIsChecked(false);
  };
  const [tagSelected, setTagSelected] = useState([]);
  const TagIsInclude = (tag) => {
    if (tagSelected.length === 0) {
      return true;
    }
    const TagInclude = tag.filter((item) => {
      return tagSelected.includes(item);
    });
    console.log(
      "tagSelected && !TagInclude.length",
      !tagSelected.length && TagInclude.length
    );
    if (TagInclude.length) {
      return true;
    } else {
      return false;
    }
  };

  let tagsData = [];
  todoList.map(({ tag, origin, state }, i) => {
    //index：每次刷新得到的序列,delHandler:用于传参数给子组件，子组件才可以操作removeTode。这种参数名一般为xxxHandler
    // key={i}：如果不加会报一个错，但似乎没啥影响
    // tagSelected.includes(tag)：如果tagSelected数组中包含tag，就返回true，否则返回false
    return tag.map((v, i) => {
      if (!tagsData.includes(v)) {
        tagsData.push(v);
      }
    });
  });

  return (
    <div className="left flex flex-col justify-evenly bg-gray-300 shadow-2xl rounded p-2">
      <div className="wordlist flex hMax400px flex-col items-center overflow-auto">
        {todoList.map(({ tag, origin, state }, i) => {
          //index：每次刷新得到的序列,delHandler:用于传参数给子组件，子组件才可以操作removeTode。这种参数名一般为xxxHandler
          // key={i}：如果不加会报一个错，但似乎没啥影响
          // tagSelected.includes(tag)：如果tagSelected数组中包含tag，就返回true，否则返回false
          if (TagIsInclude(tag)) {
            return (
              <Todo
                key={i}
                tag={tag}
                origin={origin}
                index={i}
                isCompleted={state}
              />
            );
          }
        })}
      </div>
      <div className="flex items-center w-584px mt-2 h-12 py-px overflow-x-scroll overflow-y-hidden">
        <MultiSelect
          data={tagsData}
          searchable
          limit={5}
          onChange={(value) => {
            console.log("ssfsd", value);
            setTagSelected([...tagSelected, ...value]);
          }}
          maxSelectedValues={1}
          nothingFound="Nothing found"
        ></MultiSelect>
        {tagsData.map((v, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                if (tagSelected.includes(v)) {
                  setTagSelected(tagSelected.filter((item) => item !== v));
                } else {
                  setTagSelected([...tagSelected, v]);
                }
              }}
              className={`left-tag ${
                tagSelected.includes(v)
                  ? "cursor-pointer bg-gray-200"
                  : "bg-gray-light"
              } cursor-pointer flex w-fit rounded-full h-7  py-1 mr-1 mt-1`}
            >
              <div className=" mr-1 ml-3 text-gray-400 select-none">#</div>
              <div className="mr-3" style={{ width: "max-content" }}>
                {v}
              </div>
            </div>
          );
        })}
        {/*<div*/}
        {/*  onClick={startTest}*/}
        {/*  className="flex justify-center bgGrassGreen  w-full transition-all hover:bg-green-700 text-white p-2 rounded text-center items-center cursor-pointer"*/}
        {/*>*/}
        {/*  开始练习*/}
        {/*</div>*/}
        {/*<div*/}
        {/*  onClick={() => {*/}
        {/*    setRightIsHidden(false);*/}
        {/*  }}*/}
        {/*  className="flex justify-center bg-gray-500 ml-2 w-1/5 transition-all hover:bg-gray-700 text-white p-2 rounded text-center items-center cursor-pointer"*/}
        {/*>*/}
        {/*  <Icon.PlusSquare size={20}></Icon.PlusSquare>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
export default Left;
