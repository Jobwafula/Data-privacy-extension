import React from 'react'

export default function InsensitiveData() {
 const  data = [
    {
      name:'name'
    },
    {
      name:'Id Number'
    },
    {
 name:'Phone Number'
    },
    {
      name:"Home Address"
    },{
      name:'Loaction'
    },
    {
      name:"Email adress"
    }
  ]
  return (
    <div 
    className='h-[120px]'>
      <ul>
        {data.map((item) => {
          return (
            <div>
              <li className="font-medium">{item.name}</li>
            </div>
          );
        })}
      </ul>
    </div>
  )
}
