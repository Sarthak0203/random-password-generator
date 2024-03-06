const passwordbox = document.getElementById('password');
    const length = 15;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "1234567890"
    const symbols = "!#%&'()*+,-./:;<=>?@[\]^_`{|}~";
    const allchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#%&'()*+,-./:;<=>?@[\]^_`{|}~"; 
    passwordbox.value = '';
    function createpassword(){
        let password = '';
        password += uppercase[Math.floor(Math.random() * uppercase.length)];
        password += lowercase[Math.floor(Math.random() * lowercase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while(length>password.length){
            password += allchars[Math.floor(Math.random() * allchars.length)];
        }
        
        passwordbox.value = password;
    }

    function copypassword(){
        passwordbox.select();
        document.execCommand("copy");
    }