import { useEffect, useState } from 'react';

import Error from './Error';
import Loading from './Loading';
import React from 'react'

const API_URL = 'https://random-data-api.com/api/beer/random_beer';

const RandomBeer = () => {
    const [beer, setBeer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(response => {
                if(!response.ok) {
                    setError('Something went wrong...');
                    throw Error('Something went wrong', response.statusText);
                }

                return response.json();
            })
            .then(data => {
                setBeer(data);
            })
            .catch(error => {
                setError(`Error fetching data: ${error.message}`);
                console.error('Error fetching data', error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            <h2>Random Beer</h2>
            {
                error ? <Error>{error}</Error> :
                isLoading || !beer ?
                    <Loading /> :
                    <div>{beer.name}</div>
            }
        </div>
    )
}

export default RandomBeer
