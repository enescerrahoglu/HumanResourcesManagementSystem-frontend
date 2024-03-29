import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Image, Segment, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/JobAdvertisementService';

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [])


    return (
        <div>
            <div style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
                {
                    jobAdvertisements.map(jobAdvertisement => (
                        <Segment.Group piled>
                            <Segment><h3 style={{ textAlign: "left", marginLeft: "1em" ,fontFamily:"Arial, Helvetica, sans-serif"}}>İş İlanı - {jobAdvertisement.position.positionName}</h3></Segment>
                            <Segment>
                                <Segment.Group horizontal>
                                    <div  style={{ margin: "1em", marginLeft: "1em", marginTop: "3em" }}>
                                        <Image src='https://res.cloudinary.com/zeydatabase/image/upload/v1623436624/building_wvtyue.png' size='mini' />
                                    </div>
                                    <Segment>
                                        <div  style={{ textAlign: "left",fontFamily:"Arial, Helvetica, sans-serif" }} key={jobAdvertisement.jobAdvertisementId}>
                                            <h2 style={{ marginLeft: "0.5em" }}>{jobAdvertisement.position.positionName}</h2>
                                            <p style={{ marginLeft: "1em", marginTop: "1em" }}> {jobAdvertisement.jobDescription}</p>
                                            <p style={{ marginLeft: "1em", marginTop: "1em", marginBottom: "1em" }}>{jobAdvertisement.employer.companyName}</p>
                                            <Button as={NavLink} to={`/jobAdvertisement/${jobAdvertisement.jobAdvertisementId}`} style={{ backgroundColor: "black", color: "white", marginLeft: "1em" }} >İncele </Button>
                                        </div>
                                    </Segment>
                                </Segment.Group>
                            </Segment>
                        </Segment.Group>
                    ))
                }
            </div>
        </div>
    )
}