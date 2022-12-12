import { useState } from "react"

const Subscription = () => {

    const postUrlApi = "https://demoapi.com/api/series/newsletter"

    // Inpur state
    const [emailInput, setEmailInput] = useState("")

    const postApi = async () => {
        const bodyObject = {email: emailInput}
        const bodyJson = JSON.stringify(bodyObject)
        const response = await fetch(postUrlApi, { method: "POST", body: bodyJson })

        return response.status
    }

    const subscribeHandler = async () => {
        await postApi()
        // ! response handling ! *****
    }


    return (
        <div className="subscribe-div">
            <h3>Subscribe our newsletter</h3>
            <input
                type="email"
                placeholder="email"
                value={emailInput}
                onChange={event => setEmailInput(event.target.value)}
            />
            <button
                onClick={subscribeHandler}
            >
                Subscribe
            </button>
        </div>
    )
}

export default Subscription