import { useState, useEffect } from "react"
import { FaUser } from 'react-icons/fa'

function Register() {
    const [formData, setFromData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

    const onChange = () => { }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Création de compte
                </h1>
                <p>Veuillez créer un compte.</p>
            </section>

            <section className="form">
                <form>
                    <div className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Entrez votre nom"
                        onChange={onChange}
                        />
                    </div>
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
                <form>
                    <div className="form-group">
                        <input
                        type="password2"
                        className="form-control"
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder="Entrez votre confirmation de mots de passe"
                        onChange={onChange}
                        />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register