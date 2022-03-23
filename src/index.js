import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

function generate() {
    const doc = new Document({
        sections: [
        {
            properties: {},
            children: [
            new Paragraph({
                children: [
                new TextRun("Hello World"),
                new TextRun({
                    text: "Foo Bar",
                    bold: true
                }),
                new TextRun({
                    text: "\tGithub is the best",
                    bold: true
                })
                ]
            })
            ]
        }
        ]
    });

    Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
    });
}

document.getElementById("generateButton").onclick=generate;