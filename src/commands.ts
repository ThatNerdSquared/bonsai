import {
    ApplicationCommand,
    ApplicationCommandOptionType,
    InteractionHandler
} from "@glenstack/cf-workers-discord-bot"
import affirmationSignUpHandler from "./affirmationSignUp"
import helloWorldHandler from "./hello"
import positiveHandler from "./positive"

const helloWorldCommand: ApplicationCommand = {
    name: "hello-world",
    description: "Hello world!",
}
const positiveCommand: ApplicationCommand = {
    name: "positive",
    description: "A bit of encouragement :)"
}
const affirmationSignUpCommand: ApplicationCommand = {
    name: "daily-affirmation",
    description: "Sign up to be DMed an affirmation every day.",
    options: [
        {
            name: "timeinutc",
            description: "Time you want to be notified in UTC.",
            type: ApplicationCommandOptionType.STRING,
            required: true
        }
    ]
}

const COMMANDS: [ApplicationCommand, InteractionHandler][] = [
    [helloWorldCommand, helloWorldHandler],
    [positiveCommand, positiveHandler],
    [affirmationSignUpCommand, affirmationSignUpHandler]
]

export default COMMANDS
