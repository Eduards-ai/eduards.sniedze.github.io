import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document} from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @ApiProperty({example: '1', description: 'Уникальный индетификатор!'})
    @Prop({ type: Number, unique: true, autoIncrement: true, primaryKey: true})
    id: Number;

    @ApiProperty({example: 'example@example.com', description: 'Почтовый адрес!'})
    @Prop({ type: String, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '1234567', description: 'Пароль!'})
    @Prop({type: String, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен пользователь или нет'})
    @Prop({type: Boolean, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'бан или нет', description: 'Причина бана'})
    @Prop({type: Boolean, allowNull: true})
    banReason: string;

}


export const UserSchema = SchemaFactory.createForClass(User);