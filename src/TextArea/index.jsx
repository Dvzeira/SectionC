import style from "./style.module.css"

export default function TextArea(props) {
  return (
    <>
      <label htmlFor="content">Comentário</label>
      <textarea id="content" cols="30" rows="6" required
        value={props.newtextComent}
        onChange={(ev) => props.setNewTextComent(ev.target.value)}
      ></textarea>

    </>

  )
}