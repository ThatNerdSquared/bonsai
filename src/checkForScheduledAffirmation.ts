import { readRecords } from './db';
import { SignUpData } from './types';

const checkForScheduledAffirmation = async () => {
    const data: SignUpData[] = await readRecords();
    data.forEach((item) => {
        const itemAlertTime = item.alert_time.split(':');
        const currentTime = new Date();
        const comparedAlertTime = new Date();

        currentTime.setSeconds(0, 0);
        comparedAlertTime.setHours(
            Number(itemAlertTime[0]),
            Number(itemAlertTime[1]),
            0,
            0
        );

        if (currentTime.getTime() == comparedAlertTime.getTime()) {
            console.log(item.id);
        }
        else {
            console.log(`CURRENTTIME: ${currentTime.toString()}`);
            console.log(`COMPARED:    ${comparedAlertTime.toString()}`);
            console.log('====');
        }
    });
};

export default checkForScheduledAffirmation;
