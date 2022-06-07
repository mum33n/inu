import {Chart, Tooltip, Title, ArcElement } from 'chart.js'
import { Doughnut } from "react-chartjs-2";
Chart.register(Tooltip, Title, ArcElement);

export default function Tokenomics() {
    const state = {
        labels: ['Token Supply (1 year locked)', 'Liquidity', 'Marketing and Growth', 'Staking', 'Academy and Charity', 'Core Team', 'Airdrop', 'Future airdrop for loyal holders'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#52d726',
            '#ffec00',
            '#ff7300',
            '#ff0000',
            '#007ed6',
            '#7cdddd'
            ],
            // hoverBackgroundColor: [
            // '#52d726',
            // '#ffec00',
            // '#ff7300',
            // '#ff0000',
            // '#007ed6',
            // '#7cdddd'
            // ],
            data: [40, 30, 10, 10,5,5]
          }
        ]
      }
    return(<div id='tokenomics pt-10'>
        <h1 className='text-center font-bold text-3xl md:text-5xl text-slate-100 wow fadeInUp' data-wow-duration="2s">TOKENOMICS</h1>
        <div className='flex justify-center flex-wrap p-5'>
            <div className='w-full md:w-1/2 wow fadeInUp' data-wow-duration="2s">
                <div className='w-2/3 md:2/3 mx-auto wow fadeInUp' data-wow-duration="2s">
                <Doughnut
            data={state}
            options={{
              
              htmlLegend: {
                // ID of the container to put the legend in
                containerID: 'legend-container',
              },
              legend:{
                display:false,
              },
              defaults:{
                legend:false
              }
            }}
          />
                </div>
            </div>
            <div className='wow fadeInUp' data-wow-duration="2s">
                {/* <img className='block mx-autowow fadeInUp' data-wow-duration="2s" src={token}/> */}
                </div>
          </div> 
        </div>)
};