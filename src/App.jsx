import './style.scss'

function App() {
  return (
    <div className="App">
      <article>
        <div>
          {/* img */}
          <img src="http://via.placeholder.com/1000x300" alt="logo" />
        </div>
        <section>
          <h1>Title</h1>
          <div className='title'>
          <p>4.5 (430)</p>
            <button> ★</button>
            <button> ★</button>
            <button> ★</button>
            <button> ★</button>
            <button> ★</button>
          </div>
          <div>
            <h2>Secondary text</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis beatae alias nobis ut harum eligendi quam architecto voluptatem sequi dolorem? Ipsam sit expedita consequatur deleniti, qui nihil unde neque suscipit.</p>
          </div>
          <div>
            <h2>Subtitle</h2>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          </div>
          <button className='btn_action'>Action 1</button>
        </section>
      </article>
    </div>
  )
}

export default App
