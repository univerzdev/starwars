import { Box, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Container } from "@mui/system";

import { fetchSingleResourceByType } from '../../data/queries';
import { planetsRelatedTypes, resourcesTypes } from "../../data/resourcesTypes";
import Tabs from "./components/Tabs";
import ButtonBack from "../../components/ButtonBack";

const PlanetDetail = () => {
    const { id } = useParams();
    const { data, status } = useQuery(`single-planet-${id}`, () => fetchSingleResourceByType(resourcesTypes.planets, id));

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
                        <p><span>Terrain:</span> {data.terrain}</p>
                        <p><span>Gravity:</span> {data.gravity}</p>
                        <p><span>Population:</span> {data.population}</p>
                    </Box>
                    {status === 'success' && <Tabs mainResourceData={data} mainResourceType={resourcesTypes.films} relatedResources={planetsRelatedTypes} />}
                </Container>
            }
        </>
    );
}

export default PlanetDetail;