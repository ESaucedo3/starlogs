import { AppState } from "../AppState";
import { Starship } from "../models/Starship";
import { api } from "./AxiosService";

class StarshipsService {
  async getStarships() {
    const response = await api.get('api/starships');
    AppState.starships = response.data.map((s: Starship) => new Starship(s));
  }

  async getStarship(starshipId: string) {
    const response = await api.get(`api/starships/${starshipId}`);
    console.log(response.data);
  }

  async getStarshipCrew(starshipId: string) {
    const response = await api.get(`api/starships/${starshipId}/crew?_limit=10`);
    console.log(response.data);
  }

  async getStarshipLogs(starshipId: string) {
    const response = await api.get(`api/starships/${starshipId}/logs?_limit=10`);
    console.log(response.data);
  }
}

export const starshipsService = new StarshipsService();