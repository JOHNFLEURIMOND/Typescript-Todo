import React from 'react'
import ReactDom from 'react-dom'


export default function App(): JSX.Element {
    const sum = (a: number, b: number): number => a + b;

    return (
        <div>
          <p>
            <code className="ta-c p-h200 t--intro" > The sum is {sum(15, 15)}</code>
          </p>
        </div>
    )
}

const root = document.getElementById('app-root')

ReactDom.render(<App />, root)