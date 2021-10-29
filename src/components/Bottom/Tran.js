import React, { useEffect, useState, useContext } from "react";
import "../style.css";
import { renderToString } from "react-dom/server";
import { GlobalContext } from "../../context/GlobalContext";

function Tran() {
  const { testList } = useContext(GlobalContext);
  const tran = testList[0].tran;
  const underline = testList[0].underline;
  const [htmlTran, setHtmlTran] = useState(tran);

  // const showUnderline = (e)=>{
  //   document.getElementById('tranTips').innerHTML=e
  // }
  // const showTips = (e) => {
  //   setTips(e.target.getAttribute("tips"));
  // };

  useEffect(() => {
    const preHtmlTran = '<div id="tranPart"><p>'
      .concat(tran)
      .concat('</p><div id="tranTips"></div>')
      .replace(
        /，/g,
        '，</p><div id="tranTips"></div></div><div id="tranPart"><p>'
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
      const temUnderWord = underline[word].replaceAll(" ","&nbsp;")
      getOneTran = getOneTran.replaceAll(
        word,
        `<a onClick=document.getElementById('tranTips').innerHTML='${temUnderWord}'>${word}</a>`
      );
      setHtmlTran(getOneTran);
    }
  }, [tran]);

  return (
    <div className="mt-1 flex flex-col justify-start  mb-6">
      <div className=" text-sm textGrassGreen">翻译</div>
      <div className="tranBox transition-all flex rounded-lg bg-gray-200 w-full flex-col p-3 justify-between items-end mt-2">
        <div
          id="tranInclude"
          className="flex flex-wrap flex-row w-full flex-grow none content-start bg-opacity-0M"
          dangerouslySetInnerHTML={{__html: htmlTran}}
        >
        </div>
      </div>
    </div>
  );
}
export default Tran;
