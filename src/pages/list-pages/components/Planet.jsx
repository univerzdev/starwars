import { Link } from "react-router-dom";

import { transformUrl } from "../../../data/helpers";

const Planet = (props) => {
    const { name, gravity, terrain, population, url } = props.planetData;
    const transformedUrl = transformUrl(url);
    return (
        <>
            <h3><Link to={transformedUrl}>{name}</Link></h3>
            <p><span>Terrain:</span> {terrain}</p>
            <p><span>Gravity:</span> {gravity}</p>
            <p><span>Population:</span> {population}</p>
        </>
    );
}
export default Planet;