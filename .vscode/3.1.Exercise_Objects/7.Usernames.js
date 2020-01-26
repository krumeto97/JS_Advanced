function solve(data) {
    let sortedSet = [...new Set(data.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    }))];
    console.log(sortedSet.join('\n'));
}
solve([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston',
    'Braston'
]);