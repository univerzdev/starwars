import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Box, LinearProgress, Container, CircularProgress, Grid } from "@mui/material";

import { resourcesTypes } from "../../data/resourcesTypes";
import { useCustomResourceQueryInfinite } from "../../data/queries";
import { AppContext } from "../../contexts/app-context";
import Film from "./components/Film";
import Character from "./components/Character";
import Planet from "./components/Planet";
import Specie from "./components/Specie";
import Starship from "./components/Starship";
import Vehicle from "./components/Vehicle";
import FilterPanel from "./components/FilterPanel";

const ListPage = (props) => {

    const { resourceType } = props;
    const searchQuery = useContext(AppContext).searchQuery;
    const { ref, inView } = useInView();
    const {
        status,
        data,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,

    } = useCustomResourceQueryInfinite(resourceType, searchQuery);

    useEffect(() => {
        fetchNextPage()
    }, [inView, fetchNextPage]);

    const componentToRender = (data) => {
        switch (resourceType) {
            case resourcesTypes.films:
                return <Film key={data.title} filmData={data} />;
            case resourcesTypes.people:
                return <Character key={data.name} characterData={data} />;
            case resourcesTypes.planets:
                return <Planet key={data.name} planetData={data} />;
            case resourcesTypes.species:
                return <Specie key={data.name} specieData={data} />;
            case resourcesTypes.starships:
                return <Starship key={data.name} starshipData={data} />;
            case resourcesTypes.vehicles:
                return <Vehicle key={data.name} vehicleData={data} />;
            default:
                return <></>;
        }
    }
  
    return (
        <>
            <FilterPanel />
            <Container sx={{marginBottom: '40px'}}>
                {(status === 'loading' || status === 'error') &&
                    <LinearProgress />}
                {status === 'success' &&
                <Grid container spacing={{ xs: 1, md: 2 }}>
                        {data.pages.map((page) => (
                            <React.Fragment key={page.results[0].name ? page.results[0].name : page.results[0].title}>
                                {page.results.map(itemData => (
                                    <Grid key={itemData.name ? itemData.name : itemData.title} item xs={12} md={6}>
                                    <Box key={itemData.name ? itemData.name : itemData.title} className="grid-item">{componentToRender(itemData)}</Box>
                                    </Grid>

                                ))}
                            </React.Fragment>))}
                    </Grid>
                    }
                <Box sx={{ textAlign: 'center' }}>
                    {hasNextPage && <p ref={ref} onClick={() => fetchNextPage()}>Loading...</p>}
                    {isFetchingNextPage && <CircularProgress />}
                    {status === 'success' ? data.pages[0].count === 0 && <p className="no-data">No data found.</p> : <></>}
                </Box>
            </Container>

        </>
    );
}

export default ListPage;