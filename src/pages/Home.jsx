import { useState } from "react"

const Home = () => {
    const [visible, setvisible] = useState(true)
    const [color, setColor] = useState('')

    return (
        <>
            <div className="btn-group">
                <button style={{ marginLeft: '12px' }} onClick={() => setvisible(false)}>Hide</button>
                <button style={{ marginLeft: '12px' }} onClick={() => setvisible(true)}>Show</button>
                <button style={{ marginLeft: '12px' }} onClick={() => setvisible(visible => !visible)}>Toggle</button>
                <button style={{ marginLeft: '12px' }} onClick={() => setColor(blue => !blue)}>Color</button>
            </div>
            <h1 className="text" id="text" style={{marginTop:'20px',display: visible ? 'block' : 'none', color: color?'grey':'white' }}>
                Home
            </h1>
        </>
    )
}

export default Home