/* eslint-disable prettier/prettier */
import { PostUser } from "../entities/post-user.entity";
import { CustomerProduct } from "../entities/customer-product.entity";

export class CreateBillDto {
  readonly id: number;
  readonly product: CustomerProduct[];  
  readonly buyer: PostUser[];
}
