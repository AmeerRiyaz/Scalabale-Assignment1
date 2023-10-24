const { response } = require("express");
const User = require("./model/user");
const Items = require('./model/items')

var express = require("express");
var app = express();
app.use(express.json({ extended: false, limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
	cors({
		origin: "*",
	})
);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Add items to DB in order to show to users 
app.post('/insertitems',async(req,res)=>{
    let itemName = req.body.itemName
    let itemCode = req.body.itemCode
    let price = req.body.price
    let finditems = await Items.findOne({"itemName":itemName , "itemCode":itemCode})
    if(finditems)
    res.send("Items already exist")
    else{
        const ItemCreate = await Items.create({
            itemCode:itemCode,
            itemName:itemName,
            price:price
          });
          res.status(201).json(ItemCreate);

    }
})

app.get('/displayitems',async(req,res)=>{

    //check whether the user who is accesing the api is in our mutual DB for the access 
    let email = req.body.email 
    let checkUser = await User.findOne({"email":email})
    if(!checkUser)
    res.send(`${email} is not authorized`)
//return the json obj which contains all the items to display at UI level 
   else 
   {
    let displayItem = await Items.find()
    res.status(201).json(displayItem)
   }

})



app.listen(3001, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})