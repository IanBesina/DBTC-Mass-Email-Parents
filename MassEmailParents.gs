function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 10; // First row of data to process
  var numRows = 55; // Number of rows to process
  // Fetch the range of cells in Using the following data StartRow-10, ColumnE-5, NumberOfRows-55, LastColumnI-9
  var dataRange = sheet.getRange(startRow, 5, numRows, 9);
  // Fetch values for Columns D E F G H I J K and L of each row
  var data = dataRange.getValues();
  for (var i in data) {
    var row = data[i];
    var emailAddress = row[0]; // Column D - Email
    var message = "Dear Parent/Guardian, \n \n" + row[2] + " \n \n" + row[3] + " \n \n" + row[4] + " \n \n" + row[5] + " \n \n" + row[6] + " \n \n" + row[7] + " \n" + row[8]; 
    var subject = row [1]; // Column E - Subject
    MailApp.sendEmail(emailAddress, subject, message);
}
}
