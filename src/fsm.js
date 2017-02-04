class FSM {
    constructor(config) {
        this.config = config;
        this.state = config.initial;
        this.hist = [];
        this.chist = [];
    }
    getState() {
        return this.state;
    }

    changeState(state) {
        if (state in this.config.states) {
            this.hist.push(this.state);
            this.state = state;
        } else {
            throw new Error;
        }
    }
    trigger(event) {
        if (this.config.states[this.state].transitions[event] != undefined) {
            this.chist.push(event);
            this.hist.push(this.state);
            this.state = this.config.states[this.state].transitions[event];
        } else {
            throw new Error;
        }
    }
    reset() {
        this.state = this.config.initial;
    }
    getStates(event) {
        this.getSt = [];
        this.cstat = [];
        this.cstat = Object.keys(this.config.states);
        this.counter = 0;
        for (var key in this.config.states) {
            this.counter++;
        }
        if (event == undefined) {

            return this.cstat;
        } else {
            for (let i = 0; i < this.counter; i++) {
                if (event in this.config.states[this.cstat[i]].transitions)
                    this.getSt.push(this.cstat[i]);
            }

        }
        return this.getSt;
    }
    undo() {
        if (this.hist.length == 0) {
            return false;
        } else {
            this.state = this.hist.pop();
            return true;
        }
    }
    redo() {
        if (this.chist.length == 0 || this.config.states[this.state].transitions[this.chist[0]] == undefined) {
            return false;

        } else {
            this.state = this.config.states[this.state].transitions[this.chist.shift()];
            return true;
        }
    }
    clearHistory() {
        this.hist = [];
        this.chist = [];
    }
}
module.exports = FSM;

/** @Created by Uladzimir Halushka **/
