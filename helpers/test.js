const appuimADB = require('appium-adb')
const  {ADB} = appuimADB
let adb = new ADB();
 
// calling the function
getScreen()
 
/*
 * captures a screenshot, names it 'screenshot.png' in the Android,
 * and puuls it to the PC.
 * the 2nd arg which 'pull' takes, is the name of the file to be-
 * shown in the PC.
 * Using the '.then' to ensure that the pulling occures after taking-
 * the picture
 */
function getScreen() {
  adb.shell('screencap -p  /sdcard/screencap.png')
  .then(() => {adb.pull('/mnt/sdcard/screencap.png', 'screencap.png')})
}