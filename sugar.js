// function sendEmail() {
//     var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;
//    var phone = document.getElementById("phone").value;
//    var message = document.getElementById("message").value;
   
//     var subject = "Application to Join";
//     var body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
               
//    window.location.href = `mailto:chaudharydevansh621@gmail.com?subject=${subject}&body=${body}`;
//    }

// document.getElementById("careerForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission

//     let fullName = document.getElementById("fullname").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let address = document.getElementById("address").value.trim();
//     let organization = document.getElementById("organization").value.trim();
//     let designation = document.getElementById("designation").value.trim();
//     let cv = document.getElementById("cv").files[0];
//     let business = document.getElementById("business").value;

//     if (!fullName || !email || !address || !organization || !designation || !cv || !business) {
//         alert("Please fill out all fields.");
//         return;
//     }

//     alert("Form submitted successfully!");
// });
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
    // var companyEmail = "chaudharydevansh621@gmail.com"; // Specific email ID
    var subject = "Job Application: " + fullName;
    var body = `Full Name: ${fullName}%0D%0AEmail: ${email}%0D%0AAddress: ${address}%0D%0ACurrent Organization: ${organization}%0D%0ACurrent Designation: ${designation}%0D%0ABusiness Selected: ${business}`;
    
    
    window.location.href = `mailto:chaudharydevansh621@gmail.com${email}?subject=${subject}&body=${body}`;
}
