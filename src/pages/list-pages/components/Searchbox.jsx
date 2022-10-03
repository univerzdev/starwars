import { FormControl, Input, InputLabel } from "@mui/material";
import { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { AppContext } from "../../../contexts/app-context";
import { useCustomResourceQueryInfinite } from "../../../data/queries";

const SearchBox = () => {

    const location = useLocation();
    const resourceType = location.pathname.replace('/', '');
    const appContext = useContext(AppContext);
    const inputRef = useRef();
    const { data, status } = useCustomResourceQueryInfinite(resourceType, inputRef.current?.value);

    useEffect(() => {
        appContext.setSearchQuery(undefined);
        inputRef.current.value = '';
    }, [resourceType]);

    const changeHandler = e => {
        setTimeout(() => {
            appContext.setSearchQuery(inputRef.current.value);
        }, 1000);
    }

    return (
        <FormControl sx={{ width: '300px', marginTop: '30px', color: '#fff' }}>
            <InputLabel sx={{ color: '#fff', borderColor: '#fff' }}>Search...</InputLabel>
            <Input fullWidth id="search" inputRef={inputRef} onChange={changeHandler} type="text" />
        </FormControl>
    )
}
export default SearchBox;