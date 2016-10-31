/**
 * Created by Jaroslaw_Glapski on 10/31/2016.
 */
// The next function returns true, if the argument more than 18.
// Otherwise, it returns the result of a confirm window.

function checkAge1(age) {
    if (age > 18) {
        return true;
    } else {
        // ...
        return window.confirm('Are you over 18?');
    }
}
// If we remove else, will that function work the same?

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return window.confirm('Are you over 18?');
}
//    Is there any difference between these two variants?

[-1,0,1,17,18,19,100,10^20,null,"0","20",true,{},[]].forEach(function (e) {
    console.log(e,checkAge1(e), checkAge2(e));
});

//basically no difference, second one easier to read (at least for me)