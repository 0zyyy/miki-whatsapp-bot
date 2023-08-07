import { command } from "../utils";
import type * as Types from "../utils/typings/types";

var LOCALDB: Types.LOCALDB;

command.new({
	onStart: (DB) => (LOCALDB = DB),
	onCommand: async (context, bot) => {
		const groupId = context.chatId().out;
		console.log(groupId);
		if (context.command().out === "open") {
			(LOCALDB[groupId] as Types.GROUPDB)["openGroup"] = "06.00";
		} else if (context.command().out === "close") {
			(LOCALDB[groupId] as Types.GROUPDB)["closeGroup"] = "23.00";
		}
	},
	metadata: {
		__filename,
		category: "grouptools",
		command: ["open", "close"],
		permission: "group-admin",
		locale: {
			description: {
				id: "[TODO] Open/Close description",
				en: "[TODO] Open/Close description",
			},
			name: {
				id: "group-setting",
			},
		},
	},
});
