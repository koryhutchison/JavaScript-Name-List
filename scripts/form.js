$('#required-alert').hide();
var list = [];

$(function() {
    $('#form-button').click(function(event) {
        //Prevent default, get info from form, and create list
        event.preventDefault();
        var name = $('#form-name').val();
        var age = $('#form-age').val();
        var newlist;
        
        //Custom error handling, and if there is info, add info to list
        if (name == '')
            {
                $('#required-alert').show();
            }
        else 
            {
                list.push(AddToList(name, age));
                $('#required-alert').hide();
            }
        //This displays the list on the screen
        document.getElementById("result-list").innerHTML = PrintToPage(list);
        $('#form-name').val('');
        $('#form-age').val('');
        $('#form-name').select();
    });
    
    //Clear the list
    $('form-clear-button').click(function() {
        document.getElementById("result-list").innerHTML = '';
    });
});


//This function is used to create object variables for the list
 function AddToList(name, age) {
    var person = {name: name, age: age};
    return person;
}

//This function is used to print out the list in a nice way
function PrintToPage(list) {
    var result = '';
    for(i = 0; i < list.length; i++)
        {
            result += 'Name: ' + list[i].name + '<br> Age: ' + list[i].age + '<br>';
        }
    return result;
}