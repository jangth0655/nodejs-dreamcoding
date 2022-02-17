const EventEmitter = require("events");

const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("fist callback", args);
};

emitter.on("ellie", callback1);

emitter.on("ellie", (arg) => {
  console.log("second callback", arg);
});

emitter.emit("ellie", { message: 1 });
emitter.emit("ellie", { message: 2 });
emitter.removeListener("ellie", callback1);
emitter.emit("ellie", { message: 3 });
