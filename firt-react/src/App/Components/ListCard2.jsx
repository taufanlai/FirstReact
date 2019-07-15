import React from 'react';



function ListCart({filter,json}) {

      //   let json = [{
      //     id: 1,
      //     title: 'Kelas 1',
      //     content1: 'ini bukan apa apa',
      //     content2: 'ini bukan siapa siapa'
      // }, {
      //     id: 2,
      //     title: 'Kelas 2',
      //     content1: 'ini bukan apa apa',
      //     content2: 'ini bukan siapa siapa'
      // }, {
      //     id: 3,
      //     title: 'kelas 3',
      //     content1: 'ini bukan apa apa',
      //     content2: 'ini bukan siapa siapa'
      // }, {
      //     id: 4,
      //     title: 'Kelas 4',
      //     content1: 'ini bukan apa apa',
      //     content2: 'ini bukan siapa siapa'
      // }]

      console.log(json.lenght)
if(json.lenght >0){
    return(
        <div></div>
    )

}
else {

    let json2 = json.filter(e=> e.name.includes(filter) || filter=="")
    return (

        <div >
            
           <div className ='List-Cart'>
    
    
                {
          
                    json2.map((item, idx) => {
                        return (
                          <div key={idx} className='list-card'>
                              <div>{item.name}</div>
                              <div>{item.height}</div>
                              <div>{item.mass}</div>
                              <div>Button {item.hair_color}</div>
                             
                          </div>       
                        )
                             
                       })
                 }
                
                
               </div>
        </div>
      );
   
}

 

    
      
          
 
}

export default ListCart;
