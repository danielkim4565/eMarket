import { useState } from "react";
import axios from "axios";
import { Alert } from '@mui/material';
import { CustomError } from '@emarketproject/common'

export const useFetch = ({url, method, body, onSuccess}) => {
    const [errors, setErrors] = useState(null);

    const doFetch = async () => {
        try {
            setErrors(null);
            const response = await axios[method](url, body);
            return response.data;
        } catch(err) {
            if (Object.hasOwn(err, 'response')) {
                setErrors(
                    <div className="alert alert-danger">
                      <h4>Ooops....</h4>
                      <ul className="my-0">
                        {err.response?.data?.errors?.map(err => (
                          <li key={err.message}>{err.message}</li>
                        ))}
                      </ul>
                    </div>
                  );
            } else {
                console.log(err)
                setErrors(
                    <div>
                        Unknown Error
                    </div>
                );
            }
        }
    }
    
    return {doFetch, errors};
}
