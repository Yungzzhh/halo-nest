import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

interface Data<T> {
    data: T
}

@Injectable()
export class Response<T> implements NestInterceptor {
    intercept(context, next: CallHandler): Observable<Data<T>> {
        return next.handle().pipe(map(data => {
            return {
                data,
                status: 0,
                message: '成功',
                success: true
            }
        }))
    }
}