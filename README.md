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


## 3: Interface vs Type

## 4: Unknown vs Any

Difference between ‘unknown’ and ‘any’ Types

1.TypeScript forces us to determine the type of the unknown value before we can work with it, but it doesn’t with the any value.
2.We cannot assign unknown to anything but itself or any, while we can assign any to anything.

## 5: "as" keyword in TypeScript

In TypeScript, the 'as' syntax is used for Type assertion. It was created because the original syntax was incompatible with JSX. Only as-style assertions can be used with JSX and TypeScript.

Example:
let something: any = 99
let changedValue= something as number;