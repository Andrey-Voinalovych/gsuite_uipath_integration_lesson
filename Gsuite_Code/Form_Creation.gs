function createForm() {

  //Get SpreadSheet By ID
  var ss = SpreadsheetApp.openById("SHEET ID"); //TODO ADD YOUR SHEET ID
  //Get Sheet By Number
  var sheet = ss.getSheets()[0];
  
  //Read All Data
  var dataTable = sheet.getDataRange().getValues();
  
  var iterable = 1

  //Iteration through rows
  dataTable.forEach(function (row){
    
    //If Row is Unprocessed - create a form by it
    if(row[5].toString() == "Unprocessed"){
            
      //Create and name the form
      var name = "Form for client: "+row[0];
      var form = FormApp.create(name).setTitle(name);

      //Create question without row data
      name = "Enter your username";
      form.addTextItem().setTitle(name).setRequired(true);

      //Create question with row data 
      name = row[1];
      form.addTextItem().setTitle(name).setRequired(true);

      //Create NOT reqired question with row data 
      name = row[2];
      form.addTextItem().setTitle(name).setRequired(false);

      //Create question with row data 
      name = row[3];
      form.addTextItem().setTitle(name).setRequired(true);

      //Direct answers to another spreadsheet
      form.setDestination(FormApp.DestinationType.SPREADSHEET, "SHEET_ID"); //TODO ADD YOUR SHEET ID
      
      sheet.getRange("F"+iterable).setValue("Processed")
    }

    iterable += 1

  })

}
