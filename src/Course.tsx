import "./Course.css";

function Course() {
    let course = {
        name: "Python Programming",
        duration: "3 months",
        price: 5000,
        rating: 4.5,
        logoLink: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175116.png?f=webp&w=256"
    }

    return (
        <section className="courseSection py-4 px-4">
            <h2 className="py-2">Course Card</h2>
            <div className="center">
                <div className="card courseCard">
                    <img src={course.logoLink} className="card-img-top" alt="..." />
                    <div className="card-body courseCard-body">
                        <h5 className="card-title">{course.name} ({course.duration})</h5>
                        <p className="card-text text-green">Price: Rs.{course.price}</p>
                        <p className="card-text text-yellow">Rating: {course.rating}</p>
                        <div className="center"><a href="#" className="btn btn-primary">Enroll</a></div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Course;