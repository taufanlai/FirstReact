import React from 'react';



function ListCart({filter}) {

        let json = [{
          id: 1,
          title: 'Kelas 1',
          content1: 'ini bukan apa apa',
          content2: 'ini bukan siapa siapa'
      }, {
          id: 2,
          title: 'Kelas 2',
          content1: 'ini bukan apa apa',
          content2: 'ini bukan siapa siapa'
      }, {
          id: 3,
          title: 'kelas 3',
          content1: 'ini bukan apa apa',
          content2: 'ini bukan siapa siapa'
      }, {
          id: 4,
          title: 'Kelas 4',
          content1: 'ini bukan apa apa',
          content2: 'ini bukan siapa siapa'
      }]

  let json2 = json.filter(e=> e.title.includes(filter) || filter=="")
  return (
    <div >
       <div className ='List-Cart'>
            {json2.map((item, idx) => {
              return (
                <div key={idx} className='list-card'>
                    <div>{item.title}</div>
                    <div>{item.content1}</div>
                    <div>{item.content2}</div>
                    <div>Button {item.id}</div>
                   
                </div>       
            )
                // if (item.title.includes(filter)  || filter==""){
                  
                // }
                   
                  })}
           </div>
    </div>
  );
}

export default ListCart;
