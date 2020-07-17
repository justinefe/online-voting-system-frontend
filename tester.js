const ite = 
    { 
        firstname: 'Justin',
        lastname: 'Igugu',
        state: 'Delta',
        country: 'Nigeria',
        city: 'Warri',
        residential: '15 omo avenue',
        gender: 'male',
        date: '152645',
    }

const userInfor = (items) => {
    console.log(items);
    const data = {};
    const result = Object.keys(items).map((key) => {
        const value = items[key];
        return  Object.assign(data, { [key]: value.trim() });
      })
      return result;
    }
    console.log(userInfor(ite));