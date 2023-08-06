import { get } from "../helper/request";
import { command, requestArguments, } from "../utils";

command.new({
    onCommand: async (context,bot) => {
        const chatId = context.chatId().out;

        const [title] = await requestArguments(context,{
            separator: "|",
            arguments: [
                ["title", (x) => x.length > 0, { onMissing: "Silahkan ketikkan .gscholar *judul jurnal*" }],
            ],
        });


        if(title === null) return;

        bot.sendMessage(chatId, { text: "TUNGGU SEBENTAR..." });
        try{
            await get("http://146.190.41.221:5000/gscholar/" + title).then(async (res) => {
                const journalsData = res.data;
                let str: string = journalsData[0].title === null ?"DATA TIDAK DITEMUKAN\n\n": "DATA BERHASIL DITEMUKAN\n\n";
                for(let i = 0; i < 10; i++){
                    str += `*${i+1}.*\n*Judul*: ${journalsData[i].title}\n`;
                    str += `*Desc*: ${journalsData[i].description}\n`;
                    str += `*Link*: ${journalsData[i].link}\n`
                    str += `*Tahun publikasi*: ${journalsData[i].year}\n`;
                    str += `*Authors*: ${journalsData[i].authors}\n\n`
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
		command: ["gscholar"],
		permission: "private-owner",
		premium: true,
		locale: {
			description: {
				id: "[TODO] Gscholar description",
				en: "[TODO] Gscholar description",
			},
			name: {
				id: "Scrape GScholar",
			},
		},
	},
})