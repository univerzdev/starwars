import { SupervisedUserCircleOutlined } from "@mui/icons-material";
import { Button, Container, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { NavLink, useLocation } from "react-router-dom";

import { fetchResources } from "../../../data/queries";
import SearchBox from "./Searchbox";

const FilterPanel = () => {

    const { isLoading, data: resourcesObject } = useQuery('resources', fetchResources);
    const resources = resourcesObject && Object.keys(resourcesObject);
    const location = useLocation();
    const resourceType = location.pathname.replace('/', '');

    return (
        <Container>
            <Grid className="filters" container justifyContent='center' sx={{ marginTop: '20px' }} spacing={2}>

                {!isLoading && resources.map((resource) => {
                    return (
                        <Grid item key={resource}>
                            <NavLink key={resource} className='resources-button' to={`/${resource}`} ><Button key={resource} variant={resourceType === resource ? "contained" : "outlined"} startIcon={<SupervisedUserCircleOutlined />} color='inherit'>{resource}</Button></NavLink>
                        </Grid>
                    )
                }
                )}

            </Grid>
            <Grid container justifyContent='center' sx={{ marginBottom: '20px' }}>
                <SearchBox />
            </Grid>
        </Container>
    );
}
export default FilterPanel;