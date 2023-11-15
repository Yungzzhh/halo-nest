import { DynamicModule } from '@nestjs/common';
export declare class ConfigModule {
    static forRoot(options: {
        path: string;
    }): DynamicModule;
}
