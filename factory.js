const Motor = require("./motor");
const MotorA = require("./motorA");
const MotorB = require("./motorB");
const MotorC = require("./motorC");
const motor = new Motor();

class Factory {
    constructor() {
    }

    createMotor(type) {
        if (type === motor.TYPE_A) {
            console.log("motor Type A")
            return new MotorA();
        }
        if (type === motor.TYPE_B) {
            console.log("motor Type B")
            return  new MotorB();
        }
        console.log("motor Type C")
        return new MotorC()
    }
}

module.exports = new Factory();
