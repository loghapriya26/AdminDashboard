const initialstate = {    
    users: [{
        "id": 1,
        "name": "Morie McRamsey",
        "email": "mmcramsey0@google.com",
        "date": "10/11/2021",
        "visitTime": "8:14 AM",
        "doctor": "Morie",
        "condition": null
      }, {
        "id": 2,
        "name": "Craig Gossage",
        "email": "cgossage1@msn.com",
        "date": "20/02/2021",
        "visitTime": "12:21 AM",
        "doctor": "Craig",
        "condition": null
      }, {
        "id": 3,
        "name": "Valina Plover",
        "email": "vplover2@ihg.com",
        "date": "10/11/2021",
        "visitTime": "10:25 PM",
        "doctor": "Valina",
        "condition": null
      }, {
        "id": 4,
        "name": "Georgie Fleischer",
        "email": "gfleischer3@yelp.com",
        "date": "20/12/2020",
        "visitTime": "9:12 PM",
        "doctor": "Georgie",
        "condition": null
      }, {
        "id": 5,
        "name": "Welbie Favelle",
        "email": "wfavelle4@ucla.edu",
        "date": "04/10/2021",
        "visitTime": "9:42 PM",
        "doctor": "Welbie",
        "condition": null
      }, {
        "id": 6,
        "name": "Rosalinde Sanham",
        "email": "rsanham5@newsvine.com",
        "date": "02/12/2020",
        "visitTime": "5:40 PM",
        "doctor": "Rosalinde",
        "condition": null
      }, {
        "id": 7,
        "name": "Tait Lytle",
        "email": "tlytle6@a8.net",
        "date": "02/05/2021",
        "visitTime": "6:43 PM",
        "doctor": "Tait",
        "condition": null
      }, {
        "id": 8,
        "name": "Basia Revie",
        "email": "brevie7@yahoo.com",
        "date": "01/01/2021",
        "visitTime": "2:32 PM",
        "doctor": "Basia",
        "condition": null
      }, {
        "id": 9,
        "name": "Angie Revitt",
        "email": "arevitt8@pbs.org",
        "date": "11/03/2021",
        "visitTime": "5:41 AM",
        "doctor": "Angie",
        "condition": null
      }, {
        "id": 9,
        "name": "Angie Revitt",
        "email": "arevitt8@pbs.org",
        "date": "11/03/2021",
        "visitTime": "5:41 AM",
        "doctor": "Angie",
        "condition": null
      }, {
        "id": 9,
        "name": "Angie Revitt",
        "email": "arevitt8@pbs.org",
        "date": "11/03/2021",
        "visitTime": "5:41 AM",
        "doctor": "Angie",
        "condition": null
      }, {
        "id": 9,
        "name": "Angie Revitt",
        "email": "arevitt8@pbs.org",
        "date": "11/03/2021",
        "visitTime": "5:41 AM",
        "doctor": "Angie",
        "condition": null
      }, {
        "id": 10,
        "name": "Kenyon Gethin",
        "email": "kgethin9@amazonaws.com",
        "date": "06/08/2021",
        "visitTime": "9:29 PM",
        "doctor": "Kenyon",
        "condition": null
      }]    
};    
    
const reducer = (state = initialstate, action) => {    
    switch (action.type) {    
        case 'GET_USER':    
            return {    
                ...state    
            };    
        case 'ADD_USER':    
            return {    
                ...state,    
                users: state.users.concat(action.payload)    
            };    
        case 'EDIT_USER':    
            return {    
                ...state,    
                users: state.users.map(    
                    (content, i) => content.id === action.payload.id ? 
                    {...content, name : action.payload.name ,
                          email : action.payload.email ,
                          date : action.payload.date ,
                          visitTime : action.payload.visitTime ,
                          doctor : action.payload.doctor ,
                         condition: action.payload.condition }    
                    : content)    
            };    
        case 'DELETE_USER':    
            return {    
                ...state,    
                users: state.users.filter(item => item.id !== action.payload)    
            };    
        default:    
            return state;    
    }    
};    
    
export default reducer; 