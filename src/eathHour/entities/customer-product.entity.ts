/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { PostUser } from './post-user.entity';
import { Bill } from './bill.entity';

@Entity()
export class CustomerProduct {
  @PrimaryGeneratedColumn()
  cProId: number;

  @Column()
  cPName: string;

  @Column()
  cPImage: string;

  @Column()
  cPDescription: string;

  @Column()
  MRP: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => PostUser, user => user.id)
  seller: PostUser;

  @ManyToOne(() => Bill, b => b.id)
  bill: Bill;
}