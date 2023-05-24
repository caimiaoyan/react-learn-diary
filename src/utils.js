//数组去重，包含多维数组
export function uniqueArr(arr){
  function flat(targetArr, resultArr){
    targetArr.forEach(item => {
      if(Array.isArray(item)){
        flat(item, resultArr);
      }else{
        resultArr.push(item);
      }
    })
  }

  function flatArr(targetArr){
    const resultArr = [];
    flat(targetArr, resultArr)
    return resultArr;
  }

  return [...new Set(flatArr(arr))]
}