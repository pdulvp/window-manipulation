// Author: pdulvp
var fs = require('fs');

exports.getInfo = function(name, callback){
	return new Promise(function(resolve, reject) {
		
		const spawn = require('child_process').spawn;
		
		const ls  = spawn("powershell", [ "-ExecutionPolicy", "Bypass", "-File", "./Runner.ps1", name ], { cwd: "./scripts"});

		ls.stdout.setEncoding('utf8');
		ls.stdout.on('data', function(stdout){
			resolve(JSON.parse(stdout.toString()));
		});

		ls.stderr.on("data",function(stderr){
			reject( { error: stderr.toString() } );
		});

		ls.stdin.end();
	});
  
}
