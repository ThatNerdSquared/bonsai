import {
    Interaction,
    InteractionHandler,
    InteractionResponse,
    InteractionResponseType
} from '@glenstack/cf-workers-discord-bot';
import createRecord from './db';

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

    const data = await createRecord(user, alert_time);

    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: `${data}`
        },
    };
};

export default affirmationSignUpHandler;
