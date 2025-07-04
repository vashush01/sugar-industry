
function openFormPage() {
    document.getElementById('formPage').style.display = 'block';
}

function sendEmail() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var organization = document.getElementById('organization').value;
    var designation = document.getElementById('designation').value;
    var business = document.getElementById('business').value;
    // var companyEmail = "vashukrsharma001@gmail.com"; // Specific email ID
    var subject = "Job Application: " + fullName;
    var body = `Full Name: ${fullName}%0D%0AEmail: ${email}%0D%0AAddress: ${address}%0D%0ACurrent Organization: ${organization}%0D%0ACurrent Designation: ${designation}%0D%0ABusiness Selected: ${business}`;
    
    
    window.location.href = `mailto:vashukrsharma001@gmail.com${email}?subject=${subject}&body=${body}`;
}
