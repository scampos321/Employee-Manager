const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
require('dotenv').config()

const db = mysql.createConnection (
  {
    host: 'localhost',
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the tracker_db database.`)
);

db.connect((err) => {
    if (err) throw err;
    init();
})

const departmentLists = () => {
    const query = 'SELECT * FROM department';
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
}

const employeeList = () => {
    const query = 'SELECT * FROM employees';
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
}

const rolesList = () => {
    const query = 'SELECT * FROM roles';
    db.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
}

const addDepartment = () => {
    inquirer.prompt({
        type: "input",
        name: "department",
        message: "Create the new department"
    }).then((answer) => {
        const query = 'INSERT INTO department (name) VALUE (?)';
        db.query(query, answer.department, (err, res) => {
            if (err) throw err;
            departmentLists();
            init();
        });
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter a title for the new role",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of the role? Enter a number no more than 7 digits",
        },
        {
            type: "input",
            name: "departmentId",
            message: "What is the department ID number?",
        }
    ]).then((answer) => {
        const query = 'INSERT INTO roles(title, salary, department_id) VALUE (?, ?, ?)';
        db.query(query, [answer.title, answer.salary, answer.departmentId],
            (err, res) => {
                if (err) throw err;
                rolesList();
                init();
            })
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the first name of the new employee?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the last name of the new employee?",
        },
        {
            type: "input",
            name: "roleId",
            message: "What is the role ID number?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager ID number? or enter 'null' if theres no manager",
        },
    ]).then((answer) => {
        const query = 'INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUE (?, ?, ?, ?)';
        db.query(query, [answer.firstName, answer.lastName, answer.roleId, answer.managerId],
            (err, res) => {
                if (err) throw err;
                employeeList();
                init();
            })    
    })
}

const deleteDepartment = () => {
    const queryi = 'SELECT * FROM department'
    db.query(queryi, (err, res) => {
        if (err) throw err;
        inquirer.prompt([{
            type: "list",
            name: "selectDepartment",
            message: "Select a department to remove",
            choices: res.map(department => {
                return { name: `${department.name}` ,
            value: department.id }
            })
            }]).then(answer => {
                const queryii = 'DELETE FROM department WHERE ?'
                db.query(queryii, [{ id:answer.selectDepartment}], (err, res) => {
                    if (err) throw err;
                    console.log("Department has been removed");
                    departmentLists();
                    init();
                })
            })
        })
}

const deleteRole = () => {
    const queryi = 'SELECT * FROM roles'
    db.query(queryi, (err, res) => {
        if (err) throw err;
        inquirer.prompt([{
            type: "list",
            name: "selectRole",
            message: "Select a role to remove",
            choices: res.map(role => {
                return { name: `${role.title}` , value: role.id }
            })
            }]).then(answer => {
                const queryii = 'DELETE FROM roles WHERE ?'
                db.query(queryii, [{ id: answer.selectRole}], (err, res) => {
                    if (err) throw err;
                    console.log("Role has been removed");
                    rolesList();
                    init();
                })
            })
    })
}

const deleteEmployee = () => {
    const queryi = 'SELECT * FROM employees'
    db.query(queryi, (err, res) => {
        if (err) throw err;
        inquirer.prompt([{
            type: "list",
            name: "selectEmployee",
            message: "Select a employee to remove",
            choices: res.map(employees => {
                return { name: `${employees.first_name} ${employees.last_name}`, value: employees.id }
            })
            }]).then(answer => {
                const queryii = 'DELETE FROM employees WHERE ?'
                db.query(queryii, [{ id: answer.selectEmployee }], (err, res) => {
                    if (err) throw err;
                    console.log("Employee has been removed");
                    employeeList();
                    init();
                })
            })

    })
}

const quitApp = () => {
    console.log("Application has been terminated");
    db.end;
}

const init = () => {
    inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select a choice below",
        choices: [
            "View company departments",
            "View company roles",
            "View employee roster",
            "Add department",
            "Add role",
            "Add employee",
            "Remove a department from database",
            "Remove a role from database",
            "Remove an employee from database",
            "Quit Application"
        ]
    }).then((answer) => {
        if (answer.select === "View company departments"){
            departmentLists();
        } else if (answer.select === "View company roles"){
            rolesList();
        } else if (answer.select === "View employee roster"){
            employeeList();
        } else if (answer.select === "Add department"){
            addDepartment();
        } else if (answer.select === "Add role"){
            addRole();
        } else if (answer.select === "Add employee"){
            addEmployee();
        } else if (answer.select === "Remove a department from database"){
            deleteDepartment();
        } else if (answer.select === "Remove a role from database"){
            deleteRole();
        } else if (answer.select === "Remove an employee from database"){
            deleteEmployee();
        } else if (answer.select === "Quit application"){
            quitApp();
        }
    })
}