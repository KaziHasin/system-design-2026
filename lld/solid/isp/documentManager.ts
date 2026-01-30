
interface DocumentManager {
    createDocument(): void;
    saveDocument(): void;
    closeDocument(): void;
}

interface Scannable {

    scanDocument(): void;
}

class ISPDocument implements DocumentManager {
    createDocument(): void {
        console.log("Creating a new ISP document...");
    }
    saveDocument(): void {
        console.log("Saving the ISP document...");
    }
    closeDocument(): void {
        console.log("Closing the ISP document...");
    }
}

class ISPScannableDocument implements DocumentManager, Scannable {
    createDocument(): void {
        console.log("Creating a new ISP scannable document...");
    }
    saveDocument(): void {
        console.log("Saving the ISP scannable document...");
    }
    closeDocument(): void {
        console.log("Closing the ISP scannable document...");
    }
    scanDocument(): void {
        console.log("Scanning the ISP scannable document...");
    }
}

export { ISPDocument, ISPScannableDocument };