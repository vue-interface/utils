
# prefix

Add a prefix to either a string or to keys of an object.

``` js
prefix(subject, prefix, [delimiter = '-'])
```

-   **subject** `string|object` \
    The subject that needs to be prefixed.

-   **prefix** `string` \
    The value to be prefixed
    
-   **delimiter** `string` \
    The delimiting character that appends the prefix to the subject.

**Returns** `string|object`

### Example

``` js
prefix('red', 'bg') // returns: 'bg-red'
prefix('red', 'bg', '_') // returns :'bg_red'

prefix({
    'red': true,
    'green': true,
    'blue': false
}, 'bg')

/*
returns:
{
    "bg-red": true,
    "bg-blue": true,
    "bg-green": false
}
*/
```