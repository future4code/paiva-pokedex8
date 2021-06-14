import React from 'react'
import { Radar } from 'react-chartjs-2'

const PokeStatus = () =>{
    return<div>
        <Radar
            data={{
            labels: ['HP', 'Ataque', 'Defesa', 'Velocidade', 'Ataque Especial', 'Defesa Especial'],
            datasets: [{
                label: 'Status do Pokemon',
                data: [78,84,78,109,100,85],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
  
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
    
                },
            ],
            
            }}
            height={500}
            width={600}
            options={{
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 150
                    }
                }
            }}
            
        />
    </div>
}

export default PokeStatus

