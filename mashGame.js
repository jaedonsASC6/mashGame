let homes = [process.argv[2],"Mansion", "Apartment" ,"Shack", "House","....Nah b yo broke ass aint got no house"];
let cars = [" Lambo"," Bicycle"," Trash Can"," Honda CRV"," Honda Civic"," Audi R8"]
let jobs = [" Doctor"," Rapper"," LOSER"," Theif"," Coder"," Engineer"," Police Officer"," Certified Broke Boy"]
function getHome(){
    let c = Math.floor((Math.random() * homes.length))
    if (process.argv[2] !=""){  
     return homes[c]
    }else{
    let c = Math.floor((Math.random()* (homes.length - 1)) + 1)   
    return ;   
   }}
function getChildrenCount(){
    let choice = Math.round(Math.random(2))
    if(process.argv[3] != "" || choice > 1){
        return (Math.floor(Math.random()*100))
    }
    else{
    return process.argv[3]
  } 
}
function getCar(){
    let car = Math.floor((Math.random() * cars.length))
    return cars[car]
}
function getJob(){
    let job =  Math.floor((Math.random() * jobs.length))
    return jobs[job]
}

function mash(){
    console.log("You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids" + " you will drive a" + getCar() + " to go to work as a" + getJob())
}

mash()
