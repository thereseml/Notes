import { useEffect, useRef, useState } from "react"
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";


export function Start() {

    const [inlogged, setInlogged] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [falseLoggin, setFalseLoggin] = useState(false);
    const [showTextEditor, setShowTextEditor] = useState(false);
    const [newDocumentTitle, setNewDocuemntTitle] = useState("");
    const [TitleDone, setTitleDone] = useState(false);
    const [newDocument, setNewDocument] = useState({
        id: "",
        title: "",
        text: "",
        })
    const [allDocuments, setAllDocuments] = useState([]);
    const [EditDocument, setEditDocument] = useState(false);
    const [doneupdatemsg, setDoneUpdateMsg] = useState(false);
    const [titlesaved, setTitelSaved] = useState(false);
    const [documnetDone, setDocumentDone] = useState(false);
    const [editDocumentmsg, setEditDocumentmsg] = useState(false);

    useEffect(() => {
        if (allDocuments > 0) {
            GetallDocument()
        }
    }, [])

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }


    function handleInlogg() {
       if (username === "admin" && password === "admin1234") {
           setInlogged(true);
       } else {
        setFalseLoggin(true);
       }
    }

    function CreateNewDocument() {
        setShowTextEditor(true);
    }
    
    function handleNewTitle (e) {
        setNewDocuemntTitle(e.target.value)
    }
    const editorRef = useRef();

    function saveNewDocument() {

        let NewDocumentfromEditor = {
            title: newDocumentTitle,
            text: editorRef.current.getContent(),
            }

            axios.post("http://localhost:3000/document/newDocument", NewDocumentfromEditor, {headers: { "content-type": "application/json"}})
            .then(response => {
                console.log(NewDocumentfromEditor);
            })
            .catch(error => {
                alert("Det gick inte att spara dokumentet, försök igen!")
            })

            console.log(NewDocumentfromEditor);

            setShowTextEditor(false)
            setDocumentDone(true)

    }


    function GetallDocument() {
        axios.get("http://localhost:3000/document/Showdocument")
        .then(response => {
            setAllDocuments([...response.data])

        }) 

        setDocumentDone(false)
        setEditDocumentmsg(true)
    }

    function showDocumentDetail(documents) {
        let getID = localStorage.getItem("id")
        console.log(documents.id);
        console.log(getID);

        if (getID == documents.id) {
            setEditDocument(true)
        }

    }


    let GetList = 
        allDocuments.map((documents, i) => {
        return ( <div className="documentBox">
            <li className="liDocument" key={i}>{documents.documentTitle}</li>
            <p>{documents.documentText}</p>
            <button onClick={() => {showDocumentDetail(documents); localStorage.setItem("id", documents.id) }}>Redigera</button>
            </div>)
    })

    function updateDocument() {
        let getIDforput = localStorage.getItem("id")


        let editedDocuemnt = {
            id: getIDforput,
            title: newDocumentTitle,
            text: editorRef.current.getContent(),
            }

        axios.put("http://localhost:3000/document/changeDocument", editedDocuemnt, { headers: {"content-type": "application/json"}})
        .then(response => {

        })
        .catch(error => {
            console.log(error);
            alert("Det gick inte att uppdatera dokumentet!")
        })

        setEditDocument(false);
        setDoneUpdateMsg(true);
        GetallDocument();
        localStorage.clear("id")
    }


    return <>
        <main>
            {!inlogged && <>
                <h3>Välkommen att logga in!</h3>
                <form>
                    <input type="text" value={username} placeholder="Användarnamn" onChange={handleUsername}/>
                    <input type="password" value={password} placeholder="Lösenord" onChange={handlePassword}/>
                    <button onClick={handleInlogg}>Logga in!</button>
                </form>
            </>}

            {falseLoggin && <h5>Fel användarnamn eller lösenord, vänligen försök igen!</h5>}
 
            {inlogged && <>
                <button className="menuBtn" onClick={CreateNewDocument}>Skapa nytt dokument!</button>

                <button className="menuBtn" onClick={GetallDocument}>Kolla på alla dokument!</button>
            </> }
            {showTextEditor && <section>
                <input type="text" placeholder="Skriv din titel här.. " value={newDocumentTitle} onChange={handleNewTitle}/>
                <button onClick={() => {setTitleDone(true); setTitelSaved(true)}}>Spara titel</button>
                {titlesaved && <p>Din titel är sparad!</p>}
                <Editor
                apiKey='nujf5l8962ganwuvo5g70xi33ql3fwrtxvvufeoxdw8j4t1n'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue= {newDocument.text}
                    init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    />
                    <button onClick={saveNewDocument}>Spara dokumentet!</button>
            </section> }

            {documnetDone && <p>Ditt dokumnet är sparat!</p>}
    

            {EditDocument && <>

                <div>
                    <input type="text" placeholder="Skriv din titel här.. " value={newDocumentTitle} onChange={handleNewTitle}/>
                </div>
                <Editor
                apiKey='nujf5l8962ganwuvo5g70xi33ql3fwrtxvvufeoxdw8j4t1n'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue= {newDocument.text}
                    init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    />
                    <button onClick={updateDocument}>Spara ändringar!</button>


            </>}

            <>
                <div>
                    {GetList}
                </div>
            </>

            {doneupdatemsg && <h4>Du har uppdaterat ditt dokument!</h4>}
            
        </main>
    </>
}