document.querySelector('.container button').addEventListener('click',
    function () {

        let name = document.getElementById('name').value;
        let year = document.getElementById('year').value;

        let age = 2022 - year;

        let age_status = ('');

        if (age >= 0 && age < 6) {
            age_status = 'Bacha';
        } else if (age >= 6 && age < 12) {
            age_status = 'Sisu';
        } else if (age > 12 && age < 18) {
            age_status = 'kisor';
        } else if (age >= 18 && age < 28) {
            age_status = 'Jubok';
        } else if (age >= 28 && age < 60) {
            age_status = 'Prapto boisko';
        } else if (age >= 60 && age < 200) {
            age_status = 'Buro boisko';
        } else {
            age_status = 'Gin / Bhut?';
        }

        document.querySelector('.container p').innerHTML =
            '<span style="color:red;"> Hi ' + name + ', You are ' + age + ' years old And You are a '+ age_status+ ' </span>';

    })