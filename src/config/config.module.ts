import { DynamicModule, Global, Module } from '@nestjs/common';

@Global() // 全局可用
@Module({
    
})
export class ConfigModule {
    static forRoot(options: {
        path: string
    }): DynamicModule {
        return {
            module: ConfigModule,
            providers: [
                {
                    provide: 'Config',
                    useValue: { baseUrl: '/api' + options.path }
                }
            ],
            exports: [
                {
                    provide: 'Config',
                    useValue: { baseUrl: '/api' + options.path }
                }
            ]
        }
    }
}