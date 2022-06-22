import { ApplicationCommand, InteractionHandler } from "@glenstack/cf-workers-discord-bot";
import helloWorldHandler from "./hello";
import positiveHandler from "./positive";

const helloWorldCommand: ApplicationCommand = {
    name: "hello-world",
    description: "Hello world!",
};
const positiveCommand: ApplicationCommand = {
    name: 'positive',
    description: "A bit of encouragement :)"
}

const COMMANDS: [ApplicationCommand, InteractionHandler][] = [
    [helloWorldCommand, helloWorldHandler],
    [positiveCommand, positiveHandler]
];

export default COMMANDS;
