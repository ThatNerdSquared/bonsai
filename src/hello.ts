import {
    InteractionHandler,
    InteractionResponse,
    InteractionResponseType,
} from "@glenstack/cf-workers-discord-bot";

const helloWorldHandler: InteractionHandler = async (): Promise<InteractionResponse> => {
    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: 'Hello, world!'
        },
    };
};

export default helloWorldHandler;
