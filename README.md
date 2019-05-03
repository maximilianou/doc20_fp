# doc20_fp 

## From Zero environment, one step docker-compose react

### First, create an empty reposotory 

#### Functional Programming in Javascript is the focus in this guide.

Using bitbucket, and git clone localy.

```
educacion@family:~/src$ git clone https://bitbucket.org/maximilianou/doc20_fp.git
```

Adding .gitignore to Nodejs project

```
educacion@family:~/src/doc20_fp$ cp ~/Downloads/Node.gitignore.txt .gitignore
```

Upload changes to the default online repository.

```
educacion@family:~/src/doc20_fp$ git add .
educacion@family:~/src/doc20_fp$ git commit -m 'gitignore added'
educacion@family:~/src/doc20_fp$ git push
```

Use default react fast project creator building tool.

```
educacion@family:~/src/doc20_fp$ npx create-react-app products
```

Create a Dockerfile

Use node official, and using node user inside the docker container.

```
educacion@family:~/src/doc20_fp$ vi products/Dockerfile 
educacion@family:~/src/doc20_fp$ cat products/Dockerfile 
FROM node
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . /opt/app
RUN chown -R node:node /opt/app
USER node
CMD ["npm", "run", "start"]
```

Creating the docker-compose.yml

Creating this composer will help running multiple services.

One service as starting point.

( Here is hardcoded the port inside the docker-compose,
  and this configuration have to be in the .env,
  to run in stage or testing or production environment )

```
educacion@family:~/src/doc20_fp$ cat docker-compose.yml 
version: '3.7'
services:
  fp_front: 
    container_name: fp_front
    build: 
      context: ./products/.
      dockerfile: Dockerfile 
    volumes:
      - './products:/opt/app'
      - './products/node_modules:/opt/app/node_modules'
    ports:
      - '3333:3000'
    environment:
      - NODE_ENV=development
```

Now run the docker-compose, 

this have to build the docker image, 

to rebuild use docker-compose build only if needed.


```
educacion@family:~/src/doc20_fp$ docker-compose up

educacion@family:~/src/doc20_fp$ docker-compose down
```

#### Conclusion

This are the minimal steps to start using react, in an environment. 

Here trying to write down Functional Programming Code.


------------------------------------------------------------------------------------------

## From Zero, one step docker-compose react nextjs

### Next have to simplify something

Starting in a new directory or folder

```
educacion@family:~/src/doc20_fp$ mkdir articles
educacion@family:~/src/doc20_fp$ cd articles
educacion@family:~/src/doc20_fp/articles$ npm init -y
educacion@family:~/src/doc20_fp/articles$ npm install react react-dom next
educacion@family:~/src/doc20_fp/articles$ mkdir pages
```

Taking a look at the minimal package.json, to see future changes.

```
educacion@family:~/src/doc20_fp$ cat articles/package.json 
{
  "name": "articles",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev":   "next",
    "build": "next build",
    "start": "next start",
    "test":  "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^8.1.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6"
  }
}
```
Having the simplest FP index.js

```
educacion@family:~/src/doc20_fp$ cat articles/pages/index.js 
const Index = () => (
  <div>
     <p>One Article Index</p>
  </div>
)
export default Index;
```

Having the simplest FP about.js

```
educacion@family:~/src/doc20_fp$ cat articles/pages/about.js 
const About = () => {
  return (    
        <div>
            <p>About Articles Next</p>
        </div>
  )
}
```
Creating the Dockerfile, to have isolated the environment of this service

```
educacion@family:~/src/doc20_fp$ cat articles/Dockerfile 
FROM node
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . /opt/app
RUN chown -R node:node /opt/app
USER node
CMD ["npm", "run", "dev"]
```
Changing the docker-compose.yml to run everything at once, for development environment

