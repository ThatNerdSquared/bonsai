import { createSlashCommandHandler } from '@glenstack/cf-workers-discord-bot';
import checkForScheduledAffirmation from './checkForScheduledAffirmation';
import COMMANDS from './commands';
import CONFIG from './config';

const slashCommandHandler = createSlashCommandHandler({
    applicationID: CONFIG.application_id,
    applicationSecret: CONFIG.application_secret,
    publicKey: CONFIG.public_key,
    commands: COMMANDS
});

addEventListener('fetch', (event) => {
    event.respondWith(slashCommandHandler(event.request));
});

addEventListener('scheduled', (event) => {
    event.waitUntil(checkForScheduledAffirmation());
});
