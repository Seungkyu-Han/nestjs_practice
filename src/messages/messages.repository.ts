import { readFile, writeFile } from 'fs/promises'

export class MessagesRepository {
    async findOne(id: string){
        const messages = await readFile(`messages.json`, 'utf8');
        const messagesJson = JSON.parse(messages);

        return messagesJson[id];
    }

    async findAll(){
        const messages = await readFile(`messages.json`, 'utf8');
        return JSON.parse(messages);
    }

    async create(content: string){
        const messages = await readFile(`messages.json`, 'utf8');

        const messagesJson = JSON.parse(messages);

        const id = (Math.random() * 9999)

        messagesJson[id] = {id, content};

        await writeFile(`messages.json`, JSON.stringify(messagesJson), 'utf8');
    }
}