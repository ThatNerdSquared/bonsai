import { createClient } from '@supabase/supabase-js';
import CONFIG from './config';
import { isSignUpData, SignUpData } from './types';

const supabase = createClient(CONFIG.db_url, CONFIG.db_key);

const createRecord = async (
    userID: string,
    alert_time: string
): Promise<SignUpData[]> => {
    const { data, error } = await supabase
        .from('daily_affirmation_users')
        .insert([{
            'user_id': userID,
            'alert_time': alert_time
        }]);
    if (isSignUpData(data)) {
        return data;
    }
    else if (error != null) {
        throw `${String(error)}`;
    }
    throw 'Could not write to DB';
};

const readRecords = async (): Promise<SignUpData[]> => {
    const { data, error } = await supabase
        .from('daily_affirmation_users')
        .select();
    if (isSignUpData(data)) {
        return data;
    }
    else if (error != null) {
        throw `${String(error)}`;
    }
    throw 'Could not read from DB';
};

export { createRecord, readRecords };
