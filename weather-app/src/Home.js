import {Link} from 'react-router-dom'
export const Home = ()=>{

    const cssStyle = {
        fontSize:"20px",
        fontWeight:"bold",
        color:"black",
        textDecoration:"none"
    }

    const btnStyle = {
        borderRadius: "12px",
        padding: "5px 15px",
        margin: "10px"
    }

    return (
        <>
            <h1>This is My Weather checking App</h1>
            <button style={btnStyle}><Link to='/' style={cssStyle}>Home</Link></button><br />
            <button style={btnStyle}><Link to='/weather' style={cssStyle}>Check Weather</Link></button><br />
            <button style={btnStyle}><Link to='/about' style={cssStyle}>About</Link></button><br />
            <p style={cssStyle}>This app is made using ReactJS and this is SPA (Single Page Application)</p>
        </>
    );
}