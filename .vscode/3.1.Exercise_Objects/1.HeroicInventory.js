function solve(data = []) {
    return JSON.stringify(data.reduce((acc, heroString, i, arr) => {
        let [name, level, items] = heroString.split('/').map(x => x.trim());
        /* #region  another way of solving the problem */
        // acc.push({
        //     name, //takes the value from the Destructuring and makes property name with value name
        //     level: Number(level),
        //     items: items ? items.split(', ') : []
        // })
        // return acc; 
        /* #endregion */
        return [...acc, {
            name, //takes the value from the Destructuring and makes property name with value name
            level: Number(level),
            items: items ? items.split(', ') : []
        }]
    }, []));
}
console.log(solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));