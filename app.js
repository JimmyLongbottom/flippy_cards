const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
    {
      front: 'DiaperPoopy',
      back: 'Dr. Shat',
      flipped: false,
    },
  ]; 

  //Display our data -DONE
  //on click, flip the card -DONE
  //Get info for new cards from user
    //create data properties for the front and bacl of card
    //bind those using v-model
  //add a new card when user hits wnter or clicks button
    //create a new card object containing new card info
    //push that card into the cards array
//---------------------------------------------------------
  //delete card
  //animate card flip
  //display error if form is blank

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newFront: '',
      newBack: '',
      error: false
    },
    methods: {
      toggleCard: function(card){
        card.flipped = !card.flipped
      },
      addNew: function() {
        if(!this.newFront || !this.newBack){
          this.error = true
        }else{
          this.cards.push({
            front: this.newFront,
            back: this.newBack,
            flipped: false
          })
          this.newFront = ''
          this.newBack = ''
          this.error = false
        }
      }
    }
  });