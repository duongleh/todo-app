import { Request, Response } from 'express';
import { OK, CREATED, BAD_REQUEST, NOT_FOUND } from 'http-status-codes';
import todo from '../models/todo.model';

export async function get(req: Request, res: Response) {
    const { id } = req.params;
    const userExist = await todo.findOne({ userId: id });
    if (!userExist) return res.status(NOT_FOUND).json({ success: false, message: 'User is not found' });

    return res.status(OK).json({ success: true, data: userExist.data });
}

export async function post(req: Request, res: Response) {
    const list = new todo({
        userId: req.body.userId,
        data: req.body.data
    });
    try {
        const savedPost = await list.save();
        return res.status(CREATED).json({
            success: true,
            listId: savedPost._id
        });
    } catch (err) {
        return res.status(BAD_REQUEST).json({ success: false, message: err });
    }
}

export async function update(req: Request, res: Response) {
    res.status(OK).json({ id: 1, success: true });
}