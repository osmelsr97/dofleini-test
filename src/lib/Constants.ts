export const COLOR_PALETTE: { [key: string]: string } = {
    dodgerBlue: '#39B0FF',
    niagara: '#04B58B',
    chateauGreen: '#3E9C4B',
    buddhaGold: '#B6BC00',
    tangerine: '#E59100',
    trinidad: '#E55C00',
    amaranth: '#EE1F50',
    redViolet: '#D6198A',
    electricViolet: '#B321F1',
    dodgerBlue2: '#48B5FE'
}

interface IPersonQty {
    name: string,
    value: number
}

export const PERSONS_QTY: IPersonQty[] = [
    { name: 'Sólo yo', value: 1 },
    { name: '2 - 10', value: 10 },
    { name: '11 - 25', value: 25 },
    { name: '26 - 50', value: 50 },
    { name: '51 - 100', value: 100 },
    { name: '500+', value: 500 },
];