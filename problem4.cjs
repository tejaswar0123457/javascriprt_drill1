function information4(inventory){
  const arr=[]
  for (i=0;i<inventory.length;i++){
      arr[i]=inventory[i].car_year
  }
  console.log(arr)
  return arr
}    
information4(inventory)

module.exports=information4
