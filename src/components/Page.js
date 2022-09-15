import React, { useEffect, useState, useContext } from "react";
import * as Icon from "react-feather";
import Bottom from "./Bottom";
import Left from "./Left";
import Right from "./Right";
import InputPoint from "./InputPoint";
import { Button, Avatar, ActionIcon } from "@mantine/core";
import {
  IconStar,
  IconAdjustments,
  IconSunHigh,
  IconBook2,
  IconComet,
  IconPlayerPlay,
  IconNewSection,
} from "@tabler/icons";
import { GlobalContext } from "../context/GlobalContext";
import { RightContext } from "../context/RightContext";

function Page({ setShowTest }) {
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
  return (
    <div className="flex flex-row items-center">
      <div className="flex justify-center items-center">
        <div className="flex shadow-xl justify-around pt-1 pb-3 items-center w-16 rounded-full h-56 bg-gray-300 flex-col -ml-20">
          <Avatar
            src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            alt="it's me"
          />
          <ActionIcon
            radius="md"
            onClick={() => {
              startTest();
            }}
          >
            <IconPlayerPlay size={25} />
          </ActionIcon>
          <ActionIcon
            radius="md"
            onClick={() => {
              setRightIsHidden(true);
              setBottomIsHidden(true);
            }}
          >
            <IconBook2 size={25} />
          </ActionIcon>
          <ActionIcon
            radius="md"
            onClick={() => {
              setRightIsHidden(false);
            }}
          >
            <IconNewSection size={25} />
          </ActionIcon>
        </div>
      </div>
      <div className="page overflow-hidden shadow-lg rounded flex flex-col flex-start">
        <div className="top flex flex-start overflow-hidden flex-none">
          <Left setShowTest={setShowTest}></Left>
          <Right></Right>
        </div>
        <Bottom></Bottom>
        {/* <InputPoint></InputPoint> */}
      </div>
    </div>
  );
}
export default Page;
