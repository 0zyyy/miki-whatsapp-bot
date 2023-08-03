import { get } from "../helper/request";
import { command,requestArguments } from "../utils";


command.new({
    onCommand: async(context, bot) => {
        const chatId = context.chatId().out;

        const [title] = await requestArguments(context,{
            separator: "|",
            arguments: [
                ["title", (x) => x.length > 0, { onWrong: "Judul tidak boleh kosong" }],
            ],
        })

        if(title === null) return;

        bot.sendMessage(chatId, { text: "TUNGGU SEBENTAR..." });

        try{
            const allJournal = await get("http://127.0.0.1:5000/ieee/" + title);
    
            console.log(allJournal);
    
            context.reply({
                text: "Selesai"
            });
            
        }catch(e){
            context.reply({
                text: "Terjadi kesalahan"
            })
            return;
        }
    },
    metadata: {
        __filename,
        category: "othertools",
        command: ["ieee"],
        permission: "private-owner",
        premium: true,
        locale: {
			description: {
				id: "[TODO] IEEE description",
				en: "[TODO] IEEE description",
			},
			name: {
				id: "Scrape IEEE",
			},
		},
    }
})