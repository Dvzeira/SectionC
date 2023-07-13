import style from "./style.module.css"

export default function Email(props) {
  return (
    <>
      <label className={style.label} htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={props.newEmail}
        onChange={(ev) => props.setEmail(ev.target.value)}
      />
    </>

  )
}