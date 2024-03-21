// 1. pomocí foreach cyklu na persons poli, 
// do pole employees vytvorte nove zamestnance pomoci new Employee
let employees = [];
persons.forEach(person => {
    let employee = new Employee(person.id, person.name, person.age, person.city, person.position);
    employees.push(employee);
});

// 2. Vypiste do konzole pouze zamestnance kteří mají věk nad třicet
console.log("Employees over 30 years old:");
employees.filter(employee => employee.age > 30).forEach(employee => console.log(employee));

// 3. Vytvorte tri firmy Meta, Apple, Microsoft

// 4. Do firmy Meta vlozte zamestnance s pozicí Software a věkem do 50 let 

// 5. Do Apple vlozte zamestnance s pozicí Software nebo Hardware

// 6. Do Microsoft vlozte pouze zamestnance s pozicí Marketing nebo zamestnance s mestem zacinajicím na San

// 7. Firmy vlozte do pole 

// 8. Projdete cyklem vsechny firmy a vypiste jejich zamestnance do konzole

// 9. Pushnete do spolecneho repozitare do vetve pod svym jmenem
