import { InteractionHandler, InteractionResponse, InteractionResponseType } from "@glenstack/cf-workers-discord-bot";

interface AffirmationsAPIResponse {
    affirmation: string
}

const positiveHandler: InteractionHandler = async (): Promise<InteractionResponse> => {
    const response = await fetch('https://www.affirmations.dev/');
    const data: AffirmationsAPIResponse = await response.json();

    return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
            content: `${data.affirmation}.`
        },
    };
}

export default positiveHandler;
