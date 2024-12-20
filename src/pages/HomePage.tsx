import { useEffect, useState } from "react"
import { starshipsService } from "../services/StarshipsService";
import { AppState } from "../AppState";
import { StarshipList } from "../components/StarshipList";
import Pop from "../utils/Pop";

export default function HomePage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieveStarships = async () => {
      try {
        setLoading(true);
        await starshipsService.getStarships();

        setLoading(false)
      } catch (e) {
        Pop.error(e as Error);
      }
    }

    retrieveStarships();
  }, [])

  const starships = AppState.starships;

  return (
    <section className="container">
      <div className="row gy-2">
        { loading ? <h1 className="text-center loading-design">Loading...</h1> : starships.map(s => (<StarshipList key={s.id} starship={s} />)) }
      </div>
    </section>
  )
}