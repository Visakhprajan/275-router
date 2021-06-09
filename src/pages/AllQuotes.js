import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES =[
  {
    id: 'q1', author: 'Max', text: 'Learning React from fun!',
  },
  {
    id: 'q2', author: 'Maximilian', text: 'Learning React from Great!',
  }
]

const AllQuotes = () =>{
 return  <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes;