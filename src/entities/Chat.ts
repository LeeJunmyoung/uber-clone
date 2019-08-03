import { BaseEntity, Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import Message from './Message';

@Entity()
class Chat extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(type => Message, message => message.chat )
    message: Message[];

    @CreateDateColumn()
    createdAt: string;

    @CreateDateColumn()
    updatedAt: string;

}

export default Chat;