let numbers = ['rohith','lohith','partha','jani','boruto']

numbers.splice(2,3);
let number = ['rohith','lohith','partha','jani','boruto']
number.splice(3,0 ,'rishi','guna','peru')
console.log(numbers)
console.log(number)

let constant = ['bottle','cup','tea','pen','coffee']
let name= constant.slice(0,3);
console.log(constant);
console.log(name);
numbers.concat(name);
console.log(numbers);

let users =  [1, 2, 3, 4];

let res = users.findIndex(names)
  function names(person){
    return person===3
  }

  console.log(res);

  let user= [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ]
let result = user.findIndex(bottle)
  function bottle(pen){
    return pen.name == "mary"
  }
  console.log(result)