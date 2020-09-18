# unit

Ensures a value is a CSS formatted unit.

``` js
unit(value, [uom = 'px'])
```

-   **value** `string|number` \
    The unit value.

-   **uom** `px` \
    The unit of measure.

**Returns** `string`

### Example

``` js
unit(12) // return: 12px
unit('12px') // return: 12px
unit(10, '%') // return: 12%
```