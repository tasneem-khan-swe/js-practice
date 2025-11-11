const BTN_STYLES = {
    start: {
        text: "Start",
        backgroundColor: "green"
    },
    pause: {
        text: "Pause",
        backgroundColor: "orange"
    },
    resume: {
        text: "Resume",
        backgroundColor: "blue"
    },
    reset: {
        text: "Reset",
        backgroundColor: "red"
    }
};


(() => {
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    const toggleBtn = document.querySelector("#toggle");
    const resetBtn = document.querySelector("#reset");

    let intervalId = null;
    let isRunning = false;

  // ✅ Alarm sound — short beep that will loop
  const alarmSound = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
  alarmSound.loop = true; // make it continuous until stopped


    function setBtnState(type) {
        console.log("setBtnState", type);
        toggleBtn.textContent = BTN_STYLES[type].text;
        toggleBtn.style.backgroundColor = BTN_STYLES[type].backgroundColor;
    }
    // 🟢 Helper to format double digits
    const format = (num) => (num < 10 ? "0" + num : num);

    function timer() {
        console.log("timer");
        let hrs = parseInt(hours.value) || 0;
        let mins = parseInt(minutes.value) || 0;
        let secs = parseInt(seconds.value) || 0;

        // stop condition starts here
        if (hrs === 0 && mins === 0 && secs === 0) {
            stopTimer();
            alarmSound.play();
            setTimeout(()=>{
                alarmSound.pause();
                alarmSound.currentTime = 0; // reset to start
            },3000); // stop alarm after 3 seconds
            return;
        }
        // stop condition ends here

        // main logic starts here
        if (secs > 0) {
            secs--;

        } else if (mins > 0) {
            mins--;
            secs = 59;
        } else if (hrs > 0) {
            hrs--;
            mins = 59;
            secs = 59;
        }
        // main logic ends here

        seconds.value = format(secs);
        minutes.value = format(mins);
        hours.value = format(hrs);
    }
    function startTimer() {
        console.log("start");
        
        if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
            return
        }
        isRunning = true;
        setBtnState("pause");
        intervalId = setInterval(() => {
            timer()
        }, 1000)
    }
    function stopTimer() {
        console.log("stop");
        clearInterval(intervalId);
        isRunning = false;
        intervalId = null;
        setBtnState("start");
    }
    function pauseTimer() {
        console.log("pause");
        isRunning = false;
        setBtnState("resume");
        clearInterval(intervalId);
    }
    function resetTimer() {
        console.log("reset");
        hours.value = "00";
        minutes.value = "00";
        seconds.value = "00";
        stopTimer();
    }
    function handleToggle() {
        console.log("toggle");
        // initially not running
        if (!intervalId && !isRunning) {
            startTimer();
        } else if (isRunning) {
            // currently running
            pauseTimer();
        } else {
            // currently paused
            startTimer();
        }
    }
    toggleBtn.addEventListener("click", handleToggle);
    resetBtn.addEventListener("click", resetTimer);
})()