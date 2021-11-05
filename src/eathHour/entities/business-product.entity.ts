/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BusinessProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pName: string;

  @Column()
  pImage: string;

  @Column()
  pDescription: string;

  @Column()
  MRP: number;

  @Column()
  link: string;

  @Column()
  Brand: string;

  @Column()
  impactScore: number;

  @Column({ default: true })
  isActive: boolean;
}