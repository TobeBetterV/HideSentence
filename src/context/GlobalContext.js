import React, { createContext, useState } from "react";
import data from "./data.json";
import { saveAs } from "file-saver";
import { renderToString } from "react-dom/server";

export const GlobalContext = createContext();

function GlobalContextProvider(props) {
  const [isInput, setIsInput] = useState("false");

  //总卡片列表
  const [todoList, setTodoList] = useState(data);
  // console.log("todoList-global-start");
  // console.log(todoList);

  //新增卡片内容
  const [newTodoContent, setNewTodoContent] = useState({
    id: "000",
    time: {},
    tag: [],
    state: false,
    origin: "",
    tran: "",
    underline: {},
  });

  //输入错误时抖动

  const [swingAnimation, setSwingAnimation] = useState();

  //测试卡片列表
  const [testList, setTestList] = useState([
    {
      id: "100",
      time: { post_time: "", review_time: [] },
      tag: ["weapon"],
      state: true,
      origin: "A foreign language is a weapon in the struggle of life.",
      tran: "外国语是人生斗争的一件武器。",
      underline: { 外国语: "a foreign language", 人生斗争: "struggle of life" },
    },
  ]);
  //是否展示输入Point按钮
  const [isShowPointBtn, setIsShowPointBtn] = useState(false);

  //保存当前数据json
  const saveDataFile = () => {
    const FileSaver = require("file-saver");
    //obj转json
    const dataStrNow = JSON.stringify(todoList);

    //获取当前时间，添加到文件名里
    var dateObj = new Date();
    var dataJson = dateObj.toJSON();

    const blob = new Blob([dataStrNow], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, dataJson + "data.json");

    // console.log(JSON.stringify(todoList));
  };
  //新建卡片
  const newTodo = () => {
    //时间是0时区时间
    var dateObj = new Date();
    var dataJson = dateObj.toJSON();
    //id为列表最后一个元素的id加一
    const newId = 1 + Number(todoList[todoList.length - 1].id);
    newTodoContent.id = newId;
    newTodoContent.time.post_time = dataJson;
    setTodoList([...todoList, JSON.parse(JSON.stringify(newTodoContent))]);
    // {
    //   id: newId,
    //   time: dataJson,
    //   tag: tagTextValue,
    //   state: false,
    //   origin: originTextValue,
    //   tran: tranTextValue,
    // }
    // e.target.value = "";
  };
  //移除卡片
  const removeTodo = (index) => {
    const result = [...todoList];
    result.splice(index, 1);
    setTodoList(result);
  };
  //选中卡片
  const checkTodo = (index) => {
    const result = [...todoList];
    result[index].state = !result[index].state;
    setTodoList(result);
  };
  //挑选测试卡片
  const selectTodo = () => {
    const result = [];
    todoList.map(({ state }, i) => {
      if (state) {
        result.push(todoList[i]);
      }
    });
    if(result.length){
      setTestList(result);
    }else{
      alert('没有选中任何单词。')
    }
  };
  return (
    <GlobalContext.Provider
      value={{
        newTodo,
        todoList,
        testList,
        setTestList,
        removeTodo,
        checkTodo,
        selectTodo,
        swingAnimation,
        setSwingAnimation,
        newTodoContent,
        setNewTodoContent,
        saveDataFile,
        isInput,
        isShowPointBtn,
        setIsShowPointBtn,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
export default GlobalContextProvider;
