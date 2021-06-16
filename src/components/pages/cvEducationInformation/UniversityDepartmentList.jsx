import React, { useEffect, useState } from 'react'
import UniversityDepartmentService from '../../services/UniversityDepartmentService'
import { Icon, Menu, Table } from 'semantic-ui-react'

export default function UniversityDepartmentList() {

    const [universityDepartments, setUniversityDepartments] = useState([]);

    useEffect(() => {
        let universityDepartmentService = new UniversityDepartmentService()
        universityDepartmentService.getUniversityDepartments().then(result => setUniversityDepartments(result.data.data))
    }, [])
    return (
        <div>
            <Table celled >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Üniversite Bölümleri</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        universityDepartments.map(universityDepartment => (
                            <Table.Row key={universityDepartment.universityDepartmentId}>
                                <Table.Cell>{universityDepartment.universityDepartmentName}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='1'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}