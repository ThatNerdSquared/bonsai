export interface SignUpData {
    id: number;
    user_id: string;
    alert_time: string;
}

export const isSignUpData = (arg: unknown): arg is SignUpData[] => {
    return arg instanceof Array<SignUpData>
}