/* eslint-disable prettier/prettier */
export class CreateCustomerProductDto {
  readonly cProId: number;
  readonly cPName: string;
  readonly cPImage: string;
  readonly cPDescription: string;
  readonly sellerId: number;
  readonly MRP: number;
  readonly isActive: boolean;
}
