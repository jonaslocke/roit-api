import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    age: string;

    @Prop()
    street: string;

    @Prop()
    cep: string;

    @Prop()
    city: string;

    @Prop()
    uf: string;

    @Prop()
    ibge_code: string;

    @Prop()
    others_cep: string;

    @Prop()
    git_hub: string;

    @Prop()
    login: string;

    @Prop()
    id: string;

    @Prop()
    avatar: string;

    @Prop()
    repos: string;
    
    @Prop()
    others_git: string;
}

export const UserSchema = SchemaFactory.createForClass(User);