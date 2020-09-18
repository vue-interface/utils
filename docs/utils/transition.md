
# transition

Use the transition or animation delay and return a promise that gets executed
after delay. If no element delay, then promise will be called immediately.

``` js
transition(el, defaultValue)
```

-   **el** `DOMElement` \
    The HTML element used to calculate the transition delate.

**Returns** `string|object`

### Example

``` js
transition(el).then(delay => {
    console.log('delayed!', delay);
});
```