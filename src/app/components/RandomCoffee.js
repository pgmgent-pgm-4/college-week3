import { useEffect, useState } from 'react';

import Error from './Error';
import Loading from './Loading';
import React from 'react';
import axios from 'axios';

const API_URL = 'https://random-data-api.com/api/coffee/random_coffee';

const RandomCoffee = () => {
    const [coffee, setCoffee] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setCoffee(response.data);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            <h2>Random Coffee</h2>
            {
                error ? <Error>{error}</Error> :
                isLoading || !coffee ?
                    <Loading /> :
                    <div>{coffee.blend_name}</div>
            }
        </div>
    )
}

export default RandomCoffee
