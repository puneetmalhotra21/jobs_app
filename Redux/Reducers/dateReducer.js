//  import { jobLstShw1 } from './packs/datalayer/data';
const INITIAL_STATE = {
  shwDateCards: ['jobDetail_1','jobDetail_2','jobDetail_3','jobDetail_4'],
  cardId: ['jobDetail_1 ','jobDetail_2','jobDetail_3','jobDetail_4']
};

function dateReducer(state = INITIAL_STATE, action) {
 
    switch (action.type){
      case 'TOGGLE_DateCard':
         let dataCardId;
         let temp;
         if(action.dateCard.includes("_d")){
            dataCardId= action.dateCard.replace('_d','').trim();
            temp={ ...state, 
                  shwDateCards:state.shwDateCards.filter(function(card){
                      return card!=action.dateCard;
                  }).concat(dataCardId)
            };
         }else{
            dataCardId= action.dateCard + '_d';
            temp={ ...state, 
              shwDateCards:state.shwDateCards.filter(function(card){
                  return card!=action.dateCard;
              }).concat(dataCardId)
            }; 

          }
      return temp;
      default: return state;
    }
  }
  


  export default dateReducer;