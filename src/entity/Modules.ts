import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Modules {
  @PrimaryGeneratedColumn()
  @Generated("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column({
    default: new Date(),
  })
  created_at: Date;
}
