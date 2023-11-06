const template = document.createElement("template");
template.innerHTML = /*html*/ `
<style>
  .battery {
    display: flex;
    align-items: center;
  }
  .battery-box {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    border: 2px solid #cbd5e0;
    display: flex;
    position: relative;
    min-height: 2rem;
    min-width: 4rem;
  }

  .battery-top {
    border-right: 8px solid #cbd5e0;
    height: 1rem;
    border-top-right-radius: 0.25rem;
  }

  .battery-text-container {
    cursor: default;
    background-color: #68d391;
    font-size: 0.75rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;
    text-align: center;
    color: #ffffff;
  }

  .battery-text {
    padding: 0.5rem;
    position: absolute;
    color: #7d7d7d;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .charge-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
<div class="battery">
  <div class="battery-box">
    <div class="battery-text-container" id="battery-bar">
      <div class="battery-text" id="battery-text"></div>
    </div>
  </div>
  <div class="battery-top"></div>
</div>
`;

class BatteryComponent extends HTMLElement {
  constructor() {
    super();
    this.battery = {
      hasBattery: this.getAttribute("hasBattery"),
      cycleCount: this.getAttribute("cycleCount"),
      isCharging: this.getAttribute("isCharging"),
      designedCapacity: this.getAttribute("designedCapacity"),
      maxCapacity: this.getAttribute("maxCapacity"),
      currentCapacity: this.getAttribute("currentCapacity"),
      voltage: this.getAttribute("voltage"),
      capacityUnit: this.getAttribute("capacityUnit"),
      percent: this.getAttribute("percent"),
      timeRemaining: this.getAttribute("timeRemaining"),
      acConnected: this.getAttribute("acConnected"),
      type: this.getAttribute("type"),
      model: this.getAttribute("model"),
      manufacturer: this.getAttribute("manufacturer"),
      serial: this.getAttribute("serial"),
    };
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.update(this.battery);
  }

  update(battery) {
    const percentage = battery.percent + "%";
    if (battery.isCharging) {
      this.shadowRoot.getElementById(
        "battery-text"
      ).innerHTML = /*html*/ `<svg class="charge-icon" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>`;
    } else{
      this.shadowRoot.getElementById("battery-text").innerHTML = percentage;
    }
    const bar = this.shadowRoot.getElementById('battery-bar');
    bar.style.width = percentage
    if(battery.percent > 90){
    bar.style.backgroundColor = '#68d391';
    } else if(battery.percent > 50){
    bar.style.backgroundColor = '#cbd5e0';
    } else if(battery.percent > 20){
    bar.style.backgroundColor = '#f6e05e';
    } else if(battery.percent > 0){
    bar.style.backgroundColor = '#fc8181';
      
    }
  }
}

customElements.define("battery-component", BatteryComponent);
