const factory = require("./factory");
const Motor = require("./motor");
const motor = new Motor();

var motorObj = null;
motorObj = factory.createMotor(motor.TYPE_A);
motorObj.start();
motorObj = factory.createMotor(motor.TYPE_B);
motorObj.start();
motorObj = factory.createMotor(motor.TYPE_C);
motorObj.start();
