class Clock {
    constructor(id) {
      const el = document.getElementById(id);
      this.handHr = el.querySelector('.clock__hand--hour');
      this.handMin = el.querySelector('.clock__hand--minute');
      this.handSec = el.querySelector('.clock__hand--second');
  
      this.setTime();
      this.init();
    }
  
    tick(hrs, mins, secs) {
      const degHrs = hrs / 12 * 360 + 90;
      const degMins = mins / 60 * 360 + 90;
      const degSecs = secs / 60 * 360 + 90;
  
      this.handHr.style.transform = `rotate(${degHrs}deg)`;
      this.handMin.style.transform = `rotate(${degMins}deg)`;
      this.handSec.style.transform = `rotate(${degSecs}deg)`;
  
      if (degSecs === 90) {
        this.handSec.style.transitionDuration = "0s";
      } else {
        this.handSec.style.transitionDuration = "0.1s";
      }
  
    }
  
    setTime() {
      const now = new Date();
      const hrs = now.getHours();
      const mins = now.getMinutes();
      const secs = now.getSeconds();
  
      this.tick(hrs, mins, secs);
    }
  
    init() {
      setInterval(this.setTime.bind(this), 1000);
    }}
  
  
  let clock = new Clock("new-clock");