/* eslint-disable prettier/prettier */
import { Bill } from "../entities/bill.entity";
import { PostUser } from "../entities/post-user.entity";
export class CreateCustomerProductDto {
  readonly cProId: number;
  readonly cPName: string;
  readonly cPImage: string;
  readonly cPDescription: string;
  readonly MRP: number;
  readonly isActive: boolean;
  readonly seller: PostUser;
  readonly bill: Bill;
}
