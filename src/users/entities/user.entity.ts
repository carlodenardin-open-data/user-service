import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

export class UserEntity implements User {
    @ApiProperty({
        description: 'The ID of the user',
        example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        required: true,
    })
    id: string;

    @ApiProperty({
        description: 'The email of the user',
        example: 'john.doe@test.com',
        required: true,
    })
    email: string;

    @ApiProperty({
        description: 'The username of the user',
        example: 'johndoe',
        required: true,
    })
    username: string;

    @ApiProperty({
        description: 'The date and time when the user was created',
        example: '2021-03-01T12:00:00.000Z',
    })
    createdAt: Date;

    @ApiProperty({
        description: 'The date and time when the user was updated',
        example: '2021-03-01T12:00:00.000Z',
    })
    updatedAt: Date;
}
