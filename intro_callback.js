// Function.prototype.myBind = function(context) {
//   return () => {
//     return this.apply(context);
//   }
// }

// class Lamp {
//     constructor() {
//       this.name = "a lamp";
//     }
//   }
  
//   const turnOn = function() {
//     console.log("Turning on " + this.name);
//   };
  
//   const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
//   const boundTurnOn = turnOn.bind(lamp);
//   const myBoundTurnOn = turnOn.myBind(lamp);
  
//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"

class Clock {
  constructor() {
    const currentDate = new Date();
    this.hours = currentDate.getHours();
    this.minutes = currentDate.getMinutes();
    this.seconds = currentDate.getSeconds(); 
    const tick = this._tick.bind(this)
    setInterval(tick, 1000);
  }

  printTime() {
    if (this.hours === 24) {
      this.hours = 0;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    this.printTime();
  }
}

const clock = new Clock();
// clock._tick();