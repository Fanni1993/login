
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const nameChecker = (body,name) =>{
	for (var i = 0; i<= userData.length; i++ ){
			
		if (userData.length === 0){
				
			return false				
		}
		if (userData[i].name === body.name){
			console.log(userData[i].name)
			
			return true
		}else {
			
			return false
		}
	}
}

let userData =[]
app.use(bodyParser());
app.use(bodyParser.urlencoded( {extended: true}))

app.get('/',(req,res) => {
	res.sendFile(__dirname + '/' + 'app.html');
})
app.get('/api/courses', (req,res) => {
	res.send([1,3,4,5,2,8,9])
})
app.post('/save',(req,res) => {
	if (!nameChecker(req.body,'name')){
		userData.push(req.body)
		console.log(userData)
	}else{
		console.log('sorry its taken')
	}
			
});
app.listen(3000,() => console.log('listening on 3000'))

	
