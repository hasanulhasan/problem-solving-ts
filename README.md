# Assignment -1 (Level 2)

Interview Question Answer:

## 1: TypeScript 
TypeScript is an open-source language developed by Anders Hejlsberg at Microsoft. It’s a statically-typed superset of JavaScript that compiles to plain JavaScript.

Difference between TypeScript and JavaScript:

1-All Javascript code can be Typescript code. But all Typescript code can not be Javascript code
2-TypeScript is known as an Object-oriented programming language whereas JavaScript is a prototype-based language.
3-TypeScript has a feature known as Static typing but JavaScript does not support this feature.
4-TypeScript supports Interfaces but JavaScript does not.

## 2: Interface vs Type

1.Interfaces are used for creating the shapes of data, like an object. On the other hand, types are definitions of data types, like primitive, intersection, union, tuple, or different types.

2.When two interfaces with the same name are declared, it can merge these two interfaces.On the other  hand, The TypeScript compiler will generate an error if the type keyword is used to declare two different types with the same variable names.

3.The interfaces can be extended with type or by type alias as well as extending classes. Since type or type alias, cannot be extended and does not support this functionality, type cannot extend a class.


## 3: use generics in TypeScript

const randomFunction = <T>(param: T): T =>{
    return param;
}

To define a generic type, we use the <> angle brackets. Within the bracket, we can type a name for the type we are defining. The name we use doesn’t matter as long as it is consistent throughout the function. But we generally use the letter T to declare a generic type.

In the randomFunction() function above, we define a function that accepts an argument of type T, where T is a placeholder for the actual type the user can pass into the function.

The function can be called as following way:

let a = example<string>("this is string")
console.log(a);

## 4: Unknown vs Any

Difference between ‘unknown’ and ‘any’ Types

1.TypeScript forces us to determine the type of the unknown value before we can work with it, but it doesn’t with the any value.

2.We cannot assign unknown to anything but itself or any, while we can assign any to anything.

## 5: "as" keyword in TypeScript

In TypeScript, the 'as' syntax is used for Type assertion. It was created because the original syntax was incompatible with JSX. Only as-style assertions can be used with JSX and TypeScript.

Example:
let something: any = 99
let changedValue= something as number;

## 6: "as" keyword in TypeScript

The as keyword is used to TypeScript for:

1.To Do a type assertion (Cast an object's type, Create a type predicate)
2.To Do a const assertion (To set object's properties as read-only)

## 7: type guards with 'in' and 'typeof'

The typeof type guard is used to determine the type of a variable. The typeof type guard is very limited. It can only determine few types such as boolean, string, undefined, function, number etc.

The typeof type guard can be written in the following two ways:

typeof v !== "typename"
#or 
typeof v === "typename"

The in type guard checks if an object has a particular property, using that to differentiate between different types. It usually returns a boolean, which indicates if the property exists in that object. It is used for its narrowing features, as well as to check for browser support.

The basic syntax for the in type guard is below:

propertyName in objectName