

export function getFormValues(event) {
    const data = new FormData(event.currentTarget);
    return Object.fromEntries(data.entries());
}

export function onSubmit(fn) {
    return (event) => {
        event.preventDefault();
        const values = getFormValues(event);
        return fn(values);
    };
}