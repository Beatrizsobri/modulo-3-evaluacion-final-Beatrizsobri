![Adalab](src/images/rick-y-morty-redondo.png)

# Adalab evaluación módulo3: Buscador de personajes de la serie Rick y Morty

El ejercicio consiste en desarrollar una aplicación web de búsqueda de personajes de la serie, que nos permite
entrar en los detalles del personaje en el que cliquemos.
El ejercicio también tiene una parte de maquetación con HTML y Sass. 
Para el desarrollo de este ejercicio hemos utilizado la siguiente API: https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json

## Pasos seguidos para la creación de la App

1. Clonar el repositorio.
2. Crear la App React.
2. Instala las dependencias locales con `npm install`.
3. Instalar, Fontawesome, Sass, Emoji y  Router.
4. Adaptar el Json para que nos permita hacer "npm run push-docs"
5. Añadir JSX
6. Añadir funcionalidades con React
7. Añadir funcionalidades de .
8. Maquetar.
9. Readme. 

### FUNCIONALIDADES React. 
#### PRIMER PASO: CREAR LOS COMPONENTES.
![Componentes](src/images/captura.png)

 _ App
    |_Header
    |_ Home 
    |    |_ Filters
    Or    |_ CharacterList
    |         |_CharacterCard
    |_ CharacterDetail
    

Al hacer clic sobre el botón de "Buscar", la aplicación se conecta al API de TVMaze para búsqueda de series. Por cada show contenido en el resultado de la búsqueda, se pinta una tarjeta donde mostramos una imagen de la serie y su título.

#### SEGUNDO PASO: Realizar el Fetch
Almacenar los datos en el Estado "characters" que nos traemos del Fetch. 

#### TERCER PASO: Recoger el Value del input
El input es un componete controlado. Recogemos el valor del input, y lo almacenamor en el estado "Search", despues lo volvemos a bajar por props, en el atributo Value. 

#### CUARTO PASO: Filtrar Los datos de todos los personajes, con la busqueda del input
Realizamos una función filtrado: 
 filterCharacters() {
 return this.state.characters
      .filter(character => character.name.toLowerCase().includes(this.state.search.toLowerCase()));
      }
Filtramos el array de todos los personajer, con el estado de search. Además ponermos todos en minúsculas para que así no haya problemas con las mayúsculas. 

#### QUINTO PASO: Poner el Router



