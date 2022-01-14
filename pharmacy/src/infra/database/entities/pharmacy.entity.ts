import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity({ name:'pharmacy'})
export class PharmacyEntity{
    @PrimaryColumn()
    cnpj:string;

    @Column()
    name:string;

    @Column()
    owner:string;

    @Column()
    opening:string;

    @Column()
    closed:string;

    @Column()
    address:string;

    @Column()
    telephone:string;

    @Column()
    others:string;

    @Column()
    logoUrl:string;

    @Column({name:'cnpj_matriz', nullable: true})
    cnpjMatriz:string;

    @CreateDateColumn({ name: 'created_at' })
   createdAt: Timestamp;

   @UpdateDateColumn({ name: 'updated_at' })
   updatedAt: Timestamp;

   @DeleteDateColumn({ name: 'deleted_at' })
   deletedAt?: Timestamp;
}