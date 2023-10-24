const { response } = require("express");
const User = require("./model/user");

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


//Api to register a User 
app.post("/register", async (req, res) => {
	// Our register logic starts here
	try {
		// Get user input
		const {
		    fullname,
			email,
			password,
			mobile
		} = req.body;

		console.log("check in db");

		// check if user already exist
		// Validate if user exist in our database
		const oldUser = await User.findOne({ email });

		if (oldUser) {
			return res.status(409).send("User Already Exist. Please Login");
		}

		//Encrypt user password
		encryptedPassword = await bcrypt.hash(password, 10);

		// Create user in our database
		console.log("create");
		const user = await User.create({
			email: email.toLowerCase(), // sanitize: convert email to lowercase
			password: encryptedPassword,
			fullname:fullname,
			mobile: mobile
		});

		user.save(function (err, result) {
			if (err) {
				console.log("couldnt save");
			} else {
				console.log(result);
			}
		});

		// return new user
		res.status(201).json(user);
	} catch (err) {
		console.log(err);
	}
	// Our register logic ends here
});


//Api to Login the User

app.post("/login", async (req, res) => {
	// Our login logic starts here
	try {
		// Get user input
		const { email, password } = req.body;

		// Validate user input
		if (!(email && password)) {
			res.status(400).send("All input is required");
		}
		// Validate if user exist in our database
		const user = await User.findOne({ email });

		if (user && (await bcrypt.compare(password, user.password))) {

			user.save(function (err, result) {
				if (err) {
					console.log("couldnt save");
				} else {
					console.log(result);
				}
			});

			// user
			res.status(200).json(user);
		}
		res.status(400).send("Invalid Credentials");
	} catch (err) {
		console.log(err);
	}
	// Our Login logic ends here
});

app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})

