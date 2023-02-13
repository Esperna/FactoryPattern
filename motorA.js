const Motor = require("./motor");

class MotorA extends Motor {
    constructor() {
        super();
    }
    _actStart() {
        console.log("MotorA specific process");
    }
}
module.exports = MotorA;
