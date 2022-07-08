export interface Iproduct {
  id: string
  name: string
  description: string,
  price: number
}

export interface IproductCreate {
  name: string,
  description: string
  price: number
}