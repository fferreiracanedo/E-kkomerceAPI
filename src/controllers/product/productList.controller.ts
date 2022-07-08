import { Request, Response } from 'express'
import { Iproduct } from '../../interfaces/product'
import productListService from '../../services/product/productList.service'

const productListController = async (req: Request, res: Response) => {



  const productList: Iproduct[] = await productListService()


  return res.json(productList)
}
export default productListController