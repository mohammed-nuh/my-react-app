import './courseListSection.css'

interface CourseListSimpleProps {
    title: string;
    courses: string[];
}

function CourseListSimple(props: CourseListSimpleProps) {
    return (
        <section className="courseListSection my-5 px-3">
            <h2>{props.title}</h2>
            <ul className='list-group'>
                {props.courses.map((course) => (
                    <li className="list-group-item">{course}</li>
                ))}
            </ul>
        </section>
    );
}

export default CourseListSimple