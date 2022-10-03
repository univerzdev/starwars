import { Link } from "react-router-dom";

import { transformUrl } from "../../../data/helpers";

const Film = (props) => {
    
    const { title, url, release_date, producer, opening_crawl } = props.filmData;
    const transformedUrl = transformUrl(url);

    return (
        <>
            <h3><Link to={transformedUrl}>{title} ({release_date.substr(0, release_date.indexOf('-'))})</Link></h3>
            <p><span>Producer:</span> {producer}</p>
            <p>{opening_crawl}</p>
            <p><span>Release date:</span> {release_date}</p>
        </>
    );
}
export default Film;