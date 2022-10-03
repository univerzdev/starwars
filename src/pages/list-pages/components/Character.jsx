import { Link } from "react-router-dom";

import { transformUrl } from "../../../data/helpers";

const Character = (props) => {

    const { birth_year, name, height, mass, url, gender } = props.characterData;
    const transformedUrl = transformUrl(url);

    return (
        <>
            <h3><Link to={transformedUrl}>{name}</Link></h3>
            <p className={`gender ${gender}`}><span >{gender?.toUpperCase()}</span></p>
            <p><span>Birth Year:</span> {birth_year}</p>
            <p><span>Height:</span> {height} cm</p>
            <p><span>Mass:</span> {mass} kg</p>
        </>

    );
}
export default Character;