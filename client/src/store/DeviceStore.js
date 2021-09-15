import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'one type' },
            { id: 2, name: 'two type' },
        ];
        this._brands = [
            { id: 1, name: 'one brand' },
            { id: 2, name: 'two brand' },
        ];
        this._devices = [
            { id: 1, name: 'one device', price: 100, rating: 0, img: '' },
            { id: 2, name: 'two device', price: 200, rating: 0, img: '' },
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get brands() {
        return this._brands;
    }

    get user() {
        return this._user;
    }

    get devices() {
        return this._devices;
    }
}
