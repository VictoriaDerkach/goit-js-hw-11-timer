import './styles.css';
const MILLISEC_DAY = 1000 * 60 * 60 * 24;
const MILLISEC_HOUR = 1000 * 60 * 60;
const MILLISEC_MIN = 1000 * 60;

class CountdownTimer {
  constructor(params) {
    this.targetDate = params.targetDate;
    this.timerSelector = params.selector;
    this.timerElement = document.querySelector(params.selector);
    this.daysEl = this.timerElement.querySelector('[data-value="days"]');
    this.hoursEl = this.timerElement.querySelector('[data-value="hours"]');
    this.minsEl = this.timerElement.querySelector('[data-value="mins"]');
    this.secsEl = this.timerElement.querySelector('[data-value="secs"]');

    this.run();
  }

  run() {
    this.timerID = setInterval(() => {
      const curDate = new Date();
      const timeLeft = this.targetDate - curDate;
      if (timeLeft <= 0) {
        clearInterval(this.timerID);
        console.log('Happy New Year!');
        return;
      }

      this.daysEl.textContent = Math.floor(timeLeft / MILLISEC_DAY);
      this.hoursEl.textContent = Math.floor(
        (timeLeft % MILLISEC_DAY) / MILLISEC_HOUR,
      );
      this.minsEl.textContent = Math.floor(
        (timeLeft % MILLISEC_HOUR) / MILLISEC_MIN,
      );
      this.secsEl.textContent = Math.floor((timeLeft % MILLISEC_MIN) / 1000);
    }, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});
