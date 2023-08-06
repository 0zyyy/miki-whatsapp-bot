import { get } from "../helper/request";
import { command,requestArguments } from "../utils";


command.new({
    onCommand: async(context, bot) => {
        const chatId = context.chatId().out;

        const [title] = await requestArguments(context,{
            separator: "|",
            arguments: [
                ["title", (x) => x.length > 0, { onMissing: "Silahkan ketikkan .ieee *judul jurnal*" }],
            ],
        })

        if(title === null) return;

        bot.sendMessage(chatId, { text: "TUNGGU SEBENTAR..." });
        try{
            await get("http://146.190.41.221:5000/ieee/" + title).then(async (res) => {
                let str: string = res.length > 0 ? "DATA BERHASIL DITEMUKAN\n\n" : "DATA TIDAK DITEMUKAN\n\n";
                for(let i = 0; i < res.length; i++){
                    str += `*${i+1}.*\n*Judul*: ${res[i].publication_title}\n`;
                    str += `*Abstrak*: ${res[i].abstract}\n`;
                    str += `*Link Sci-Hub*: ${res[i].sci_hub}\n`
                    str += `*Tanggal publikasi*: ${res[i].publication_date}\n\n`;
                }
                await bot.sendMessage(chatId, { text: str });
            });
            return;
        }catch(e){
            return context.reply({
                text: "Terjadi kesalahan"
            })
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