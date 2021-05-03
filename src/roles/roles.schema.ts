import { SchemaFactory, Schema, Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document} from "mongoose";

export type RoleDocument = Role & Document;

@Schema()
export class Role {
    @ApiProperty({example: '1', description: 'Уникальный индетификатор!'})
    @Prop({ type: Number, unique: true, autoIncrement: true, primaryKey: true})
    id: Number;

    @ApiProperty({example: 'ADMIN', description: 'Значение роли пользователя!'})
    @Prop({ type: String, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли!  '})
    @Prop({type: String, allowNull: false})
    description: string;

}


export const RoleSchema = SchemaFactory.createForClass(Role);