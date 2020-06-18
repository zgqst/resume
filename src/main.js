let text = document.querySelector(`.content`);
let style = document.querySelector(`style`);
let demo = document.querySelector(`.demo`);
let oldStr = `/*您好，我叫清歌
我是一个前端新人
接下来我将展示我的前端技术
首先要准备一个div*/
div.demo{
    width:300px;
    height:300px;
    border:1px solid black;
}
/* 注意了
接下里我要把它变成一个八卦图
首先，我先把它变成一个圆 */
div.demo{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦由阴阳而成
一黑一白 */
div.demo{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
div.demo::before{
    width: 150px;
    height: 150px;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
div.demo::after{
    width: 150px;
    height: 150px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}`;
let newStr = ``;

let n = 0;
let step = () => {
  setTimeout(() => {
    if (oldStr.charAt(n) === `\n`) {
      newStr += "<br>";
    } else if (oldStr.charAt(n) === ` `) {
      newStr += "&nbsp;";
    } else {
      newStr += oldStr.charAt(n);
    }
    text.innerHTML = newStr;
    style.innerHTML = oldStr.substring(0, n + 1);
    n++;
    text.scrollTop = text.scrollHeight;
    window.scrollTo(0, 10000);
    if (n >= oldStr.length) {
      return;
    }
    step();
  }, 30);
};
step();
console.dir(text);
