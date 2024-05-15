// Converts a URL Query String into an object map
function convertQueryToMap(query) {
    const res = {}
    const splitted = query.split('&').map((val) => val.split('='));

    for(const pair of splitted) {
        const [key, value] = pair;
        const path = key.split('.');
        let acc = res;
        for(const [i,val] of path.entries()){
            // if there is no key in obj, create one
            if(!acc[val]) {
                acc[val] = {}
            }
            if (i === path.length - 1) {
                acc[val] = decodeURIComponent(value)
                continue
            }
            acc = acc[val]
        }
    }
    return res
}

const result = convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue')


// {
//     'user': {
//       'name': {
//         'firstname': 'Bob',
//         'lastname': 'Smith'
//       },
//       'favoritecolor': 'Light Blue'
//     }
//   }