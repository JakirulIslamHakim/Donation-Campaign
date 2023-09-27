import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { getDonation } from '../ulility/localStorege';


const Statastics = () => {
    const allDonation = useLoaderData();
    const allDonationLength = allDonation.length;
    const addDonation = getDonation();
    const addDonationLength = addDonation.length;

    // const all = 100 % allDonationLength;
    // console.log(addDonationLength)
    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];

    const data02 = [
        {
            "name": "Group A",
            "value": 2400
        },
        {
            "name": "Group B",
            "value": 4567
        },
        {
            "name": "Group C",
            "value": 1398
        },
        {
            "name": "Group D",
            "value": 9800
        },
        {
            "name": "Group E",
            "value": 3908
        },
        {
            "name": "Group F",
            "value": 4800
        }
    ];

    const data = [
        {
            'allDonation': allDonationLength
        },
        {
            'addDonation': addDonationLength
        }
    ]


    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        // label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >

                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statastics;
