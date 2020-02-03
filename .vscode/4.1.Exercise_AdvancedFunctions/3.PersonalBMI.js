function solve(name, age, weight, height) {
    let calcBmi = () => {
        return Math.round(weight / (height / 100 * height / 100))
    };
    let status = () => {
        if (calcBmi() < 18.5)
            return 'underweight'
        if (calcBmi() < 25)
            return 'normal'
        if (calcBmi() < 30)
            return 'overweight'
        return 'obese'
    };
    const obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: calcBmi(),
        status: status()
    };
    if (obj.status === "obese") {
        obj.recommendation = 'admission required';
    }
    return obj;
}
//solve("Honey Boo Boo", 9, 57, 137);
console.log(solve('Peter', 29, 75, 182));