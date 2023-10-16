# Project Description

This README provides an overview of a simple project that demonstrates how to use XMLHttpRequest to fetch data from a JSON server and display it dynamically on a web page. 
The project includes HTML, JavaScript, and a sample JSON database.

## Prerequisites
Make sure you have a JSON server installed. You can use `json-server` or any other similar tool to serve the `db.json` file. You can run the JSON server using the following command:
npx json-server db.json

### Project Components

#### JSON Database

The `db.json` file simulates a database with a list of people. Each person has a name, surname, sex, age, and a photo URL.

#### JavaScript

The `script.js` file contains JavaScript code that listens for a button click. When the button is clicked, it makes an XMLHttpRequest to the JSON server, 
retrieves the data, and dynamically creates HTML elements to display the information of each person on the web page.

## Usage

1. Clone or download this repository.
2. Start the JSON server using `npx json-server db.json`.
3. Open the `index.html` file in a web browser or use a development environment like Live Server to run the project.
4. Click the "Click" button, and the people's information from the JSON database will be fetched and displayed on the web page.
