import React from 'react';
import Button from '../../components/Button';
import './index.scss';


const ApprovePartyMember = () =>{

    const membersList = [
        {
            name: 'Justin',
            uuid: 1,
            party: 'Peoples democratic Party'
         },
        {
            uuid: 2,
            name: 'martins',
            party: 'Peoples democratic Party'

        },
        {
            uuid: 3,
            name: 'Kelvin',
            party: 'Peoples democratic Party'

        },
        {
            name: 'Justin',
            uuid: 4,
            party: 'Peoples democratic Party'

         },
        {
            uuid: 5,
            name: 'martins',
            party: 'Peoples democratic Party'

        },
        {
            uuid: 6,
            name: 'Kelvin',
            party: 'Peoples democratic Party'
        }
    ];
    const members = membersList.length ?
         ( 
            <table className='center'>
                    <thead>
                        <tr id = 'head-column'>
                            <td>Name</td>
                            <td>Party</td>
                            <td className='all-btn'><Button id="approveAll" type="submit" name="Approve All" classes="button" /></td>
                            <td className='all-btn'><Button id="rejectAll" type="submit" name="Reject All" classes="button" /></td> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                         membersList.map( member => { 
                            return (
                                        <tr id = 'body-column' key= {member.uuid}>
                                            <td>{member.name}</td>
                                            <td>{member.party}</td>
                                            <td><Button id="approve" type="submit" name="Approve" classes="button" /></td>
                                            <td><Button id="reject" type="submit" name="Reject" classes="button" /></td>                                           
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
            {members}             
        </div>
    );
};

export default ApprovePartyMember;
