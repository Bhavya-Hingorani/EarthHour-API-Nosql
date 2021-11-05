/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;
}