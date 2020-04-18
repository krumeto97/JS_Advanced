class Company {
  constructor() {
    this.departments = [];
    this.realDepartments = {};
  }

  addEmployee(username, salary, position, department) {
    if (!username || (!salary && salary !== 0) || !position || !department) {
      throw new Error(` Invalid input!`);
    }
    if (salary < 0) {
      throw new Error(" Invalid input!");
    }
    if (!this.realDepartments[department]) {
      this.realDepartments[department] = [];
    }
    this.realDepartments[department].push({
      username,
      salary,
      position,
    });

    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }
  getHighestAvgSalary(departments) {
    let aggregatedDep = Object.keys(this.realDepartments).sort((a, b) => {
      let avgADepartment = this.sumSalary(this.realDepartments, a);
      let avgBDepartment = this.sumSalary(this.realDepartments, b);
      return avgBDepartment - avgADepartment;
    });

    return aggregatedDep[0];
  }

  sumSalary(departments, currDepartment) {
    return ((departments[currDepartment].reduce(
      (acc, e) => acc + Number(e.salary), 0) / departments[currDepartment].length));
  }

  bestDepartment() {
    let str = "";

    let highestAvgDepartmentName = this.getHighestAvgSalary(this.departments);

    str += `Best Department is: ${highestAvgDepartmentName}\n`;

    str += `Average salary: ${this.sumSalary(
      this.realDepartments,
      highestAvgDepartmentName
    ).toFixed(2)}\n`;

    this.realDepartments[highestAvgDepartmentName].sort((a, b) => {
      return b.salary - a.salary || a.username.localeCompare(b.username);
    }).forEach((e) => {
      str += `${e.username} ${e.salary} ${e.position}`;
      str += '\n'
    });
    return str.trim();
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());