import { Link } from "react-router-dom"
import { Starship } from "../models/Starship"

type StarshipCardProps = {
  starship: Starship
}

export const StarshipList = ({ starship }: StarshipCardProps) => {
  return (
      <div className="col-md-6 col-lg-4">
        <div className="starship-card">
          <img src={starship.image} alt={starship.name} />
        </div>
        <h3 className="text-center ship-name">{starship.name}</h3>
        <div className="text-center">
          <Link className="view-starship" to={`/starships/${starship.id}`}>View {starship.name}</Link>
        </div>
      </div>
  )
}