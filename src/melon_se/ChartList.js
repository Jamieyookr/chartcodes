import React from 'react';
import ChartItem from './ChartItem';
import './ChartList.css'

const ChartList = ({data, clickLike, loveOn, onPoint}) => {
    return (
        <div className='ChartList'>
            <table>
                <colgroup>
                    <col className='w1'/>
                    <col className='w2'/>
                    <col className='w3'/>
                    <col className='w4'/>
                    <col className='w5'/>
                    <col className='w6'/>
                </colgroup>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Song(Artist)</th>
                        <th>Album</th>
                        <th>Like</th>
                        <th>MV</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => <ChartItem item={item} clickLike={clickLike} loveOn={loveOn}  onPoint={onPoint} />)}
                </tbody>
            </table>
            
        </div>
    );
};

export default ChartList;