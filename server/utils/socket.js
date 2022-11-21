const mockData = {
  votes: {
    
      "Beer 1": {
        label: "Beer 1",
        round: 1,
        votes: [],
      },
      "Beer 2": {
        label: "Beer 2",
        round: 1,
        votes: [],
      },
    
  },
  entries: [
    {
      label: "Beer 1",
      round: 1,
      votes: [],
    },
    {
      label: "Beer 2",
      round: 1,
      votes: [],
    },
    {
      label: "Beer 3",
      round: 1,
      votes: [],
    },
    {
      label: "Beer 4",
      round: 1,
      votes: [],
    },
  ],
};
const status = {
  gameActive:  true,
  voteActive: true
}

const socketFunctionality = (io) => {
  io.on("connection", (client) => {
    console.log("someone connected")
    client.emit("status", status)
    client.emit("update", mockData);
    
    client.on("vote", (selection, voterId) => {
        const entries = Object.entries(mockData.votes)
        const keys = Object.keys(mockData.votes)
        if(!entries[0].votes.includes(voterId) && !entries[1].votes.includes(voterId)){
          mockData.votes[selection].votes.push(voterId)
        } else if(entries[0].votes.includes(voterId)){
           mockData.votes[keys[1]].votes.push(voterId)
           mockData.votes[keys[0]].votes = mockData.votes[keys[0]].votes.filter(id => id !== voterId)
        } else {
          mockData.votes[keys[0]].votes.push(voterId)
          mockData.votes[keys[1]].votes = mockData.votes[keys[1]].votes.filter(id => id !== voterId)
        }
        client.emit('update', mockData)
    }); 
  });
};



module.exports = { socketFunctionality };
