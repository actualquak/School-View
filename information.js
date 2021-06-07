informationDisplay = getUrlParam("information");
informationElement = document.getElementById("information");

articleParagraphs = [
  "The answer to that my friend is eshays. They are what makes school a true experience. Without eshays there would be less appointments made to the psychologist, more learning time die to less telling off time. Every aspect of school is interesting and unpredictable thanks to this group of people. The best thing is, they'll never go away. It's an intergenerational problem<br><br>I can use brs effectively, otherwise this text wouldn't be on a new line",
];

articleTitles = [
  "What is the single biggest influencing group of people at New Town High School?"
];

console.log(informationDisplay);
console.log(informationElement);
console.log(generateArticle);

function generateArticle(i) {
  heading = articleTitles[i];
  paragraphText = articleParagraphs[i];
  return "<h1>"+heading+"</h1><p>"+paragraphText;
}  

if (window.innerHeight < window.innerWidth) {
  videoChangeHeight = true;
  videoChange = window.innerHeight;
}
  
if (informationDisplay == 0) {
  informationElement.innerHTML = generateArticle(0);
} else if (informationDisplay == 1) {
  informationElement.innerHTML = '<video id="video" width="320" height="240" controls> <source src="https://r5---sn-hufvjvgx-hxae.googlevideo.com/videoplayback?expire=1622972615&ei=Z0S8YLf9Lcjr8wSUmpqoCA&ip=64.20.39.202&id=o-AF02pHc5KP4CBjqAQDMZjR3Gz3vrcZY4VLq4tw5jdJYC&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=4CFtQYqZF5QARbPDj_vffdoF&ratebypass=yes&dur=194.977&lmt=1608167546029316&fexp=24001373%2C24007246&c=WEB&txp=6216222&n=Ywu3P70ycwXZRu8J7&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgT6C4mXXW1ld4G5hEFD8FkRW41V5wAR2WLLsXxQNqxHcCIQCJJGBPGGS-21Qysp2T-IrQkIJX-Z6biqYgCj3RgoPhYA%3D%3D&cms_redirect=yes&mh=rg&mip=116.240.154.35&mm=31&mn=sn-hufvjvgx-hxae&ms=au&mt=1622950602&mv=m&mvi=5&pcm2cms=yes&pl=19&lsparams=mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRgIhAO3ndexZoxF_s0zYCZaCeAcYElS82cb3ncpyi_ZDZP_RAiEAzG2WF9SN5e41VWQ4UvY9yNJePmyQp1pf2f1K-2gnTO4%3D" type="video/mp4"</source> Your browser cannot play this video</video>';
  video = document.getElementById("video");
  if (videoChangeHeight == true) {
    video.height = videoChange;
    video.width = 100%;
  } else {
    video.width = videoChange;
    video.height = 100%;
  }  
  informationElement.backgroundColor = black;
} else if (informationDisplay == 2) {
  informationElement.innerHTML = `<h1>What is a good reason not to send my child to New Town High School?</h1>
  <p> It's going to become co-educational soon. If you can afford it, you should send you boy to Hutchins. If they're a girl then you should send her to Collegiate. Girls do better when boys aren't in their class.
  <br><br>
  I can use brs effectively, otherwise this text wouldn't be on a new line
  <p>`;
} else if (informationDisplay == 3) {
  informationElement.innerHTML = '<video id="video" width="320" height="240" controls> <source src="https://r4---sn-npoeened.googlevideo.com/videoplayback?expire=1622972847&ei=T0W8YIKjKsa68wTM45OoCQ&ip=64.20.39.202&id=o-AEG-9vClOoj_NJBIwLFmMQbRzTA_R1DKKJD9wNInQT2P&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=WyPhhQym0UD2NcVja2HWaQcF&ratebypass=yes&dur=123.321&lmt=1600404364494972&fexp=24001373,24007246&c=WEB&txp=6216222&n=wp-t9D52yGknIEdp-&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgLIN1OWPKV6BMmz02Ktv26YuWB009dzL5UbXiLK89wWQCIQD1ILKgR4NvtTrDFkuYMeWhArQOc2b6S8srESP_dYOO8A%3D%3D&cm2rm=sn-hufvjvgx-hxal7k,sn-hxae7z&req_id=ffb18ad6c10da3ee&lowtc=yes&redirect_counter=2&cms_redirect=yes&mh=uY&mip=116.240.154.35&mm=34&mn=sn-npoeened&ms=ltu&mt=1622951070&mv=m&mvi=4&pl=19&lsparams=lowtc,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAKIZJ8CFtykpWr5dtDWDDW540tERxHwpQJPeu04my6nbAiEAvBDLvzPWT1PzlWBqu0zAH_JWRoK__BBiFgpmzICkaUE%3D " type="video/mp4"</source> Your browser cannot play this video</video>';
  video = document.getElementById("video");
  if (videoChangeHeight == true) {
    video.height = videoChange;
    video.width = 100%;
  } else {
    video.width = videoChange;
    video.height = 100%;
  }  
  informationElement.backgroundColor = black;
} else if (informationDisplay == 4) {
  informationElement.innerHTML = `<h1>Do I have to write an article?</h1>
  <p> Yes. And we better see no bragging br tag!
  <br><br>
  I can use brs effectively, otherwise this text wouldn't be on a new line 😜
  <p>`;
} else if (informationDisplay == 5) {
  informationElement.innerHTML = '<video id="video" width="100%" height="100%" controls> <source src="https://r7---sn-hufvjvgx-hxal.googlevideo.com/videoplayback?expire=1622973063&ei=J0a8YN2GH9W18wSn36TwBQ&ip=64.20.39.202&id=o-AHYpXcb2IPQDS4hHtgx0k5lwxC3k5wEG_25y7vc7cz8M&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=8gIx3cWSMGcteIyRKaglYu8F&gir=yes&clen=6469292&ratebypass=yes&dur=224.978&lmt=1553773251434227&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=c1iNPhJ9Qbn6pKHrG&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALdypK1oR5AA4J0h2DCea7DauseF7ccYsiWCq3IZivSpAiAjKADkKG-PGBylfYaBgWB05bngnhv0QnVxoYmKnxYS_Q==&cms_redirect=yes&mh=b9&mip=116.240.154.35&mm=31&mn=sn-hufvjvgx-hxal&ms=au&mt=1622951085&mv=m&mvi=7&pcm2cms=yes&pl=19&lsparams=mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRgIhAOb-Pu8nnDOWLy_x9Q4ZjwOscgbikg-L1FLwR1Xt68NsAiEA4uIA3UsupCV1kMVvMFZc6piVCIk3L3Q7iY0YL8y2M3Q%3D" type="video/mp4"</source> Your browser cannot play this video</video>';
  video = document.getElementById("video");
  if (videoChangeHeight == true) {
    video.height = videoChange;
    video.width = 100%;
  } else {
    video.width = videoChange;
    video.height = 100%;
  }  
  informationElement.backgroundColor = black;
} else if (informationDisplay == 6) {
  informationElement.innerHTML = '<video id="video" width="320" height="240" controls> <source src="https://r4---sn-hufvjvgx-hxal.googlevideo.com/videoplayback?expire=1622973146&ei=eka8YIuhKNyE_9EP8b-CyA0&ip=64.20.39.202&id=o-AIRekatyLJcH5BaK8N0i3_MkgEHVRpf4IhiijXKXu_1C&itag=18&source=youtube&requiressl=yes&vprv=1&xtags=tx%3D9417361&mime=video%2Fmp4&ns=nYdJQ_myYo8OSyfnfpO63KUF&gir=yes&clen=17223181&ratebypass=yes&dur=212.091&lmt=1615418325563886&fexp=24001373%2C24007246&c=WEB&n=wSnal5hDEnKxtfTGv&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cxtags%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhANMhQLpn6D7oNdVqwDdYt3uTCImzbK6sbuyEKR5Y_Fl2AiEA3RkkcTm83Lv3cnKD8eQaN5yNA-cGMGi0PG33lk8OuAc=&cms_redirect=yes&mh=7c&mip=116.240.154.35&mm=31&mn=sn-hufvjvgx-hxal&ms=au&mt=1622951085&mv=m&mvi=4&pl=19&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgFQaE7Qcfadf4Ev9aQTfQA9UMBBqAHiQRw3_D-tRkgtYCIQD9-dQM_JtSjgIr4_MWxogEtZSXc85wlmB2nkVkUsxnqQ%3D%3D" type="video/mp4"</source> Your browser cannot play this video</video>';
  video = document.getElementById("video");
  if (videoChangeHeight == true) {
    video.height = videoChange;
    video.width = 100%;
  } else {
    video.width = videoChange;
    video.height = 100%;
  }  
  informationElement.backgroundColor = black;
} else {
  informationElement.innerHTML = 'this the library of information';
}
