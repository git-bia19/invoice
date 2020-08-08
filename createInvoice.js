const fs = require("fs");
const PDFDocument = require("pdfkit");


function createInvoice(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 50 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
 
  generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
  doc
    
    .fillColor("#444444")
    .fontSize(10)
    .text(formatDate(),70,30,{align:"left"})
    .fontSize(10)
    .text("Simbazon~Orders~#1013~Shopify",80,30, { align: "center" })
    .fontSize(11)
    .font("Helvetica-Bold")
    .text("Customer", 422, 140)
    .font("Helvetica")
    .fontSize(10)
    .text("Abdirahman Farah",422,162)
    .text("1 order",422,173)  
    .fontSize(10.2)
    .font("Helvetica-Bold")
    .text("CONTACT INFORMATION",422,198)
    .font("Helvetica")
    .fontSize(10)
    .text("college20141@gmail.com ",422,218)  
    .text("No phone number ",422,229) 
    .fontSize(10.2)
    .font("Helvetica-Bold")
    .text("SHIPPING ADDRESS",422,249)
    .font("Helvetica")
    .fontSize(10)
    .text("No shipping address",422,269) 
    .fontSize(10.2)
    .font("Helvetica-Bold")
    .text("ORDER TRACKING NUMBER",422,291)
    .font("Helvetica")
    .fontSize(10)
    .text("005XC22134",422,320)
    .font("Helvetica-Bold")
    .text("BILLING ADDRESS",422,340)
    .font("Helvetica")
    .fontSize(10)
    .text("Abdirahman Farah",422,351) 
    .text("BodyCraft Sports Nutrition",422,362) 
    .text("Klarie Hihu Rd",422,373) 
    .text("Nairobi",422,384) 
    .text("Kenya") 
    .text("+254725716511") 

    .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  doc
    .fillColor("#444444")
    .fontSize(25)
    .font("Helvetica-Bold")
    .text('#1013',50,70)
    .font('Helvetica')
    .fontSize(10)
    .text('May 28,2020 at 2.42 pm from Draft Orders ' +  'Unfullfilled',130,80)
    .fontSize(11)
    .font("Helvetica-Bold")
    .text("Unfullfilled (150)", 50, 140)
    .font("Helvetica")
    .text("Columbus Office", 320, 140)


 

 
  doc
  .image("isoburn.png",50,150,{width: 40,height:40})
  .font('Helvetica')
  .fontSize(10)
    .text("BSN ISOBURN,lean Whey Protein Powder Fat     $25.25 × 15   $378.75 ",90,160)
    .text("Burner for Weight Loss with L-carnitine -Vanilla",90,170)
    .text("Ice Cream, (20 Servings",90,180)
    .fontSize(7)
    .text('Chocolate Milkshake',90,190)
    .text('SKU: B001K14282')
    .image("choco.png",58,212,{width: 20,height:35})
    .fontSize(10)
      .text("BSN ISOBURN,lean Whey Protein Powder Fat     $25.25 × 26   $656.50",90,220)
      .text("Burner for Weight Loss with L-carnitine -Vanilla",90,230)
      .text("Ice Cream, (20 Servings",90,240)
      .fontSize(7)
      .text('Vanilla Ice Cream',90,250)
      .text('SKU: B001K14282')
      .image("nitro.jpg",58,280,{width: 20,height:35})
      .fontSize(10)
        .text("MuscleTech Nitro tech Ripped Ultra Clean           $49.18 × 25   $1,229.50",90,280)
        .text("Whey Protein isolate Powder + Weight Loss ",90,290)
        .text("Formula, Low Sugar,Low Carb, French Vanilla",90,300)
        .text("Swirl, 4 Pounds",90,310)
        .fontSize(7)
        .text('Chocolate Brownie/4 Pound',90,320)
        .text('SKU: B00M95SA70')
        .image("nitro2.jpg",50,350,{width: 40,height:35})
        .fontSize(10)  
          .text("MuscleTech Nitro tech Ripped Ultra Clean              $19.18 × 25   $479.50",90,350)
          .text("Whey Protein isolate Powder + Weight Loss ",90,360)
          .text("Formula, Low Sugar,Low Carb, French Vanilla",90,370)
          .text("Swirl, 4 Pounds",90,380)
          .fontSize(7)
          .text('French Vanilla Swirl/2 Pound',90,390)
          .text('SKU: B00M95SA70')
          .image("casein.jpg",54,420,{width: 30,height:35})
          .fontSize(10)
            .text("OPTIMUM NUTRITION Gold Standard 100%          $32.92 × 25   $823.00",90,420)
            .text("Micellar Casein Protein Powder ,Slow Digesting",90,430)
            .text("Helps Keep You Full,Overnight Muscle",90,440)
            .text("Recovery, Cookies and Cream,2 Pound",90,450)
            .fontSize(7)
            .text('Banana Cream',90,460)
            .text('SKU: B002DYJ0OI')
            .image("casein.jpg",54,480,{width: 30,height:35})
          .fontSize(10)
            .text("OPTIMUM NUTRITION Gold Standard 100%        $25.25 × 34   $1,119.28" ,90,480)
            .text("Micellar Casein Protein Powder ,SLow Disgesting",90,490)
            .text("Helps Keep You Full,Overnight Muscle",90,500)
            .text("Recovery, Cookies and Cream,2 Pound",90,510)
            .fontSize(7)
            .text('Chocolate Peanut Butter',90,520)
            .text('SKU: B002DYJ0OI') 
            .fontSize(10)
            .text("Subtotal   150 items                                                                         $4,686.53 ",90,560)
            .text("Shipping   Ocean cargo 30-45 days (361.25 lbs)                            $1,263.85 ",90,575)
            .text("Tax                                                                                                   $0.00 ",90,590)
            .text("Total                                                                                                 $5,950.38 ",90,605)
            .text("Paid by customer                                                                             $0.00 ",90,635)
             .font("Helvetica-Bold")
            .text("TODAY",95,675)
            .font("Helvetica")
            .text("Order confirmation email was sent to Abdirahman Farah            1 minute ago",95,695)
    .moveDown();

  
}


function generateFooter(doc) {
  doc
  
    .fontSize(8)
    .text(
      "https://afrikazon.myshopify.com/admin/orders/2166160752683",
      50,
      780,
      { align: "left", width: 500 }
    );
}





function formatCurrency(cents) {
  return "$" + (cents / 100).toFixed(2);
}

function formatDate(date) {
  var date = new Date(2020,5,28)
 var month = date.getMonth();
 var d =date.getDate();
 var year = date.getFullYear();
  return month +"/" + d + "/" + year;
}

module.exports = {
  createInvoice
};