import './ObjectDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const ObjectDetail = () => {
    const device = localStorage.getItem('device');
    const deviceObj = JSON.parse(device);


    return (
        <div className="container">
            <div className="itemDetail">
                <h1 className='mt-5 mb-3'>{deviceObj.name}</h1>
                {/* <div className="imgDevice">
                <img src="" alt="" />
            </div> */}
            <p><b>Price: </b>&#8377; {deviceObj.price}/-</p>
                <p className="m-2 description"> {deviceObj.description}</p>
                <p className="m-2"><b>Brand Name: </b>{deviceObj.brand}</p>
                <p className="m-2"><b>Ram Size: </b>{deviceObj.ram} GB</p>
                <p className="m-2"><b>Internal Storage: </b>{deviceObj.internal} GB</p>
            </div>


        </div>
    )
}

export default ObjectDetail;