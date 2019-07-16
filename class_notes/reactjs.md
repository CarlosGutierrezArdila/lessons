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

###### Ciclo de vida de un componente
Cuando React renderiza los componentes decimos que entran en escena, cuando su estado cambia o recibe unos props diferentes se actualizan y cuando cambiamos de página se dice que se desmontan.
- **Montaje:** Representa el momento donde se inserta el código del componente en el DOM. Se llaman tres métodos: constructor, render, componentDidMount.
- **Actualización:** Ocurre cuando los props o el estado del componente cambian. Se llaman dos métodos: render, componentDidUpdate (recibe dos parametros prevProps y prevState).
- **Desmontaje:** Nos da la oportunidad de hacer limpieza de nuestro componente. Se llama un método: componentWillUnmount.

### React y ReactDOM
React y ReactDOM trabajarán en conjunto.

React como análogo a createElement
ReactDOM a appendChild
ReactDOM.render() toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.

Siempre que escribas JSX es requisito importar React.

### React Router
Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

- **Multi Page Apps:** Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

- **Single Page Apps (SPA):** Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

##### React Router (v4)

Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:
- BrowserRouter: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
- Route: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
- Switch: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
- Link: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.

### Llamadas a un API
Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:
- **Loading:** cuando la petición se envía y estamos esperando.
- **Error:** se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
- **Data:** los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.

### Polling 
Consiste en que cada cierto tiempo que es definido por nosotros se buscan los datos y se actualizan automáticamente. Esto se hará constantemente hasta que el usuario se vaya de la página.

### Portales

Hay momentos en los que queremos renderizar un modal, un tooltip, etc. Esto puede volverse algo complicado ya sea por la presencia de un z-index o un overflow hidden.

En estos casos lo ideal será renderizar en un nodo completamente aparte y para esto React tiene una herramienta llamada Portales que funcionan parecido a ReactDOM.render; se les dice qué se desea renderizar y dónde, con la diferencia de que ese dónde puede ser fuera de la aplicación.

```javascript
{ReactDom.createPortal(que, donde)}
```
### Hooks
Las funciones no tienen un estado propio que manejar como ciclos de vida a los que deben suscribirse, mientras tanto las clases sí cuentan con ello.

React tiene un feature llamado Hooks que permite que las funciones también tengan features que solamente tienen las clases.

**Hooks:** Permiten a los componentes funcionales tener características que solo las clases tienen:
- **useState:** Para manejo de estado.
- **useEffect:** Para suscribir el componente a su ciclo de vida.
- useReducer:** Ejecutar un efecto basado en una acción.
**Custom Hooks:** Usamos los hooks fundamentales para crear nuevos hooks custom. Estos hooks irán en su propia función y su nombre comenzará con la palabra use. Otra de sus características es que no pueden ser ejecutados condicionalmente (if).
- **useState:** regresa un arreglo de dos argumentos.

