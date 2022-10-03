import { Box, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Container } from "@mui/system";

import { fetchSingleResourceByType } from '../../data/queries';
import { resourcesTypes, vehiclesRelatedTypes } from "../../data/resourcesTypes";
import Tabs from "./components/Tabs";
import ButtonBack from "../../components/ButtonBack";

const VehicleDetail = () => {
    const { id } = useParams();
    const { data, status } = useQuery(`single-vehicle-${id}`, () => fetchSingleResourceByType(resourcesTypes.vehicles, id));
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
                        <p><span>Length:</span> {data.length}</p>
                        <p><span>Crew:</span> {data.crew}</p>
                        {status === 'success' && <Tabs mainResourceData={data} mainResourceType={resourcesTypes.films} relatedResources={vehiclesRelatedTypes} />}
                    </Box>
                </Container>
            }
        </>
    );
}

export default VehicleDetail;