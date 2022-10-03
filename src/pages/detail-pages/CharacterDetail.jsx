import { Box, LinearProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Container } from "@mui/system";

import { fetchSingleResourceByType } from '../../data/queries';
import { peopleRelatedTypes, resourcesTypes } from "../../data/resourcesTypes";
import Tabs from "./components/Tabs";
import ButtonBack from "../../components/ButtonBack";

const CharacterDetail = () => {

    const { id } = useParams();
    const { data, status } = useQuery(`single-character-${id}`, () => fetchSingleResourceByType(resourcesTypes.people, id));

    return (
        <>
            {status === 'loading' ?
                <LinearProgress />
                :
                <Container>
                    <ButtonBack />
                    <Box className="detail-card">
                        <h1>{data.name}</h1>
                        <p className={`gender ${data.gender}`}><span >{data.gender?.toUpperCase()}</span></p>
                        <p><span>Birth Year:</span> {data.birth_year}</p>
                        <p><span>Height:</span> {data.height} cm</p>
                        <p><span>Mass:</span> {data.Boxmass} kg</p>
                    </Box>
                    {status === 'success' && <Tabs mainResourceData={data} mainResourceType={resourcesTypes.films} relatedResources={peopleRelatedTypes} />}
                </Container>
            }
        </>
    );
}

export default CharacterDetail;