import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
export declare class HTTPFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
