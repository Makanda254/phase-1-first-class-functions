function receivesAFunction(awesomeCall){
    return awesomeCall();
}

function returnsANamedFunction(){
    function mathAwesome(){
        return `Hello world`;
    }
    return mathAwesome;
}

function returnsAnAnonymousFunction(){
    return function(){
        return `You have been awarded with a Second Upper Class honors`
    }
    
}
