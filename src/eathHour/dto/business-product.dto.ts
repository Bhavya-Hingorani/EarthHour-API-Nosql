/* eslint-disable prettier/prettier */
export class CreateBusinessProductDto {
  readonly id: number;
  readonly pName: string;
  readonly pImage: string;
  readonly pDescription: string;
  readonly MRP: number;
  readonly link: string;
  readonly Brand: string;
  readonly impactScore: number;
  readonly isActive: boolean;
}
