import MainService from '../services/MainService';
import ProductModel from '../models/Product';

const ProductService = new MainService(ProductModel, 'product');

export const onReadAll = async (req, res) => {
  try {
    let query = {};
    if (req?.query?.name) {
      query = {
        $or: [
          {
            name: {
              $regex: req?.query?.name,
            },
          },
          {
            type_code: {
              $regex: req?.query?.name,
            },
          },
        ],
      };
    }

    const result = await ProductService.getAll({
      ...req.query,
      query,
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ error });
  }
};

export const onReadOne = async (req, res) => {
  try {
    const result = await ProductService.getOne(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ error });
  }
};

export const onCreateOne = async (req, res) => {
  try {
    if (req?.body?.many === true) {
      const results = await ProductModel.insertMany(req?.body?.arr);
      res.status(201).send(results);
    } else {
      const result = await ProductService.createOne(req.body);
      res.status(201).send(result);
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const onEditOne = async (req, res) => {
  try {
    await ProductService.updateOne(req.params.id, req.body);
    res.status(200).send({ message: 'Successfully Update' });
  } catch (error) {
    res.status(400).send({ error });
  }
};

export const onDeleteOne = async (req, res) => {
  try {
    await ProductService.deleteOne(req.params.id);
    res.status(204).send({ message: 'Delete Success' });
  } catch (error) {
    res.status(400).send({ error });
  }
};

export default {
  onReadAll,
  onReadOne,
  onCreateOne,
  onEditOne,
  onDeleteOne,
};
