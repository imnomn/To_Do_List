$(document).ready(() => {
    function myFunc() {

        let note = $("#note").val();

        if (!note) {

            return false
        } else {
            return true;
        }
    }
});