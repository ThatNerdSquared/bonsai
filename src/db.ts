import { createClient } from '@supabase/supabase-js';
import CONFIG from './config';

const supabase = createClient(CONFIG.db_url, CONFIG.db_key);

const createRecord = async (userID: string, alert_time: string) => {
    const res = await supabase
        .from('daily_affirmation_users')
        .insert([{
            'user_id': userID,
            'alert_time': alert_time
        }]);
    return res.data;
};

const readRecords = async () => {
    const res = await supabase.from('daily_affirmation_users').select();
    return res.data;
};

export { createRecord, readRecords };
