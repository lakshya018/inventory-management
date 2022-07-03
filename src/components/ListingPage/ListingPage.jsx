import {Link } from "react-router-dom";
import './ListingPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ListingPage = () => {

    // const [arr, setMyArr] = useState([]);
    let alldevices = localStorage.getItem('alldevices');
    let alldevicesObj = [];
    if (alldevices === null) {
        alldevicesObj = [];
    }
    else {
        alldevicesObj = JSON.parse(alldevices);
    }


    const listView = () => {
        let cards= document.getElementsByClassName("card")
        Array.from(cards).forEach(card => {
            card.style.width="100%";
            card.style.flexDirection="row";
            let cardBody = card.getElementsByClassName("card-body")[0];
            cardBody.style.textAlign= "left";
            let cardBtn = card.getElementsByClassName("cardBtn")[0];
            cardBtn.style.width="auto";
            cardBtn.style.textAlign="right";
        })

        let allItems = document.getElementById("allitems");
        allItems.style.flexDirection = "column";
 
        
    }
    const gridView = () => {
        let allItems = document.getElementById("allitems");
        allItems.style.flexDirection = "row";
        allItems.style.flexWrap = "wrap";

        let cards= document.getElementsByClassName("card")
        Array.from(cards).forEach(card => {
            card.style.width="20rem";
         
            card.style.flexDirection="column";
            
            let cardBody = card.getElementsByClassName("card-body")[0];
            cardBody.style.textAlign= "center";
            let cardBtn = card.getElementsByClassName("cardBtn")[0];
            cardBtn.style.width="100%";
            cardBtn.style.textAlign="center";
        })
        
       
    }

  const deleteItem =(event,index) =>{

    alldevicesObj.splice(index,1);
    localStorage.setItem("alldevices",JSON.stringify(alldevicesObj));
    window.location.reload(false);
    // ListingPage();

  }

  const searchDevices = () => {
    let inputval = document.getElementById("searchDevice").value.toLowerCase();
let cards = document.getElementsByClassName("card");
    Array.from(cards).forEach((element)=>{
       let title = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
       if(title.includes(inputval)){
        element.style.display='block';
       }
       else{
        element.style.display='none';
       }
    });
  }

    return (
        <div className="container">
            <div className="yourItems">
                <h1 className="m-3">Your Items</h1>
                <hr />
                <button className="btn btn-success m-2" onClick={listView}>List View</button>
                <button className="btn btn-success m-2" onClick={gridView}>Grid View</button>
                <input type="search" placeholder="Search Any Device" className="form-control mb-3 " id="searchDevice" onChange={searchDevices}/>
                <div id="allitems">
                    {
                        alldevicesObj.map((device, index) => {
                            return (
                                <div className="card m-2">
                                    {/* <div className="cardImg col-md-3 p-2">
                    <img src="{arr.items[0].link}" className="card-img-top m-2" alt="..." />
                </div> */}

                                    <div className="card-body col-md-5 p-2">
                                        <h5 className="card-title m-1">{device.name}</h5>
                                        <h6 className="m-1">&#8377; {device.price}/-</h6>
                                        <p className="card-text m-1">{device.description}</p>

                                    </div>
                                    <div className="cardBtn col-md-4 p-2">
                                       <Link to="/details" ><button className="btn btn-primary m-2" onClick={()=>{
                                        localStorage.setItem("device",JSON.stringify(device));
                                       }}>View Details</button></Link> 
                                        <button className="btn btn-danger m-2" onClick={event => deleteItem(event,index)}>Delete Item</button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div>
    )




}
export default ListingPage;