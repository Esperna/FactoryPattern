const Motor = require("./motor");

class MotorB extends Motor {
    constructor() {
        super();
    }
    _actStart() {
        console.log("motorB specific process");
    }
}
module.exports = MotorB;
