import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {

    const navigate = useNavigate();

    return (
        <Button color='white' startIcon={<ArrowBack />} variant='outlined' onClick={() => navigate(-1)}>Back</Button>
    );
}
export default ButtonBack;