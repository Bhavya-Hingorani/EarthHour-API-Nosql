/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  sellerId: number;

  @Column()
  MRP: number;

  @Column({ default: true })
  isActive: boolean;
}