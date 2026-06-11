AFRAME.registerComponent("blink", {
  schema: { interval: { default: 500 } },
  init: function () {
    this.lastToggle = 0;
  },
  tick: function (time) {
    if (time - this.lastToggle > this.data.interval) {
      const v = this.el.getAttribute("visible");
      this.el.setAttribute("visible", !v);
      this.lastToggle = time;
    }
  }
});

AFRAME.registerComponent('cone-click-color', {
  init: function () {
    let colors = ['#E83929', '#F5CBA7', '#884EA0', '#FFFFFF'];
    let currentIndex = 0;
    this.el.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % colors.length;
      this.el.setAttribute('color', colors[currentIndex]);
    });
  }
});

AFRAME.registerComponent("look-at-camera", {
  init: function () {
    this.cam = document.querySelector("[camera]") || document.querySelector("a-camera");
  },
  tick: function () {
    if (!this.cam) return;
    this.el.object3D.lookAt(this.cam.object3D.position);
  }
});