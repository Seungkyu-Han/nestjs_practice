import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {MessagesService} from "./messages.service";
import {CreateMessageDto} from "./dtos/create-message.dto";

@Controller('messages')
export class MessagesController {

    private messagesService: MessagesService;

    constructor(){
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages(){
        return this.messagesService.findAll()
    }

    @Post()
    createMessage(@Body() createMessageDto: CreateMessageDto){
        return this.messagesService.create(createMessageDto.content)
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        return this.messagesService.findOne(id)
    }
}
