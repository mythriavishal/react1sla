
import './App.css'
import BoxModel from './components/BoxModel'
import Task4 from './components/Task4'
import Task5 from './components/Task5'

function App() {
  let number=100
  

  return (
    <div className='container' style={{background : "white"}}>
      <p style={{backgroundColor:"black",}}>hello</p>

      <BoxModel num = {number}/>

      <h1 style={{color:"black"}}>Header1</h1>
      <h2 style={{color:"grey"}}>Header2</h2>
      <h3>Header3</h3>
      <h4>Header4</h4>
      <h5>header5</h5>
      <h6>Header6</h6>

      <p>Lorem ipsum dolor sit amet consectetur <span><BoxModel/></span> adipisicing elit. Libero, ullam.</p>

      <header style={{backgroundColor:"grey", color:"red"}}>
        <a target='_blank' href='https://www.google.com/?client=safari&channel=iphone_bm'>Google's Link</a>
      </header>

      <nav>
        <ul><a href='https://www.google.com/?client=safari&channel=iphone_bm'></a>Google</ul>
        <ul><a href='https://www.zomato.com'>Zomato</a></ul>
      </nav>

      <article style={{backgroundColor:"black", color:"white", height:100, display:"flex", justifyContent:"space-between"}}>Article 1
        <section>
          <div>
            <b>Div1</b>
          </div>

        </section>

        <aside>
          <div>
            <b>Aside Div2</b>
          </div>
        </aside>
      </article>

      <main style={{ backgroundColor:"limegreen", height:300, display:"flex", justifyContent:"space-around", gap:20, alignItems:"center"}}>
        MAIN BAR
        <div style={{backgroundColor:"antiquewhite", height:80, alignItems:"center"}}>Div1 in main</div>
        <div style={{backgroundColor:"antiquewhite", height:80 ,alignItems:"center"}}>Div2 in main</div>
        <div style={{backgroundColor:"antiquewhite", height:80, alignItems:"center"}}>Div3 in main</div>
      </main>

      <Task4/>

      <Task5/>


    </div>
    
  )
}

export default App

