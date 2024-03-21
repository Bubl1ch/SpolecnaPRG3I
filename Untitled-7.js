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
let companies = {
    Meta: [],
    Apple: [],
    Microsoft: []
// 4. Do firmy Meta vlozte zamestnance s pozicí Software a věkem do 50 let 
employees.filter(employee => employee.position === 'Software' && employee.age <= 50)
         .forEach(employee => companies.Meta.push(employee));
// 5. Do Apple vlozte zamestnance s pozicí Software nebo Hardware
employees.filter(employee => employee.position === 'Software' || employee.position === 'Hardware')
         .forEach(employee => companies.Apple.push(employee));

// 6. Do Microsoft vlozte pouze zamestnance s pozicí Marketing nebo zamestnance s mestem zacinajicím na San
employees.filter(employee => employee.position === 'Marketing' || employee.city.startsWith('San'))
         .forEach(employee => companies.Microsoft.push(employee));

// 7. Firmy vlozte do pole 
let allCompanies = Object.values(companies);

// 8. Projdete cyklem vsechny firmy a vypiste jejich zamestnance do konzole

// 9. Pushnete do spolecneho repozitare do vetve pod svym jmenem
