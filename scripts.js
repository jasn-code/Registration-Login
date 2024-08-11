document.form1.onsubmit = function ()
{
    var isvalid = true;
    
    var name = document.getElementById("textname").value;
    var Error1 = document.getElementById("Error1");

    var passwd = document.getElementById("passwd").value;
    var Error2 = document.getElementById("Error2");

    var confirmpasswd = document.getElementById("confirmpasswd").value;
    var Error3 = document.getElementById("Error3");

    var address = document.getElementById("address").value;
    var Error4 = document.getElementById("Error4");

    var selectoptions = document.getElementById("selectCity").value;
    var selectErr = document.getElementById("err");
    
    var agree = document.getElementById("chkbox");
    var agreeErr = document.getElementById("agreeErr");

    var agree1 = document.getElementById("chkbox2");
    //var agreeErr1 = document.getElementById("agreeErr");

    if (name.trim() == "")
    {
        Error1.innerHTML = "Name can not be Empty";
        Error1.style.color = "red";
        isvalid = false;
    }
    if (passwd.trim() === "" || passwd.length < 6) {
        if (passwd.trim() === "")
        {
            Error2.innerHTML = "Password is mandatory";
        }
        else
        {
            Error2.innerHTML = "Password must be at least 6 characters long";
        }
        Error2.style.color = "red";
        isvalid = false;
    }
    if (confirmpasswd !== passwd)
    {
        Error3.innerHTML = "Passwords do not match";
        Error3.style.color = "red";
        isvalid = false;
    }
    if (address.trim() == "") {
        Error4.innerHTML = "Address Required";
        Error4.style.color = "red";
        isvalid = false;
    }
    if (selectoptions === "-1") {
        selectErr.innerHTML = "Must select at least one category";
        selectErr.style.color = "red";
        isvalid = false;
    }

    if (agree.checked == false && agree1.checked == false)
    {
        agreeErr.innerHTML = "Please Select One Language";
        agreeErr.style.color = "red";
        isvalid = false;
    }

    //alert("Validation")
return isvalid;
}