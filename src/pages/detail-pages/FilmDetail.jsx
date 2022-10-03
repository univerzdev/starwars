import { Box, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Container } from "@mui/system";

import { fetchSingleResourceByType } from '../../data/queries';
import { filmsRelatedTypes, resourcesTypes } from "../../data/resourcesTypes";
import Tabs from "./components/Tabs";
import ButtonBack from "../../components/ButtonBack";

const FilmDetail = () => {

    const { id } = useParams();
    const { data, status } = useQuery(`single-film-${id}`, () => fetchSingleResourceByType(resourcesTypes.films, id));

    return (
        <>
            {status === 'loading' ?
                <Box sx={{ width: '100%', backgroundColor: '#fff' }}><LinearProgress />
                </Box>
                :
                <Container>
                    <ButtonBack />
                    <Box className="detail-card">
                        <h1>{data.title}</h1>
                        <p style={{ textAlign: 'center' }}><span>Release date: </span>{data.release_date}</p>
                        <p style={{ textAlign: 'center' }}><span>Director: </span>{data.director}</p>
                        <p style={{ textAlign: 'center' }}><span>Producer: </span>{data.producer}</p>
                        <p style={{ textAlign: 'center' }}>{data.opening_crawl}</p>
                    </Box>
                    {status === 'success' && <Tabs mainResourceData={data} mainResourceType={resourcesTypes.films} relatedResources={filmsRelatedTypes} />}
                </Container>
            }
        </>
    );
}

export default FilmDetail;