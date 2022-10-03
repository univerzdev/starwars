import { Link } from "react-router-dom";

import { transformUrl } from "../../../data/helpers";

const Specie = (props) => {

    const { name, average_height, language, url, average_lifespan } = props.specieData;
    const transformedUrl = transformUrl(url);

    return (
        <>
            <h3><Link to={transformedUrl}>{name}</Link></h3>
            <p><span>Average lifespan:</span> {average_lifespan}</p>
            <p><span>Average height:</span> {average_height}</p>
            <p><span>Language:</span> {language}</p>
        </>
    );
}
export default Specie;