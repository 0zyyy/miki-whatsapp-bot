import { command } from "../utils";


command.new({
    onCommand: async (context,bot) => {
        context.reply({
            text: "Halo"
        })
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