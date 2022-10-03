

import { Link } from "react-router-dom";
import { transformUrl } from "../../../data/helpers";

const Starship = (props) => {

    const { name, url, manufacturer, crew, max_atmosphering_speed, passengers } = props.starshipData;
    const transformedUrl = transformUrl(url);

    return (
        <>
            <h3><Link to={transformedUrl}>{name}</Link></h3>
            <p><span>Manufacturer:</span> {manufacturer}</p>
            <p><span>Max atmosphering speed:</span> {max_atmosphering_speed}</p>
            <p><span>Crew:</span> {crew}</p>
            <p><span>Passengers:</span> {passengers}</p>
        </>
    );
}
export default Starship;