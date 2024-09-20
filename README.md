
# WebBrowserPrint

WebBrowserPrint is a tool for downloading web pages and combining them into a single PDF. Follow the instructions below to get started.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can download and install it from the official website.

Additionally, you will need [Ghostscript](https://www.ghostscript.com/download/gsdnld.html) installed to combine PDF files.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/thxa/WebBrowserPrint.git
   cd WebBrowserPrint
    ```

2. **Install Dependencies:** Run the following command to install the required Node.js packages:
    ```bash
    npm install
    ```

## Usage

1. **Add URLs:** Open the uri.txt file and add the URLs of the web pages you want to download. Each URL should be on a new line.
2. **Download Web Pages:** Execute the following command to start downloading the web pages:

    ```bash
    node app_v2.js
    ```
3. **Combine PDF Files:** After downloading, you can combine the generated PDF files using Ghostscript. Run the following command:

    ```bash
        gs -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=combined.pdf *.pdf
    ```

## Notes

- Ensure that Ghostscript is properly installed and accessible from your command line.
- You can customize the output filename in the Ghostscript command as needed.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

If you have any questions or issues, feel free to open an issue in the repository.
