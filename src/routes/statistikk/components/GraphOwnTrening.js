import React from 'react';
import styled from 'styled-components';


function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    // return [d.getUTCFullYear(), weekNo];
    return weekNo;
}

const TreningGraph = ({ activities }) => {
    
    const last10Week = [];
    const currenWeek = getWeekNumber(new Date());
    for (let i=(currenWeek-10); i<=currenWeek; i++) {
        if (i>=1) {
            last10Week.push(i);
        } else if (i<1) {
            last10Week.push(currenWeek-i+1);
        }
    }
    const last10Weeks = last10Week.sort((a, b) => a-b);

    let resultsByWeek = [];
    for (let i=0; i <= 53; i++) {
        resultsByWeek.push(0);
    }
    
    activities && activities.map((activity) => {
        const findWeek = getWeekNumber(new Date(activity.date));
        resultsByWeek[findWeek] += 1
    })

    const maxResult = Math.max(...resultsByWeek);
    const treiningCount = [];
    for (let i=maxResult; i >=1; i--) {
        treiningCount.push(i);
    }

    return (
        <StyledGraph>
            {treiningCount.map((count) => (
                last10Weeks.map((week, index) => (
                    <>
                        {resultsByWeek[week] >= count ? (
                            <div className='trening-column'>
                                <div className="graph-item" />
                            </div>
                        ) : (
                            <div className='trening-column'>
                                <div className="graph-item-empty" />
                            </div>
                        )}
                    </>
                ))
            ))}
            {last10Weeks.map((week, index) => (
                <div className='trening-column'>
                    <span className="trening-week c-green">{week}</span>
                </div>
            ))}
        </StyledGraph>
    )
}

export default TreningGraph;

const StyledGraph = styled.div`
    .trening-column {
        width: 9.091%;
        display: inline-block;
        text-align: center;
    }
    .trening-week {
        margin-top: 15px;
        @media only screen and (max-width: 575px) {
            font-size: 14px;
        }
    }
    .graph-item {
        background: ${({ theme }) => theme.secondaryColor };
        height: 20px;
        width: 10px;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 5px;
    }
    .graph-item-empty {
        background: transparent;
        height: 20px;
        width: 10px;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 5px;
    }
`
