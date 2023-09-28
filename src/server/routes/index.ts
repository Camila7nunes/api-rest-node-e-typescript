import { Router } from 'express';
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req,res) => {
    return res.send('Teste de response do GET');
});

router.post('/cidades', CidadesController.create);


export {router};