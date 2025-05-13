import './UserProfile.css'

interface UserProfileProps {
    name: string;
    age: number;
    qualifications: string[];
}

function UserProfile(props: UserProfileProps) {
    return (
        <section className="userProfileSection my-5 px-3">
            <h2>{props.name}'s Profile</h2>
            <h4>Age: {props.age}</h4>
            <h4>Qualification:</h4>
            <ul className='list-group'>
                {props.qualifications.map((qualification) => (
                    <li className="list-group-item">{qualification}</li>
                ))}
            </ul>
        </section>
    );
}

export default UserProfile;