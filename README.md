# event-trigger
> Simple event emitter/trigger-er class

[![NPM](https://img.shields.io/npm/v/event-trigger.svg)](https://www.npmjs.com/package/event-trigger)

## Install

```bash
npm install --save event-trigger
```

## Usage

### Simple event

```
import EventTrigger from 'event-trigger';
 
const events = new EventTrigger();
events.on('custom-event', (event, data) => {
    console.log(data);
    // '🍔'
});
 
events.trigger('custom-event', '🍔');

events.off('custom-event');
```

### Multiple event type on one function 

```
const event2 = new eventTrigger();
event2.on('start stop', (event, data) => {
    console.log(event.type, data);
    if (event.type === 'start') {
        event2.trigger('stop', 'video');
    }
});
event2.trigger('start', 'video');
```

### Chained

```
const event3 = new eventTrigger();
event3.on('start', (event, data) => {
    console.log(event.type, data);
    event3.trigger('stop', 'video');
}).on('stop', (event, data) => {
    console.log(event.type, data);
});
event3.trigger('start', 'video');
```

### Stop listening

```
const event4 = new eventTrigger();
event4.on('start stop', (event, data) => {
    console.log(event.type, data);
    if (event.type === 'start') {
        event4.trigger('stop', 'video');
    }
});
event4.trigger('start', 'video');
event4.off('start' /*2nd parameter: function if only one*/);
event4.trigger('start', 'video again');
event4.off();
event4.trigger('stop', 'stop again');
```

## Demo

https://zoli-fischer.github.io/event-trigger/index.html

## License

MIT [zoli-fischer](https://github.com/zoli-fischer)
