//jshint esversion:6


exports.getDate = () => {

        var date = new Date();

        let options = { weekday: 'long', month: 'long', day: 'numeric' };

        return date.toLocaleString('en-US', options);
    }
    // exporting a specific function by declaring its name in exports.FunctionName =FunctionName

exports.getDay = () => {

    var date = new Date();

    let options = { weekday: 'long' };

    return date.toLocaleString('en-US', options);
}