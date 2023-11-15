import { CallHandler, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
interface Data<T> {
    data: T;
}
export declare class Response<T> implements NestInterceptor {
    intercept(context: any, next: CallHandler): Observable<Data<T>>;
}
export {};
