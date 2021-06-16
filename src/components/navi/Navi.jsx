import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react'
import '../../css/Navi.css'
import Login from './Login';
import Logout from './Logout';


export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")

    }
    function handleSignIn() {
        setIsAuthenticated(true)
    }
    return (
        <div className="Navi" style={{ backgroundColor: "black", color: "white" }}>
            <div>
                <Menu inverted fixed='top'>
                    <Container>
                        <Menu.Item as={NavLink} to="/" style={{ marginLeft: "3em", marginTop: "0.3em", color: "white", position: "left" }}
                            name='Anasayfa'
                        />
                        <Menu.Menu position='right'>
                            {isAuthenticated ? <Login logOut={handleSignOut} />
                                : <Logout logIn={handleSignIn} />}
                        </Menu.Menu>

                    </Container>

                </Menu>
            </div>

        </div>

    );
}