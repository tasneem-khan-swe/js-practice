const arrObj=[
    {
        key: "Sample 1",
        value: "Data 1"
    },
    {
        key: "Sample 1",
        value: "Data 1"
    },
    {
        key: "Sample 2",
        value: "Data 2"
    },
    {
        key: "Sample 1",
        value: "Data 1"
    },
    {
        key: "Sample 3",
        value: "Data 1"
    },
    {
        key: "Sample 4",
        value: "Data 1"
    },
    ]
    
  const obj={}
  arrObj.forEach(item=>{
      const key=item.key;
      if(obj[key]){
          obj[key].push(item)
      }
      else{
          obj[key]=[item]
      }
  })
//   const grouped = arrObj.reduce((acc, item) => {
//   (acc[item.key] = acc[item.key] || []).push(item);
//   return acc;
// }, {});

    console.log(obj)
// const unique = arrObj.map(item => [item.key, item]);
// console.log(unique)