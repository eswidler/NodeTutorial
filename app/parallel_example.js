const async = require('async')
const fs = require('fs')

async.parallel(['file1', 'file2', 'file3'], fs.stat, function (err, results) {
    // results is now an array of stats for each file
    console.log(results)
})