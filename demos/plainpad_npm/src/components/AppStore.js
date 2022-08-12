import React from 'react';
import { pass, R, C, T, startRectangles } from 'rectangles-npm'
import BookmarkBar from './BookmarkBar';
import AppListing from './AppListing';

/* Plain Pad app made of entirely rectangles.js components */
function AppStore({ setMode }) {



    /* Menu Collapsed State */
    const [collapse, setCollapse] = React.useState(false);
    function toggleCollapse() {
        setCollapse(!collapse);
    }


    /* Theme Color State */
    const [theme, setTheme] = React.useState("dark")
    function toggleTheme() {
        if (theme == "dark") { setTheme("light") }
        else { setTheme("dark") }
    }





    /* The App Component */
    return (
        <R root t bt bb br bl theme={theme}>
            {/* This is the root rectangle ^^^ */}


            {/* Top Pane */}
            <R l bb s={"70px"} >
                <Branding />


                <C t tel >
                    <div class="field" style={{ marginLeft: "20px", marginRight: "20px"}}>
                        <div className="control has-icons-left has-icons-right">
                            {/* change the color of the placeholder below */}
                            <input className="input is-success" type="text" placeholder="Text input" style={{color:"white"}} />
                            <span className="icon is-small is-left" style={{color:"white"}}>
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </C>
                <R l ns s={"160px"}>
                    <Icon>user-circle</Icon>
                    <Icon onClick={toggleTheme}>moon</Icon>
                    <Icon>file</Icon>
                </R>
            </R>

            {/* Bookmark Pane */}

            <BookmarkBar setMode={setMode}></BookmarkBar>

            {/* Bottom Section */}
            <R tel l>





                {/* App Dir */}
                <R tel t >
                    <div class="columns" style={{width:"100%"}}>
                        <div class="column">
                            <AppListing title = "A" description={ "hello"}></AppListing>
                        </div>
                        <div class="column">
                            <AppListing title = "B" description={ "world"}></AppListing>
                        </div>
                        <div class="column">
                            <AppListing title = "c" description={ "yup"}></AppListing>
                        </div>
                    </div>
                    <div class="columns" style={{width:"100%"}}>
                        <div class="column">
                            <AppListing title = "D" description={ "hello"}></AppListing>
                        </div>
                        <div class="column">
                            <AppListing title = "B" description={ "world"}></AppListing>
                        </div>
                        <div class="column">
                            <AppListing title = "c" description={ "yup"}></AppListing>
                        </div>
                    </div>
                </R>


            </R>
        </R>
    )
}


/* The credit/link to the original Plain Pad project */
function Credits(props) {
    return (
        <R t {...pass(props)}>
            <C s={"70px"}>
                <div style={{ fontFamily: "monospace" }}>
                    <a href="https://alextselegidis.com/try/plainpad-standalone/#/notes">Plain Pad</a>&nbsp;UI Copy in Rectangles.js
                </div>
            </C>
        </R>
    )
}


/* A custom sub class of Content(C). (Which makes it a subclass of (R))
/* For Custom Rectangle subclasses, make sure to pass props.ps through. */
function Note(props) {
    return (
        <C h s={"50px"} {...pass(props)}>
            {props.children}
        </C>
    )
}


/* Custom Rectangles.js Icon Component */
function Icon(props) {
    const iconClass = "fa-" + props.children;
    return (
        <C s={"50px"} {...pass(props)}>
            <i className={"fa " + iconClass + " fa-2x font-weight-bold"}></i>
        </C>
    )
}


/* Top Pane Site Branding Component */
function Branding(props) {
    return (
        <R l {...pass(props)}>

            <C l p="0 0 0 22px" s={"70px"}>{/* Plain Pad Logo */}
                <img src={"/logo512.png"} style={{ height: "60%" }} />
            </C>

            <C l ns mc s={"120px"}>
                <div style={{ fontFamily: "monospace" }}><h3>Plainpad<br /> Design Copy</h3></div>
            </C>

        </R>
    )
}

export default AppStore;

