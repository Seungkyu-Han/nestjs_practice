import {Body, Controller, Get, Post} from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages(): string{
        return "hi Seungkyu!!"
    }

    @Post()
    createMessage(@Body() req:any){
        console.log(req);
    }

    @Get('/:id')
    getMessage(){

    }
}
