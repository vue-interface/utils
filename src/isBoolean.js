export default function isBoolean(subject) {
    return typeof subject === 'boolean' || (
        typeof subject === 'object'
            && subject !== null
            && typeof subject.valueOf() === 'boolean'
    );
}