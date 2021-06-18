import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function Login({logOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/76053138?s=400&u=bff3e8287def8a765083289733b7b12842e30c20&v=4"></Image>
                <Dropdown pointing="top left" text="Enes">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={logOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}