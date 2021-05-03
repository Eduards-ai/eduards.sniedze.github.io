import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({example: 'email@email.com', description: 'Почта'})
    readonly value: string;

    @ApiProperty({example: '123456', description: 'Пароль'})
    readonly description: string;
}