class ElectricalAppliance {
  constructor(name, manufacturer, power, turn) {
    this.name= name;
    this.manufacturer = manufacturer;
    this.power = power;
    this.turn = turn;
  }
  
  getInfo() {
    console.log(`The ${this.name} is manufacturied by ${this.manufacturer}.`);
    console.log(`Power Consumption of the ${this.name} is ${this.power} W.`);
    console.log(`The ${this.name} is switched ${this.turn}.`);
  }
}

const iron = new ElectricalAppliance('iron', 'Tefal', 650, 'on');
iron.getInfo();

const lamp = new ElectricalAppliance('lamp', 'Xiaomi', 50, 'off');
lamp.getInfo();