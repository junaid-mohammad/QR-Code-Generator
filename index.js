// Import the necessary packages
import inquirer from "inquirer"; // For getting user input via the command line
import qr from "qr-image"; // For generating QR codes
import fs from "fs"; // For working with the file system
import path from "path"; // For resolving file paths

// Define the base public folder path
const publicFolderPath = path.resolve("public");
const imagesFolderPath = path.join(publicFolderPath, "images");
const urlLogPath = path.join(publicFolderPath, "URL.txt");

// Ensure the public/images folder exists
if (!fs.existsSync(imagesFolderPath)) {
  fs.mkdirSync(imagesFolderPath, { recursive: true });
}

// Prompt the user to input the name for the QR code file and the URL to encode
inquirer
  .prompt([
    {
      message: "Name of the QR code PNG (without extension):",
      name: "qrName",
    },
    {
      message: "URL for the QR code:",
      name: "qrURL",
    },
  ])
  .then((answers) => {
    console.log("User inputs: ", answers);

    const qrName = answers.qrName;
    const qrURL = answers.qrURL;

    // Generate a QR code image synchronously
    const qr_img = qr.imageSync(qrURL);

    // Define the path for the QR code PNG file inside the images folder
    const qrPath = path.join(imagesFolderPath, `${qrName}.png`);

    // Write the QR code PNG file
    fs.writeFile(qrPath, qr_img, (err) => {
      if (err) throw err;
      console.log(`QR code saved as ${qrPath}`);
    });

    // Prepare the log entry for the URL text file
    const logEntry = `${qrName}: ${qrURL}\n`;

    // Check if the URL log file exists, create it if not, or append if it does
    if (!fs.existsSync(urlLogPath)) {
      fs.writeFile(urlLogPath, logEntry, (err) => {
        if (err) throw err;
        console.log("Log file created and URL saved!");
      });
    } else {
      fs.appendFile(urlLogPath, logEntry, (err) => {
        if (err) throw err;
        console.log("URL appended to log file!");
      });
    }
  })
  .catch((error) => {
    console.error("Error occurred:", error);
    throw error;
  });
