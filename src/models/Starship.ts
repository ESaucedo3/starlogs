export class Starship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  status: string;
  image: string;

  constructor(data: Starship) {
    this.id = data.id;
    this.name = data.name;
    this.model = data.model;
    this.manufacturer = data.manufacturer;
    this.status = data.status;
    this.image = data.image;
  }
}

export class StarshipDetails extends Starship {
  crewCapacity: number
  yearCommisioned: string
  starbaseDocked: string
  missions: string[]
  notableFeatures: string[]
  historicalEvents: string[]
  weaponSystems: string []
  crewCount: number
  logCount: number

  constructor(data: StarshipDetails) {
    super(data);
    this.crewCapacity = data.crewCapacity;
    this.yearCommisioned = data.yearCommisioned;
    this.starbaseDocked = data.starbaseDocked;
    this.missions = data.missions;
    this.notableFeatures = data.notableFeatures;
    this.historicalEvents = data.historicalEvents;
    this.weaponSystems = data.weaponSystems;
    this.crewCount = data.crewCount;
    this.logCount = data.logCount;
  }
}