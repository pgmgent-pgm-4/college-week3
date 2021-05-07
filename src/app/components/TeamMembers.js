import { COMPANY_NAME } from './../constants';
import React from 'react'
import teamMembers from '../data/team.json'

const TeamMembers = () => {
    return (
        <>
            <h1>Members van {COMPANY_NAME}</h1>
            <ul>
                {
                    teamMembers.map(member => <li>
                        {member.firstName}
                    </li>)
                }
            </ul>
        </>
    )
}

export default TeamMembers
