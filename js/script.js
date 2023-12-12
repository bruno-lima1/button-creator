const form = document.querySelector("[data-controls]");
const button = document.querySelector("[data-button]");
const cssText = document.querySelector("[data-cssText]");
if (form && button && cssText) {
  form.addEventListener("change", handleStyle);
  const changeStyle = {
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
    backgroundColor(value) {
      this.element.style.backgroundColor = value;
    },
    color(value) {
      this.element.style.color = value;
    },
    texto(value) {
      this.element.innerHTML = value;
    },
    fontSize(value) {
      this.element.style.fontSize = value + "px";
    },
    border(value) {
      this.element.style.border = value;
    },
  };
  function handleStyle(event) {
    const { name, value } = event.target;
    changeStyle[name](value);
    showCssText();
    saveValues(name, value);
  }
  function showCssText() {
    cssText.innerHTML =
      "<span>" + button.style.cssText.split("; ").join("; </span><span>");
  }
  function saveValues(name, value) {
    localStorage[name] = value;
  }
  function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach((propertie) => {
      changeStyle[propertie](localStorage[propertie]);
      form.elements[propertie].value = localStorage[propertie];
    });
    showCssText();
  }
  setValues();
}
