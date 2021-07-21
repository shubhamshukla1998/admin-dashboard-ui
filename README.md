> In JavaScript, closures are created every time a function is created, at function creation time.

> Since the invocation happens in the same scope where the varibale is present its just lexical scope and not closures.

> Even after returning the function still remembers there lexical scope, i.e. where it came from . It not just returns the function but it also return its lexical scope.

>A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to alert.

> Each instance of the inner addTo(..) function is closing over its own num1 variable (with values 10 and 42, respectively), so those num1's don't go away just because adder(..) finishes. When we later invoke one of those inner addTo(..) instances, such as the add10To(15) call, its closed-over num1 variable still exists and still holds the original 10 value. The operation is thus able to perform 10 + 15 and return the answer 25.


> What we wanted to do in the loop is to copy the value of  i in each iteration at the time of iteration to display a message after 1, 2, and 3 seconds. 

The reason you see the same message after 4 seconds is that the callback passed to the setTimeout() a closure. It remembers the value of i from the last iteration of the loop, which is 4.

In addition, all three closures created by the for-loop share the same global scope access the same value of i.

All of them are pointing to the same memory location

To fix this issue, you need to create a new closure scope in each iteration of the loop.

> in, you can use the let keyword to declare a variable that is block-scope>.
If you use the let keyword in the for-loop, it will create a new lexical scope in each iteration. In other words, you will have a new index variable in each iteration.

In addition, the new lexical scope is chained up to the previous scope so that the previous value of the index is copied from the previous scope to the new one.>d 

> A closure is a combination of a function and its ability to remember variables in the outer scope.

# why closure

> Imagine you have a button on a page that when clicked, should retrieve and send some data via an Ajax request. Without using closure:
> The makeRequest(..) utility only receives an evt object from a click event. From there, it has to retrieve the data-kind attribute from the target button element, and use that value to lookup both a URL for the API endpoint as well as what data should be included in the Ajax request.

> the event handler has to read a DOM attribute each time it's fired. which is not very efficient.

> With the setupButtonHandler(..) approach, the data-kind attribute is retrieved once and assigned to the recordKind variable at initial setup. recordKind is then closed over by the inner makeRequest(..) click handler, and its value is used on each event firing to look up the URL and data that should be sent.

>>Advantages

>> Advantages of using Closures
    As we all know variables which we create inside function have local scope and only accessible in side the function not outside the function.
    Problem 1: Also variable defined inside the function created when we call function and destroyed which function close. We can define global variables which created when program starts till the end of program and accessible any where in the program.
    Problem 2: If we define the global variable these can be changed any where in program.
    Solution :
    Data Encapsulation
    we can overcome above problems by using closures.
    1. By using a closure we can have private variables that are available even after a function task is finished.
    2. With a function closure we can store data in a separate scope, and share it only where necessary.


>> Disadvantages of using Closures
    Closures not only have advantages it also have disadvantages. If you are using closures there are two disadvantages which you need to take care while using.
    As long as the closure are active , the memory can’t be garbage collected.
    example : If we are using closure in ten places then unless all the ten process complete it hold the memory which cause memory leak.
    How to fix this?
    If there come a point in you program where you are done using closure then you need to set closure to null.
    Creating a function inside a function leads to duplicity in memory and cause slowing down the application.
    How to fix?
    Use closures only when you need privacy otherwise use module pattern to create new objects with shared methods.

# IIFE

> When you define a function, the JavaScript engine adds the function to the global object.

 If you have many global variables and functions, the JavaScript engine will only release the memory allocated for them until when the global object loses the scope.

As a result, the script may use the memory inefficiently. On top of that, having global variables and functions will likely cause the name collisions.

One way to prevent the functions and variables from polluting the global object is to use immediately invoked function expressions.



> In this solution, you use an immediately invoked function expression (a.k.a IIFE) because an IIFE creates a new scope by declaring a function and immediately execute it.

# ES6

 
## Rest Parameter
> The last parameter (args) is prefixed with the three-dots ( ...). It’s called a rest parameter ( ...args).

All the arguments that you pass to the function will map to the parameter list. In the syntax above, the first argument maps to a, the second one maps to b, and the third, the fourth, etc., will be stored in the rest parameter args as an array.


## Spread Operator
>

> Here are the main differences:
    The spread operator unpacks elements.
    The rest parameter packs elements into an array.

> The rest paramter is also denoted by three dots (…). However, it packs the remaining arguments of a function into an array.
The spread operator can be used to clone an iterable object or merge iterable objects into one.

## Template literals

> Prior to ES6, you use single quotes (‘) or double quotes (“) to wrap a string literal. And the strings have very limited functionality.

To enable you to solve more complex problems, ES6 template literals provide the syntax that allows you to work with strings in a safer and cleaner way.

## ES6 Modules

> In this example, we have the log.js module with a variable, two functions, and one class. We used the export keyword to exports all identifiers in the module.

Note that the export keyword requires the function or class to have a name to be exported. You can’t export an anonymous function or class using this syntax.

JavaScript allows you to define a variable, a function, or a class first then export it later as follows:

> Note that when you import a binding from a module, the binding behaves like it was defined using const. It means you can’t have another identifier with the same name or change the value of the binding.

> Behind the scenes, when you called the setMessage() function. JavaScript went back to the greeting.js module and executed code in there and changed the message variable. The change was then automatically reflected on the imported message binding.

The message binding in the app.js is the local name for exported message identifier. So basically the message variables in the app.js and greeting.js modules aren’t the same.

> In this example, we imported all bindings from the cal.js module as the cal object. In this case, all the bindings become properties of the cal object, so you can access them as shown below:

> The reason for the error is that JavaScript must statically determine what will be exported and imported.

### Default Exports

>> Note that you don’t need to specify the name for the function because the module represents the function name.
>> As you see, the  sort identifier represents the default function of the sort.js module. Notice that we didn’t use the curly brace {} surrounding the  sort identifier.
>>To import both default and non-default bindings, you use the specify a list of bindings after the import keyword with the following rules:

The default binding must come first.
The non-default binding must be surrounded by curly braces.

## Promises

> It’ll be easier to understand the concept of JavaScript promises through an analogy.

    Suppose that you promise to complete learning JavaScript by next month.

    You don’t know if you will spend your time and effort to learn JavaScript until next month. You can either be completing learning JavaScript or not.

> A promise starts in the pending state which indicates that the promise hasn’t completed. It ends with either fulfilled (successful) or rejected (failed) state.

> The Promise constructor accepts a function as an argument. This function is called the executor.

    The executor accepts two functions with the names, by convention, resolve() and reject(). 

    When you call the new Promise(executor), the executor is called automatically. 

    Inside the executor, you manually call the resolve() function if the executor is completed successfully and invoke the reject() function in case of an error occurs.

    If you embed the above JavaScript code in an HTML document and check the console window, you will see that the promise is resolved because the completed variable is set to true.
