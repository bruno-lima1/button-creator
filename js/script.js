const controls = document.querySelector("[data-controls]");
const button = document.querySelector("[data-button]");
const cssText = document.querySelector("[data-cssText]");
if (controls && button) {
  controls.addEventListener("change", handleButton);
  function handleButton(event) {
    const name = event.target.name;
    const value = event.target.value;
    handleStyle[name](value);
    showCss();
  }
  const handleStyle = {
    element: button,
    width(value) {
      this.element.style.width = value + "px";
    },
    height(value) {
      this.element.style.height = value + "px";
    },
    borderRadius(value) {
      this.element.style.borderRadius = value + "px";
    },
    fontFamily(value) {
      this.element.style.fontFamily = value;
    },
    color(value) {
      this.element.style.color = value;
    },
    backgroundColor(value) {
      this.element.style.backgroundColor = value;
    },
    texto(value) {
      this.element.innerText = value;
    },
    fontSize(value) {
      this.element.style.fontSize = value + "rem";
    },
    border(value) {
      this.element.style.border = value;
    },
  };
  function showCss() {
    cssText.innerHTML = "<span>" + button.style.cssText.split("; ").join("; </span><span>");
  }
}
