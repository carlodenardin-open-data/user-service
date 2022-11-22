import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The ID of the user',
        example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        required: true,
    })
    id: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The email of the user',
        example: 'john.doe@test.com',
        required: true,
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The usernme of the user',
        example: 'johndoe',
        required: true,
    })
    username: string;
}
