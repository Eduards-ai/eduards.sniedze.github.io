import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './users.schema';
import { CreateUserDto } from './../dto/create-user.dto';



@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userModel.create(dto)
        return user
    }

    async getAllUsers() {
        const users = await this.userModel.find()
        return users
    }

}
