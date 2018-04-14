import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/core';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException,response){
        const status = exception.getStatus();
        const message = 'I am the Exception log message';

        console.log(`exception status:`, status);
        console.log(`exception message:`, message);

        response.status(status).json({
            statusCode: status,
            message: message,
        });
    }
}