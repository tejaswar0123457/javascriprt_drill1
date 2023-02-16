function information6(inventory){
  const arr=[]
  let c=0
  for (i=0;i<inventory.length;i++){
      if ((inventory[i].car_make=='BMW') | (inventory[i].car_make=='Audi' )){
          arr[c]=inventory[i]
          c=c+1
      }
  }

  console.log(JSON.stringify(arr))
 
}    
information6(inventory)
module.exports=information6
