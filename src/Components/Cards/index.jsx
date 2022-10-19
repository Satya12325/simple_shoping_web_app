import React from 'react';
import styles from"./cards.module.css";
import {Link} from "react-router-dom";

function Cards({backImg,Images,Discountprice,productName,price,id}) {
    return (
        <div className={styles.particularproduct} >
                <Link to={`/${id}`} style={{textDecoration:"none",color:"black"}}>
                    <div className={styles.background}
                style={{background:`url(${backImg})`,width:"100%",height:"350px",
                backgroundSize: "250px 350px",
                backgroundRepeat: "no-repeat",
                }}
                 >
               
               <img className={styles.changeImg} src={Images} alt="image" />
               </div>
               </Link>
              
               <p  className={styles.fontofproductname}>{productName}</p>
               <p  className={styles.fontofproductnamecolor}>₹ {Discountprice} <span> ₹</span><span className={styles.forlinethrough}> {price}</span> </p>

               </div>
    );
}

export default Cards;