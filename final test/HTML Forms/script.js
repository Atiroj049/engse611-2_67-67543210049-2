document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  

    const li = document.createElement('li');
    li.innerHTML = `
      <strong>ชื่อ:</strong> ${name} <br>
      <strong>อีเมล:</strong> ${email} <br>
      <strong>เบอร์โทร:</strong> ${phone} <br>
      <strong>หัวข้อ:</strong> ${subject} <br>
      <strong>ข้อความ:</strong> ${message} <br>
      <button class="delete-btn" onclick="deleteContact(this)">ลบ</button>
    `;
  
    document.getElementById('taskList').appendChild(li);
  
    document.getElementById('contactForm').reset();
  });
  
  function deleteContact(button) {
    if (confirm("คุณต้องการลบข้อมูลนี้หรือไม่?")) {
      const li = button.parentElement;
      li.remove();
    }
  }
  