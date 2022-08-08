var bgImgsLength = 9;

// 随机背景图片path数组
var bgImgs = [];

for (let i = 0; i < bgImgsLength; i++) {
  bgImgs[i] = "url(http://rftpgtn4a.hb-bkt.clouddn.com/bg/" + i + ".jpg)";
}

//获取背景图片总数，生成随机数
// var bgIndex = Math.floor(Math.random() * (bgImgs.length));

var bgImgsKey = "bgImgsKey";
if (localStorage.getItem(bgImgsKey) === null) {
  localStorage.setItem(bgImgsKey, 0);
}

var bgIndex = parseInt(localStorage.getItem(bgImgsKey));

localStorage.setItem(bgImgsKey, (bgIndex + 1) % bgImgsLength);

//重设背景图片
document.getElementById("web_bg").style.backgroundImage = bgImgs[bgIndex];

//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerImgs = [
  "url(/img/bg/1.jpg)",
  "url(/img/bg/2.jpg)",
  "url(/img/bg/3.jpg)",
  "url(/img/bg/4.jpg)",
  "url(/img/bg/5.jpg)",
  "url(/img/bg/6.jpg)",
  "url(/img/bg/7.jpg)"
];
//获取banner图片总数，生成随机数
var bannerIndex = Math.ceil(Math.random() * (bannerImgs.length - 1));
//重设banner图片
// document.getElementById("page-header").style.backgroundImage = bannerImgs[bannerIndex];
document.getElementById("page-header").style.backgroundImage = bgImgs[bgIndex];