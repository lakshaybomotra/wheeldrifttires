export const Product = () => {
    return (
        <>
            <div className="products" id="product">
                <h3>Our Products</h3>
            </div>
            <div className="productcards">


                <div className="product-img-container">
                    <img src="assets/img/tyers/tyers-winter.jpg" alt="image" className="product-img" />

                </div>
                <div className="product-discription">
                    <h3 className="h3">ALL Seasonal TIRES</h3>
                    <p className="product-para">All-season tires provide a balance <br />
                        between summer and winter tires.<br />
                        They offer decent performance on dry and wet roads,<br />
                        making them suitable for everyday driving.<br />
                        They have a versatile tread design<br />
                        for rain and light snow. <br />
                        While not as specialized as winter tires<br />
                        in harsh conditions, they're durable and comfortable for year-round use. <br />
                        Remember, they're a compromise between extremes,<br />
                        so consider your climate and <br />
                        driving habits when choosing them.</p>



                </div>


            </div>

            <br />
            <br />
            <div className="productcards">



                <div className="product-discription">
                    <h3>WINTER TIRES</h3>
                    <p className="product-para">Winter tires, designed <br />
                        specifically for cold and icy conditions,<br />
                        provide superior traction on snow and ice.<br />
                        Their unique tread patterns and<br />
                        softer rubber compound offer improved<br />
                        grip and handling in freezing temperatures, <br />
                        enhancing safety during winter driving.</p>



                </div>
                <div className="product-img-container">
                    <img src="assets/img/tyers/snow-tyres.jpg" alt="image" className="product-img" />

                </div>

            </div>



        </>
    )
}