```
educacion@family:~/src/doc20_fp$ cat docker-compose.yml 
version: '3.7'
services:
  fp_front: 
    container_name: fp_front
    build: 
      context: ./products/.
      dockerfile: Dockerfile 
    volumes:
      - './products:/opt/app'
      - './products/node_modules:/opt/app/node_modules'
    ports:
      - '3333:3000'
    environment:
      - NODE_ENV=development

  articles_front: 
    container_name: articles_front
    build: 
      context: ./articles/.
      dockerfile: Dockerfile 
    volumes:
      - './articles:/opt/app'
      - './articles/node_modules:/opt/app/node_modules'
    ports:
      - '3344:3000'
    environment:
      - NODE_ENV=development
```
Checking the start and stop of the service, with a bash command

```
educacion@family:~/src/doc20_fp$ docker-compose up

educacion@family:~/src/doc20_fp$ curl http://localhost:3344/
educacion@family:~/src/doc20_fp$ curl http://localhost:3344/about

educacion@family:~/src/doc20_fp$ docker-compose down
```

-----------------------------------------------------------------------------------

https://nextjs.org/learn/basics/using-shared-components/rendering-children-components

Having a Header.js FP React Component to use, Link library of next

```
educacion@family:~/src/doc20_fp$ cat articles/comps/Header.js 
import Link from 'next/link'
const linkStyle = {
  marginRight: 15
}
const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)
export default Header
```
Using the FP React Layout option, 

a function to compose the content into the layout

```
educacion@family:~/src/doc20_fp$ cat articles/comps/MyLayout.js 
import Header from './Header'
const layoutStyle = {
    margin: 10,
    padding: 10,
    border: '1px solid #EEE'
}
const withLayout = Page => {
  return () => (
        <div style={layoutStyle}>
          <Header />
          <Page />
        </div>
  )
}
export default withLayout
```
Now applying the FP Layout to the index,

```
educacion@family:~/src/doc20_fp$ cat articles/pages/index.js 
import withLayout from '../comps/MyLayout'
const Index = () => <p>One Article Index</p> 
export default withLayout(Index)
```
And applying the FP Layout to About page.

```
educacion@family:~/src/doc20_fp$ cat articles/pages/about.js 
import withLayout from '../comps/MyLayout'
const About = () =>  <p>About Articles Next</p>
export default withLayout(About)
```

#### Conclusion
It seems that FP simplifies the code, specialy for maintenance and scalability


------------------------------

## From Zero, one step docker-compose react nextjs router path

### Routing with NextJS in FP React Components

Here we have the router of next.

Using FP seems to be clear, and uncoupled!

```
educacion@family:~/src/doc20_fp$ cat articles/pages/index.js 
import withLayout from '../comps/MyLayout'
import { withRouter } from 'next/router'
const Routing = withRouter( props =>  ( <h1>{props.router.query.title}</h1> ) )
const Index = () => 
    (
      <div>
        <Routing />
        <p>One Article Index</p> 
      </div>
    ) 
export default withLayout(Index)
```

Now checking with bash, if the content is in place > 0 , or not === 0

```
educacion@family:~/src/doc20_fp$ curl http://localhost:3344/?title=Running%20with%20parameters | grep "Running" | wc -l
1
```

In this part, looking at the official tutorial, 

it's cleaning the path, 

to clean CGI url parameters

```
educacion@family:~/src/doc20_fp$ cat articles/pages/blog.js 
import Link from 'next/link'
import withLayout from '../comps/MyLayout.js';
const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)
const Blog = () => (
    <div>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="starting-next" title="Starting Next.js" />
        <PostLink id="learning-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploying-nextjs" title="Deploying next apps" />
      </ul>
    </div>
)
export default withLayout(Blog)
```
And Bash Checking the content of the page.

```
educacion@family:~/src/doc20_fp$ curl http://localhost:3344/blog | grep "Starting" | wc -l
```
#### Conclusion
This Functional Programming approach seems to be scalable, maintenable, clear to read.
But nextjs have something.. like library dependency, an library learning.. code smell.

I'll try to complete, this step by step, for a functional example solution to have.


.. to be continued

### React like Redux, Context Api Reducer

#### Starting shopping cart layout, first steps

https://codepen.io/maximilianou/pen/rgBWJy

![alt text]("data:image/png;base64,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" "Logo Title Text 1")

