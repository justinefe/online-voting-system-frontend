import React from 'react';
import Button from '../../components/Button';
import './index.scss';


const ApproveParty = () =>{

    const partiesList = [
        {
            secretary: 'Justin',
            uuid: 1,
            party: 'Peoples democratic Party'
         },
        {
            uuid: 2,
            secretary: 'martins',
            party: 'Peoples democratic Party'

        },
        {
            uuid: 3,
            secretary: 'Kelvin',
            party: 'Peoples democratic Party'

        },
        {
            secretary: 'Justin',
            uuid: 4,
            party: 'Peoples democratic Party'

         },
        {
            uuid: 5,
            secretary: 'martins',
            party: 'Peoples democratic Party'

        },
        {
            uuid: 6,
            secretary: 'Kelvin',
            party: 'Peoples democratic Party'
        }
    ];
    const parties = partiesList.length ?
         ( 
            <table className='center'>
                    <thead>
                        <tr id = 'head-column'>
                            <td>Party</td>
                            <td>Secretary</td>
                            <td className='all-btn'><Button id="approveAll" type="submit" name="Approve All" classes="button" /></td>
                            <td className='all-btn'><Button id="rejectAll" type="submit" name="Reject All" classes="button" /></td> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                         partiesList.map( party => { 
                            return (
                                        <tr id = 'body-column' key= {party.uuid}>
                                            <td>{party.party}</td>
                                            <td>{party.secretary}</td>
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
            {parties}             
        </div>
    );
};

export default ApproveParty;
