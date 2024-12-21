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
        // await starshipsService.getStarshipCrew(starshipId);
        // await starshipsService.getStarshipLogs(starshipId);
        setLoading(false);
      } catch (e) {
        Pop.error(e as Error);
      }
    }

    retrieveStarship();
  })

  const starship = AppState.activeStarship;

  return (
   <section className="container">
    <div className="row starship-details-design text-light">
      <div className="col-7 mx-auto">
        <h1 className="text-center">{starship?.name}</h1>
        <div className="w-50 mx-auto">
          <img src={starship?.image} alt={starship?.name} />
        </div>
      </div>
      <div className="col-md-6">
        <div>
          
        </div>
      </div>
      <div className="col-md-6">Hey</div>
    </div>
   </section>
  )
}