class Motor {
    constructor() {
        this.TYPE_A = 0;
        this.TYPE_B = 1;
        this.TYPE_C = 2;
    }
    start() {
        //common logic is described in base class
        console.log("start");
        //sub class specific logic shall be described in action method
        this._actStart();
    }
    _actStart() {
        //action method should be private method
        console.log("default behavior")
    }
}

module.exports = Motor;
