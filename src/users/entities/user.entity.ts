import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    id: string;
    @Prop()
    name: string;
    @Prop()
    age: string;
    @Prop()
    logradouro: string;
    @Prop()
    numero: string;
    @Prop()
    cep: string;
    @Prop()
    localidade: string;
    @Prop()
    bairro: string;
    @Prop()
    uf: string;
    @Prop()
    ibge: string;
    @Prop()
    complemento: string;
    @Prop()
    outrosCep: string;
    @Prop()
    login: string;
    @Prop()
    gitId: string;
    @Prop()
    avatar_url: string;
    @Prop()
    html_url: string;
    @Prop()
    repos: string;
    @Prop()
    othersGit: string;
}

export const UserSchema = SchemaFactory.createForClass(User);