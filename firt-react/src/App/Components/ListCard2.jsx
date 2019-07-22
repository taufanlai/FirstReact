import React from 'react';



function ListCart({filter,json,page,Prev,Next,Switchpage }) {

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

      console.log(json.length)

let Prevhtml;
let Nexthtml;


if(Prev === true)
    Prevhtml =<div className="Page-Control" onClick={(e)=>Switchpage(-1)} >Prev</div>;
else 
    Prevhtml =<div></div>;

if(Next === true)
    Nexthtml =<div className="Page-Control" onClick={(e)=>Switchpage(1)} >Next</div>;
else 
    Nexthtml =<div></div>;

if(json.length ===0){
    return(
        <div>loadding...</div>
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
               <div className="Paging-Controllers">
                    {Prevhtml}
                    <div className="Page-Control"> {page} </div>
                    {Nexthtml}
              </div>
        </div>
      );
   
}

 

    
      
          
 
}

export default ListCart;
