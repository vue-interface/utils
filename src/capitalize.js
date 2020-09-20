export default function capitalize(string) {
    return string.split(' ').map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }).join(' ');
}
