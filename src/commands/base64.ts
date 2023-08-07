import { reject } from "lodash";
import { command, requestArguments } from "../utils";
import { exec } from "child_process";
command.new({
	onCommand: async (context, bot) => {
		const [text] = await requestArguments(context, {
			arguments: [["text", (x) => x.length > 0, { onMissing: "Silahkan ketikkan .dbase64 / .ebase64 *text*" }]],
		});
		if (text === null) return;
		const command = context.command().out;
		let cmd = "";
		if (command === "dbase64") cmd = "-d";
		return await new Promise((resolve, reject) => {
			exec(`echo "${text}" | base64 ${cmd}`, (error, stdout, stderr) => {
				if (error) return reject(error);
				resolve(
					context.reply({
						text: stdout,
					})
				);
			});
		});
	},
	metadata: {
		__filename,
		category: "othertools",
		command: ["ebase64", "dbase64"],
		permission: "all",
		locale: {
			description: {
				id: "Encode / Decode base64",
				en: "Encode / Decode base64",
			},
			name: {
				id: "base64",
			},
		},
	},
});
