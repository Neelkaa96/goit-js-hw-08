!function(){player.on("timeupdate",_.throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));var e=0;null!=localStorage.getItem("videoplayer-current-time")&&(e=localStorage.getItem("videoplayer-current-time")),player.setCurrentTime(e)}();
//# sourceMappingURL=02-video.d6ccb449.js.map
