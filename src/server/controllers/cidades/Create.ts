import { Request, Response } from 'express';

export const create = (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    return res.send('Create');
};