/**
 * Created by Jaroslaw_Glapski on 10/31/2016.
 */
var array = [
    "" + 1 + 0,         //string concatenation
    "" - 1 + 0,         //first arithmetic operation converts the type to number
    true + false,       //arithmetic operation converts to numbers (1+0)
    6 / "3",            //smart conversion to number :) works even with: "6" / "0xa"
    "2" * "3",          //same
    4 + 5 + "px",       //final conversion to string
    "$" + 4 + 5,        //first operand is string, so concatenation
    "4" - 2,            //similar to second line
    "4px" - 2,          //cannot convert to number, so NaN
    7 / 0,              //interesting!
    "  -9\n" + 5,       //concatenation (first operand is string and + is a valid string operator)
    "  -9\n" - 5,       //conversion to number, interesting skipping whitespaces
    5 && 2,             //interesting logical operation on numbers, true && true => true (however last operand is returned), but 0 && 2 => 0 (0 == false)
    2 && 5,
    5 || 0,             //lazy operator will not try to evaluate second operand if first is true, return first
    0 || 5,             //need to evaluate second operand, so 5 will be returned
    null + 1,           //arithmetic operator triggers conversion to number (null => 0)
    undefined + 1,      //undefined is something completely different than null!
    null == "\n0\n",    //null is not equal to anything other than null
    +null == +"\n0\n",   //+ sign triggered conversion to numbers (0 == 0)
    +null == 0
];
for(var e in array) {
    console.log(array[e]);
}