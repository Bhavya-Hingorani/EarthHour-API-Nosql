/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Bill } from './bill.entity';
import { CustomerProduct } from './customer-product.entity';

@Entity()
export class PostUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @OneToMany(() => CustomerProduct, cs => cs.seller)
  products: CustomerProduct[];

  @OneToMany(() => Bill, b => b.buyer)
  bills: Bill[];
}