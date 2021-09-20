INSERT INTO department(name)
VALUE ("Finance");

INSERT INTO department(name)
VALUE ("Engineering");

INSERT INTO department(name)
VALUE ("Sales");

INSERT INTO department(name)
VALUE ("Accounting");

INSERT INTO department(name)
VALUE ("Legal");



INSERT INTO roles(title, salary, department_id)
VALUE ("HR Trainee", 15000, 00);

INSERT INTO roles(title, salary, department_id)
VALUE ("HR Intern", 22000, 00);

INSERT INTO roles(title, salary, department_id)
VALUE ("HR Assistant", 35000, 00);

INSERT INTO roles(title, salary, department_id)
VALUE ("HR Trainer", 40000, 00);

INSERT INTO roles(title, salary, department_id)
VALUE ("HR Associate", 45000, 00);

INSERT INTO roles(title, salary, department_id)
VALUE ("Manager", 65000, 00);


INSERT INTO roles (title, salary, department_id)
VALUE ("Intern Software Developer", 45000, 01);

INSERT INTO roles (title, salary, department_id)
VALUE ("Junior Software Developer", 65000, 01);

INSERT INTO roles (title, salary, department_id)
VALUE ("Senior Software Developer", 90000, 01);

INSERT INTO roles (title, salary, department_id)
VALUE ("Technical Lead", 125000, 01);


INSERT INTO roles (title, salary, department_id)
VALUE ("Customer Service Associate", 45000, 03);

INSERT INTO roles (title, salary, department_id)
VALUE ("Commercial Sales", 55000, 03);

INSERT INTO roles (title, salary, department_id)
VALUE ("Account Coordinator", 65000, 03);



INSERT INTO roles(title, salary, department_id)
VALUE ("Clerk", 40000, 04);

INSERT INTO roles(title, salary, department_id)
VALUE ("Accountant", 65000, 04);

INSERT INTO roles(title, salary, department_id)
VALUE ("Auditor", 80000, 04);

INSERT INTO roles(title, salary, department_id)
VALUE ("Chief Financial Officer", 155000, 04);


INSERT INTO roles(title, salary, department_id)
VALUE ("Arbitrator", 55000, 05);

INSERT INTO roles(title, salary, department_id)
VALUE ("Case Manager", 70000, 05);

INSERT INTO roles(title, salary, department_id)
VALUE ("Legal Analyst", 85000, 05);

INSERT INTO roles(title, salary, department_id)
VALUE ("Attorney", 165000, 05);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 3, 6);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Mike', 'Chan', 5, 6);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Ashley', 'Rodriguez', 6, null);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Kevin', 'Tupik', 7, 8);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Malia', 'Brown', 8, 9);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Tom', 'Allen', 9, null);