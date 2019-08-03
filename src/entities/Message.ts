import { BaseEntity, Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import Chat from './Chat';

@Entity()
class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Chat, chat=> chat.message)
    chat: Chat;

    @CreateDateColumn()
    createdAt: string;

    @CreateDateColumn()
    updatedAt: string;

}

export default Message;