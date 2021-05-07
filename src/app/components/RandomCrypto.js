import { useEffect, useState } from 'react';

import Error from './Error';
import Loading from './Loading';
import React from 'react';
import axios from 'axios';

const API_URL = 'https://random-data-api.com/api/crypto_coin/random_crypto_coin';

const RandomCrypto = () => {
    const [crypto, setCrypto] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getCrypto = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setCrypto(data);
        } catch(error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCrypto();
    }, [])

    return (
        <div>
            <h2>Random Crypto</h2>
            {
                error ? <Error>{error}</Error> :
                isLoading || !crypto ?
                    <Loading /> :
                    <div>{crypto.coin_name}</div>
            }
        </div>
    )
}

export default RandomCrypto
