
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Grid } from "@mui/material";

import Character from "../../list-pages/components/Character";
import Film from "../../list-pages/components/Film";
import Planet from "../../list-pages/components/Planet";
import Specie from "../../list-pages/components/Specie";
import Starship from "../../list-pages/components/Starship";
import Vehicle from "../../list-pages/components/Vehicle";
import { resourcesTypes } from "../../../data/resourcesTypes";
import { fetchResourcesByUrls } from "../../../data/queries";

const RelatedResourceTypeList = (props) => {

    const { id } = useParams();
    const { mainResourceData, mainResourceType, relatedResourceType } = props;
    const { data, status, isLoading } = useQuery([`${mainResourceType}-${id}-${relatedResourceType}`, mainResourceData], () => fetchResourcesByUrls(mainResourceData), { enabled: !!mainResourceData });

    if (isLoading) {
        return (
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}><CircularProgress />
            </Box>
        );
    }

    const componentToRender = (data) => {
        switch (relatedResourceType) {
            case resourcesTypes.films:
                return <Film key={'list-item-' + data.title} filmData={data} />;
            case resourcesTypes.people:
                return <Character key={'list-item-' + data.name} characterData={data} />;
            case resourcesTypes.planets:
                return <Planet key={'list-item-' + data.name} planetData={data} />;
            case resourcesTypes.species:
                return <Specie key={'list-item-' + data.name} specieData={data} />;
            case resourcesTypes.starships:
                return <Starship key={'list-item-' + data.name} starshipData={data} />;
            case resourcesTypes.vehicles:
                return <Vehicle key={'list-item-' + data.name} vehicleData={data} />;
        }
    }

    return (
        <>
            <Grid container spacing={{ xs: 1, md: 2 }}>
                {status === 'success' && data.map((item) =>
                    <Grid key={item.name ? item.name : item.title} item xs={12} md={6}>
                        <Box key={item.name ? item.name : item.title} className="grid-item">{componentToRender(item)}
                        </Box>
                    </Grid>)}
            </Grid>
            {data.length === 0 && <p className="no-data">No data found.</p>}
        </>
    );
}
export default RelatedResourceTypeList;