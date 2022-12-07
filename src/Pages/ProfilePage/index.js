import useProfile from "../../CustomHook/useProfile";
import s from "./styles.module.scss";

function Profile () {
    const { userName } = useProfile();

    return (
        <section className={s.profile}>
            {userName && <h2>{userName}</h2>}
        </section>
    );
}

export default Profile;