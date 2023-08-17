import "./registrationlogin.css";

function RegistrationLogin() {
  return (
    <>
      <header>
        <div className="header">
          <img className="logo" src="" />
          <input type="text" placeholder="Search.." />
          <nav className="nav">
            <ul>
              <li>
                <a id="homeLink" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="">My Books</a>
              </li>
              <li>
                <a href="">Forums</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </nav>
          <button id="contactButton" type="button">
            Contact Us
          </button>
          <button id="loginButton" type="button">
            Login
          </button>
        </div>
      </header>
      {/* Alert Box - Displays box with "Please fill out required fields" if no details entered in to forms */}
      <div className="alert-box">
        <p className="alert" />
      </div>
      <form action="">
        <fieldset>
          <h1 className="heading">login</h1>
          <input
            type="email"
            placeholder="email"
            autoComplete="off"
            className="email"
            required=""
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="password"
            required=""
          />
          <button className="submit-btn">log in</button>
          <a href="" className="link">
            Don't have an account? Register now
          </a>
        </fieldset>
      </form>
      <div className="alert-box">
        <p className="alert" />
      </div>
      <form action="">
        <fieldset>
          <h1 className="heading">Register</h1>
          <input
            type="text"
            placeholder="name"
            autoComplete="off"
            className="name"
            required=""
          />
          <input
            type="email"
            placeholder="email"
            autoComplete="off"
            className="email"
            required=""
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="off"
            className="password"
            required=""
          />
          <button className="submit-btn">register</button>
          <a href="" className="link">
            already have an account ? log in here
          </a>
        </fieldset>
      </form>
    </>
  );
}

export default RegistrationLogin;
