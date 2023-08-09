import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Team Introduction</h1>
      {/* Person1 */}
      <div className="person-info">
        <img
          className="img1"
          src="/images/img1.png"
          alt="Person 1"
          width="100"
          height="100"
          style={{ margin: "20px" }}
        />
        <h3>Hanan</h3>
        <ul>
          <li>My favorite hobby is listening to music</li>
          <br />
          <li>
            It eases my mind from all the overthinkng, calms me down and lifts
            my mood when I am feeling low.
          </li>
          <br />
        </ul>
      </div>
      {/* Person2 */}
      <div className="person-info">
        <img
          className="img2"
          src="/images/img2.png"
          alt="Person 2"
          width="100"
          height="100"
          style={{ margin: "20px" }}
        />
        <h3>Jodie</h3>
        <ul>
          <li>I really enjoy going to the Gym, running and watching Netflix</li>
          <br />
          <li>
            It keeps me fit, and my mind clear. I have more patience and feel
            happier
          </li>
          <br />
        </ul>
      </div>
      {/* Person3 */}
      <div className="person-info">
        <img
          className="img3"
          src="./images/jasmine.jpeg"
          alt="Jasmine"
          width="100"
          height="100"
          style={{ marginTop: "20px" }}
        />
        <h3>Jasmine</h3>
        <ul>
          <li>My favourite hobbie is gardening.</li>
          <br />
          <li>
            I enjoy gardening because it offers a connection to nature, reduces
            stress, provides physical activity, allows for creative expression,
            and offers a sense of accomplishment through nurturing plants and
            watching them grow.
          </li>
          <br />
        </ul>
      </div>
      {/* Person4 */}
      <div className="person-info">
        <img
          className="img4"
          src="/images/img4.png"
          alt="Person 4"
          width="100"
          height="100"
          style={{ margin: "20px" }}
        />
        <h3>Caitlyn</h3>
        <ul>
          <li>
            My favourite hobby is surfing 
          </li>
          <br />
          <li> I really enjoy swimming so wanted to try something new and thought surfing would
            combine my like for swimming and skateboarding.  </li>
          <br />  
        </ul>
      </div>
      {/* Person5 */}
      <div className="person-info">
      <img
          className="img5"
          src="/images/img5.png"
          alt="Person 5"
          width="100"
          height="100"
          style={{ margin: "20px" }}
        />
        <h3>Amun</h3>
        <ul>
          <li>
            Favourite hobby or activity you like to do (e.g., for downtime)
          </li>
          <br />
          <li> Why do you do it? Why do you enjoy it?</li>
          <br />
        </ul>
      </div>
      {/* Person6 */}
      <div className="person-info">
        <img
          className="img6"
          src="/images/img6.jpg"
          alt="Person 6"
          width="100"
          height="100"
          style={{ margin: "20px" }}
        />
        <h3>Aga</h3>
        <ul
          style={{
            margin: "0 20px",
            padding: "0 15px",
            listStyleType: "square",
          }}
        >
          <li style={{ marginLeft: "20px", textAlign: "justify" }}>
            My favorite <b>hobbies</b> are travelling, learning about
            architectural psychology, and exploring parametric design.
          </li>
          <br />
          <li style={{ marginLeft: "20px", textAlign: "justify" }}>
            These <b>activities</b> really open up my mind and make the world
            feel so much more exciting and full of possibilities!
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
}

export default App;
