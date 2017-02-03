class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
  this.config = config;
  this.state = config.initial;
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
this.state = state;

    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
      this.state = this.config.states[this.state].transitions[event];
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
      this.state = config.initial;
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
true*/
if (event != undefined)
{

}
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {


    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {

    }
}


/** @Created by Uladzimir Halushka **/

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
