import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addTags(params: {
        tags: string[];
        userId: number;
    }): Promise<import("./entities/user.entity").User>;
    createCaptcha(req: any, res: any): void;
    createUser(Body: any, session: any): {
        code: number;
        message: string;
    } | {
        code: string;
        message: string;
    };
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(query: {
        keyword: string;
        page: number;
        pageSize: number;
    }): Promise<{
        data: import("./entities/user.entity").User[];
        total: number;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
