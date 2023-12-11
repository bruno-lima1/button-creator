const controls = document.querySelector("[data-controls]");
const button = document.querySelector("[data-button]");
const cssText = document.querySelector("[data-cssText]");
if (controls && button) {
  controls.addEventListener("change", handleButton);
  function handleButton(event) {
    const { name, value } = event.target;
    handleStyle[name](value);
    showCss();
    saveValues(name, value);
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
      this.element.style.fontSize = value + "px";
    },
    border(value) {
      this.element.style.border = value;
    },
  };
  function showCss() {
    cssText.innerHTML =
      "<span>" + button.style.cssText.split("; ").join("; </span><span>");
  }
  function saveValues(name, value) {
    localStorage[name] = value;
  }
  function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach((propertie) => {
      handleStyle[propertie](localStorage[propertie]);
      controls.elements[propertie].values = localStorage[propertie];
    });
    showCss();
  }
  setValues();
}
