import React from 'react'
import { Menu } from 'semantic-ui-react'
import '../../index.css'

export default function LeftMenu() {
    return (
        <div>
            <Menu fluid vertical color='orange'>
                <Menu.Item className="leftMenu" name='system personnel'/>
                <Menu.Item className="leftMenu" name='job seekers'/>
                <Menu.Item className="leftMenu" name='employers'/>
            </Menu>
        </div>
    )
}