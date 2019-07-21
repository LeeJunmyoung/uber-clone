import { BaseEntity, Entity, Column, CreateDateColumn } from 'typeorm';

@Entity()
class Verification extends BaseEntity {
    @Column({type:"text"})
    target: string;

    @Column({type:"text"})
    payload: string;

    @Column({type:"text"})
    key: string;

    @Column({type:"boolean", default: false})    
    used: boolean;
    
    @CreateDateColumn()
    createdAt: string;

    @CreateDateColumn()
    updatedAt: string;
}

export default Verification;