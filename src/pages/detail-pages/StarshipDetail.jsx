import { Box, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Container } from "@mui/system";

import { fetchSingleResourceByType } from '../../data/queries';
import { resourcesTypes, starshipsRelatedTypes } from "../../data/resourcesTypes";
import Tabs from "./components/Tabs";
import ButtonBack from "../../components/ButtonBack";

const StarshipDetail = () => {

    const { id } = useParams();
    const { data, status } = useQuery(`single-starship-${id}`, () => fetchSingleResourceByType(resourcesTypes.starships, id));
    return (
        <>
            {status === 'loading' ?
                <Box sx={{ width: '100%', backgroundColor: '#fff' }}><LinearProgress />
                </Box>
                :
                <Container>
                    <ButtonBack />
                    <Box className="detail-card">
                        <h1>{data.name}</h1>
                        <p><span>Manufacturer:</span> {data.manufacturer}</p>
                        <p><span>Max atmosphering speed:</span> {data.max_atmosphering_speed}</p>
                        <p><span>Crew:</span> {data.crew}</p>
                        <p><span>Passengers:</span> {data.passengers}</p>
                    </Box>
                    {status === 'success' && <Tabs mainResourceData={data} mainResourceType={resourcesTypes.films} relatedResources={starshipsRelatedTypes} />}
                </Container>
            }
        </>
    );
}
export default StarshipDetail;