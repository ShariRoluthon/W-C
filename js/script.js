function validation(){
	let fname_org=document.getElementById('firstname').value;
	let reg_fname=/^[a-z A-Z]{3,15}$/;
	let lname_org=document.getElementById('lastname').value;
	let reg_lname=/^[a-z A-Z]{3,15}$/;
	let email_org=document.getElementById('email').value;
	let reg_email=/^[a-z A-Z 0-9]+@[a-z A-Z]+\.[a-z A-Z]{3,6}$/;
	let mobno_org=document.getElementById('mobno').value;
	let reg_mobno=/^[0-9]{10}$/;
	if(!reg_name.test(name_org)){
		document.getElementById("fname_err").innerText="Only contains alphabets";
		document.getElementById("fname_err").style.fontSize="12px";
		document.getElementById("fname_err").style.color="#E74C3C";
		return false;
	}
	else if(!reg_lname.test(lname_org)){
		document.getElementById("fname_err").style.display="none";
		document.getElementById("lname_err").innerText="Only contains alphabets";
		document.getElementById("lname_err").style.fontSize="12px";
		document.getElementById("lname_err").style.color="#E74C3C";
		return false;
	}
	else if(!reg_email.test(email_org)){
		document.getElementById("lname_err").style.display="none";
		document.getElementById("email_err").innerText="email not in correct form";
		document.getElementById("email_err").style.fontSize="12px";
		document.getElementById("email_err").style.color="#E74C3C";
		return false;
	}
	else if(!reg_mobno.test(mobno_org)){
		document.getElementById("email_err").style.display="none";
		document.getElementById("mobno_err").innerText="a length of 10 numbers";
		document.getElementById("mobno_err").style.fontSize="12px";
		document.getElementById("mobno_err").style.color="#E74C3C";
		return false;
	}
	else{
		return true;
	}
	
}