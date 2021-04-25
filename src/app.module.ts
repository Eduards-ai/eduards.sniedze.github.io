import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        MongooseModule.forRoot(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PW}@portfolio.ygrx7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`),
        UsersModule
    ]
})
export class AppModule {}