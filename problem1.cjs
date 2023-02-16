function information1(inventory){
    for (i=0;i<inventory.length;i++){
        if (inventory[i].id==33){
            console.log("Car 33 is a " + inventory[i].car_year + " " + inventory[i].car_make + " " + inventory[i].car_model)
            break
        }
    }
}
information1(inventory)

module.exports=information1
     
