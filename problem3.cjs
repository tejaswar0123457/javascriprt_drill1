function information3(inventory){
  inventory.sort((a,b) => (a.car_model > b.car_model) ? 1 : ((b.car_model> a.car_model) ? -1 : 0))
  console.log(inventory)
}    
information3(inventory)

module.exports=information3
     
