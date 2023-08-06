import { command, requestArguments } from "../utils";
import type * as Types from "../utils/typings/types";



let LOCALDB: Types.LOCALDB;
const wnet = "@s.whatsapp.net";

command.new({
    onStart: (DB) => LOCALDB = DB,
    onCommand:async (context) => {
        const reasonAfk = context.arguments().out;
        const now = Date.now();
		(LOCALDB[context.userId().out] as Types.USERDB).isAfk = true;
        (LOCALDB[context.userId().out] as Types.USERDB).afkText = reasonAfk;
        (LOCALDB[context.userId().out] as Types.USERDB).afkTime = now;
        return context.reply({
            text: `KAMU SEKARANG AFK\n\n REASON: ${reasonAfk}`
        })  
    },
    metadata: {
        __filename,
        command: ["afk"],
        permission: "group-all",
        category: "grouptools",
        locale: {
            description: {
                id: "[TODO] AFK DESCRIPTION",
                en: "[TODO] AFK DESCRIPTION",
            },
            name: {
                id: "AFK",
                en: "AFK"
            }
        }
    }
})