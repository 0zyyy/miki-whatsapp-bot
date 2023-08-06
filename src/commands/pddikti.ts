import { get } from "../helper/request";
import { command, requestArguments } from "../utils";

command.new({
	onCommand: async (context, bot) => {
		const [nim] = await requestArguments(context, {
			separator: "|",
			arguments: [["nim", (x) => x.length > 0, { onMissing: "Silahkan ketikkan .pddikti *nim / nama*" }]],
		});

		if (nim === null) return;

		try {
            const url: string = "https://api-frontend.kemdikbud.go.id/hit_mhs/";
			await get(url + nim).then(async (res) => {
				let str: string = res.mahasiswa.length > 0 ? "DATA BERHASIL DITEMUKAN\n\n" : "DATA TIDAK DITEMUKAN\n\n";
				for (let i = 0; i < res.mahasiswa.length; i++) {
                    str += `\n${res.mahasiswa[i].text}\n`;
                    str += `*Link Mahasiswa*: ${url + res.mahasiswa[i]["website-link"]}\n"`
                }
                context.reply({
                    text: str
                })
			});
		} catch (e) {
			context.reply({
				text: "Terjadi kesalahan",
			});
			return;
		}
	},
	metadata: {
		__filename,
		category: "othertools",
		command: ["pddikti"],
		permission: "private-owner",
		premium: true,
		locale: {
			description: {
				id: "[TODO] PDDIKTI description",
				en: "[TODO] PDDIKTI description",
			},
			name: {
				id: "Scrape PDDIKTI",
			},
		},
	},
});
