import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import { db } from '../../../../database';
import { Entry, IEntry } from '../../../../models';

type Data = { message: string } | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Entry ID is invalid' });
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res, id.toString());
    case 'GET':
      return getEntry(req, res, id.toString());
    default:
      return res
        .status(400)
        .json({ message: `Bad Request. Method: ${req.method}` });
  }
}

const getEntry = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  id: string
) => {
  await db.connect();
  try {
    const entryToGet = await Entry.findById(id);
    if (!entryToGet) {
      await db.disconnect();
      return res
        .status(400)
        .json({ message: `Entry not found for the id: ${id}` });
    } else {
      await db.disconnect();
      res.status(200).json(entryToGet!);
    }
  } catch (error: any) {
    await db.disconnect();
    res.status(400).send({ message: error.errors.status.message });
  }
};

const updateEntry = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  id: string
) => {
  await db.connect();
  const entryToUpdate = await Entry.findById(id);
  if (!entryToUpdate) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: `Entry not found for the id: ${id}` });
  }
  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;
  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    res.status(400).send({ message: error.errors.status.message });
  }
};
