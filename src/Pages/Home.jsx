import React,{useState,useEffect} from 'react';
import Cards from '../Components/Cards';

function Home(props) {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false)

    const getProducts = ()=>{
        setLoading(true)
        return fetch(`https://fabaly-json-api.herokuapp.com/products`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            
            setData(response)
            // setState(response)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
            setLoading(false)
        })
    };
    
    useEffect(() => {
        getProducts();
    },[]);
    if(loading){
        return <h1>...Loading</h1>
    }
    return (
        <div style={{marginTop:"100px"}} className="productContainer">
           
            {
                data.map((item) => 
                    <Cards
                    key={item.id}
                    backImg={item.image[1]}
                    Images={item.image[0]}
                    productName={item.productName}
                    Discountprice={item.price-item.discount}
                    price = {item.price}
                    id={item.id}
                    />
                    
                )
            }
            
        </div>
    );
}

export default Home;