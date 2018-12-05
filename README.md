# event-trigger - Pre-release version
> Simple event emitter/trigger-er class

[![NPM](https://img.shields.io/npm/v/event-trigger.svg)](https://www.npmjs.com/package/event-trigger) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save event-trigger
```

## Usage

```
import EventTrigger from 'event-trigger';
 
const events = EventTrigger();
events.on('custom-event', (event, data) => {
    console.log(data);
    // '🍔'
});
 
events.trigger('custom-event', '🍔');

events.off('custom-event');
```

## Demo

https://zoli-fischer.github.io/event-trigger/

## License

MIT [zoli-fischer](https://github.com/zoli-fischer)
