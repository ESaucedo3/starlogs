import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { starshipsService } from "../services/StarshipsService";

export default function StarshipPage() {
  const { starshipId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const retrieveStarship = async () => {
      try {
        await starshipsService.getStarship(starshipId);
        await starshipsService.getStarshipCrew(starshipId);
        await starshipsService.getStarshipLogs(starshipId);
        setLoading(true);
      } catch (e) {
        Pop.error(e as Error);
      }
    }

    retrieveStarship();
  })

  const starship = AppState.activeStarship;

  return (
   <div>
    {starship ? <p>STARSHIP</p> : <h1>???</h1>}
   </div> 
  )
}