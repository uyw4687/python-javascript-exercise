class Form {
    constructor(
      email,
      password,
      password_confirmation,
      phone_number,
      fname,
      lname,
      age,
      birth_month,
      birth_day,
      birth_year) {
      this.email = email,
      this.password = password,
      this.password_confirmation = password_confirmation,
      this.phone_number = phone_number,
      this.fname = fname,
      this.lname = lname,
      this.age = age,
      this.birth_month = birth_month,
      this.birth_day = birth_day,
      this.birth_year = birth_year
    }
    // DONE: You may fill in functions in the class.
    verify_email(){
      return /^[^@\s]+@[^@\s.]+\.[a-z]{2,3}$/i.test(this.email);
    }
    verify_password(){
      return /^[^]{8,}$/.test(this.password) &&  
             /\d/.test(this.password) &&  
             /[a-z]/.test(this.password) &&  
             /[A-Z]/.test(this.password);
    }
    verify_password_confirmation(){
      return this.password == this.password_confirmation;
    }
    verify_phone_number(){
      return /^\d{3}-\d{4}-\d{4}$/.test(this.phone_number);
    }
    verify_fname(){
      return /^[A-Z][a-z]+$/.test(this.fname);
    }
    verify_lname(){
      return /^[A-Z][a-z]+$/.test(this.lname);
    }
    verify_age(){
      return this.age !== '' &&
	         (+this.age === +this.age) &&
       	     this.age >= 0 &&
       	     this.age <= 200
    }
    verify_birth_month(){
      return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].includes(this.birth_month);
    }
    verify_birth_day(){
      return /^\d{1,2}$/.test(this.birth_day);
    }
    verify_birth_year(){
      return !isNaN(this.birth_year) &&
	         this.birth_year >= 1800 &&
	         this.birth_year <= 2018;
    }

}

var but = document.createElement('button');
but.innerHTML = "Check";
but.onclick = function() {
  var email = document.forms["form"]["email"].value;
  // DONE: Fill in the rest of the function. Use the Form class defined above
  var password = document.forms["form"]["password"].value;
  var password_confirmation = document.forms["form"]["password-confirmation"].value;
  var phone_number = document.forms["form"]["phone-number"].value;
  var fname = document.forms["form"]["fname"].value;
  var lname = document.forms["form"]["lname"].value;
  var age = document.forms["form"]["age"].value;
  var birth_month = document.forms["form"]["birth-month"].value;
  var birth_day = document.forms["form"]["birth-day"].value;
  var birth_year = document.forms["form"]["birth-year"].value;

  var form;
  form = new Form(email, password, password_confirmation, phone_number, fname, lname, age, birth_month, birth_day, birth_year)

  let alertMessage = '';
  // DONE: Fill the alert message according to the validation result by following the form in README.md.
  if(!form.verify_email()){
    alertMessage += 'Email\n'
    document.getElementById('email-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'characters other than @ or whitespace followed by an @ sign, followed by more characters (not \'@\', \'.\', or whitespace: co.kr is not allowed in this case), and then a ".". After the ".", you can only write 2 to 3 letters from a to z.'
    document.getElementById('email-label').setAttributeNode(title)
  }
  else{
    document.getElementById('email-label').innerHTML = ''
    document.getElementById('email-label').removeAttribute("title")
  }
  if(!form.verify_password()){
    alertMessage += 'Password\n'
    document.getElementById('password-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'Must contain at least one number and one uppercase and one lowercase letter, and at least 8 or more characters.'
    document.getElementById('password-label').setAttributeNode(title)
  }
  else{
    document.getElementById('password-label').innerHTML = ''
    document.getElementById('password-label').removeAttribute("title")
  }
  if(!form.verify_password_confirmation()){
    alertMessage += 'Password Confirmation\n'
    document.getElementById('password-confirmation-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'Must match password.'
    document.getElementById('password-confirmation-label').setAttributeNode(title)
  }
  else{
    document.getElementById('password-confirmation-label').innerHTML = ''
    document.getElementById('password-confirmation-label').removeAttribute("title")
  }
  if(!form.verify_phone_number()){
    alertMessage += 'Phone number\n'
    document.getElementById('phone-number-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'nnn-nnnn-nnnn: three numbers, then "-", followed by four numbers and a "-", then four numbers.'
    document.getElementById('phone-number-label').setAttributeNode(title)
  }
  else{
    document.getElementById('phone-number-label').innerHTML = ''
    document.getElementById('phone-number-label').removeAttribute("title")
  }
  if(!form.verify_fname()){
    alertMessage += 'First Name\n'
    document.getElementById('fname-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)'
    document.getElementById('fname-label').setAttributeNode(title)
  }
  else{
    document.getElementById('fname-label').innerHTML = ''
    document.getElementById('fname-label').removeAttribute("title")
  }
  if(!form.verify_lname()){
    alertMessage += 'Last Name\n'
    document.getElementById('lname-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'Start with a capital letter, followed by one or more lowercase letters. Should only contain alphabets (A-Z, a-z)'
    document.getElementById('lname-label').setAttributeNode(title)
  }
  else{
    document.getElementById('lname-label').innerHTML = ''
    document.getElementById('lname-label').removeAttribute("title")
  }
  if(!form.verify_age()){
    alertMessage += 'Age\n'
    document.getElementById('age-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'Must be a number between 0 and 200 (inclusive).'
    document.getElementById('age-label').setAttributeNode(title)
  }
  else{
    document.getElementById('age-label').innerHTML = ''
    document.getElementById('age-label').removeAttribute("title")
  }
  if(!form.verify_birth_month()){
    alertMessage += 'Month\n'
    document.getElementById('birth-month-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'Must be one of "January", "February", ..., "December"'
    document.getElementById('birth-month-label').setAttributeNode(title)
  }
  else{
    document.getElementById('birth-month-label').innerHTML = ''
    document.getElementById('birth-month-label').removeAttribute("title")
  }
  if(!form.verify_birth_day()){
    alertMessage += 'Day\n'
    document.getElementById('birth-day-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'Must be a number of one or two digits.'
    document.getElementById('birth-day-label').setAttributeNode(title)
  }
  else{
    document.getElementById('birth-day-label').innerHTML = ''
    document.getElementById('birth-day-label').removeAttribute("title")
  }
  if(!form.verify_birth_year()){
    alertMessage += 'Year\n'
    document.getElementById('birth-year-label').innerHTML = 'X'
    title = document.createAttribute("title")
    title.value = 'Must be a number between 1800 and 2018 (inclusive).'
    document.getElementById('birth-year-label').setAttributeNode(title)
  }
  else{
    document.getElementById('birth-year-label').innerHTML = ''
    document.getElementById('birth-year-label').removeAttribute("title")
  }
  if(alertMessage !== "")
    alertMessage = 'You must correct:\n\n' + alertMessage
  else
    alertMessage = 'Successfully Submitted!'

  alert(alertMessage);

  // Hint: you can use the RegExp class for matching a string with the `test` method.
  // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
  // Hint: modify 'title' attribute of each label to display your message
  // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
};
document.body.appendChild(but);
