class RangeSliderComponent {
  constructor({ initialValue = 0 }) {
    this.$root = this.createRoot({ initialValue });
    setTimeout(() => this.setValue(initialValue), 0);
  }

  createRoot({ initialValue }) {
    const root = document.createElement("label");
    root.classList.add("range-slider");

    const value = document.createElement("span");
    value.classList.add("range-slider-value");
    value.innerText = initialValue;

    const input = document.createElement("input");
    input.value = initialValue;
    input.classList.add("range-slider-input");
    input.setAttribute("type", "range");
    input.setAttribute("min", 0);
    input.setAttribute("max", 100);
    input.addEventListener("input", (event) => {
      this.setValue(Number(event.target.value));
    });

    root.append(value, input);

    return root;
  }

  setValue(value) {
    const valueEl = this.$root.querySelector(".range-slider-value");
    const { width } = valueEl.getBoundingClientRect();
    valueEl.style.left = `${value}%`;
    valueEl.style.transform = `translate(calc(-40% - ${
      (width / 4) * (value / 100)
    }px), -125%)`;
    valueEl.textContent = value;
  }
}

document.body.append(new RangeSliderComponent({ initialValue: 0 }).$root);