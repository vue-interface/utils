export default function isObject(subject) {
    return (!!subject) && (subject.constructor === Object);
};