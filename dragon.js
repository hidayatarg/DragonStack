const TRAITS = require('./traits')
// Screammers
const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    get birthdate(){
        return new Date()
    },
    get radomTraits(){
        // Traits from json
        const traits=[];        
        TRAITS.forEach(TRAIT => {

            traitType=TRAIT.type;
            traitValues = TRAIT.values;

            const traitValue = traitValues[
                Math.floor(Math.random() * traitValues.length)
            ];
            traits.push({traitType, traitValue});

        });
        return traits;
    }
}

class Dragon{
    // We expect the send with keywords
    constructor({birthdate, nickname, traits}={}) {
        // Variable that will be bellow this class
        this.birthdate=birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.radomTraits;
    }
}


module.exports=Dragon;