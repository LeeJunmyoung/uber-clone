import dotenv from 'dotenv'; 
dotenv.config();

import { Options } from 'graphql-yoga';
import { createConnection } from 'typeorm';
import app from './app';
import ConnectionOptions from './ormConfig';




const PORT : number | string = process.env.PROT || 4000;
const PLAYGROUND : string = '/playground';
const GRAPHQL_ENDPOINT : string = '/graphql'

const appOptions : Options = {
    port: PORT,
    playground : PLAYGROUND,
    endpoint: GRAPHQL_ENDPOINT
};

const handleAppStat = () => {
    console.log(`Listening on port ${PORT}`);
};

createConnection(ConnectionOptions)
    .then(()=>{
        app.start(appOptions, handleAppStat);
    })
    .catch(error => console.log(error));

