import styles from "./Form.module.css"

export default function (props) {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <label>Email: </label>
                <input></input>
                <label>Password: </label>
                <input></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}