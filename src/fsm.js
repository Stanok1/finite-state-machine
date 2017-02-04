class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config;
        this.state = config.initial;
        this.hist = [];
        this.hist.push(this.state);
        this.chist=[];
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {


   if (state in this.config.states){
    this.hist.push(this.state);
    this.state = state;}else {



    throw new Error;
}

}
    /**
     * Changes state according to event transition rules.
     * @param event
     */
     trigger(event) {
       if (this.config.states[this.state].transitions[event] != undefined)
       {
        this.chist.push(event);
         this.hist.push(this.state);
         this.state = this.config.states[this.state].transitions[event];
       }else {
         throw new Error;
       }
     }

    /**
     * Resets FSM state to initial.
     */
    reset() {

        this.state = this.config.initial;

    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        /*
(anonymous) @ VM2335:1
'busy' in student.config.states
true
Object.keys(student.config.states)

*/
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
    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {

        if (this.hist.length == 0) {
            return false;

        } else {
           this.state = this.hist.pop();


        }


    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
      if (this.chist.length == 0) {
          return false;

      } else {
         this.trigger(this.chist.pop());
         this.hist.pop();

      }


    }

    /**
     * Clears transition history
     */
    clearHistory() {
      this.hist = [];
      this.chist = [];

    }
}
module.exports = FSM;

/** @Created by Uladzimir Halushka **/
