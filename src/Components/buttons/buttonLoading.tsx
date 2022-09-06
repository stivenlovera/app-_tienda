import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';

interface Props{
    label:string;
    loading:boolean;
    onClick:boolean;
}

/* const [loading, setLoading] = useState(false);
const handlerClick = () => {
    setLoading(true)
} */

export const ButtonLoading = ({label,loading}:Props) => {
    return (
        <LoadingButton
            color="secondary"
            //onClick={handlerClick}
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
        >
            {label}
        </LoadingButton>
    )
}