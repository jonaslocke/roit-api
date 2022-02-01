import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ type: String, description: 'Nome' })
    name: string;
    @ApiProperty({ type: String, description: 'Idade' })
    age: string;
    //via cep
    @ApiProperty({ type: String, description: 'Rua' })
    street: string;
    @ApiProperty({ type: String, description: 'CEP' })
    cep: string;
    @ApiProperty({ type: String, description: 'Cidade' })
    city: string;
    @ApiProperty({ type: String, description: 'Estado' })
    uf: string;
    @ApiProperty({ type: String, description: 'Código IBGE' })
    ibge_code: string;
    @ApiProperty({ type: String, description: 'Complemento' })
    others_cep: string;
    //GitHub webservices
    @ApiProperty({ type: String, description: 'URL GitHub' })
    git_hub: string;
    @ApiProperty({ type: String, description: 'Login' })
    login: string;
    @ApiProperty({ type: String, description: 'ID GitHub' })
    id: string;
    @ApiProperty({ type: String, description: 'Avatar GitHub' })
    avatar: string;
    @ApiProperty({ type: String, description: 'Repositórios GitHub' })
    repos: string;
    @ApiProperty({ type: String, description: 'GitHub outros' })
    others_git: string;
}
