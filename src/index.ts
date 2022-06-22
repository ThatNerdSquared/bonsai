import { createSlashCommandHandler } from "@glenstack/cf-workers-discord-bot";
import { helloWorldCommand } from "./commands";
import { helloWorldHandler } from "./hello";

const slashCommandHandler = createSlashCommandHandler({
  applicationID: "988999880473182258",
  applicationSecret: APPLICATION_SECRET, // You should store this in a secret
  publicKey: "9aed56326c3a860a5baab2d39fc4a5ada741794e668a5e31febf333b220068d6",
  commands: [
      [helloWorldCommand, helloWorldHandler]
  ]
});

addEventListener("fetch", (event) => {
  event.respondWith(slashCommandHandler(event.request));
});
