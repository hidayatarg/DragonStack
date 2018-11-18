// Screammers
const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    birthdate: new Date()
}

class Dragon{
    // We expect the send with keywords
    constructor({birthdate, nickname}={}) {
        // Variable that will be bellow this class
        this.birthdate=birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    }
}


module.exports=Dragon;