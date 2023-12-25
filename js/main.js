

const cursor = document.querySelector(".cursor");

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style","top: "+(e.pageY-10)+"px; left: " + (e.pageX-10)+ "px")
})

document.addEventListener('click',()=>{
    cursor.classList.add("expand");
    
    setTimeout(() => {
        cursor.classList.remove('expand')
    }, 500);
})
document.addEventListener('DOMContentLoaded', function() {
    var backButton = document.getElementById('backButton');

    if (backButton) {
      backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
      });
    } else {
      console.error('Button element not found');
    }
  });

  function openPDF() {
   
    var pdfPath = './Gangey_Patel_Resume.pdf';
    
    window.open(pdfPath, '_blank');
}

  function sendEmail() {
    //var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var subject = document.getElementById('email').value;

    var mailtoLink = "mailto:gpatel8@asu.edu" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message);

    window.location.href = mailtoLink;
  }