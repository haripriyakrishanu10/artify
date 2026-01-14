document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(!name || !email || !message){
    alert("Please fill all the details.");
    return;
  }

  const subject = `Contact from ${name}`;
  const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  window.location.href = `mailto:artify.store@gmail.com?subject=${subject}&body=${body}`;

  alert("Thank you for contacting Artify! We will get back to you soon.");

  document.getElementById("contactForm").reset();
});
