import React, {useState} from 'react';
import '../Edit.scss'
import App from '../App';

// const Edit = (props) => {
//     const [example, setExample] = useState("Default Value")
//     const [email, setEmail] = useState("")
//     const [phrase, setPhrase] = useState("")
//     const [visible, setVisible] = useState(false)
    
//     const sendData = (event) => {
//         props.parentCallback([example, email, phrase]);
//         //@@@なぜprevent default削除したら動くようになったのか。
//         //event.preventDefault();
//     }

//     const setSave = (event) => {
//         props.save(setVisible(!visible));
//         //@@@なぜprevent default削除したら動くようになったのか。
//         //event.preventDefault();
//     }

//     return(
//         <>
//         <div className="form-container">
//         <form>
//         <p>
//         <div>Name: <input onChange={e => setExample(e.target.value)} type="text" name="edit-user" placeholder="name"></input></div><br/>
//         <div>Email: <input onChange={e => setEmail(e.target.value)} type="text" name="edit-user" placeholder="email"></input></div><br/>
//         <div>Phrase: <input onChange={e => setPhrase(e.target.value)} type="text" name="edit-user" placeholder="phrase"></input></div></p>
//         </form>
//         <button className="btn" onClick={() => {
//             sendData(); setSave();}}>Save</button>
//         </div>
//         </>
//     )
// }

const Edit = (props) => {
    const [example, setExample] = useState("Default Value")
    const [email, setEmail] = useState("")
    const [phrase, setPhrase] = useState("")
    const [visible, setVisible] = useState(false)
    
    const sendData = (event) => {
        props.parentCallback([example, email, phrase]);
        //@@@なぜprevent default削除したら動くようになったのか。
        //event.preventDefault();
    }

    const setSave = (event) => {
        props.save(setVisible(!visible));
        //@@@なぜprevent default削除したら動くようになったのか。
        //event.preventDefault();
    }

    return(
        <>
        <div className="form-container">
        <form>
        <p>
        <div>Name: <input onChange={e => setExample(e.target.value)} type="text" name="edit-user" placeholder="name"></input></div><br/>
        <div>Email: <input onChange={e => setEmail(e.target.value)} type="text" name="edit-user" placeholder="email"></input></div><br/>
        <div>Phrase: <input onChange={e => setPhrase(e.target.value)} type="text" name="edit-user" placeholder="phrase"></input></div></p>
        </form>
        <button className="btn" onClick={() => {
            sendData(); setSave();}}>Save</button>
        </div>
        </>
    )
}
export default Edit;