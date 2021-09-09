import { atom } from 'recoil';

const alertAtom = atom({
    key: 'alert',
    default: null
});

export { alertAtom };