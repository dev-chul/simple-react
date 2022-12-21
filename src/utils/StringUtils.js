export function getStringUtils() {
    console.log('getStringUtils called!!');
}

export function AddComma(value) {
    if (typeof value === 'number') {
        const splitValue = value.toString().split('.');
        splitValue[0] = splitValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return splitValue.join('.');
    }

    const splitValue = value.split('.');
    splitValue[0] = splitValue[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return splitValue.join('.');
}
