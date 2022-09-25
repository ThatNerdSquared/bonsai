export interface SignUpData {
    id: number;
    user_id: string;
    alert_time: string;
}

export const isSignUpData = (arg: unknown): arg is SignUpData[] => {
    return arg instanceof Array<SignUpData>
}

export const channelTypeGuard = (
    item: Record<string, unknown>
): boolean => {
    const channelProps = ["last_message_id", "type", "id", "recipients"]
    return channelProps.every((x) => {
        const result = x in item
        if (x === "id") {
            return result && typeof(x) === "string"
        }
        return result
    })
}
