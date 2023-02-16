function information5(inventory){
  const arr2=[]
  let c=0
  for (i=0;i<inventory.length;i++){
      if (arr1[i]<2000){
          arr2[c]=arr1[i]
          c=c+1
      }
  }
  console.log(arr2.length)
  console.log(arr2)
} 
const imported=require('./problem4.cjs')   
const arr1=imported.information4()
information5(inventory)

module.exports=information5
