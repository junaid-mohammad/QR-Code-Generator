# QR Code Generator

This repository contains the source code for a **QR Code Generator**, a command-line application that generates QR codes from user-provided URLs and saves them as PNG images. The app also logs each generated URL into a text file for future reference. The project was built using **Node.js**, showcasing the use of native Node modules, external packages, and the Node Package Manager (NPM).

## Purpose

The primary goal of this project was to strengthen my understanding of **Node.js** and explore core concepts like:

- Using native **Node.js modules** (such as `fs` and `path`).
- Integrating external **NPM packages** (like `inquirer` and `qr-image`).
- Handling **file system operations** to create and manage files dynamically.
- Building an interactive **command-line tool** with real-world use cases.

This project served as a practical exercise to solidify my knowledge of **backend development** fundamentals.

---

## Features

- **Interactive Command-Line Tool**: Prompts users to input a URL and a desired file name for the QR code.
- **QR Code Generation**: Converts the user-provided URL into a QR code and saves it as a PNG image.
- **URL Logging**: Logs each generated URL into a `URL.txt` file for future reference.
- **File Management**: Automatically creates the necessary files and directories if they don't exist.

---

## Technologies Used

- **Node.js**: Core JavaScript runtime environment for server-side development.
- **Inquirer**: Used to build an interactive command-line interface for user input.
- **QR-Image**: A package for generating QR codes from URLs and saving them as image files.
- **File System (fs)**: Native Node.js module used to create and manage files and directories.
- **Path**: Native Node.js module to handle and resolve file paths.

---

## Lessons Learned

- **Understanding Node.js Modules**: Learned to effectively use core Node.js modules like `fs` and `path` for file handling.
- **Command-Line Interactivity**: Gained experience in creating interactive tools using **Inquirer**.
- **File Handling in Node.js**: Practiced creating, writing to, and appending files using Node.js.
- **Error Handling**: Implemented basic error handling for file operations and user inputs.
- **NPM Packages**: Explored how to install and integrate third-party packages using **NPM**.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/junaid-mohammad/QR-Code-Generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd QR-Code-Generator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   node index.js
   ```

---

## Contribution

If you have ideas for improving the QR Code Generator—such as adding more customization options, improving the logging functionality, or enhancing error handling—feel free to fork the repository and submit a pull request. Contributions are always welcome!

---

## License

This project is open-source and available for anyone to use, modify, and build upon for their own learning or projects.
