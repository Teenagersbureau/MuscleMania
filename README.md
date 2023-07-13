# MuscleMania
- A basic gym website project which has been developed using the various tech-stacks such as HTML, CSS, JS (both for the frontend and the backend) 
- PUG has been used for the frontend as the templating engine 
- For the database, MongoDB has been used to store the various information of the user
- This is a responsive website so can be accessed on desktops and phone

 ## Required Node Modules
- express
- http
- mongoose
- pug
- serve-favicon

 ## Installation of the required Node Modules
 - For the installation of the above required Node Modules on your system, download and install Node.js by [clicking here](https://nodejs.org/en/download/)
 - Set up the environment variable for Node.js by adding the PATH of *bin file*
 - Check if node is installed successfully by running 
```
node --version
```
- If installation was done correctly, the node version should be printed
- Install the required node modules by running the following commands
```
npm install express
npm install http
npm install mongoose
npm install pug
npm install serve-favicon
```
 ## Setting up the Database (MongoDB)
 - Download MongoDB community server by [clicking here](https://www.mongodb.com/try/download/community)
 - Setup MongoDB through the setup wizard
 - Create a folder named **data** in the **C DRIVE**. Within the **data** folder, create a subfolder named **db**
 - Check for a successfull installation of MongoDB by running the following command in the powershell
```
mongo --version
```
 - Open powershell and start the MongoDB daemon process which will handle all sorts of requests, manages data access, and performs background management operations. This can be done by running the following command
 ```
 monogd
 ```
 - Once the daemon process is running, we can access the database by running the following command in a new powershell window
 ```
 mongo
 ```
 - For listing all the databases run the following command
 ```
 show dbs
 ```
 - For this project, the database which is used is **contactgym**. Note that if this database did not exist previously, it will be created automatically once the 
 node application is running
 
 - For using the contactgym database, type in the following command
```
use contactgym
```
- For listing all the collections in the database, type in the following command
```
show collections
```
- For this project the collection which has been used is named as **gymusers**
- To print all the objects, or the enteries present in this collection, run the following command
```
db.gymusers.find()
```
### Running the Node App
- For starting the node app, run the following command in the terminal
```
node app.js
```
### Project Screenshots (Desktop View)

- Home page
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/desktopview_home.png" width="1600" height="500">
<br />

- Services Page
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/desktopview_services.png" width="1600" height="500">
<br />

- Trainers Page
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/desktopview_trainers.png" width="1600" height="500">
<br />

- Contact Page
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/desktopview_contactus.png" width="1600" height="500">
<br />

- Thank You Page
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/desktopview_thankspage.png" width="1600" height="500">
<br />

- DB Entry ScreenShot
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/common_dbentry.png" width="700" height="300">
<br />

### Project Screenshots (Mobile View)

- Home page
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/mobileview_home.png" width="560" height="600">
<br />

- Services Page
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/mobileview_services.png" width="560" height="600">
<br />

- Trainers Page
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/mobileview_trainers.png" width="560" height="600">
<br />

- Contact Page
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/mobileview_contactus.png" width="560" height="600">
<br />

- Hamburger Menu for Mobile Devices
<img src="https://github.com/Sagar-Wadhwa-726/Gym-Website-Project/blob/master/ProjectScreenShots/mobileview_hamburgermenu.png" width="560" height="600">
<br />
 
