# event-trigger
> Simple event emitter/trigger-er class

[![NPM](https://img.shields.io/npm/v/event-trigger.svg)](https://www.npmjs.com/package/event-trigger)

## Install

```
npm install --save event-trigger
```

## Usage

### Simple event

```javascript
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

```javascript
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

```javascript
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

```javascript
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

### Trigger only once

```javascript
let hotdog;
const event = new eventTrigger();
event.one('custom-event-one', (event, data) => {
    hotdog = data; // '🌭'
});
event.trigger('custom-event-one', '🌭');
event.trigger('custom-event-one', '🍔');
console.log(event); // 🌭
```

## Demo

https://zoli-fischer.github.io/event-trigger/index.html

## License

MIT [zoli-fischer](https://github.com/zoli-fischer)
