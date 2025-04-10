import React from 'react';
import "./index.css";

const Modalwindow = function(props){
    // function to close the modal window
    const closemodalwindow = function(){
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = "none"

    }  
    // function to collect comment
    const collectcomment = function(){
        let commentarea = document.querySelector(".commentarea")
        const commentlist = document.querySelector(".commentlist")
        commentlist.innerHTML += `<li>${props.usercomment} - ${commentarea.value}</li>`
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.display.style = "none";
        commentarea.value = ""
    }

    return(
        <>
            {/*Modal Window*/}
            <section className="modalwindow">
                <div className="modalcontent">
                    <header className="modalheader">
                        <p>Add feedback</p>
                        <p className="closemodal"onClick={closemodalwindow}>&#x58;</p>
                    </header>
                    <main className="modalbody">
                        <input className="commentarea" type="text" placeholder="Type your comments"/>
                        <p className="descriptioncomment">Max 200 characters</p>
                        <button className="btnpostfeedback" onClick={collectcomment}>Post Feedback</button>
                    </main>
                </div>
            </section>
        </>
    )
}

export default Modalwindow