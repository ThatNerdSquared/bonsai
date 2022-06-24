import {
    Interaction,
    InteractionHandler,
    InteractionResponse,
    InteractionResponseType
} from '@glenstack/cf-workers-discord-bot';

// eslint-disable-next-line max-len
const affirmationSignUpHandler: InteractionHandler = (interaction: Interaction): InteractionResponse => {
    const resData = interaction.data?.options;
    let timezone;
    if (resData) {
        timezone = String(resData[0].value);
    }
    else {
        timezone = 'Error!!';
    }

    const user = interaction.member.user.username;

    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: `${user} at ${timezone}`
        },
    };
};

export default affirmationSignUpHandler;
