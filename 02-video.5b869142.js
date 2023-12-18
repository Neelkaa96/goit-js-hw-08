player.on("timeupdate",_.throttle(e=>{localStorage.setItem("videoplayer-current-time",e.seconds)},1e3));let e=0;null!=localStorage.getItem("videoplayer-current-time")&&(e=localStorage.getItem("videoplayer-current-time")),player.setCurrentTime(e);
//# sourceMappingURL=02-video.5b869142.js.map
