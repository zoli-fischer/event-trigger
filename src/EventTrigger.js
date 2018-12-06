
const assign = (...args) => {
    const result = args.reduce((accumulator, currentValue) => {
        if (typeof currentValue === 'object') {
            Object.keys(currentValue).forEach(k => {
                accumulator[k] = currentValue[k];
            });
        }
        return accumulator;
    }, {});
    return result;
};

export default class EventTrigger {
    constructor() {
        this.____callbacks = [];
    }

    on(event, fn) {
        const events = event.split(' ');
        if (events.length > 1) {
            events.forEach(eventSplit => {
                this.on(eventSplit, fn);
            });
        } else {
            if (typeof this.____callbacks[event] === 'undefined') {
                this.____callbacks[event] = [];
            }
            this.____callbacks[event].push(fn);
        }
        return this;
    }

    off(event, fn) {
        if (typeof event === 'undefined') {
            this.____callbacks[event] = [];
        } else {
            const events = event.split(' ');
            if (events.length > 1) {
                events.forEach(eventSplit => {
                    this.off(eventSplit, fn);
                });
            } else if (typeof this.____callbacks[event] !== 'undefined') {
                if (typeof fn !== 'undefined') {
                    const index = this.____callbacks[event].indexOf(fn);
                    if (index > -1) {
                        this.____callbacks[event].splice(index, 1);
                    }
                } else {
                    this.____callbacks[event] = [];
                }
            }
        }
        return this;
    }

    trigger(...args) {
        if (args.length > 0) {
            let event;
            if (typeof args[0] === 'object') {
                let { type } = args[0];
                let originalEvent = args[0];
                if (args[0] instanceof Array) {
                    type = args[0][0];
                    originalEvent = args[0][1];
                }
                event = EventTrigger.CustomEvent(type, {
                    bubbles: false,
                    cancelable: false,
                });
                event.originalEvent = originalEvent;
            } else {
                event = EventTrigger.CustomEvent(args[0], {
                    bubbles: false,
                    cancelable: false,
                });
                event.originalEvent = null;
            }
            if (typeof this.____callbacks[event.type] !== 'undefined') {
                args.shift();
                args.unshift(event);
                this.____callbacks[event.type].forEach(fn => {
                    fn.apply(this, args);
                });
            }
        }
        return this;
    }

    static CustomEvent(type, params = {}) {
        params = assign({ bubbles: false, cancelable: false, detail: undefined }, params);
        if (typeof window !== 'function') {
            if (typeof window.CustomEvent === 'function') {
                return new window.CustomEvent(type, params);
            }

            const CustomEvent = (type_, params_ = {}) => {
                const event = document.createEvent('CustomEvent');
                event.initCustomEvent(type, params_.bubbles, params_.cancelable, params_.detail);
                return event;
            };
            CustomEvent.prototype = window.Event.prototype;
            return CustomEvent(type, params);
        }
        return assign({ type, originalEvent: null }, params);
    }
}
