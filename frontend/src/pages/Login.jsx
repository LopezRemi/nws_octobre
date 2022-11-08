import { useState, useEffect } from "react"
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFromData] = useState({
        email: '',
        password: '',   
    })

    const {email, password, } = formData

    const onChange = (e) => {
        setFromData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }
 
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Connexion
                </h1>
                <p>Connexion à NWS material</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                </form>
                <form>
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Entrez votre email"
                        onChange={onChange}
                        />
                    </div>
                </form>
                <form>
                    <div className="form-group">
                        <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Entrez votre mots de passe"
                        onChange={onChange}
                        />
                    </div>
                </form>
               
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                        valider
                        </button>
                    </div>
                
            </section>
        </>
    )
}

export default Login