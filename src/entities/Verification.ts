import { BaseEntity, Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { verificationTarget } from 'src/types/types';


@Entity()
class Verification extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type:"text"})
    target: verificationTarget;

    @Column({type:"text"})
    payload: string;

    @Column({type:"text"})
    key: string;
    
    @CreateDateColumn()
    createdAt: string;

    @CreateDateColumn()
    updatedAt: string;

    @BeforeInsert()
    createKey(): void {
        if(this.target === 'PHONE'){
            this.key = Math.floor(Math.random() * 100000).toString();
        } else if(this.target === 'EMAIL') {
            this.key = Math.random().toString(36).substring(2);
        }
    }
}

export default Verification;