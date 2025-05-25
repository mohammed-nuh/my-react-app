import reactBootstrapImage from '../assets/react-bootstrap-featured-image.avif'

function Hero(){
    return (
        <>
            <main className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">Welcome to our website</h1>
                                <p className="lead fw-normal text-white-50 mb-4">This website is created with the help of React Framework and Bootstrap Template.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={reactBootstrapImage} alt="..." width='600px' height='400px'/></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero;