
# Windows manipulation #

## Prerequisites ## 

- This script requires Powershell execution policy enabled

### Dependencies ###
```
Get-Window.ps1 from Boe Prox
```

## How to use ##
 
```
var windowManipulation = require("../window-manipulation");

windowManipulation.getInfo("winmine").then(function (winpos) {
	console.log(winpos);
});
```