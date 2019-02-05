/* eslint-disable func-names, prefer-arrow-callback */
import { expect } from 'chai';
import EventTrigger from './EventTrigger';

describe('EventTrigger', function() {
    let events;
    let burger = '';
    let hotdog = '';

    it('Create event trigger instance', (done) => {
        events = new EventTrigger();
        expect(events).to.be.an.instanceof(EventTrigger);
        done();
    });

    it('Add event listener', (done) => {
        events.on('custom-event', (event, data) => {
            burger = data; // '🍔'
        });
        done();
    });

    it('Trigger event', function(done) {
        events.trigger('custom-event', '🍔');
        expect(burger).to.eql('🍔');
        done();
    });

    it('Trigger event one', function(done) {
        events.one('custom-event-one', (event, data) => {
            hotdog = data; // '🌭'
        });
        events.trigger('custom-event-one', '🌭');
        events.trigger('custom-event-one', '🍔');
        expect(hotdog).to.eql('🌭');
        done();
    });

    it('Remove event listener', function(done) {
        burger = '';
        events.off('custom-event');
        events.trigger('custom-event', '🍔');
        expect(burger).to.eql('');
        done();
    });
});
