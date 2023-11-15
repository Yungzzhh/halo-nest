import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
export declare class ListController {
    private readonly listService;
    private readonly base;
    constructor(listService: ListService, base: any);
    create(createListDto: CreateListDto): string;
    findAll(): any;
    findOne(id: string): string;
    update(id: string, updateListDto: UpdateListDto): string;
    remove(id: string): string;
}
