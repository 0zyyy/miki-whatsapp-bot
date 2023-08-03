import { command } from "../utils";



command.new({
    onCommand: async (context,bot) => {
    },
    metadata: {
        __filename,
        category: "othertools",
        command: ["open","close"],
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
    }
});