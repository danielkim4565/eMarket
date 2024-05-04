import { useState } from "react";
import axios from "axios";

export const useFetch = ({url, method, body, onSuccess}) => {
    const [errors, setErrors] = useState(null);

    const doFetch = async () => {
        try {
            setErrors(null);
            const response = await axios[method](url, body);
            return response.data;
        } catch(err) {
            setErrors(err);
        }
    }
    
    return {doFetch, errors};
}
