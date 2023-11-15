import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private readonly shop;
    private readonly ccc;
    constructor(appService: AppService, shop: string[], ccc: number);
    getHello(): string;
    getBye(): string[];
    getFac(): number;
}
