// Exercise 6(Validate)

function validate() {
		let error = 0;
		let checkoutForm = document.getElementById("checkoutForm");
		
		// Get the input fields
		let fName = document.getElementById("fName");
		let fEmail = document.getElementById("fEmail");
		let fAddress = document.getElementById("fAddress");
		let fLastN = document.getElementById("fLastN");
		let fPassword = document.getElementById("fPassword");
		let fPhone = document.getElementById("fPhone");  
		
		// Validate fields entered by the user: name, phone, password, and email
		if( !fName.value.match(/^[A-Za-z\s]*$/) || fName.value.length < 3 ){
			applyInvalidClassList(fName,true)
			error++;
		} else {
			applyInvalidClassList(fName, false)
		}
	
		if( !fEmail.value.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) 
			|| fEmail.value.length < 3 ){
			applyInvalidClassList(fEmail,true)
			error++;
		} else {
			applyInvalidClassList(fEmail,false)
		}
	
		if( fAddress.value.length < 3 ){
			applyInvalidClassList(fAddress,true)
			error++;
		} else {
			applyInvalidClassList(fAddress, false)
		}
	
		if( !fLastN.value.match(/^[A-Za-z\s]*$/) || fLastN.value.length < 3 ){
			applyInvalidClassList(fLastN, true)
			error++
		} else {
			applyInvalidClassList(fLastN,false)
		}
	
		if( isNaN(fPhone.value) || fPhone.value.length !== 9 ){
			applyInvalidClassList(fPhone, true)
			error++
		} else {
			applyInvalidClassList(fPhone,false)
		}
	
		if( !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/) ||
			fPassword.value.length < 3 ){
				applyInvalidClassList(fPassword, true)
			error++
		} else {
			applyInvalidClassList(fPassword, false)
		}
	
		if ( error > 0 ) {
			checkoutForm.addEventListener("submit",(e) => {e.preventDefault(); },);
		} else {
			alert("Form submitted successfully");
		}
	}
	
	function applyInvalidClassList(element, error) {
		if ( error ) {
		  element.classList.add("is-invalid");
		} else {
		  element.classList.remove("is-invalid");
		  element.classList.add("is-valid");
		}
	}