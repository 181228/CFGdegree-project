import './App.css';

function App() {
  return (
<div className='app'>
      <h1 className='title'>Team Introduction</h1>
      {/* Person1 */}
      <div className='person-info'>
        <img className="img1" src="" alt="Person 1" width="100" height="100" style={{ margin: '20px' }} />    
        <h3>Hanan</h3>
        <ul>
          <li>My favorite hobby is listening to music</li>
          <li>It eases my mind from all the overthinkng, calms me down and lifts my mood when I am feeling low.</li>
        </ul>
      </div>
      {/* Person2 */}
      <div className='person-info'>
        <img className="img2" src="" alt="Person 2" width="100" height="100" style={{ margin: '20px' }} />    
        <h3>Person2 name</h3>
        <ul>
          <li>Favourite hobby or activity you like to do (e.g., for downtime)</li>
          <li> Why do you do it? Why do you enjoy it?</li>
        </ul>
      </div>
      {/* Person3 */}
      <div className='person-info'>
        <img className="img3" src="" alt="Person 3" width="100" height="100" style={{ margin: '20px' }} />    
        <h3>Person3 name</h3>
        <ul>
          <li>Favourite hobby or activity you like to do (e.g., for downtime)</li>
          <li> Why do you do it? Why do you enjoy it?</li>
        </ul>
      </div>
      {/* Person4 */}
      <div className='person-info'>
        <img className="img4" src="" alt="Person 4" width="100" height="100" style={{ margin: '20px' }} />    
        <h3>Person4 name</h3>
        <ul>
          <li>Favourite hobby or activity you like to do (e.g., for downtime)</li>
          <li> Why do you do it? Why do you enjoy it?</li>
        </ul>
      </div>
      {/* Person5 */}
      <div className='person-info'>
        <img className="img5" src="" alt="Person 5" width="100" height="100" style={{ margin: '20px' }} />    
        <h3>Person5 name</h3>
        <ul>
          <li>Favourite hobby or activity you like to do (e.g., for downtime)</li>
          <li> Why do you do it? Why do you enjoy it?</li>
        </ul>
      </div>
      {/* Person6 */}
      <div className="person-info">
        <img className="img6" src="/images/img6.jpg" alt="Person 6" width="100" height="100" style={{ margin: '20px' }} />   
        <h3>Aga</h3>
        <ul style={{ margin: '0 20px', padding: '0 15px',  listStyleType: 'square' }}>
          <li style={{ marginLeft: '20px',  textAlign: 'justify'}}>My favorite <b>hobbies</b> are travelling, learning about architectural psychology, and exploring parametric design.</li>
          <br />
          <li style={{ marginLeft: '20px',  textAlign: 'justify'}}>These <b>activities</b> really open up my mind and make the world feel so much more exciting and full of possibilities!</li>
          <br />
        </ul>
      </div>
</div> 
);
}

export default App;
