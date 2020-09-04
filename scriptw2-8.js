(function() {
    const form = document.querySelector('#sectionForm');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }
    function showInput() {
                    var i = document.getElementById("user1").value;
                    var ia = document.getElementById("user1a").value;
                    var ib = document.getElementById("user1b").value;
                    var ic = document.getElementById("user1c").value;
                    var id = document.getElementById("user1d").value;
                    var ie = document.getElementById("user1e").value;
                    var uif = document.getElementById("user1f").value;


                    var result = i + ia + ib + ic + id + ie + uif;
                    document.getElementById('display').textContent = result;


    }
    init();
})();
