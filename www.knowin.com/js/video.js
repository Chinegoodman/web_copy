"use strict";var btnVideo,isWeixin="micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i);function playVideo(e,s){var i=document.getElementById(e),t=document.getElementById(s).querySelector(".playback-control"),a="video-pause",d="video-play";t.style.display="block";t.addEventListener("click",function(){-1<document.getElementById(s).id.indexOf("intr-video")&&(document.querySelector(".isShow").style.opacity=0),-1<t.className.indexOf(d)?(i.play(),t.classList.remove(d),t.classList.add(a)):(i.pause(),t.classList.remove(a),t.classList.add(d))},!1),i.addEventListener("ended",function(){-1<t.className.indexOf(a)&&(t.classList.remove(a),t.classList.add(d),isWeixin&&i.load())},!1)}isWeixin&&(btnVideo=document.getElementsByClassName("video-pause"),Array.from(btnVideo).forEach(function(e){e.classList.remove("video-pause"),e.classList.add("video-play")}));