import GeneralAction from './GeneralAction'
import { PRODUCT_ALL, PRODUCT_CREATE, PRODUCT_DELETE, PRODUCT_EDIT, PRODUCT_ERROR, PRODUCT_GET } from '../type'

const ProductAction = new GeneralAction('product', 'Product', {
  allConst: PRODUCT_ALL,
  oneConst: PRODUCT_GET,
  errorConst: PRODUCT_ERROR,
  createConst: PRODUCT_CREATE,
  updateConst: PRODUCT_EDIT,
  deleteConst: PRODUCT_DELETE,
})

export const getAllProduct = ProductAction.getAllData
export const getOneProduct = ProductAction.getOneData
export const createOneProduct = ProductAction.createOne
export const updateOneProduct = ProductAction.editOne
export const deleteOneProduct = ProductAction.deleteOne
