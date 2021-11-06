/* eslint-disable prettier/prettier */

import { Bill } from '../entities/bill.entity';
import { CustomerProduct } from '../entities/customer-product.entity';

export class CreatePostUserDto {
  readonly id: number;
  readonly userId: string;
  readonly products: CustomerProduct[];
  readonly bills: Bill[];
}
