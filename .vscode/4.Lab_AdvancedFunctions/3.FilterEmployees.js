function solve(data, criteria) {
    let parseData = function (data) {
        return JSON.parse(data);
    }
    let parsedData = parseData(data);
    function SortData(data, criteria) {
        let counter = 0;
        let splitCriteria = criteria.split('-');
        return data = [...data.map(x => {
            let keys = Object.keys(x);
            if (keys.some(y => y === splitCriteria[0])) {
                if (x[splitCriteria[0]] === splitCriteria[1]) {
                    console.log(`${counter++}. ${x["first_name"]} ${x["last_name"]} - ${x["email"]}`)
                }
            }
        })]
    }
    SortData(parsedData, criteria);
}
solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson'
);