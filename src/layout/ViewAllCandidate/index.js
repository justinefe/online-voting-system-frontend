import React from 'react';
import './index.scss';


const viewAllCandidate =()  => {

    const candidateList = [
        {
            firstName: 'Justin',
            uuid: 1,
            lastName: 'Igugu',
            officeContesting: 'presidency',
            party: 'Peoples democratic Party'
         },
        {
            uuid: 2,
            firstName: 'martins',
            lastName: 'Efe',
            officeContesting: 'Governoship',
            party: 'Peoples democratic Party'

        },
        {
            uuid: 3,
            firstName: 'Kelvin',
            lastName: 'Melvin',
            officeContesting: 'senate',
            party: 'Peoples democratic Party'

        },
        {
            firstName: 'Justin',
            uuid: 4,
            lastName: 'Igugu',
            officeContesting: 'presidency',
            party: 'Peoples democratic Party'

         },
        {
            uuid: 5,
            firstName: 'martins',
            lastName: 'Efe',
            officeContesting: 'Governoship',
            party: 'Peoples democratic Party'

        },
        {
            uuid: 6,
            firstName: 'Kelvin',
            lastName: 'Melvin',
            officeContesting: 'senate',
            party: 'Peoples democratic Party'
        }
    ];
    const candidates = candidateList.length ?
         ( 
            <table className='center'>
                    <thead>
                        <tr id = 'head-column'>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Office Contesting</td>
                            <td>Party / Organization</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                         candidateList.map( candidate => { 
                            return (
                                        <tr id = 'body-column' key= {candidate.uuid}>
                                            <td>{candidate.firstName}</td>
                                            <td>{candidate.lastName}</td>
                                            <td>{candidate.officeContesting}</td>
                                            <td>{candidate.party}</td>
                                        </tr>
                            );
                            })
                        }
                    </tbody>
            </table> 
        ) :
        (
            <div>
            <h1>Loading...</h1>
            </div>
        );

    return (
        <div>
            {candidates}             
        </div>
    );
};

export default viewAllCandidate;
