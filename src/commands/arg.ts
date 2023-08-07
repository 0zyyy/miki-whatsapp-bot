import { command } from "../utils";



command.new({
    onCommand: async (context) =>{
        const args = context.arguments().out!;
        return context.reply({ text: args.split(" ").map((x,idx) => `Argument no.${idx}: ${x}`).join("\n")});
    },
    metadata: {
        __filename,
        command: ["arg"],
        category: "othertools",
        permission: "private-owner",
        maintenance: true,
        locale: {
            name: {
                id: "arg",
            },
            description: {
                id: "[TODO] arg description",
                en: "[TODO] arg description",
            },
        },
    }
})