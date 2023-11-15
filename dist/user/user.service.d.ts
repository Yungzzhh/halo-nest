import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Tags } from './entities/tags.entity';
export declare class UserService {
    private readonly user;
    private readonly tag;
    constructor(user: Repository<User>, tag: Repository<Tags>);
    addTags(params: {
        tags: string[];
        userId: number;
    }): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(query: {
        keyword: string;
        page: number;
        pageSize: number;
    }): Promise<{
        data: User[];
        total: number;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
