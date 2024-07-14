// // ===========================validation DATA input========================================
let pass = '';
export let checkVaild = [false, false, false, false, false, false];
export default function validateInputs(element) {

    var regex = {
        Name: /^.{3}/gm,
        Email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
        phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gm,
        age: /[1-9]|[1-9][1-9]$/gm,
        password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm,
        Repassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm,
    };

    if (regex[element.id].test(element.value)) {

        if (element.id == 'password') {
            pass = element.value
            console.log(pass);
            checkVaild[4] = true;
        }
        if (element.id == 'Repassword') {
            if (element.value === pass) {
                element.nextElementSibling.classList.replace('block', 'hidden');
                checkVaild[5] = true;
                return true;
            } else {
                element.nextElementSibling.classList.replace('hidden', 'block');
                checkVaild[5] = false;
                return false;
            }
        } else {
            if (element.id == 'Name') {
                checkVaild[0] = true;

            }
            if (element.id == 'Email') { checkVaild[1] = true; }
            if (element.id == 'phone') { checkVaild[2] = true; }
            if (element.id == 'age') { checkVaild[3] = true; }
            element.nextElementSibling.classList.replace('block', 'hidden');
            return true;
        }

    } else {
        if (element.id == 'Name') { checkVaild[0] = false; }
        if (element.id == 'Email') { checkVaild[1] = false; }
        if (element.id == 'phone') { checkVaild[2] = false; }
        if (element.id == 'age') { checkVaild[3] = false; }
        if (element.id == 'password') { checkVaild[4] = false; }
        element.nextElementSibling.classList.replace('hidden', 'block');
        return false;
    }

}
// // ==========================End validation DATA input=======================================