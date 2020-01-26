function solve(data) {
    let parsedData = data.reduce((a, b) => {
        let [systemName, componentName, subcompName] = b.split('|')
            .map(x => x.trim());
        if (!a[systemName]) {
            a[systemName] = {
                [componentName]: [subcompName]
            };
            return a;
        }
        if (!a[systemName][componentName]) {
            a[systemName][componentName] = [subcompName];
            return a;
        }
        a[systemName][componentName] = [...a[systemName][componentName], subcompName];

        return a;
    }, {});

    let sortedSystems = Object.keys(parsedData).sort((a, b) => {
        return parsedData[a].length - parsedData[b].length || a.toLowerCase().localeCompare(b.toLowerCase())
    });
    sortedSystems.map(x => {
        console.log(x);
        let sortedComp = Object.keys(parsedData[x]).sort((a, b) => {
            if (Object.keys(parsedData[x][a]).length !== Object.keys(parsedData[x][a]).length) {
                return parsedData[x][a].length - parsedData[x][b].length;
            }
        });
        for (const y of sortedComp) {
            console.log(`|||${y}`);
            for (const k of parsedData[x][y]) {
                console.log(`||||||${k}`);
            }
        }
    });
}
solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])