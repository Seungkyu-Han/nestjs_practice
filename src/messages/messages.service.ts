import {MessagesRepository} from "./messages.repository";

export class MessagesService {

    constructor(private readonly messagesRepository: MessagesRepository) {
        this.messagesRepository = new MessagesRepository();
    }

    async findOne(id: string){
        return this.messagesRepository.findOne(id);
    }

    async findAll(){
        return this.messagesRepository.findAll();
    }

    async create(content: string){
        return this.messagesRepository.create(content);
    }

}