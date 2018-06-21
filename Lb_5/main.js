let vm = new Vue({
  el: ".app",
  data: {
    step: 1300,
    pickedMath: "",
    pickedHistory: "",
    pickedPhysics: "",
    pickedCs: "",
    result: "",
    imgLink: "",
    isDisplayed: false
  },
  methods: {
    stipCalc() {
      let a = this.pickedMath;
      let b = this.pickedHistory;
      let c = this.pickedPhysics;
      let d = this.pickedCs;
      let st = this.step;
      let min;
      let max;
      let m = 0;

      if (a > b) {
        min = b;
        max = a;
      } else {
        max = b;
        min = a;
      }

      if (b > max) max = b;
      if (c > max) max = c;
      if (d > max) max = d;

      if (b < min) min = b;
      if (c < min) min = c;
      if (d < min) min = d;

      if (min === 5) {
        m = 1;
      } else if (max === 5 && min === 4) {
        m = 0.75;
      } else if (max === 4 && min === 4) {
        m = 0.5;
      }

      if (m === 0) {
        this.result = "Вам стипендия не назначена";
      } else {
        this.result = "Baм назначена стипендия в размере " + st * m + " грн.";
      }
    },
    resetValues() {
      this.step = 1100;
      this.pickedMath = "";
      this.pickedHistory = "";
      this.pickedPhysics = "";
      this.pickedCs = "";
      this.result = "";
    }
  }
});
