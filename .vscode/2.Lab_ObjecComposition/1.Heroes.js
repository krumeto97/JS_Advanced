function solve() {
    return {
        mage: function (name) {
            this.name = name;
            this.health = 100;
            this.mana = 100;
        },
        fighter: function (name) {
            this.name = name;
            this.health = 100;
            this.stamina = 100;
        },
        cast: function (params) {
            this.stamina--;
            return `${this.name} cast ${params}`;
        },
        fight: function (params) {
            this.stamina--;
            return `${this.name} slashes at the foe!`;
        }
    };
}
let a = solve();
let b = a.mage('Ivan');