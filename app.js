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
  var maxlength = 10;
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
  }else if(mob == null || mob == "" || mob.length!=maxlength) {
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


function validateSurform(){  
  var fname = document.Surform.fname.value;  
  var lname = document.Surform.lname.value;
  var emailID = document.Surform.email.value;
  // var atpos = emailID.indexOf("@");
  // var dotpos = emailID.lastIndexOf(".");
  var sad1 = document.Surform.sad1.value;
  var sad2 = document.Surform.sad2.value;
  var city = document.Surform.city.value;
  var state = document.Surform.state.value;
  var choose = document.Surform.choose.value;
  var cNum = document.Surform.cNum.value;
    
  if (fname==null || fname==""){  
    alert("Name can't be blank");
    document.Surform.fname.focus();  
    return false;  
  }else if (lname==null || lname==""){  
    alert("Please enter your last name");
    document.Surform.lname.focus();  
    return false;  
  }
  else if(emailID == null || emailID == "") {
    alert("Please enter correct email ID")
    document.Surform.email.focus() ;
    return false;
  }
  // else if(atpos < 1 || ( dotpos - atpos < 2 )) {
  //   alert("Please enter correct email ID")
  //   emailID.focus() ;
  //   return false;
  // }
  else if(sad1 == null || sad1 == "" || sad2 == null || sad2 == "" || city == null || city == "" || state == null || state == "" || choose == null || choose == "" || cNum == null || cNum == "") {
    alert("Please enter complete valid address");
    return false;
  }
}

function validateMCQ() {
  var fname = document.MCQform.fname.value;  
  var lname = document.MCQform.lname.value;
  var roll = document.MCQform.roll.value;
  var emailID = document.MCQform.email.value;

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
  }else if(emailID == null || emailID == "") {
    alert("Please enter correct email ID")
    document.MCQform.email.focus() ;
    return false;
  }
}