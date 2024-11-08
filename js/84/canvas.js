(function () {
    const canvas = document.querySelector('#theCanvas');
    const context = canvas.getContext('2d');
  
    context.strokeRect(25, 25, 50, 50);
  
    context.fillStyle = 'purple';
    context.fillRect(75, 75, 50, 50);
    context.strokeRect(74, 74, 52, 52);
  
    context.strokeRect(125, 125, 100, 50);
  
    context.beginPath();
    context.moveTo(200, 240);
    context.lineTo(245, 225);
    context.lineTo(200, 280);
    context.closePath();
    context.stroke();
  
    context.beginPath();
    context.strokeStyle = 'orange';
    context.moveTo(235, 300);
    context.lineTo(160, 425);
    context.lineTo(175, 250);
    context.closePath();
  
    context.stroke();
  
    context.beginPath();
    context.strokeStyle.width = 3;
    context.arc(350, 300, 48, 0, Math.PI * 2);
    context.fill();
  
    img.onload = () => {
      console.log('image loaded');
      context.drawImage(img, 200, 300, 97*3, 71*3);
    };
  
    img.onerror = () => {
      console.log('image NOT loaded');
    };
  }());
  