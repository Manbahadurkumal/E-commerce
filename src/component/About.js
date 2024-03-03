
const About = ()=>{
    return(
        <>
        <section className="workingProcess py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="Process-heading">How it works</h3>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid py-3" src="../images/account.png" alt=""/>
                        <h5 className="py-2">Create an account</h5>
                        <p>Madhu Tyenki is for your service. Create an account
                            to see movies, series, animation and many more videos.
                        </p>
                    </div>
                    <div className="col-md-4">
                    <img className="img-fluid py-3" src="../images/carbon_security.png" alt=""/>
                        <h5 className="py-2">Get authorization</h5>
                        <p>Verify your account to get access. Enter code. Donot share
                             code to other.</p>
                    </div>
                    <div className="col-md-4">
                    <img className="py-3" src="../images/happy-emoji.png" alt=""/>
                        <h5 className="py-2">Enjoy Here</h5>
                        <p>You can see any movies available in Netflix in free.
                            Click in provided link to download movies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="clientReview py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="Process-heading">
                            What our client say
                        </h3>
                    </div>
                    <div className="col-md-6">
                       <img className="img-fluid" src="./images/client.png" alt=""/>
                    </div>
                    <div className="col-md-6 my-5 pt-5 ps-3">
                       <img className="img-fluid" src="./images/quote-left.png" alt=""/>
                       <p className="py-3">Amet in elementum nulla scelerisque dui,
                         egestas at. Elit consectetur turpis elementum 
                         amet vitae et etiam nec. Varius volutpat hac 
                         adipiscing tincidunt pretium.</p>
                       <h5> Angel Kumal
                       </h5>
                    </div>
                </div>
            </div>
        </section>
        <section className="clientReview py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                       <img className="img-fluid" src="../images/Mockup1.png" alt=""/>
                    </div>
                    <div className="col-md-6 py-5">
                        <h3>Download app to enjoy more</h3>                     
                       <p className="py-3">Amet in elementum nulla scelerisque dui, egestas at.
                         Elit consectetur turpis elementum amet vitae et etiam nec.
                          Varius volutpat hac adipiscing tincidunt pretium.</p>
                       
                       <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1"><img className="img-fluid p-2" src="../images/Group 51.png" alt=""/></a>
                        <a href="https://www.apple.com/app-store/"><img className="img-fluid p-2" src="../images/Group 52.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </section>
        {/* <client/> */}
        </>
    )
};
// const webpack = require('webpack');

// //...
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery',
//       'window.jQuery': 'jquery'
//     }),

export default About
