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