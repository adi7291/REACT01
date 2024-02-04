This is the React-01.``
npm- does not stand for node package manager. But it manage package.(repository of all the packages.)
package.json:-it is a configuration for npm

// PARCEL::::
-Dev Build,
-create a local server,
-HMR=== Hot module replacement
-file watching algorithm- written in c++(refreshing the page automatically),
-caching===Faster built.
-minification
-Building
-compress the file
-consistent hashing
-code splitting
-differential bundling=== to support running of application in older browsers.
-Diagnostic(proper error)
-Different dev and prod bundle

//What is Component?

-Component in React is the normal Js function which return some kind of JSX element. which we render 
on the website.

const Header=()=>{
    return(
        <h1>This is the React component</h1>
        //if we want to do any Java script in the file we need to use curlly bracket 
        {data.map(item=>console.log(item))}
    )
}

//What is props?

-Props is the property of the component. or we can say its is just an argument to a function.we pass props in the component as an attribute and receive in another component as an argument.

const navList=[{
    link:"#home",
    content:"Home"
   },
   {
    link:"#aboutus",
    content:"About US"
   },
   {
    link:"#contactus",
    content:"Contact Us"
   },
   {
    link:"#category",
    content:"Home"
   },


]
function Header(){
    return (
        <Navigation data={navList}>
    )
};

const Naviation=(props)=>{
  const {link,content}=props;

  return(
    <ul>
      <li>
        <a href={link}> {content}</a>
      </li>
       <li>
        <a href={link}>{content}</a>
      </li>
      <li>
        <a href={link}>{content}</a>
      </li>
    </ul>
  )
}
//what is Export and type of export?
There are two type of export in the React: 

1> Default export:(one file can export only one default component or variable  )
------------------
export default Component_Name 

import Component_Name from "path"

2> Named Export/Import: In Name export or import we can export multiple component or variable from one file. we have to import it in currlly bracket.

export const LGO_URL="./logo...."
export const IMAGE_URL="./Image..."

import{LOGO_URL ,IMAGE_URL} from "path"