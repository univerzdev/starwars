
import { useInfiniteQuery } from "react-query";


export const fetchResources = async () => {
    const response = await fetch('https://swapi.dev/api/');
    if (!response.ok) {
        throw new Error('Something were wrong');
    }
    const data = await response.json();

    return data;
};

export const fetchResourceData = async (type, page = 1, searchTerm = undefined) => {
    if (searchTerm) {
        const response = await fetch(`https://swapi.dev/api/${type}/?search=${searchTerm}`);
        if (!response.ok) {
            throw new Error('Something were wrong');
        }
        const data = await response.json();
        return data;
    }
    else {
        const response = await fetch(`https://swapi.dev/api/${type}/?page=${page}`);
        if (!response.ok) {
            throw new Error('Something were wrong');
        }
        const data = await response.json();
        return data;
    }

};

export const fetchSingleResourceByType = async (type, id) => {
    const response = await fetch(`https://swapi.dev/api/${type}/${id}`);
    if (!response.ok) {
        throw new Error('Something were wrong');
    }
    const data = await response.json();
    return data;
};

export const fetchResourcesByUrls = async (urls, page = 1) => {
    let resources = [];
    for (const url of urls) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Something were wrong');
        }
        const data = await response.json();
        resources.push(data);
    };
    return resources;
};

export const useCustomResourceQueryInfinite = (resourceType, searchTerm = undefined) => {

    return useInfiniteQuery(
        [resourceType, searchTerm],
        ({ pageParam = 1 }) => fetchResourceData(resourceType, pageParam, searchTerm),
        {
            getPreviousPageParam: (firstPage, pages) => firstPage.previous?.charAt(firstPage.next.length - 1),
            getNextPageParam: (lastPage) => lastPage.next?.charAt(lastPage.next.length - 1)
        }
    )
};
