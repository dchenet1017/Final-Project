import './App.css';
import Header from './Header';
import About from './About';
import SignupForm from './Signupform';
import CardContainer from './CardContainer';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import FullNFt from './FullNFt';
import AddNftForm from './AddNftForm';
import Home from './Home';


function App() {
  // This useState is for displaying car info
  const [nftData, SetNftData] = useState("")
  // const [filterSearch, setFilterSearch] = useState(carData)
  //  This Usestate is for the current user who is loggedin
  const [user, setuser] = useState("")
  const [session, setSession] = useState("")
  // This Use state is loggin in. 
  const [loginDetails, setloginDetails] = useState({ email: "", password: "" })

  const [newUser, setnewUser] = useState({
    name: "",
    password: "",
    email: "",
    photographer: ""
  })

  const [nft, setnft] = useState([]) 

  const [DOMUpdater, setDOMUpdater] = useState(0)
  /// Location is set based on the url after http://localhost:4000/ --- so if the url is  http://localhost:4000/cars location.pathname will be cars
  const location = useLocation()

  // for displaying nft info 
  // useEffect(() => {
  //   if (location.pathname.includes("nfts")) {
  //     fetch(`${location.pathname}`)
  //       .then(res => res.json())
  //       .then(data => SetNftData(data))
  //       .then(console.log("new fetch "))
  //   }
  // }, [location.pathname, DOMUpdater])

  // Sets user in state from the user session. 
  // this is for if a user refreshes the page or revisists the page
  useEffect(() => {
    fetch("/me")
      .then(r => r.json())
      .then(data => setuser(data))

  }, [])

  // //fetch data for nfts 
  useEffect(() => {
    fetch("/nfts")
    .then(r => r.json())
    .then(data => setnft(data))
  },[])

  // Logs a user out  and sets use state to null 
  function handleLogout() {
    fetch("/logout",
      { method: "DELETE" })
      .then((r) => {
        if (r.ok) { setuser({ email: "", password: "" }); }
      });
  }

  // for chaning the form to signup 
  function newUserChangeHanldler(e) {
    if (e.target.name == "photographer") { setnewUser(data => data = { ...data, [e.target.name]: e.target.checked }) }
    else {
      setnewUser(data => data = { ...data, [e.target.name]: e.target.value })
    }
  }

  //submitting new user requests
  function newUserSubmitHandler(e) {
    e.preventDefault()
    fetch("/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify({
        email: newUser.email,
        password: newUser.password,
        name: newUser.name,
        photographer: newUser.photographer}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setuser(user));
      }
    });
  }


  // for chaning the form to login 
  function changeHanldler(e) {
    setloginDetails(data => data = { ...data, [e.target.name]: e.target.value })
  }


  //submitting login requests
  function submitHandler(e) {
    e.preventDefault()
    console.log(e)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginDetails.email,
        password: loginDetails.password

      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setuser(user));
      }
    });
  }

     function handleAddNft(addedNft) {
      SetNftData((nfts) => [...nfts, addedNft]);
  }

  function handleDeleteNft(deletedNft) {
    SetNftData((nfts) =>
      nfts.filter((nft) => nft.id !== deletedNft.id)
    );
  }

  const updateNft = (updatedNft) => {
    SetNftData(NftData => NftData.map(nft => (
      nft.id === updatedNft.id ? updatedNft : nft
    )));
  };

  return (
    <div className="App">
            <Header changeHanldler={changeHanldler} submitHandler={submitHandler} loginDetails={loginDetails} user={user} handleLogout={handleLogout} />
      <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/about/*" element={<About />} />
        <Route path="/signup/*" element={<SignupForm newUserSubmitHandler={newUserSubmitHandler} newUserChangeHanldler={newUserChangeHanldler} newUser={newUser} />} />
        <Route exact path="/nfts" element={<CardContainer nftData={nft} setDOMUpdater={setDOMUpdater} handleDeleteNft={handleDeleteNft} user={user}  />} />
        <Route path="/nft/*" element={<FullNFt updateNFt={updateNft} setDOMUpdater={setDOMUpdater} user={user} nft={nftData} />} />
        <Route path="/nft-form" element={<AddNftForm setDOMUpdater={setDOMUpdater} handleAddNft={handleAddNft} user={user}/>} />
        {/* <Route path="/nft-pics" element={<MoreNFTPic />}></Route> */}
      </Routes>
    </div>
  );
}
export default App;



















