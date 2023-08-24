function ElectricalAppliance (name, manufacturer, power, turn) {
  this.name= name;  
  console.log(`The ${this.name} is manufacturied by ${manufacturer}.`);
  console.log(`Power Consumption of the ${this.name} is ${power} W.`);
  console.log(`The ${this.name} is switched ${turn}.`);
}

const iron = new ElectricalAppliance('iron', 'Tefal', 650, 'on');

const lamp = new ElectricalAppliance('lamp', 'Xiaomi', 50, 'off');