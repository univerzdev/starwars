export const resourcesTypes = {
    people: 'people',
    planets: 'planets',
    films: 'films',
    species: 'species',
    vehicles: 'vehicles',
    starships: 'starships'
}

export const peopleRelatedTypes = {
    films: resourcesTypes.films,
    species: resourcesTypes.species,
    vehicles: resourcesTypes.vehicles,
    starships: resourcesTypes.starships
};

export const filmsRelatedTypes = {
    characters: resourcesTypes.people,
    planets: resourcesTypes.planets,
    species: resourcesTypes.species,
    vehicles: resourcesTypes.vehicles,
    starships: resourcesTypes.starships
};

export const planetsRelatedTypes = {
    residents: resourcesTypes.people,
    films: resourcesTypes.films,
};

export const starshipsRelatedTypes = {
    pilots: resourcesTypes.people,
    films: resourcesTypes.films,
};

export const vehiclesRelatedTypes = {
    pilots: resourcesTypes.people,
    films: resourcesTypes.films,
};

export const speciesRelatedTypes = {
    people: resourcesTypes.people,
    films: resourcesTypes.films,
};