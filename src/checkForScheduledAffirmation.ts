import { readRecords } from './db';

const checkForScheduledAffirmation = async () => {
    const data = await readRecords();
    console.log(data);
};

export default checkForScheduledAffirmation;
