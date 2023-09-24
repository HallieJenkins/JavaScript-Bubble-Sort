// Include fs module
var fileReader = require('fs')


// Use fs.readFile() method to read the file
fileReader.readFile('SampleFile.txt', function(err, data){
    var fileArr = data.toString().split('\n')
    console.log(`Before Sort: ${fileArr} \n`)
    var temp;
    // Bubble sort
    for (let j = 1; j < fileArr.length; j++) {
        for (let i = 0; i < fileArr.length; i++) {
            if(fileArr[i] > fileArr[i+1]){
                temp = fileArr[i]
                fileArr[i] = fileArr[i+1]
                fileArr[i+1] = temp
            }

        }
    }
    console.log(`After Sort: ${fileArr} \n`)
    
})


