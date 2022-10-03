import { Box, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Container } from "@mui/system";

import { fetchSingleResourceByType } from '../../data/queries';
import { resourcesTypes, speciesRelatedTypes } from "../../data/resourcesTypes";
import Tabs from "./components/Tabs";
import ButtonBack from "../../components/ButtonBack";

const SpecieDetail = () => {

    const { id } = useParams();
    const { data, status } = useQuery(`single-specie-${id}`, () => fetchSingleResourceByType(resourcesTypes.species, id));
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
                        <p><span>Average lifespan:</span> {data.average_lifespan}</p>
                        <p><span>Average height:</span> {data.average_height}</p>
                        <p><span>Language:</span> {data.language}</p>
                    </Box>
                    {status === 'success' && <Tabs mainResourceData={data} mainResourceType={resourcesTypes.films} relatedResources={speciesRelatedTypes} />}
                </Container>
            }
        </>
    );
}
export default SpecieDetail;