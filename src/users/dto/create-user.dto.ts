import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ type: String, description: 'Nome' })
    name: string;
    @ApiProperty({ type: String, description: 'Idade' })
    age: string;
    //via cep
    @ApiProperty({ type: String, description: 'Rua' })
    logradouro: string;
    @ApiProperty({ type: String, description: 'Número' })
    numero: string;
    @ApiProperty({ type: String, description: 'CEP' })
    cep: string;
    @ApiProperty({ type: String, description: 'Cidade' })
    localidade: string;
    @ApiProperty({ type: String, description: 'Bairro' })
    bairro: string;
    @ApiProperty({ type: String, description: 'Estado' })
    uf: string;
    @ApiProperty({ type: String, description: 'Código IBGE' })
    ibge: string;
    @ApiProperty({ type: String, description: 'Complemento do endereço' })
    complemento: string;
    @ApiProperty({ type: String, description: 'Complemento' })
    outrosCep: string;
    //GitHub webservices
    @ApiProperty({ type: String, description: 'Login' })
    login: string;
    @ApiProperty({ type: String, description: 'ID GitHub' })
    gitId: string;
    @ApiProperty({ type: String, description: 'Avatar GitHub' })
    avatar_url: string;
    @ApiProperty({ type: String, description: 'URL GitHub' })
    html_url: string;
    @ApiProperty({ type: String, description: 'Repositórios GitHub' })
    repos: string;
    @ApiProperty({ type: String, description: 'GitHub outros' })
    othersGit: string;
}
