# (a == b) && (a === b)

a deep study of this simple expression will help you understand how types, expressions & implicit coercion work in JS.

### Index
* [learning objectives](#learning-objectives)
* [parsons & evaluation table](https://janke-learning.github.io/equalities-coercion)
* [console exercises](#console-exercises)
* [ast visualizer](#ast-visualizer)

---

## learning objectives

* ===  -->  true if __type__ and __value__ match
* ==   -->  true if __values__ match after [type coercion](https://github.com/janke-learning/type-coercion)
* implicit type conversion: strings & numbers, + & -
* programming is computational steps: value -> operation -> value ...
* breaking down & studying JS expressions
* ast visualizer for help parsing long/complex expressions

---

## Console Exercises


the expression:
```js
{ const expected = ;

  const a = ;
  const b = ;                               
                                            
  let actual = (a == b) && (a === b); 

  console.log({a, b});
  console.assert(actual === expected, 'try again');
};
```
values to try out
```js
a: 4,   b: 4          -->   ?
a: 4,   b: '4'        -->   ?
a: '4', b: 4          -->   ?
a: '4', b: '4'        -->   ?

a: false, b: 0           -->   ?
a: false, b: ''          -->   ?
a: false, b: null        -->   ?
a: false, b: undefined   -->   ?
a: false, b: false       -->   ?

a: true, b: 1           -->   ?
a: true, b: ' '         -->   ?
a: true, b: null        -->   ?
a: true, b: undefined   -->   ?
a: true, b: true        -->   ?

a: true, b: 'true'      -->   ?
a: false, b: 'false'    -->   ?
```

the expansion:  
(this works best in chrome or firefox)
```js
{ const expected = ;

  const a = ;
  const b = ; 
                                            const log = [];               
  let actual; { // = (a == b) && (a === b);    

    const val_1 = a == b;                    log.push({op: 'a == b',
                                                      value: val_1,
                                                      type: typeof val_1});
    const val_2 = a === b;                   log.push({op:'a === b',
                                                      value: val_2,
                                                      type: typeof val_2});
    const val_3 = val_1 && val_2;            log.push({op:'val_1 && val_2',
                                                      value: val_3,
                                                      type: typeof val_3});
  actual = val_3; };

  console.log({a, b});
  console.table(log);
  console.assert(actual === expected, 'try again');
};
```
---

## ast visualizer (abstract syntax tree)

[(a == b) && (a === b)](https://astexplorer.net/#/gist/e22d33e10f7c29268d5074803e35ced5/b63bf508b027cb7be2a27e8c6e841e12eac2fad4) 

* select to hide everything just above the collapsible tree, makes it readable
* this tool will be very helpful figuring out order of operations when expanding expressions
    * the deepest operators are executed first, then their parents, ...
* using this for anything but just expressions will likely be more confusing than helpful
* this tool doesn't check for syntax errors and doesn't run code, so keep it simple and just copy in the expression. no need for variable declarations

___
___
### <a href="http://janke-learning.org" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/50098409-22575780-021c-11e9-99e1-962787adaded.png" width="40" height="40"></img> Janke Learning</a>
