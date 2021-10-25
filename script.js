var firstClick = false;
$(() => {
    $(".button").click((el) => {
        var replaceSymbols = ['%', '/', '*', '-', '+', '.'];

        var display = $("#display");
        var button = $(el.target).text();

        var lastSymbol = display.val().slice(+display.val().length - 1);
        switch(button){
            default:
                if(firstClick == true){
                    display.val(button);
                    firstClick = false;
                }else display.val(display.val() + button);
            break;

            case('%'):
            case('/'):
            case('*'):
            case('-'):
            case('+'):
            case('.'):
                if(display.val().length == 0) return;

                if(firstClick == true) firstClick = false;

                if(replaceSymbols.includes(lastSymbol)){
                    display.val(display.val().slice(0, -1) + button);
                }else{
                    display.val(display.val() + button);
                }
            break;

            case('='):
                if(replaceSymbols.includes(lastSymbol) || display.val().length == 0) return;

                try{
                    if(display.val() == 'Error') display.val('');
                    else display.val(eval(display.val()));
                }catch(e){
                    display.val('Error');
                }
                firstClick = true;
            break;

            case('<'):
                display.val(display.val().slice(0, -1));
            break;
            case('C'):
                display.val('');
                firstClick = false;
            break;
        }
    });
});