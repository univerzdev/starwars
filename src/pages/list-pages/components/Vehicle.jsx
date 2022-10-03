import { Link } from "react-router-dom";

import { transformUrl } from "../../../data/helpers";

const Vehicle = (props) => {

    const { name, url, manufacturer, length, crew } = props.vehicleData;
    const transformedUrl = transformUrl(url);

    return (
        <>
            <h3><Link to={transformedUrl}>{name}</Link></h3>
            <p><span>Manufacturer:</span> {manufacturer}</p>
            <p><span>Length:</span> {length}</p>
            <p><span>Crew:</span> {crew}</p>
        </>
    );
}
export default Vehicle;