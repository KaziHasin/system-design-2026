import { ISPDocument, ISPScannableDocument } from "./documentManager";

const ispDocument = new ISPDocument();
const ispScannableDocument = new ISPScannableDocument();
console.log("ISP Documents");

ispDocument.createDocument();
ispDocument.saveDocument();
ispDocument.closeDocument();


console.log("\nISP scannable Documents");

ispScannableDocument.createDocument();
ispScannableDocument.saveDocument();
ispScannableDocument.scanDocument();
ispScannableDocument.closeDocument();



