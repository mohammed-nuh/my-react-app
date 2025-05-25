import Hero from "./Hero";

function Home() {
    return (
        <>
            <Hero />
            <section className="py-5 bg-white" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2 className="fw-bold text-dark mb-0">A better way to start building.</h2>
                        </div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 d-flex flex-column h-100">
                                    <div className="bg-light text-primary border rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                                        <i className="bi bi-collection fs-4"></i>
                                    </div>
                                    <h5 className="text-dark">Featured title</h5>
                                    <p className="mb-0 text-muted">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 d-flex flex-column h-100">
                                    <div className="bg-light text-primary border rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                                        <i className="bi bi-building fs-4"></i>
                                    </div>
                                    <h5 className="text-dark">Featured title</h5>
                                    <p className="mb-0 text-muted">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 mb-md-0 d-flex flex-column h-100">
                                    <div className="bg-light text-primary border rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                                        <i className="bi bi-toggles2 fs-4"></i>
                                    </div>
                                    <h5 className="text-dark">Featured title</h5>
                                    <p className="mb-0 text-muted">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div className="col d-flex flex-column h-100">
                                    <div className="bg-light text-primary border rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                                        <i className="bi bi-toggles2 fs-4"></i>
                                    </div>
                                    <h5 className="text-dark">Featured title</h5>
                                    <p className="mb-0 text-muted">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default Home;