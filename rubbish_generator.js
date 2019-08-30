//隨機產生collection內的資料
function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}
//產生幹話
function generateRubbish(options) {
  //各職業的第二段幹話
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code","加個功能"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計","換個顏色"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
  };

  //第三段幹話
  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  //空陣列
  let collection = []

  //判斷職業，將對應職業的task放進collection
  if(options.jobs ==="designer"){
      collection = collection.concat(...task.designer)
  }else if(options.jobs === "engineer"){
      collection = collection.concat(...task.engineer)
  }else if(options.jobs === "entrepreneur"){
    collection = collection.concat(...task.entrepreneur)
  }

  //如果collection內沒東西，跳出錯誤訊息
  if(collection.length === 0){
      return "請選擇職業"
  }
  
  //將職業與幹話組成字串
  let rubbish = `身為一個${options.jobs}，${sample(collection)}，應該${sample(phrase)}`

  return rubbish

}

module.exports = generateRubbish

