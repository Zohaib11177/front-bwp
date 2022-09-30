import TimeStampHelper from "Helpers/TimeStampHelper";

const BackupNameHelper = (string) => {
    let backupString = string,
        backupName,
        backupDate,
        backupTime,
        i,
        under = [];
    for (i = 0; i < backupString.length; i++) {
        if (backupString[i] === "_") {
            under.push(i);
        }
    }
    backupName = backupString.slice(0, under[0]).toUpperCase();
    backupDate = backupString.slice(under[0] + 1, under[1]);
    backupTime = backupString.slice(under[1] + 1, backupString.length);

    return (backupString = `${backupName} ${TimeStampHelper.safariDateTimeFormat(
        `${backupDate} ${backupTime}`
    )}`);
};

export default BackupNameHelper;
