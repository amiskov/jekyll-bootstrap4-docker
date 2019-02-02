export let creature = {
    name: 'Oscar'
};

export function inspect() {
    return creature.name;
}

export function reset() {
    creature = {
        name: 'Oscar Reset'
    }
};