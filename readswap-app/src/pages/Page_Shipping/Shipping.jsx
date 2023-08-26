// import './shipping.css';

function Shipping(){

    return(

        <div className="ShippingContainer">
            <div className="title">
                <h1>Shipping Details</h1><br></br>
            </div>
            <div> <h3> Please enter your details</h3></div>
            <div className="inputcontanier">
            <form className='details'>
                <input className='shipping-label' id="Fname" placeholder="Firstname" type="text"></input>
                <input className='shipping-label' id="Lname" placeholder="Lastname" type="text"></input>
                <input className='shipping-label'id="email" placeholder="Email address" type="email"></input>
                <input className='shipping-label' id="Street address" placeholder="Street Address"></input>
                <input className='shipping-label' id="postcode" placeholder="postcode"></input>
                <input className='shipping-label' id="city" placeholder="City"></input><br></br>
                <input  id="Save details" type="checkbox" name="save details"></input>
                <label  for="Save details"> Tick box to save details for later</label><br></br>

                <button  type="submit" id="Submit"> Submit </button> 

            </form>
            </div>
        </div>
    );
}

export default Shipping;
