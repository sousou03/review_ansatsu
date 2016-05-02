
function inputCheck() {

    if (name == '') emptyName = true
    else emptyName = false;
    if (address == '') emptyAddress = true
    else emptyAddress = false;
    if (tel == '') emptyTel = true
    else emptyTel = false;
    if (mail == '') emptyMail = true
    else emptyMail = false;

}

function mailCheck() {

   if( mail.match( /^([a-zA-Z0-9])+([a-zA-Z0-9¥._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9¥._-]+)+$/ ) ) isMail = true;
   else isMail = false;

}

function telCheck() {

   if( tel.match( /^[0-9]+$/ ) ) isTel = true;
   else isTel = false;

}

sss