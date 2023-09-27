import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (req,res) => {
    return res.send('Teste de response do GET');
});

router.post('/teste', (req,res) => {
    console.log(req.body);
    //return res.send('Teste de response do POST');
    //outro modelo de envio do response
    return res.status(StatusCodes.ACCEPTED).json('Testando response no POST envio JSON');
});





export {router};