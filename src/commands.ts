import { ApplicationCommand } from "@glenstack/cf-workers-discord-bot";

const helloWorldCommand: ApplicationCommand = {
    name: "hello-world",
    description: "Hello world!",
};

export { helloWorldCommand }
