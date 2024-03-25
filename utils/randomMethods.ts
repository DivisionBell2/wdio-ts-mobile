export function getRandomEmail(): string {
    return `autotest+${new Date().getTime()}@mailtest.ru`
}

export function getRandomPhoneNumber(): string {
    return `+7942${new Date().getTime().toString().substring(6)}`
}

export function getRandomString(num: number) {
    const chrs = 'абвгдежзиклмнопрстуфхцчшщъыьэюяАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    let str = '';
    for (var i = 0; i < num; i++) {
        var pos = Math.floor(Math.random() * chrs.length);
        str += chrs.substring(pos, pos + 1);
    }
    return str;
}