import { useState } from "react";
import axios from "axios";
import { Alert } from '@mui/material';

export const useFetch = ({url, method, body, onSuccess}) => {
    const [errors, setErrors] = useState(null);

    const doFetch = async () => {
        try {
            setErrors(null);
            const response = await axios[method](url, body);
            onSuccess(response.data);
            return response.data;
        } catch(err) {
            console.log(err.response.data);
            setErrors(
                <div>
                    {err.response.data.map(error => (
                        <Alert sx={{
                            marginTop: 1,
                            display: 'flex',
                        }} severity="error">{error.message}</Alert>
                    ))}
                </div>
            );
        }
    }
    
    return {doFetch, errors};
}
