//This function counts the numbers in the string then prints out random letters to create new password
function generate(length) {
  var pass = '';
  var possible = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyiopasdfghjklzxcvbnm123456789';

  for (i = 0; i < length; i++) {
    pass += possible.charAt(Math.floor(Math.random() * possible.length));

  }
  return pass;
}

function btn() {
  var newPass = generate(15); //<---change this number to change the length of your password..
  // document.write(" New Password:" + newPass);
  //document.getElementById('form').innerHTML = 'Your new password is :' + newPass ;
  document.getElementById('form').innerHTML = newPass;
  document.getElementById('form').style.color = '#8c8c8c';
  document.getElementById('ouster').style.color = '#00cc00';
  document.getElementById('form').style.fontFamily = 'Orbitron', sans - serif;;

}

$(function() {
  $("#ouster").draggable();
});;