import Error from './Error';
import Loading from './Loading';
import React from 'react'
import useFetch from '../hooks/useFetch';

const API_URL = 'https://random-data-api.com/api/vehicle/random_vehicle';

const RandomVehicle = () => {
    const [data, isLoading, error] = useFetch(API_URL);

    return (
        <div>
            <h2>Random Vehicle</h2>

            {
                error ? <Error>{error}</Error> :
                isLoading || !data ?
                    <Loading /> :
                    <div>{data.make_and_model}</div>
            }
        </div>
    )
}

export default RandomVehicle
