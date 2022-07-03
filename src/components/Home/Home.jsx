import {Link } from "react-router-dom";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
 
    // const api = "4dfa1a355339f0b138e645e911f51542b0f84ae4cfcde88fb32e12b47ddf7630";
    // const [myArr, setMyArr] = useState([]);
    // const [string, setString] = useState("");

    // Adding To Inventory

    const addToInventory = async (e) => {
        e.preventDefault();
       let deviceName = document.getElementById('deviceName').value;
       let brandName = document.getElementById('brandName').value;
       let price = document.getElementById('price').value;
       let ramSize = document.getElementById('ramSize').value;
       let internalSt = document.getElementById('internalSt').value;
       let deviceDescription = document.getElementById('deviceDescription').value;

        let alldevices = localStorage.getItem('alldevices');
        let alldevicesObj = [];
        if(alldevices === null){
            alldevicesObj = [];
        }
        else{
            alldevicesObj = JSON.parse(alldevices);
        }
        
        const obj = {
            name: deviceName,
            brand: brandName,
            price: price,
            ram: ramSize,
            internal: internalSt,
            description: deviceDescription

        }
        alldevicesObj.push(obj);

        localStorage.setItem("alldevices", JSON.stringify(alldevicesObj)); 

        document.getElementsByTagName('form')[0].reset();


    }


 

    

    return (
        <div className="container">

            <h2 className="m-2">Adding Mobile Devices To Inventory</h2>
            <div id="inventoryForm" className="shadow-lg p-3 mb-4 bg-body rounded">
                <form action="" onSubmit={addToInventory}>
                    <div className="mb-2">
                        <label htmlFor="deviceName" className="form-label">Device Name</label>
                        <input type="text" className="form-control" id="deviceName" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="brandName" className="form-label">Brand Name</label>
                        <input type="text" className="form-control" id="brandName" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="price" className="form-label">Price in Rupees</label>
                        <input type="number" className="form-control" id="price" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="ramSize" className="form-label">RAM Size in GB</label>
                        <input type="number" className="form-control" id="ramSize" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="internalSt" className="form-label">Internal Storage in GB</label>
                        <input type="number" className="form-control" id="internalSt" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="deviceDescription" className="form-label">Description</label>
                        <textarea className="form-control" id="deviceDescription" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add to Inventory</button>
                </form>
            </div>

        <div className="goToListing">
           <Link to="/listingPage"> <button className="btn btn-danger mb-2">Click here to visit Listing Page</button></Link>
        </div>
        </div>
    )
}

export default Home;