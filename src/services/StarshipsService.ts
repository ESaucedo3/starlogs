import { AppState } from "../AppState";
import { Starship, StarshipDetails } from "../models/Starship";
import { api } from "./AxiosService";

class StarshipsService {
  async getStarships() {
    const response = await api.get('api/starships');
    AppState.starships = response.data.map((s: Starship) => new Starship(s));
  }

  async getStarship(starshipId: string) {
    const response = await api.get(`api/starships/${starshipId}`);
    const starship = new StarshipDetails(response.data);
    AppState.activeStarship = starship;
  }

  async getStarshipCrew(starshipId: string) {
    const response = await api.get(`api/starships/${starshipId}/crew`);
    console.log(response.data);
  }

  async getStarshipLogs(starshipId: string) {
    const response = await api.get(`api/starships/${starshipId}/logs`);
    console.log(response.data);
  }
}

export const starshipsService = new StarshipsService();