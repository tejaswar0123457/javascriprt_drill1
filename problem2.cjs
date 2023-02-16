function information2(inventory){
    let x=inventory.length-1
    console.log("Last car is a "+inventory[x].car_make+' '+inventory[x].car_model)
        
}
information2(inventory)

module.exports=information2
