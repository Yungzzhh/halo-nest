import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
export declare class ListService {
    create(createListDto: CreateListDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateListDto: UpdateListDto): string;
    remove(id: number): string;
}
