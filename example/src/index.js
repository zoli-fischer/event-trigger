// import eventTrigger from 'event-trigger';
import eventTrigger from 'event-trigger';

/* Simple event */
console.log('Simple event');

const event1 = new eventTrigger();
event1.on('start', (event, data) => {
    console.log(event.type, data);
    event1.trigger('stop', 'video');
});
event1.on('stop', (event, data) => {
    console.log(event.type, data);
});
event1.trigger('start', 'video');

console.log('');

/* Multiple event deff event */
console.log('Multiple event deff event');

const event2 = new eventTrigger();
event2.on('start stop', (event, data) => {
    console.log(event.type, data);
    if (event.type === 'start') {
        event2.trigger('stop', 'video');
    }
});
event2.trigger('start', 'video');

console.log('');

/* Chained event deff event */
console.log('Chained event deff event');

const event3 = new eventTrigger();
event3.on('start', (event, data) => {
    console.log(event.type, data);
    event3.trigger('stop', 'video');
}).on('stop', (event, data) => {
    console.log(event.type, data);
});
event3.trigger('start', 'video');

console.log('');

/* Stop listening */
console.log('Stop listening');

const event4 = new eventTrigger();
event4.on('start stop', (event, data) => {
    console.log(event.type, data);
    if (event.type === 'start') {
        event4.trigger('stop', 'video');
    }
});
event4.trigger('start', 'video');
event4.off('start');
event4.trigger('start', 'video again');
event4.off();
event4.trigger('stop', 'stop again');
