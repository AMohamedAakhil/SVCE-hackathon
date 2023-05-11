import { React, useState } from 'react'

const SendMessage = () => {

    const [value, setValue] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault()
        console.log(value)
        setValue('')
    }
    

    return (
        <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg p-10">
            <form onSubmit={handleSendMessage} className="flex">
                <input value={value} onChange={e => setValue(e.target.value)} className="input text-black bg-slate-50 w-full focus:outline-none rounded-r-none" type="text"/>
                <button type="submit" className="btn w-auto px-5 bg-slate-600 text-white rounded-l-none text-sm">Send</button>
            </form>
        </div>  )
}

export default SendMessage