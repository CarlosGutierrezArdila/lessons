# React.js
React cumple su función como biblioteca ya que para utilizar su código se debe importar. También es un Framework aunque las convenciones de cómo debe ser organizado todo no son estrictas.

React es declarativo, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

### JSX
JSX es HTML dentro de Javascript.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Juan';
const jsx = <h1>Hola soy, {name}</h1>
// const jsx = <h1>Hola soy, {2+2}</h1>
// const sum = () => 3 + 3;
// const jsx = <h1>Hola soy, {sum()}</h1>;
const container = document.getElementById('app');

ReactDOM.render(jsx, container);
```


### Components
React está estructurado por componentes que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.


### React y ReactDOM
React y ReactDOM trabajarán en conjunto.

React como análogo a createElement
ReactDOM a appendChild
ReactDOM.render() toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.

Siempre que escribas JSX es requisito importar React.