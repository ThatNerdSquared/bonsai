import {
    InteractionHandler,
    InteractionResponse,
    InteractionResponseType,
} from '@glenstack/cf-workers-discord-bot';

// eslint-disable-next-line max-len
const helloWorldHandler: InteractionHandler = (): Promise<InteractionResponse> => {
    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: 'Hello, world!'
        },
    };
};

export default helloWorldHandler;
