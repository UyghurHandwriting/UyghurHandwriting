import { PDFDocument, StandardFonts } from "pdf-lib";

// PDF template oluşturma fonksiyonu
export const createPDF = async (): Promise<void> => {
    // Yeni bir PDF belgesi oluştur
    const pdfDoc = await PDFDocument.create();

    // Sayfa oluştur
    const page = pdfDoc.addPage();

    // Yazı fontunu yükle
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Header ekle
    page.drawText("Header", {
        x: 50,
        y: page.getHeight() - 50,
        font,
        size: 18,
    });

    // Main içeriği ekle
    const contentText = "Çocukların yazı yazmayı öğrenmesi için beş satırlı yazı metodu:";
    const lineHeight = 20;
    const contentX = 50;
    let contentY = page.getHeight() - 150;

    page.drawText(contentText, {
        x: contentX,
        y: contentY,
        font,
        size: 12,
    });

    // Beş satırlı yazı metodu
    for (let i = 1; i <= 5; i++) {
        const lineText = `${i}. Satır: ___________________`;

        const lineTextWidth = font.widthOfTextAtSize(lineText, 12);
        const lineTextX = contentX + (page.getWidth() - contentX - lineTextWidth) / 2;

        page.drawText(lineText, {
            x: lineTextX,
            y: contentY - lineHeight * i,
            font,
            size: 12,
        });
    }

    // Footer ekle
    page.drawText("Footer", {
        x: 50,
        y: 50,
        font,
        size: 14,
    });

    // PDF belgesini oluştur
    const pdfBytes = await pdfDoc.save();

    // PDF'i bir dosyaya kaydet
    require("fs").writeFileSync("example.pdf", pdfBytes);
};

// PDF template oluştur
createPDF().catch((error) => console.log(error));
