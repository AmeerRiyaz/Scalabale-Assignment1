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




module.exports = app;