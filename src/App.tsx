import React from 'react';

import './App.css';
import TestComponent from './TestComponent';

let nameChange = "hello";
nameChange = "hello2";

let bool: boolean = true;

interface NAME {
  first: string;
  last: string;
}

type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "TOKYO",
  username: "xxx",
  password: "sfsdf"
} 

let nameObj: NAME = {first: "Yamada", last: "Tarou"};

const func1 = (x: number, y: number): number => {
  return x + y;
}

// Union Types
let value: boolean | number;
value = true;
value = 10;

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

let company: "FaceBook" | "Google" | "Amazon"
company = "Amazon";

let memory: 255 | 512;
memory = 512;

//typeof

let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = {cat: "small cat"}
let newAnimal: typeof animal = {cat: "blg cat"}

// keyof

type KEYS = {
  primary: string;
  secondary: string;
}

let key: keyof KEYS
key = "primary"

// typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball"
}

let keySports: keyof typeof SPORTS;
keySports = "soccer"

//enum
enum OS {
  Windows,
  Mac,
  Linux,
}

interface PC {
  id: number
  OSType: OS
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows
}
const PC2: PC = {
  id: 1,
  OSType: OS.Mac
}

//型の互換性

const comp1 = "test";
let comp2: string = comp1;

let comp3: string = "test";
let comp4: "test" = comp3;

// Generis
interface GEN<T> {
  item: T;
}

const gen0: GEN<string> = {item: "hello"}
const gen1: GEN = {item: "hello"}
const gen2: GEN<number> = {item: 1}


interface GEN1<T=string>{
  item: T;
}

const gen3: GEN1 = {item: "hello"}

interface GEN2<T extends string | number>{
  item: T;
}
function funcGen<T>(props: T) {
  return {item: props};
}

const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>("test")

function funcGen1<T extends string | null>(props: T) {
  return {value: props}
}

const gen8 = funcGen1("hello");
const gen9 = funcGen1(14);

interface Props {
  price: number;
}

function funcGen3<T extends Props>(props: T) {
  return {value: props.price}
}
const funcGen4 = <T extends Props>(props: T) => {
  return {value: props.price}
}

const gen10 = funcGen3({price: 10})
const App: React.FC = () => {
  return (
    <div className="App">
      <TestComponent text='hello from App'/>
    </div>
  );
}

export default App;
