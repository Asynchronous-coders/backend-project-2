const classModel = require('../models/queries');

class Class {
    constructor(class_obj){
        this._class = class_obj;
    }
    status(){
        return "200 OK";
    }
}

module.exports = Class;