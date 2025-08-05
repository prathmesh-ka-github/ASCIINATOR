import React, { useRef, useEffect } from 'react';
import '../styles/matrix.css'

const Matrix = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const canvas = document.getElementById('matrix')
            const ctx = canvas.getContext('2d')

            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy1234567890#@$%&*+=-_,.;:\|?<>/{}[]()~'
            const fontSize = 20
            const columns = canvas.width / fontSize
            const drops = []

            for (let x = 0; x < columns; x++) {
                drops[x] = 1
            }

            function draw() {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                ctx.fillStyle = '#ff0000'
                ctx.font = `bold ${fontSize}px mono`;

                for (let i = 0; i < drops.length; i++) {
                    const text = letters[Math.floor(Math.random() * letters.length)]
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize)

                    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                        drops[i] = 0
                    }
                    drops[i]++
                }
            }

            setInterval(draw, 33)
        }
        console.log('log');
        
    }, []);

    return (
        <div className="background">
            <canvas ref={canvasRef} id="matrix"></canvas>
        </div>
    )
}

export default Matrix