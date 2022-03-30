// level {1/2/3}


async function getUsers() {
    await Promise.all([getUser(), getProfile(), getPosts()]).then(res=>{
        res.map((data)=>{
            console.log(data)
        })
    }).catch(error=>{
        console.log(error)
    })
    // let user = doc[0];
    // let Profile = doc[1];
    // let p = doc[2];
  
    // const userProfile = {
    //   user: user,
    //   profile: Profile,
    //   posts: p
    // };
  
    // return userProfile;
  }
  const getUser = () =>{
      return "kanchan"
  }
  const getProfile = () =>{
      return {
          user:"kanchan",
          profile:"kanchanProfile",
          posts:"posts"
      }
  }
  const getPosts = () =>{
      return "posts"
  }
  getUsers()