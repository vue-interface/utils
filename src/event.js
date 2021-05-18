export default function event(key, eventInit) {
    // Ensure the eventInit is an object.
    eventInit = Object.assign({}, {
        bubbles: false,
        cancelable: false,
        composed: false
    }, eventInit || {});
    
    // If the `Event` class is a constructor, use it.
    if(typeof(Event) === 'function') {
        return new Event(key, eventInit);
    }
    
    // Otherwise, assume this to be a legacy browser.
    const event = document.createEvent('Event');

    // Define that the event name is 'build'.
    event.initEvent(key, eventInit.bubbles, eventInit.cancelable);
    
    return event;
}
