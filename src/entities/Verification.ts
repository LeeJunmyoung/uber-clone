import { BaseEntity, Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BeforeInsert, ManyToOne } from 'typeorm';
import { verificationTarget } from 'src/types/types';
import User from './User';

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

    @Column({type:"boolean", default: false})    
    used: boolean;

    @ManyToOne(type => User, user => user.verification)
    user: User;
    
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