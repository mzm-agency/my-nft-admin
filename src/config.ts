import {EventEmitter} from 'fbemitter';
let config:any = {};

let configList:any = {
    emitter:new EventEmitter(),
};

config.config = function (data:any) {
    configList = {
        ...configList,
        ...data
    };
};
config.get = function (option:string) {
    return configList[option];
};

export default config