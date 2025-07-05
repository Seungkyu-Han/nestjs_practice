import {Body, Controller, Get, NotFoundException, Param, Post} from '@nestjs/common';
import {MessagesService} from "./messages.service";
import {CreateMessageDto} from "./dtos/create-message.dto";

@Controller('messages')
export class MessagesController {

    private messagesService: MessagesService;

    constructor(){
        this.messagesService = new MessagesService();
    }

    @Get()
    async listMessages(){
        return this.messagesService.findAll()
    }

    @Post()
    async createMessage(@Body() createMessageDto: CreateMessageDto){
        return this.messagesService.create(createMessageDto.content)
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string){
        const message = await this.messagesService.findOne(id)

        if(!message){
            throw new NotFoundException('Message not found');
        }

        return message
    }
}
