window.onload = function(){ 

    let persons = [
        { id: 1, name: 'John', age: 30, city: 'New York', position:  'Software'},
        { id: 2, name: 'Alice', age: 25, city: 'San Francisco', position:  'Software' },
        { id: 3, name: 'Bob', age: 35, city: 'Los Angeles', position:  'Hardware' },
        { id: 4, name: 'Eva', age: 28, city: 'Chicago', position:  'Marketing' },
        { id: 5, name: 'Mike', age: 40, city: 'Seattle', position:  'Software' },
        { id: 6, name: 'Sophia', age: 22, city: 'Miami', position:  'Marketing' },
        { id: 7, name: 'David', age: 45, city: 'Boston', position:  'Software' },
        { id: 8, name: 'Olivia', age: 32, city: 'Denver', position:  'Software' },
        { id: 9, name: 'Chris', age: 27, city: 'Austin', position:  'Hardware' },
        { id: 10, name: 'Emma', age: 33, city: 'San Diego' , position:  'Hardware'}
      ];

      // komenty ponechejte a pod koment vzdy dejte jen cast kodu ktera tomu odpovída
      // po kazdem bodě commitněte do gitu

      // 1. pomocí foreach cyklu na persons poli, 
      persons.forEach(person => {
        console.log(person.name);
    });
      // do pole employees vytvorte nove zamestnance pomoci new Employee
    
    persons.forEach(person => {
      let employee = new Employee(person.id, person.name, person.age, person.city, person.position);
      employees.push(employee);
  });
  
    // 2. Vypiste do konzole pouze zamestnance kteří mají věk nad třicet
    employees.forEach(employee => {
      if (employee.age > 30) {
          console.log(employee);
      }
     });
    // 3 Vytvorte tri firmy Meta, Apple, Microsoft
    let companies = [];
['Meta', 'Apple', 'Microsoft'].forEach(companyName => {
    let company = new Company(companyName);
    companies.push(company);
});
  
    // vse pomoci cyklů, filtrů apod.
    // 4 Do firmy Meta vlozte zamestnance s pozicí Software a věkem do 50 let 
    employees.forEach(employee => {
      if (employee.position === 'Software' && employee.age <= 50) {
          meta.employees.push(employee);
      }
  });
    // 5 Do Apple vlozte zamestnance s pozicí Software nebo Hardware
    employees.forEach(employee => {
      if (employee.position === 'Software' || employee.position === 'Hardware') {
          apple.employees.push(employee);
      }
  });
    // 6 do Microsoft vlozte pouze zamestnance s pozicí Marketing nebo zamestnance s mestem zacinajicím na San
    employees.forEach(employee => {
      if (employee.position === 'Marketing' || employee.city.startsWith('San')) {
          microsoft.employees.push(employee);
      }
  });
    // 7 firmy vlozte do pole 
    let companiesArray = [meta, apple, microsoft];
    // 8 projdete cyklem vsechny firmy a vypiste jejich zamestnance do console
    // 9 pushnete do spolecne repo do vetve pod svym jménem 

}