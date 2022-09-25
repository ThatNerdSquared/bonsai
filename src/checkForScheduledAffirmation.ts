import CONFIG from "./config"
import { APIDMChannel } from "discord-api-types/v10"
import { readRecords } from "./db"
import { channelTypeGuard, SignUpData } from "./types"
import randomAffirmation from "./data/affirmations"
import { postToDiscordApi } from "./utils"

const checkForScheduledAffirmation = async () => {
    // const rest = new REST({ version: "10" }).setToken(CONFIG.application_id)

    const data: SignUpData[] = await readRecords()
    for (const item of data) {
        const itemAlertTime = item.alert_time.split(":")
        const currentTime = new Date()
        const comparedAlertTime = new Date()

        currentTime.setSeconds(0, 0)
        comparedAlertTime.setHours(
            Number(itemAlertTime[0]),
            Number(itemAlertTime[1]),
            0,
            0
        )

        if (currentTime.getTime() == comparedAlertTime.getTime()) {
            const dmChannel: APIDMChannel = await postToDiscordApi(
                `${CONFIG.baseDiscordUrl}${CONFIG.userChannelRoute}`,
                {
                    recipient_id: item.user_id
                },
                channelTypeGuard
            )
            await postToDiscordApi(
                `${
                    CONFIG.baseDiscordUrl
                }${
                    CONFIG.channelMsgRoute(dmChannel.id)
                }`,
                {
                    content: randomAffirmation()
                }
            )
        }
        else {
            console.log(`CURRENTTIME: ${currentTime.toString()}`)
            console.log(`COMPARED:    ${comparedAlertTime.toString()}`)
            console.log("====")
        }
    }
}

export default checkForScheduledAffirmation
