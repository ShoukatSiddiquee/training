

const prefixer = function (prefix)  {

    return function(str) {

        return prefix + str;
    }

        
}

const sayHiTo = prefixer(10)

console.log(sayHiTo(20));