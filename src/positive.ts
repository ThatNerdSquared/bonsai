import {
    InteractionHandler,
    InteractionResponse,
    InteractionResponseType
} from '@glenstack/cf-workers-discord-bot';
import randomAffirmation from './data/affirmations';

// eslint-disable-next-line max-len
const positiveHandler: InteractionHandler = (): InteractionResponse => {
    const affirmation = randomAffirmation();

    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: `${affirmation}.`
        },
    };
};

export default positiveHandler;
