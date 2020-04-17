const MAXLENGTH = 10;

function validateEMailID(emailID) {
  var atpos = emailID.indexOf("@");
  var dotpos = emailID.lastIndexOf(".");
  if(atpos < 1 || ( dotpos - atpos < 2 )) {
    alert("Please enter valid email ID");
    return false;
  }
  return true;
}

function validatelogform(){  
    var uname = document.logform.u.value;  
    var password = document.logform.p.value;
      
    if (uname==null || uname==""){  
      alert("Username can't be blank");
      document.logform.u.focus();  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long");
      document.logform.p.focus();  
      return false;  
    }
}

function validateStForm() {
  var name = document.stform.name.value;
  var dob = document.stform.dob.value;
  var mob = document.stform.mob.value;  
  var branch = document.stform.branch.value;
  var add = document.stform.add.value;

  if (name==null || name==""){  
    alert("PLease enter your Full Name");
    document.stform.name.focus();  
    return false;  
  }else if(dob == null || dob == "") {
    alert("Please enter Date of Birth");
    document.stform.dob.focus();
    return false;
  }else if(mob == null || mob == "" || mob.length!=MAXLENGTH) {
    alert("Please enter a valid number");
    document.stform.mob.focus();
    return false;
  }else if(branch == null || branch == "") {
    alert("Please choose a branch");
    document.stform.branch.focus();
    return false;
  }else if(add == null || add == "") {
    alert("Please enter your address");
    document.stform.add.focus();
    return false;
  }
}

function validateMCQ() {
  var fname = document.MCQform.fname.value;  
  var lname = document.MCQform.lname.value;
  var roll = document.MCQform.roll.value;
  var MCQemailID = document.MCQform.MCQemail.value;

  if (fname==null || fname==""){  
    alert("Name can't be blank");
    document.MCQform.fname.focus();  
    return false;  
  }else if (lname==null || lname==""){  
    alert("Please enter your last name");
    document.MCQform.lname.focus();  
    return false;  
  }
  else if(roll == null || roll == "" ) {
    alert("Please enter your roll no");
    document.MCQform.roll.focus();
    return false;
  }else if(MCQemailID == null || MCQemailID == "" || validateEMailID(MCQemailID)) {
    alert("Please enter valid email ID");
    document.MCQform.MCQemail.focus ;
    return false;
  }
}

function validateSurform(){  
  var fname = document.Surform.fname.value;  
  var lname = document.Surform.lname.value;
  var suremailID = document.Surform.suremail.value;
  var sad1 = document.Surform.sad1.value;
  var sad2 = document.Surform.sad2.value;
  var city = document.Surform.city.value;
  var state = document.Surform.state.value;
  var choose = document.Surform.choose.value;
  var cNum = document.Surform.number.value;
    
  if (fname==null || fname==""){  
    alert("Name can't be blank");
    document.Surform.fname.focus();  
    return false;  
  }else if (lname==null || lname==""){  
    alert("Please enter your last name");
    document.Surform.lname.focus();  
    return false;  
  }
  else if(suremailID == null || suremailID == "" || validateEMailID(suremailID)) {
    alert("Please enter valid email ID");
    document.Surform.suremail.focus() ;
    return false;
  }
  else if(sad1 == null || sad1 == "" || sad2 == null || sad2 == "" || city == null || city == "" || state == null || state == "" || choose == null || choose == "") {
    alert("Please enter complete valid address");
    return false;
  }else if (cNum == null || cNum == "" || cNum.length != MAXLENGTH) {
    alert("Please enter a valid contact number");
    document.Surform.number.focus();
    return false;
  }
}