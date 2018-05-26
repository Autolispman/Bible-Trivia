// /// write to file
// var txtFile = "c:/test.txt";
// var file = new File(txtFile);
// var str = "My string of text";

// file.open("w"); // open file with write access
// file.writeln("First line of text");
// file.writeln("Second line of text " + str);
// file.write(str);
// file.close();

// /// read from file

// var txtFile = "c:/test.txt"
// var file = new File(txtFile);

// file.open("r"); // open file with read access
// var str = "";
// while (!file.eof) {
// 	// read each line of text
// 	str += file.readln() + "\n";
// }
// file.close();
// alert(str);

////////////////////////////////////////////////////
/**
 * writeTextFile write data to file on hard drive
 * @param  string  filepath   Path to file on hard drive
 * @param  sring   output     Data to be written
 */
function writeTextFile(filepath, output) {
	var txtFile = new File(filepath);
	txtFile.open("w"); //
	txtFile.writeln(output);
	txtFile.close();
}

////////////////////////////////////////////////////
/**
 * readTextFile read data from file
 * @param  string   filepath   Path to file on hard drive
 * @return string              String with file data
 */

function readTextFile(filepath) {
	let fs = require('fs');
	let returnData = [];
	let data = fs.readFileSync(filepath, "utf8");
	data.split("\r\n").forEach(function (li) {
		returnData.push(li);
	});
	return returnData;
}
//let x = readTextFile("../data/TriviaQuestions.txt");

////////////////////////////////////////////////////

// Great parse examples with result to process file
// http://www.w3schools.com/jsref/jsref_parseint.asp
// var a = parseInt("10");           // 10
// var b = parseInt("10.00");        // 10
// var c = parseInt("10.33");        // 10
// var d = parseInt("34 45 66");     // 34
// var e = parseInt(" 60 ");         // 60
// var f = parseInt("40 years");     // 40
// var g = parseInt("He was 40");    // NaN
//
// var h = parseInt("10",10);        // 10
// var i = parseInt("010");          // 10
// var j = parseInt("10",8);         // 8
// var k = parseInt("0x10");         // 16
// var l = parseInt("10",16);        // 16

// http://www.w3schools.com/jsref/jsref_parsefloat.asp
// var a = parseFloat("10");         // 10
// var b = parseFloat("10.00");      // 10
// var c = parseFloat("10.33");      // 10.33
// var d = parseFloat("34 45 66");   // 34
// var e = parseFloat(" 60 ");       // 60
// var f = parseFloat("40 years");   // 40
// var g = parseFloat("He was 40");  // NaN

// function readTextFile(filePathName) {
// 	let fs = require('fs');
// 	// fs.readFileSync(filePathName, "utf8", function(error, data) {
// 	//     return data;
// 	// })
// 	//let data = fs.createReadStream(filePathName, "utf");
// 	// let rl = require('readline').createInterface({
// 	//     input: data,
// 	//     terminal: false
// 	// });
// 	fs.readFile(filePathName, function(error, data) {
// 		console.log(data);

// 	})
// 	let textArray = [];
// 	// rl.on('line', function (line) {
// 	//     textArray.push(line);
// 	// })
// 	return textArray;
// }