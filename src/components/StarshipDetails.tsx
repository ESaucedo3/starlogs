import { observer } from "mobx-react";
import { AppState } from "../AppState";

export const StarshipDetails = observer(() => {
  const starship = AppState.activeStarship;

  if (!starship) return <h1>Locating starship withing the vastness of space. 🌠</h1>

  return (
    <h1>{starship.name}</h1>
  )
})