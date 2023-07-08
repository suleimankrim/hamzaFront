export const ConvertToBase64 = (file) => {
 return new Promise((resolve, reject) => {
  const readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.onloadend = ()=> resolve(readFile.result);
  readFile.onerror = ()=> reject(readFile.error);
 })

}
