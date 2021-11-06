/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { CustomerProduct } from './customer-product.entity';
import { PostUser } from './post-user.entity';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CustomerProduct, (cs) => cs.cProId)
  product: CustomerProduct[];

  @ManyToOne(() => PostUser, (user) => user.bills)
  buyer: PostUser[];
}
