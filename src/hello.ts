import {
  createSlashCommandHandler,
  ApplicationCommand,
  InteractionHandler,
  Interaction,
  InteractionResponse,
  InteractionResponseType,
} from "@glenstack/cf-workers-discord-bot";

const helloCommand: ApplicationCommand = {
  name: "hello",
  description: "Bot will say hello to you!",
};

const helloHandler: InteractionHandler = async (
  interaction: Interaction
): Promise<InteractionResponse> => {
  const userID = interaction.member.user.id;

  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: `Hello, <@${userID}>!`,
      allowed_mentions: {
        users: [userID],
      },
    },
  };
};

const slashCommandHandler = createSlashCommandHandler({
  applicationID: "988999880473182258",
  applicationSecret: APPLICATION_SECRET, // You should store this in a secret
  publicKey: "9aed56326c3a860a5baab2d39fc4a5ada741794e668a5e31febf333b220068d6",
  commands: [[helloCommand, helloHandler]],
});

addEventListener("fetch", (event) => {
  event.respondWith(slashCommandHandler(event.request));
});
