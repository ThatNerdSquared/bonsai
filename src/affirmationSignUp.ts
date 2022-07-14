import {
    Interaction,
    InteractionHandler,
    InteractionResponse,
    InteractionResponseType
} from '@glenstack/cf-workers-discord-bot';
import createRecord from './db';
import { isSignUpData } from './types';

// eslint-disable-next-line max-len
const affirmationSignUpHandler: InteractionHandler = async (interaction: Interaction): Promise<InteractionResponse> => {
    const user = interaction.member.user.id;

    const resData = interaction.data?.options;
    let alert_time;
    if (resData) {
        alert_time = String(resData[0].value);
    }
    else {
        return {
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
                content: 'Could not read timeinutc parameter.'
            },
        };
    }

    const signUpData = await createRecord(user, alert_time);
    if (!isSignUpData(signUpData)) {
        return {
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
                content: 'There was an error processing your sign up data.'
            },
        };
    }
    const parts = signUpData[0].alert_time.split(':');
    // eslint-disable-next-line max-len
    const message = `Success! You will be DMed at ${parts[0]}:${parts[1]} GMT each day.`;

    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: message
        },
    };
};

export default affirmationSignUpHandler;
