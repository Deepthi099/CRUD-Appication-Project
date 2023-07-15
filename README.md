# CRUD-Appication-Project

open two terminals (Click CTRL + `  to open terminal in VS Code) in VS Code

Create MongoDB Atlas account to get the URI to connect to the Server.

Terminal 1:

First change the directory to Server

	cd server

Now just run the package.json to install all the required modules

	npm install

Terminal 2:

Change the directory to Client

	cd client

Run the package.json to install the node_modules

	npm install

NOTE:

If there is any any error in mongoose-auto-increment package

then do these steps:(in server terminal)

1. npm uninstall mongoose

2. npm install mongoose@6.10.0


Once the installation is finished start the server in both terminals.

	npm start

Now the server is started at port Number 8000 in server

Now the server is started at port Number 3000 in client

Now we can see the CRUD application page in client terminal, there we can add the user details , view all user details, edit the user details, delete the user details.



