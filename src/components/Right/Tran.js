import React, { useState, useContext,useEffect } from "react";
import * as Icon from "react-feather";
import { GlobalContext } from "../../context/GlobalContext";
import { RightContext } from "../../context/RightContext";
import "../style.css";

function Tran() {
  const {newTodoContent, setNewTodoContent } = useContext(GlobalContext);
  const [tranBoxHeight, setTranBoxHeight] = useState({
    height: "80px",
    background: "rgb(229, 231, 235)",
  });
  //是否输入完成
  const {isInput,setIsInput} = useContext(RightContext)
  //读取划线部分
  const underline = newTodoContent.underline;
  //保存HTML结构
  const [htmlTran, setHtmlTran] = useState();

  //将内容转化为HTML
useEffect(() => {
  console.log("获取")
  const tranTextValue = newTodoContent.tran;
  const preHtmlTran = '<div id="tranPart"><p>'
      .concat(tranTextValue)
      .concat('</p><div id="preTranTips"></div>')
      .replace(
        /，/g,
        '，</p><div id="preTranTips"></div></div><div id="tranPart"><p>'
      );
    setHtmlTran(preHtmlTran);

    var word;
    var getOneTran = preHtmlTran;
    for (word in underline) {
      // console.log(word);
      // console.log(underline);
      // //注意这里要用中括号
      // console.log(underline[word]);
      //先将空格替换为&nbsp；
      const temUnderWord = underline[word].replaceAll(" ", "&nbsp;");
      getOneTran = getOneTran.replaceAll(
        word,
        `<a onClick=document.getElementById('preTranTips').innerHTML='${temUnderWord}'>${word}</a>`
      );
      setHtmlTran(getOneTran);
    }
    console.log("刷新一次")
  },[newTodoContent.tran,Object.keys(newTodoContent.underline).length])
  
  // tran输入框被点击时
  const tranBoxOnfocus = (e) => {
    setTranBoxHeight({ height: "105px" });
  };
  // tran输入框失去焦点时
  const tranBoxOnBlur = (e) => {
    const tranText = document.getElementById("tranText");
    setTimeout((e) => {
      if (tranText.value.length <= 64) {
        setTranBoxHeight({ height: "75px", background: "rgb(229, 231, 235)" });
      }
      console.log(tranText.value.length);
    }, 100);
  };
  //返回按钮被点击时
  const backBtnClick = ()=>{
    setIsInput(true)
  }
  return (
    <div className="mt-1 flex flex-col justify-start mb-6">
      <div className=" text-sm textGrassGreen">翻译</div>
      {isInput ? (
        <div
          style={tranBoxHeight}
          className=" hMin75px transition-all flex rounded-lg bg-gray-100 w-full flex-col p-3 justify-between items-end mt-2"
        >
          <textarea
            spellCheck={false}
            defaultValue={newTodoContent.tran}
            onFocus={tranBoxOnfocus}
            onBlur={tranBoxOnBlur}
            maxLength="110"
            name=""
            id="tranText"
            placeholder="在这里输入中文翻译……"
            className=" w-full flex-grow none resize-none outline-none bg-gray-100 bg-opacity-0"
          ></textarea>
        </div>
      ) : (
        <div className="tranBox transition-all flex rounded-lg bg-gray-200 w-full flex-col p-3 justify-between items-end mt-2">
          <div
            id="tranInclude"
            className="flex flex-wrap flex-row w-full flex-grow none content-start bg-opacity-0M"
            dangerouslySetInnerHTML={{ __html: htmlTran }}
          ></div>
          <div
            onClick={backBtnClick}
            className="tranBack rounded-lg flex items-center justify-center select-none text-gray-400 hover:text-gray-500"
          >
            <Icon.Edit3 size={17} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Tran;
